import React from 'react'
import "./queue.css"

export default function Item({data}: {data: any}) {
  return (
    <div className='queue-item'>{data}</div>
  )
}
