
function Ads({data , buy}) {
  return (
    <div className=" bg-white rounded-[15px] p-5 flex-1 max-w-[682px] w-full m-auto">
        <div className="flex justify-between border-b-2 border-black p-2">
            <a className="text-button-blue" href="#"> ...نمایش همه</a>
            <strong>آگهی های {buy ? 'خرید' : 'فروش'}</strong>
        </div>
        <table  dir="rtl" className="w-full divide-y-[0.5px] divide-black">
            {data?.map((line , i)=>(
                <tr key={i} className="">
                    <td className="p-2">
                        <img src={line.img} alt="" />
                    </td>
                    <td className="p-2">
                        <strong>{line.title}</strong>
                    </td>
                    <td className="p-2 hidden md:table-cell">
                        <div className="flex items-center">
                            <span>{line.caption}</span>
                            <span><img src={line.icon} alt="" /></span>
                        </div>
                    </td>
                    <td className="p-2 hidden md:table-cell">
                        <button className="border border-button-blue hover:bg-button-blue hover:text-white px-[14px] py-1 rounded-full">نمایش آگهی</button>
                    </td>
                </tr>
            ))}
        </table>
    </div>
  )
}

export default Ads