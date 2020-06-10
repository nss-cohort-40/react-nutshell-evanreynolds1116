import React from "react";
import './NewsCard.css'
import { Link } from "react-router-dom";


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
      <Link to={`/news/${props.newz.id}`}>
        <button>Details</button>
      </Link>
      </div>
    </div>
  );
}

export default NewsCard