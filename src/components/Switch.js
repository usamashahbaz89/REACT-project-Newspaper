import React, { Component } from 'react'

export class Switch extends Component {
  render() {
    return (
      <div>
        <div className="form-check form-switch" style={{marginRight:"100px"}}>
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={this.props.darkMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
</div>
      </div>
    )
  }
}

export default Switch
