import React from 'react'
import './style.css'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  incrementCounter = () => {
    const value = this.state.counter + 1
    this.setState({
      counter: value
    })
  }

  decrementCounter = () => {
    const value = this.state.counter - 1
    this.setState({
      counter: value
    })
  }

  render() {
    const { counter } = this.state
    return (
      <section>
        <div className="container" >
          <button onClick={this.decrementCounter} > - </button>
          <input type="number" value={counter} readOnly />
          <button onClick={this.incrementCounter} > + </button>
        </div>
      </section>
    )
  }
}