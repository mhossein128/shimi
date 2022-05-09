import Head from "next/head"

function Header() {
  return (
    <div className=" text-white font-IRsans bg-bg-back">
      <Head>
        <script src="https://kit.fontawesome.com/c9c0b16549.js" crossorigin="anonymous"></script> 
      </Head>
          <div className="hidden lg:flex items-center justify-between bg-gradient-to-r from-shimi-blue via-header-blue to-shimi-blue px-[40px]">
            <div className="flex ml-[10px]">
              <img src="/iranshimi.png" alt="" />  
              <button className="bg-[#DA0034] self-center py-[6px] px-[13px] font-normal text-xs rounded-[5px] ml-6">ارسال رایگان آگهی</button>
            </div>  
            <div className="flex ">
              <ul className="hidden self-center xl:flex gap-[80px] mr-[70px]">
                <li>
                  <a href="#">ثبت شرکت</a>
                </li>
                <li>
                  <a href="#">فهرست شرکت ها</a>
                </li>
                <li>
                  <a href="#">▼دسته بندی محصولات</a>
                </li>
                <li>
                  <a href="#">▼دسته بندی مواد اولیه</a>
                </li> 
              </ul>
              <img src="/iranchimi.png" alt="" className="relative -bottom-5" />
            </div>
      </div>  
      <div className="hidden lg:flex justify-between items-center gap-4 bg-shimi-blue pl-[33px] pr-[215px] py-3 rounded-b-2xl">
          <input className="w-[190px] rounded-[10px] text-right bg-inherit border-2 focus:ring focus:ring-white border-white text-white placeholder:text-white focus:border-white " placeholder="...جستجو" type="search" name="search" id="" />
          {/* <i class="fa-solid fa-magnifying-glass"></i> */}
          <ul className="hidden xl:flex text-xs gap-6 whitespace-nowrap">
            <li>
              <a href="#">پلیمر و پلاستیک</a>
            </li>
            <li>
              <a href="#">لاستیک</a>
            </li>
            <li>
              <a href="#">نساجی و پوشاک</a>
            </li>
            <li>
              <a href="#">غذایی و کشاورزی</a>
            </li> 
            <li>
              <a href="#">راه و ساختمان</a>
            </li> 
            <li>
              <a href="#">فلزات و معادن</a>
            </li> 
            <li>
              <a href="#">نفت و گاز و ژتروشيمي</a>
            </li> 
            <li>
              <a href="#">سكه و فلزات گرانبها</a>
            </li> 
            <li>
              <a href="#">ارز</a>
            </li> 
            <li>
              <a href="#">صفحات اختصاصي</a>
            </li> 
          </ul>
      </div>
      <div className="lg:hidden">
        <div className="flex items-center justify-between px-5 py-1 bg-gradient-to-r from-header-blue via-header-blue to-shimi-blue">
          <div className="flex gap-4">
            <a href="#" className="fa-solid fa-user fa-2x"></a>
            <a href="#" className="fa-solid fa-basket-shopping fa-2x"></a>
          </div>
          <div>
            <img src="/iranchimi.png" alt="" />  
          </div>
          <span>
            <i className="fa-solid fa-bars fa-2x"></i>
          </span>
        </div>
        <div className="flex items-center justify-between px-5 py-1 bg-shimi-blue">
          <div>
            <button className="bg-[#DA0034] self-center my-2 py-3 px-[33px] font-normal text-xs rounded-[5px]">ثبت آگهی</button>
          </div>
          <div className="flex ">
            <a href="#" className="border-r px-4">ثبت نام</a>
            <a href="#" className="px-4">ورود</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header