import React from "react";
import './NewsCard.css'
import { Route } from "react-router-dom";


const NewsCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3><span className="card-petname">
          {props.newz.title}
        </span></h3>
        <p>{props.newz.synopsis}</p>
        <a href={props.newz.url}>{props.newz.url}</a>
      </div>
      <div className="news-card-btns">
       <button type="button" className="news-card-btn"
        onClick={() => props.history.push(`/news/${props.newz.id}/edit`)}>
        Edit
        </button>
        <button type="button" className="news-card-btn" onClick={() => props.deleteNews(props.newz.id)}>Delete</button>
      </div>
    </div>
  );
}

export default NewsCard