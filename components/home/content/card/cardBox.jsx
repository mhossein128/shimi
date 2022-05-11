import Card from './card'
import React from 'react'

function CardBox({data}) {
  return (
    <div className='flex flex-wrap justify-center gap-x-[19px] gap-y-[12px]'>
        <Card data={data} />
    </div>
  )
}

export default CardBox