import Chart from "./chart"

function ChartBox({data}) {
  return (
    <div className="flex flex-wrap justify-around my-3 bg-white rounded-2xl p-4">
        {data.map((chart , i)=>(
            <Chart key={i} title={chart.title}  salesPrice={chart.salesPrice}  buyPrice={chart.buyPrice}  salesPercent={chart.salesPercent}  buyPercent={chart.buyPercent}  L_percentage={chart.L_percentage}  L_color={chart.L_color}  s_percentage={chart.s_percentage}  s_color={chart.s_color} />
        ))}
    </div>
  )
}

export default ChartBox