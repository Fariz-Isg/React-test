import React,{useState} from 'react'

export default function Test1(props) {

  const [value, setValue] = useState(0);

  return (
    <div>
      <button onClick={() => {
        setValue(value+1)
      }}
      style={{
        background:'green',
        height:'100px',
        width:'100px',
        fontSize:'60px'
      }}
      >
        +
      </button>
      <button onClick={() => {
        setValue(value-1)
      }}
      style={{
        background:'red',
        height:'100px',
        width:'100px',
        fontSize:'60px'
      }}>
        -
      </button>
      <b style={{
        fontSize:60
      }}>
      Age:
      {value}
      </b>
    </div> 
  )
}