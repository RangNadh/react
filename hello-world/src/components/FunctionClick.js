import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('Button clicked in functional component')
    }
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick