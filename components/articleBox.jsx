import Article from "./article"

function ArticleBox({data , rtl}) {
  return (
    <div className={` flex flex-auto flex-wrap justify-center gap-4 text-xs md:text-base ${rtl ? 'flex-row-reverse gap-1' : ''} `}>
        <div className="flex justify-center">
            <Article small={false} img={data.largeArticle.img} title={data.largeArticle.title} />
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 justify-center gap-[10px]">
            {data.smallArticles.map((ar , i)=>(
                <Article key={i} small={true} img={ar.img} title={ar.title} />
            ))}
        </div>

    </div>
  )
}

export default ArticleBox ;