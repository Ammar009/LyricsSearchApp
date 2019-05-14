import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

const Track = (props) => {
    const { track } = props;
    return (
      <div className="col-md-6">
        <div className="card shadow-sm mb-4">
            <div className="card-body">
                <h4>{track.artist_name}</h4>
                <p className="card-text">
                    <strong><i className="fas fa-play"></i>Track</strong> : {track.track_name}
                    <br/>
                    <strong><i className="fas fa-compact-disc"></i>Album</strong> : {track.album_name}
                </p>
                <Link to= {`lyrics/track/${track.track_id}`} className="btn btn-dark btn-block">
                    <i className="fas fa-chevron-right"> View Lyrics</i>
                </Link>
            
            </div>
        </div>
      </div>
    )
  }

export default Track;