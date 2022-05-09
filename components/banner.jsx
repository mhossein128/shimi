import Image from 'next/image'

function Banner({ small , src }) {
  return (
    <div className={ small ? `w-full h-full max-w-[451px] md:h-[178px] rounded-[20px] bg-red-600 inline-block` : ` w-[354px] h-[138px] sm:w-auto sm:h-auto  max-w-full rounded-[20px] bg-red-600 inline-block` }>
        {/* <Image src={src} width={451} height={178} /> */}
        <img src={src} alt="" className='w-full h-full' />
    </div>
  )
}

export default Banner