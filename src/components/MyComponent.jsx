import React from 'react'
import "./MyComponent.css";

const MyComponent = () => {
  return (
    <div>
        <h1>Component's CSS</h1>
        <p>This is the component's paragraph</p>
        <p className='my-comp-paragraph'>This is also a component paragraph</p>
    </div>
  )
}

export default MyComponent
