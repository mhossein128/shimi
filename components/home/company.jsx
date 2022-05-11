function Company({data}) {
  return (
    <>
      <div className="flex gap-[10px] items-center w-full mb-[15px] mt-[20px] sm:hidden ">
          <hr className="h-[0.8px] flex-auto bg-black" />
        <h3>برخی از مشتریان ایران شیمی</h3>
          <hr className="h-[0.8px] flex-auto bg-black" />
      </div>
      <div className="flex flex-wrap justify-center gap-3">
          {data.map((com , i )=>(
              <a key={i} href="#"><img className="w-[40px] md:w-[100px]" src={com} alt="" /></a>
          ))}
      </div>
    </>
  )
}

export default Company