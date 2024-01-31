import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShowSummary = () => {
  const [showDetails, setShowDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows/${id}`)
      .then(response => {
        setShowDetails(response.data);
      });
  }, [id]);

  return (
    <div className="container mt-4">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img 
              src={showDetails.image ? showDetails.image.original : 'placeholder_image_url'} 
              className="img-fluid rounded-start" 
              alt={showDetails.name}
              style={{ maxHeight: '300px', width: 'auto', objectFit: 'cover' }} 
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{showDetails.name}</h5>
              <div 
                dangerouslySetInnerHTML={{ __html: showDetails.summary }} 
                style={{ maxHeight: '300px', overflowY: 'auto' }} 
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowSummary;
