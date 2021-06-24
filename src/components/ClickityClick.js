// Code ClickityClick Component Here
import React from 'react'

class ClickityClick extends React.Component{
  constructor(){
    super()
    this.state = {
      hasBeenClicked: false,
      currentTheme: 'blue'
    }
  }
  handleClick = () => {
    this.setState(
      (prevState) => (
        {
          hasBeenClicked: !prevState.hasBeenClicked,
        }
       
      )
    );
    
  }
  render(){
    return(
      <div>
      <p>I have {this.state.hasBeenClicked ? null : 'not'} been Clicked </p>
      <button onClick={this.handleClick}>Click ME</button>
      </div>
    )
  }
}
export default ClickityClick