// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  clickButton = () => {
    const randomCount = Math.ceil(Math.random() * 100)

    this.setState({count: randomCount})
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" type="button" onClick={this.clickButton}>
            Generate
          </button>
          <p className="count-number">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
