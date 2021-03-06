
function Header() {
  return (
    <div className=" text-white font-IRsans bg-bg-back max-w-[1440px]">
          <div className="hidden lg:flex items-center justify-between bg-gradient-to-r from-shimi-blue via-header-blue to-shimi-blue px-[40px]">
            <div className="flex ml-[10px]">
              <img src='icon/iranshimi.png' alt="" />  
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
              <img src="icon/iranchimi.png" alt="" className="relative -bottom-5" />
            </div>
      </div>  
      <div className="hidden lg:flex justify-between items-center gap-4 bg-shimi-blue pl-[33px] pr-[215px] py-3 rounded-b-2xl">
          <div dir="rtl" className=" flex relative rounded-md p-3 bg-surface undefined">
            <div className="flex justify-start w-full bg-inherit rounded-md">
              <input className="flex justify-center outline-none w-[190px] rounded-[10px] px-3 text-right bg-inherit border-2 focus:ring focus:ring-white border-white text-white placeholder:text-white focus:border-white" placeholder=" جستجو..." min="0" type="search"  />
            </div>
            <span className="grid items-center absolute left-[25px] top-[19px]">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
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
            <img src="icon/iranchimi.png" alt="" />  
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