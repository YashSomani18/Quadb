import React from 'react';
import { Link } from 'react-router-dom';

const ShowItem = ({ show }) => (
  <div className="card mb-3">
    <div className="row g-0">
      <div className="col-md-4">
        <img src={show.image ? show.image.medium : 'placeholder_image_url'} className="img-fluid rounded-start" alt={show.name} />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{show.name}</h5>
          <p className="card-text"><small className="text-muted">Genres: {show.genres.join(', ')}</small></p>
          <p className="card-text"><small className="text-muted">Premiered: {show.premiered}</small></p>
          <p className="card-text"><small className="text-muted">Rating: {show.rating.average}</small></p>
          <Link to={`/show/${show.id}`} className="btn btn-primary">View Summary</Link>
        </div>
      </div>
    </div>
  </div>
);

export default ShowItem;
