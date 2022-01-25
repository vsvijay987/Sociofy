import React, { useEffect, useState } from "react";
import { Image, Card, Dimmer, Loader, Segment } from "semantic-ui-react";
import axios from "axios";
import calculateTime from "../../utils/calculateTime";

const RightSideMenu = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        "https://inshortsapi.vercel.app/news?category=national"
      );
      setNews(res.data.data);
    })();
  }, []);

  return (
    <div className="posts-segment" style={{ height: "82vh" }}>
      {news.length > 0 ? (
        news.map((article) => (
          <Card fluid>
            <Card.Content>
              <Card.Description style={{fontWeight:"bold"}} className="name-font">
                {article.title && article.title}
              </Card.Description>
            </Card.Content>
            {article.imageUrl && (
              <Image src={article.imageUrl} wrapped ui={false} />
            )}
            <Card.Content>
              <Card.Meta>
                <span className="font-link">{article.time}</span>
              </Card.Meta>
              <Card.Description className="font-link">
                {article.content ? article.content : article.title}
              </Card.Description>
            </Card.Content>
            <Card.Content className="font-link" extra>
              <a href={article.readMoreUrl} target="_blank">
                Show more...
              </a>
            </Card.Content>
          </Card>
        ))
      ) : (
        <Loader active>Preparing Articles</Loader>
      )}
    </div>
  );
};

export default RightSideMenu;
