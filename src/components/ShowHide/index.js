// Write your code here

import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {show1: false, show2: false}

  renderFunc = () => {
    this.setState(previousState => ({show1: !previousState.show1}))
  }

  renderFunc1 = () => {
    this.setState(previousState => ({show2: !previousState.show2}))
  }

  render() {
    const {show1, show2} = this.state
    return (
      <div className="bg-con">
        <h1 className="head">Show/Hide</h1>
        <div className="cg-con">
          <div className="but-con">
            <button onClick={this.renderFunc} type="button">
              show/hide FirstName
            </button>
            {show1 && <p className="para">Joe</p>}
          </div>
          <div className="but-con">
            <button onClick={this.renderFunc1} type="button">
              show/hide LastName
            </button>
            {show2 && <p className="para">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
