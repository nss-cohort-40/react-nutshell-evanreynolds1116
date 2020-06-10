import React, { useState, useEffect } from 'react';
import NewsManager from '../../modules/NewsManager';

const NewsDetail = props => {
  const [news, setNews] = useState({ title: "", synopsis: "", url: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    NewsManager.get(props.newsId)
      .then(news => {
        setNews({
          title: news.title,
          synopsis: news.synopsis,
          url: news.url
        });
        setIsLoading(false)
      });
  }, [props.newsId]);

  const handleDelete = () => {
    setIsLoading(true);
    NewsManager.delete(props.newsId).then(() => 
    props.history.push("/news")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <h3><span className="card-petname">
          {news.title}
        </span></h3>
        <p>{news.synopsis}</p>
        <a href={news.url}>{news.url}</a>
      </div>
      <div className="news-card-btns">
       <button type="button" className="news-card-btn"
        onClick={() => props.history.push(`/news/${props.newsId}/edit`)}>
        Edit
        </button>
        <button type="button" className="news-card-btn" disabled={isLoading} onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default NewsDetail;