import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  render() {
    console.log(this.props)
    return (
      <div onClick = {this.props.handleColorChanges}
        className="child"
        style={{backgroundColor: "#FFF"}}
      ></div>
    )
  }
}

export default Child
