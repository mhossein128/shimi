
function Footer() {
  return (
      <div className="text-white font-IRsans max-w-[1440px]">
        <div className="bg-gradient-to-r from-footer-1 to-footer-2 flex justify-between py-2 px-[25px] md:px-24">
            <div className="flex justify-between items-center gap-x-10 xl:gap-x-32">
                <div className="hidden lg:flex items-center">
                    <a href="#"><img src="/instagram.png" alt="" /></a>
                    <a className="mx-3" href="#"><img src="/youtub.png" alt="" /></a>
                    <a href="#"><img src="/telegram.png" alt="" /></a>
                </div>
                <img src="/nemad.png" alt="" />
            </div>
            <div className="flex justify-between items-center gap-x-10 xl:gap-x-32">
                <div className="hidden lg:flex">
                    <a href="#">درباره ما</a>
                    <a className="mx-3" href="#">تماس با ما</a>
                    <a href="#">صفحه اصلی</a>
                </div>
                <img src="./iranchimi.png" alt="" />
            </div>
        </div>
        <div className="lg:hidden bg-gradient-to-r from-footer-1 to-footer-2 flex justify-end gap-[27px] py-2 px-[25px] md:px-24">
                <ul className="flex items-end flex-col gap-2 whitespace-nowrap">
                    <li>
                        <a href="#">صفحه اصلی</a>
                    </li>
                    <li>
                        <a href="#">درباره ما</a>
                    </li>
                    <li>
                        <a href="#">تماس با ما</a>
                    </li>
                    <li>
                        <p>help@sarafraz.ir  :    ارتباط با ما</p>
                    </li>
                </ul>
                <div className="flex justify-end flex-col gap-2 items-center">
                    <a href="#"><img src="/instagram.png" alt="" /></a>
                    <a className="mx-3" href="#"><img src="/youtub.png" alt="" /></a>
                    <a href="#"><img src="/telegram.png" alt="" /></a>
                </div>
        </div>
        <div className="bg-gradient-to-r from-product-blue-2 via-product-blue-1 to-product-blue-2 mb-0 p-3 flex justify-center lg:justify-between px-2 md:px-24">
            <p className="hidden lg:block">help@sarafraz.ir  :    ارتباط با ما</p>
            <p className="font-bold text-xs lg:text-base ">تمامی حقوق و محتوا برای شرکت سرافراز محفوظ می باشد </p>
        </div>
      </div>
  )
}

export default Footer