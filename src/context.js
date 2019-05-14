import React, { Component } from 'react';
import axios from 'axios';
import { stat } from 'fs';
const Context = React.createContext();

const reducer = (state, action) =>{
    switch(action.type){
        case  'SEARCH_TRACKS' :
            return {
                ...state, 
                track_list : action.payload,
                heading : 'Search Results '
            };
         default :
            return state; 
    }
}

export class Provider extends Component {
    state = {
        track_list : [],
        heading : 'Top 10 tracks',
        dispatch : action => this.setState( state => reducer(state, action))
    };

    componentDidMount(){
       axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=hot&page=5&page_size=10&country=xw&apikey=212b2a28a77e8bfe6de8b880d6a8704c`)
       .then(res => {
           //console.log(res.data);
           this.setState({ track_list: res.data.message.body.track_list })
        //    this.setState( {track_list : res.data.message.body})
        })
       .catch(err => {console.log(err)}) 
    }
  render() {
    return (
      <Context.Provider value={this.state}>
          {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;