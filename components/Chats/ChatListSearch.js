import React, { useState } from "react";
import { List, Image, Search } from "semantic-ui-react";
import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import baseUrl from "../../utils/baseUrl";
let cancel;

const ChatListSearch = ({ chats, setChats }) => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const router = useRouter();

  const handleChange = async (e) => {
    const { value } = e.target;
    setText(value);
    if (value.length === 0) return;
    if (value.trim().length === 0) return;
    setLoading(true);

    try {
      cancel && cancel();
      const CancelToken = axios.CancelToken;
      const token = cookie.get("token");

      const res = await axios.get(`${baseUrl}/api/search/${value}`, {
        headers: { Authorization: token },
        cancelToken: new CancelToken((canceler) => {
          cancel = canceler;
        }),
      });

      if (res.data.length === 0) {
        results.length > 0 && setResults([]);

        return setLoading(false);
      }

      setResults(res.data);
    } catch (error) {
      alert("Error Searching");
    }

    setLoading(false);
  };

  const addChat = (result) => {
    const alreadyInChat =
      chats.length > 0 &&
      chats.filter((chat) => chat.messagesWith === result._id).length > 0;

    if (alreadyInChat) {
      return router.push(`/messages?message=${result._id}`);
    }
    //
    else {
      const newChat = {
        messagesWith: result._id,
        name: result.name,
        profilePicUrl: result.profilePicUrl,
        lastMessage: "",
        date: Date.now(),
      };

      setChats((prev) => [newChat, ...prev]);

      return router.push(`/messages?message=${result._id}`);
    }
  };

  return (
    <Search
      onBlur={() => {
        results.length > 0 && setResults([]);
        loading && setLoading(false);
        setText("");
      }}
      loading={loading}
      value={text}
      resultRenderer={ResultRenderer}
      results={results}
      onSearchChange={handleChange}
      minCharacters={1}
      onResultSelect={(e, data) => addChat(data.result)}
    />
  );
};

const ResultRenderer = ({ _id, profilePicUrl, name }) => {
  return (
    <List
      key={_id}
      vertical
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <List.Item
        style={{
          alignItems: "center",
        }}
      >
        <List.Content verticalAlign="middle">
          <List.Header> {name} </List.Header>
        </List.Content>
      </List.Item>
      <List.Item
        style={{
          alignItems: "center",
        }}
      >
        <List.Content verticalAlign="middle">
          <img
            src={profilePicUrl}
            style={{
              borderRadius: "50%",
              height: "40px",
              width: "40px",
              ObjectFit: "cover",
            }}
          />
        </List.Content>
      </List.Item>
    </List>
  );
};

export default ChatListSearch;
