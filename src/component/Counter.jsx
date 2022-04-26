import React, { useState } from 'react'
import "./Counter.css";
const Counter = () => {
    const [count, setCount] = useState(1);

    const HandleCount = (val) => {
        setCount((num) => {
            if(num === 1000){
                return 1
            }
            return num + val
        })
    }

  return (
      <>
        <div className="top">
              <div className="count-top">
                  <button className="counter_btn_1" onClick={()=> HandleCount(-1)}> - </button>
                  <button className="counter_btn_2" >{count}</button>
                  <button className="counter_btn_3" onClick={()=> HandleCount(+1)}> + </button>
              </div>
        </div>
      </>
  )
}

export default Counter