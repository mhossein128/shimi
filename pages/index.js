import {useState} from "react";
import Head from "next/head"
import BannerBox from "../components/home/content/banner/bannerBox";
import FrequentWords from "../components/home/frequentWords";
import CardBox from "../components/home/content/card/cardBox";
import Ads from "../components/home/content/ads/ads";
import Hr from "../components/home/hr";
import Company from "../components/home/company";
import ArticleBox from "../components/home/content/article/articleBox";
import ChartBox from "../components/home/content/chart/chartBox";
import Form from "../components/home/form";
import {api} from '../assets/data'

function Home() {
  const [data, setdata] = useState(api);

  return (
    <div className="bg-bg-back min-h-screen px-[25px] pb-5 font-IRsans max-w-[1440px]">
      <Head>
        <script src="https://kit.fontawesome.com/c9c0b16549.js" crossorigin="anonymous"></script> 
        <title>ایران شیمی</title>
        <meta name="description" content="ایران شیمی" />
        <link rel="icon" href="/icon/iranchimi.png" />
      </Head>
      <BannerBox data={data.banner1} small={true} />
      <FrequentWords />
      <BannerBox data={data.banner2} small={false} />
      <div className="flex items-stretch flex-col xl:flex-row xl:justify-between gap-2">
        <Ads data={data.ads1} buy={true} />
        <Ads data={data.ads1} buy={false} />
      </div>
      <BannerBox data={data.banner3} small={false} />
      <Hr title='اخبار ايران شيمي' />
      <ArticleBox data={data.ArticleBox1} rtl={true} />
      <Hr title='قيمت ارز و نفت' />
      <ChartBox data={data.price} />
      <Hr title='مقالات ايران شيمي' />
      <ArticleBox data={data.ArticleBox2} rtl={false} />
      <Hr title='سرمايه ايران شيمي' classname="hidden sm:block" />
      <Company data={data.company} />
      <BannerBox data={data.banner4} small={false} />
      <Hr title='مجلات تخصصي' />
      <CardBox data={data.card} />
      <Form />
    </div>
  );
}

export default Home;