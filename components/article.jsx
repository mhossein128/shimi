function Article({small , img , title }) {
  return (
    <div 
      className={small  ?
     ( `w-[172px] h-[108px] md:w-[329px] md:h-[207px] relative ` )
      : 
      (`w-[352px] h-[221px] md:w-[695px] md:h-[436px] relative flex justify-center`)
    }>
      <img src={img} alt="" className="w-full h-full rounded-2xl absolute" />
      <div
        className="w-full h-full absolute flex items-end justify-end rounded-b-2xl"
        style={
          small
            ? {
                backgroundImage:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 68.75%, #FFFFFF 78.12%)",
              }
            : {
                backgroundImage:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 77.08%, #FFFFFF 87.5%)",
              }
        }
      >
          <span className={small ? `p-1 md:p-3` : `p-2 md:p-4`}>{title}</span>
      </div>
    </div>
  );
}

export default Article;
