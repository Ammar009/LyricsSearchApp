import React, { Component } from 'react';
import axios from 'axios';
import {Consumer} from '../../context';
 
class Search extends React.Component {
    state = {
        trackTitle : ''
    }

    onChange = ( e) =>{
        this.setState ({ [e.target.name] : e.target.value }) 
    }

    findTrack = (dispatch, e) => {
      //e.preventDefault(); 

      axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.setState.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=212b2a28a77e8bfe6de8b880d6a8704c`)
      .then(res => {
        dispatch({
          type : 'SEARCH_TRACKS',
          payload : res.data.message.body.track_list

        });
       })
      .catch(err => {console.log(err)}) 

    }
  render() {
    return (
      <Consumer>
          {value =>{
            const {dispatch} = value;
              return(
                  <div>
                      <div className="card card-head mb-4 p-3">
                        <h2 className="mt-auto text-center" >
                        <i className="fas fa-music"> Search for a Song</i>
                        </h2>
                        <div className="card-body">
                    <h5 className="text-center"><strong>Get the lyrics for any Song </strong></h5>
                    <form className="form-group" action={this.findTrack(this, dispatch)}>
                            <input 
                            type="text" 
                            name='trackTitle' 
                            className="form-control form-control-lg mb-2"
                            value={this.state.trackTitle}
                            placeholder ="Search for a song ..."
                            onChange = {this.onChange}
                            />
                            <button className="btn btn-dark btn-lg btn-block " type="submit">
                            Get Track Title
                            </button>
                        
                    </form>
                    
                    </div>
                      </div>
                    
                  </div>
                  
                
              ) 
                  
    
              
          }

          }

      </Consumer>
    )
  }
}
export default Search ;