import React from 'react'

export default function Test1(props) {
  return (
    <div>
      <div className='to-do-lis'>
        <ul>
        {props.data.map((todo) => <div key={todo.div} className="to-dos">{todo.title}</div>)}
        </ul>
      </div>
    </div>
  )
}