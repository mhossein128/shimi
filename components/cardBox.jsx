import Card from './card'
import React from 'react'

function CardBox({data}) {
  return (
    <div className='flex justify-around flex-wrap'>
        <Card data={data} />
    </div>
  )
}

export default CardBox