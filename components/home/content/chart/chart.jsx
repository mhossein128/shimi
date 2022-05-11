import chartStyle from "../../../../styles/chart.module.css";

function Chart({ title , salesPrice , buyPrice , salesPercent , buyPercent , L_percentage , L_color , s_percentage , s_color }) {
  return (
    <div className="flex flex-col  w-[150px] md:w-auto -translate-y-[30px] md:translate-y-0">
      <div
        className={`${chartStyle.semidonut} scale-50 md:scale-100 -translate-x-[75px] translate-y-[36px] md:translate-x-0 md:translate-y-0`}
        style={{ "--percentage": 200-L_percentage , "--fill": L_color }}
      >
        <div
          className={`scale-50 -bottom-8 ${chartStyle.semidonut}`}
          style={{ "--percentage": 200-s_percentage , "--fill":  s_color }}
        >
          <span className="text-black">
           {title}
          </span> 
        </div>
      </div>
      <div className="divide-y divide-black">
          <div className="flex py-1 justify-around">
              {/* <span className="text-green-500">⇑</span>  */}
              <img src="/up.png" className="scale-50 md:scale-100" alt="" />
              <span className="text-green-500">{buyPercent}</span>
              <span>{buyPrice}</span>
              <span className="w-3 h-3 bg-green-600"></span>
              <span> خریـد</span>
          </div>
          <div className="flex py-1 justify-around">
              {/* <span className="text-red-500">⇓</span>  */}
              <img src="/down.png" className="scale-50 md:scale-100" alt="" />
              <span className="text-red-500">{salesPercent}</span>
              <span>{salesPrice}</span>
              <span className="w-3 h-3 bg-red-600"></span>
              <span>فروش</span>
          </div>
      </div>
    </div>
  );
}

export default Chart;
