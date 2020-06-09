import React from "react";

const NewsCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <h3><span className="card-petname">
          {props.newz.title}
        </span></h3>
        <p>{props.newz.synopsis}</p>
        <p>{props.newz.url}</p>
      </div>
    </div>
  );
}

export default NewsCard