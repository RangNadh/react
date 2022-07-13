import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
  render() {

// -> Short circuit operator 

    return this.state.isLoggedIn && <div>Hello Ranganadh</div>

// -> Ternary Conditional Operator

    // return this.state.isLoggedIn ? (
    //     <div>Hello Ranganadh</div>
    //     ):(
    //     <div>Hello Guest</div>
    // )

// Element Variables Approach

    // let message
    // if (this.state.isLoggedIn){
    //     return <div>Hello Ranganadh</div>
    // }
    // else{
    //     return <div>Hello Guest</div>
    // }
    // return <div>{message}</div>

// if-else Approach

    // if (this.state.isLoggedIn){
    //     return <div>Hello Ranganadh</div>
    // }
    // else{
    //     return <div>Hello Guest</div>
    // }

    // return (
    //   <div>Hello</div>
    // )
  }
}

export default UserGreeting