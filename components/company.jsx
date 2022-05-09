function Company({data}) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
        {data.map((com , i )=>(
            <a key={i} href="#"><img className="w-[40px] md:w-[100px]" src={com} alt="" /></a>
        ))}
    </div>
  )
}

export default Company