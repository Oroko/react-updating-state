import React, { Component } from 'react'
import '../index.css'

export class LightSwitch extends Component {
  constructor(){
    super()
    this.state = {
      toggled: true
    }
  }
  handleClick = () => {
    
    this.setState(prevState => ({
      toggled: !prevState.toggled
    }))
  }
  render() {
    let light = ''
    
    this.state.toggled ? (light += "on") : (light += "off");
    return (
      <div>
        <button className={light} onClick={this.handleClick}>{this.state.toggled ? 'ON': 'OFF' }</button>
      </div>
    )
  }
}

export default LightSwitch
