// Write your code here
import React from 'react'

import './index.css'
class ShowHide extends React.Component {
  state = {showFirstName: false, showLastName: false}
  displayFirstName = () => {
    const {showFirstName} = this.state
    this.setState({showFirstName: !showFirstName})
  }
  displayLastName = () => {
    const {showLastName} = this.state
    this.setState({showLastName: !showLastName})
  }
  render() {
    const {showFirstName, showLastName} = this.state
    return (
      <div>
        <h1>Show/Hide</h1>
        <div className="container">
          <div className="card-container">
            <button onClick={this.displayFirstName}>Show/Hide FirstName</button>
            {showFirstName ? (
              <div className="nameCard">
                <p>Joe</p>
              </div>
            ) : null}
          </div>
          <div className="card-container">
            <button onClick={this.displayLastName}>Show/Hide LastName</button>
            {showLastName ? (
              <div className="nameCard">
                <p>Jonas</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
