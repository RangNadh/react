import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

      // binding in the constructor
      // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message: 'GoodBye!'
    //     })
    //     console.log(this)
    // }

    clickHandler = () => {
      this.setState({
        message: 'GoodBye!'
      })
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        
        {/* using the binding */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* using the arrow function  */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind