import React, { useState, useEffect } from "react";
//import the components we will need
import MessagesCard from "./MessagesCard";
import MessagesManager from "../../modules/MessagesManager";

const MessagesList = (props) => {
  const [messages, setMessages] = useState([]);

  const getMessages = () => {
    return MessagesManager.getAll().then((messagesFromAPI) => {
      console.log(messagesFromAPI)
      setMessages(messagesFromAPI);
    })
  };

  const deleteMessages = (id) => {
    MessagesManager.delete(id).then(() =>
      MessagesManager.getAll().then(setMessages)
    );
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/messages/newMessage");
          }}
        >
          New Message
        </button>
      </section>
      <div className="container-cards">
        <h1>Messages</h1>
        {messages.map((message) => {
           return <MessagesCard key={message.id} message={message} deleteMessages={deleteMessages} {...props}/>}
          )}
      </div>
    </>
  );
};

export default MessagesList
