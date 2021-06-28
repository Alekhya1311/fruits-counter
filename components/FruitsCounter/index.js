// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoes: 0,
    bananas: 0,
  }

  onClickEatBanana = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  onClickEatMango = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state

    return (
      <div className="bg">
        <div className="fruits">
          <h1 className="para">
            Bob ate <span className="para1">{mangoes}</span> mangoes
            <span className="para1"> {bananas}</span> bananas
          </h1>
          <div className="container">
            <div className="counter">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickEatMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="counter">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickEatBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
