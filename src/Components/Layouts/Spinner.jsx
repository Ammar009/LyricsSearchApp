import React, { Component } from 'react'
import Spinner from './spinner.gif'; 

export default  () => {
    return (
      <div>
          <img 
            src={Spinner}
            alt = "Loading ..."
            style = {{margin : '200px' , display : 'block'  }}
            />
        
      </div>
    )
  
}
