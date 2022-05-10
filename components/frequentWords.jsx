import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

function FrequentWords() {
    let btn = new Array(10).fill("فلزات و معادن")
  return (
    <div className=' p-4 my-3 bg-white rounded-2xl flex' dir="rtl">
        <div className="self-center lg:mx-12 whitespace-nowrap">
            کلمات پرتکرار : 
        </div>
        <div className="self-center hidden lg:block">
            {
                btn.map((btn,i)=>(
                    <button key={i} className="py-[7px] px-[14px] my-[7px] mx-[17px] border border-solid rounded-[10px] text-gray-700 font-normal hover:font-bold hover:bg-button-blue hover:text-white ">
                        {btn}
                    </button>
                ))
            }
        </div>
        <Swiper
          className="block lg:hidden"
          spaceBetween={0}
          slidesPerView={'auto'}
          freeMode={true}
          >
            {btn?.map((btn, i) => (
                <SwiperSlide className="!w-11/12 sm:!w-2/5 md:!w-1/4" key={i}>
                    <button className="min-w-1/2 sm:w-auto py-[7px] px-[14px] my-[7px] mx-[17px] whitespace-nowrap border border-solid rounded-[10px] text-gray-700 font-normal hover:font-bold hover:bg-button-blue hover:text-white ">
                        {btn}
                    </button>
                </SwiperSlide>
                ))}
          </Swiper>
    </div>
  )
}

export default FrequentWords