import React, { Component } from 'react';
import axios from 'axios';
import Spanner from '../Layouts/Spinner';
import {Link} from 'react-router-dom';
import Moment from 'react-moment';

 class Lyrics extends React. Component {
     state = {
         tracks : {},
         lyrics : {}
     };

     componentDidMount(){
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=212b2a28a77e8bfe6de8b880d6a8704c`)
        .then(res => {
            //console.log(res.data);
            this.setState({ lyrics: res.data.message.body.lyrics })
            return axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=212b2a28a77e8bfe6de8b880d6a8704c`)
            .then(res => {
                console.log(res.data);
                this.setState({ tracks: res.data.message.body.track })
            })
            .catch(err =>{
                console.log(err);
            })

         })
        .catch(err => {console.log(err)})
     }
  render() {
    if( this.state.tracks === undefined || this.state.lyrics === undefined || Object.keys(this.state.tracks) === 0 || Object.keys(this.state.lyrics) === 0){
       return <Spanner />
    }
    else{
        return (
            <React.Fragment>
                <div>
                <Link to="/"><div className="btn btn-dark mt-5">Go Back</div></Link>
                
              <h3>Lyrics</h3>
              <div className="container">
              <div className="row">
              <div className="col-sm-12">
              <div className="card shadow-sm mb-4">
                  <div className="card-head"><strong>{this.state.tracks.track_name}</strong> by <strong>{ this.state.tracks.artist_name}</strong> </div>
                  <hr/>
                  <div className="card-body">
                      <div className="card-text">
                        <strong>Lyrics:</strong>
                        <p>{this.state.lyrics.lyrics_body}</p>
                        
                        <ul className="list-group mt-5">
                            <li className="list-group-item">
                                <strong>Album ID </strong> : {this.state.tracks.album_id}
                            </li>
                            <li className="list-group-item">
                                <strong>Explicit Words </strong> : {this.state.tracks.explicit === 0 ? "Yes" : "No"}
                            </li>
                            <li className="list-group-item">
                                <strong>Release Date </strong> : <Moment format= 'DD/MM/YYYY'>{this.state.tracks.updated_time}</Moment>
                            </li>

                        </ul>
                      </div>
                      
      
                  </div>
              </div>
              </div>
              </div>
              
              </div>
            </div>
            </React.Fragment>
          )

    }

    
  }
}
export default Lyrics;