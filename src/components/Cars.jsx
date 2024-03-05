import React from 'react'
import style from './Cars.module.css'

const Cars = ({name,model}) => {
  return (
    <div>
      <h3 className={style['sub_title_style']}>Hello, my name is {name}, and I had a {model} car model</h3>
    </div>
  )
}

export default Cars
