// Write your code here

import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLight: true}

  cardChange = () => {
    const {isLight} = this.state
    {
      this.setState({isLight: !isLight})
    }
  }

  render() {
    const {isLight} = this.state
    return (
      <div className="bg-container">
        {isLight ? (
          <div className="card-container dark">
            <h1 className="heading"> Click To Change Mode</h1>
            <button type="button" className="btn" onClick={this.cardChange}>
              Light Mode
            </button>
          </div>
        ) : (
          <div className="card-container light">
            <h1 className="heading"> Click To Change Mode</h1>
            <button className="btn" onClick={this.cardChange}>
              Dark Mode
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default LightDarkMode
