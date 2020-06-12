import React, { useState } from 'react';
import MessagesManager from '../../modules/MessagesManager';

const MessagesForm = props => {
  const [messages, setMessages] = useState({ message: "", username: "", userId: sessionStorage.activeUser });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...messages };
    stateToChange[evt.target.id] = evt.target.value;
    setMessages(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create news      object, invoke the NewsManager post method, and redirect to the full animal list
  */
  const constructNewMessage = evt => {
    evt.preventDefault();
    if (messages.message === "") {
      window.alert("Please add message");
    } else {
      setIsLoading(true);
      // Create the news article and redirect user to news list
      MessagesManager.post(messages)
        .then(() => props.history.push("/messages"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <label htmlFor="message">Message</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="message"
              placeholder="new message"
            />
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={sessionStorage.credentials} onChange={handleFieldChange} readOnly/>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewMessage}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default MessagesForm