function Hr({url , title , classname}) {
  return (
    <div className={classname}>
      <div className="flex gap-2 justify-between items-center sm:px-6 mt-2 mb-4">
          <a className="text-button-blue hidden sm:block" href="#">...نمايش همه</a>
          <hr className="h-[2px] flex-auto bg-black" />
          <h3 className="text-lg font-bold">{title}</h3>
      </div>
    </div>
  )
}

export default Hr