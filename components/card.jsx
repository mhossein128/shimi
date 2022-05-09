import React from 'react'

function Card({data}) {
  return (
    <>
      {data?.map((card,i)=>(
        <div key={i} className='w-[172px] md:w-[296px] h-[242px] md:h-[416px] p-4 bg-white flex my-5 justify-center items-center flex-col rounded-[10px] shadow-sm'>
            <img src={card.img} className='w-[153px] md:w-[264px] h-[183px] md:h-[315px]' alt="" />
            <h5 className='font-medium text-xs md:text-xl my-2'>{card.title}</h5>
            <p className='font-normal text-xs md:text-base'>{card.date}</p>
        </div>
      ))}
    </>
  )
}

export default Card