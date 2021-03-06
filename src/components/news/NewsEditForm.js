import React, { useState, useEffect } from "react"
import NewsManager from "../../modules/NewsManager"

const NewsEditForm = props => {
  const [news, setNews] = useState({ title: "", synopsis: "", url: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...news };
    stateToChange[evt.target.id] = evt.target.value;
    setNews(stateToChange);
  };

  const updateExistingNews = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedNews = {
      id: props.match.params.newsId,
      userId: sessionStorage.activeUser,
      title: news.title,
      synopsis: news.synopsis,
      url: news.url
    };

    NewsManager.update(editedNews)
      .then(() => props.history.push("/news"))
  }

  useEffect(() => {
    NewsManager.get(props.match.params.newsId)
      .then(news => {
        setNews(news);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="title"
              value={news.title}
            />
            <label htmlFor="title">Title</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="synopsis"
              value={news.synopsis}
            />
            <label htmlFor="synopsis">Synopsis</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="url"
              value={news.url}
            />
            <label htmlFor="url">URL</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingNews}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default NewsEditForm