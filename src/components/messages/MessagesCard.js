import React from "react";
// import './NewsCard.css'
// import { Link } from "react-router-dom";


const MessagesCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <p>{props.message.message}</p>
        <p><small>from: {props.message.username}</small></p>
      </div>
      {/* <div className="news-card-btns">
      <Link to={`/news/${props.messages.id}`}>
        <button>Details</button>
      </Link>
      </div> */}
    </div>
  );
}

export default MessagesCard