import React from 'react'
import './style.css'

import { connect } from 'react-redux'


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  incrementCounter = () => {

    this.props.dispatch({ type: 'INCREMENT' })
  }

  decrementCounter = () => {
    this.props.dispatch({ type: 'DECREMENT' })
  }

  render() {
    const { counter } = this.props
    return (
      <section className="main" >
        <div className="header">Contador Online</div>
        <div className="container" >
          <button onClick={this.decrementCounter} > - </button>
          <input type="number" value={counter} readOnly />
          <button onClick={this.incrementCounter} > + </button>
        </div>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});

export default connect(mapStateToProps)(Home)