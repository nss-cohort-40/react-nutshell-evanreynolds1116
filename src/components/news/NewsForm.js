import React, { useState } from 'react';
import NewsManager from '../../modules/NewsManager';

const NewsForm = props => {
  const [news, setNews] = useState({ title: "", synopsis: "", url: "", userId: sessionStorage.activeUser });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...news };
    stateToChange[evt.target.id] = evt.target.value;
    setNews(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create news      object, invoke the NewsManager post method, and redirect to the full animal list
  */
  const constructNewArticle = evt => {
    evt.preventDefault();
    if (news.title === "" || news.synopsis === "") {
      window.alert("Please input an title and synopsis");
    } else {
      setIsLoading(true);
      // Create the news article and redirect user to news list
      NewsManager.post(news)
        .then(() => props.history.push("/"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="title"
              placeholder="Article Title"
            />
            <label htmlFor="title">Title</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="synopsis"
              placeholder="Synopsis"
            />
            <label htmlFor="synopsis">Synopsis</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="url"
              placeholder="Article URL"
            />
            <label htmlFor="url">URL</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewArticle}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default NewsForm