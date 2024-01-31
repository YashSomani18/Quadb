import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowItem from './Showitem.js';

const ShowsList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('https://api.tvmaze.com/search/shows?q=all')
      .then(response => {
        setShows(response.data);
      });
  }, []);

  return (
    <div className="container mt-4">
      {shows.map(item => <ShowItem key={item.show.id} show={item.show} />)}
    </div>
  );
};

export default ShowsList;
