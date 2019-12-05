import React, {Component} from 'react'

export default class Child extends Component {
  render() {
    return (
      <div>
        <img src={this.props.banana} />
        <h1>kittenzzzzz!!!</h1>
      </div>
    )
  }
}