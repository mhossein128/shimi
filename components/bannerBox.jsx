import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import Banner from "./banner";

function BannerBox({ data, small }) {
  return (
    
      small ? (
        <div className="py-3">
          <Swiper
          spaceBetween={10}
          // slidesPerView={1.2}
          // freeMode={true}
          className="lg:hidden"
          >
            {data?.map((banner, i) => (
                <SwiperSlide key={i} className="!w-[354px]  md:!w-5/12 lg:!w-4/12 lg:text-center">
                  <Banner  src={banner} small={true} />
                </SwiperSlide>
                ))}
          </Swiper>
          <div className="hidden lg:flex flex-auto gap-2 justify-between py-3">
            {data?.map((banner, i)=>(
              <Banner key={i} src={banner} small={true} />
            ))}
          </div>
        </div>
      ):(
        <div className="flex flex-col lg:flex-row items-center flex-auto flex-nowrap gap-2 justify-around py-3">
          {data?.map((banner, i)=>(
            <Banner key={i} src={banner} small={false} />
          ))}
        </div>
      )
    

  );
}

export default BannerBox;
