import React, { useEffect, useState } from "react";
import { List, Image, Search } from "semantic-ui-react";

import axios from "axios";
import cookie from "js-cookie";
import Router from "next/router";
import baseUrl from "../../utils/baseUrl";
let cancel;

const SearchField = () => {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

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
      console.log(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (text.length === 0 && loading) setLoading(false);
  }, [text]);

  return (
    <Search
      onBlur={() => {
        results.length > 0 && setResults([]);
        loading && setLoading(false);
        setText("");
      }}
      placeholder="Search user..."
      loading={loading}
      value={text}
      resultRenderer={ResultRenderer}
      results={results}
      onSearchChange={handleChange}
      minCharacters={1}
      onResultSelect={(e, data) => Router.push(`/${data.result._id}`)}
    />
  );
};

const ResultRenderer = ({profilePicUrl, name }) => {
  return (
    <>
      <List vertical style={{ display: "flex", justifyContent: "space-between" }}>
        <List.Item style={{
          alignItems: "center"
        }}>
          <List.Content verticalAlign='middle'  >
            <List.Header>   {name}  </List.Header>
          </List.Content>
        </List.Item>
        <List.Item style={{
          alignItems: "center"
        }}>

          <List.Content verticalAlign='middle'  >
            <img src={profilePicUrl} style={{ borderRadius: "50%", height: "40px", width: "40px", ObjectFit: "cover" }} />
          </List.Content>
        </List.Item>

      </List>
    </>
  );
};

export default SearchField;
