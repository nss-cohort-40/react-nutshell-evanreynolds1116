import React, { useState, useEffect } from 'react';
//import the components we will need
import NewsCard from './NewsCard';
import NewsManager from '../../modules/NewsManager';

const NewsList = props => {
  // The initial state is an empty array
  const [news, setNews] = useState([]);

  const getNews = () => {
    // After the data comes back from the API, we
    //  use the setNews function to update state
    return NewsManager.getAll().then(newsFromAPI => {
      setNews(newsFromAPI);
    })
  };

  const deleteNews = id => {
    NewsManager.delete(id)
    .then(() => NewsManager.getAll().then(setNews));
  }
  
  // got the news from the API on the component's first render
  useEffect(() => {
    getNews();
  }, []);
  
  // Finally we use map() to "loop over" the news array to show a list of news cards
  
    return (
    <>
      <section className="section-content">
        <button type="button"
          className="btn"
          onClick={() => {props.history.push("/news/newNews")}}>
        Add News Article
        </button>
      </section>
      <div className="container-cards">
      <h1>News</h1>
        {news.map(newz => {
        if (sessionStorage.activeUser == newz.userId) {
        return <NewsCard key={newz.id} newz={newz} deleteNews={deleteNews} {...props}/>
        } 
        }
        )}
      </div>
    </>
  );    
}


export default NewsList

