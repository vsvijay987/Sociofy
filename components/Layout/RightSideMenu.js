import React, { useEffect, useState } from "react";
import { Image, Card, Dimmer, Loader, Segment } from "semantic-ui-react";
import axios from "axios";
import calculateTime from "../../utils/calculateTime";

const RightSideMenu = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=79b869b518f241b19e1a2bc89ab32693"
      );
      setNews(res.data.articles);
    })();
  }, []);
  console.log(news);

  return (
    <div className="posts-segment" style={{ height: "82vh" }}>
      {news.length > 0 ? (
        news.map((article) => (
          <Card fluid>
            {article.urlToImage && <Image src={article.urlToImage} wrapped ui={false} />}
            <Card.Content>
              <Card.Meta>
                <span className="font-link">
                  {calculateTime(article.publishedAt)}
                </span>
              </Card.Meta>
              <Card.Description className="font-link">
                {article.description ? article.description  : article.title}
              </Card.Description>
            </Card.Content>
            <Card.Content className="font-link" extra>
              <a href={article.url} target="_blank">
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
