// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  getNoOfChars = e => {
    this.setState({searchInput: e.target.value})
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="img"
        />
        <div className="container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="phraseText" className="label">
            Enter the phrase
          </label>
          <input
            type="text"
            id="phraseText"
            onChange={this.getNoOfChars}
            value={searchInput}
            className="search-input"
            placeholder="Enter the phrase"
          />
          <p className="no-of-letters">No.of letters: {searchInput.length}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
