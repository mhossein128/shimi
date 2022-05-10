import {useState} from "react";
import Head from "next/head"
import BannerBox from "../components/bannerBox";
import FrequentWords from "../components/frequentWords";
import CardBox from "../components/cardBox";
import Ads from "../components/ads";
import Hr from "../components/hr";
import Company from "../components/company";
import ArticleBox from "../components/articleBox";
import ChartBox from "../components/chartBox";
import Form from "../components/form";

function Home() {
  const [data, setdata] = useState(api);

  return (
    <div className="bg-bg-back min-h-screen px-[25px] pb-5 font-IRsans max-w-[1440px]">
      <Head>
        <script src="https://kit.fontawesome.com/c9c0b16549.js" crossorigin="anonymous"></script> 
        <title>ایران شیمی</title>
        <meta name="description" content="ایران شیمی" />
        <link rel="icon" href="/iranchimi.png" />
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
      <Hr title='سرمايه ايران شيمي' />
      <Company data={data.company} />
      <BannerBox data={data.banner4} small={false} />
      <Hr title='مجلات تخصصي' />
      <CardBox data={data.card} />
      <Form />
    </div>
  );
}





let api = {
  banner1: ["/Rectangle 413.png", "/Rectangle 414.png", "/Rectangle 415.png"],
  banner2 : ["/Rectangle 421.png", "/Rectangle 422.png"],
  banner3 : ["/Rectangle 423.png", "/Rectangle 424.png"],
  banner4 : ["/Rectangle 416.png", "/Rectangle 417.png"],
  ArticleBox1 : {
    largeArticle : {
      img : '/Rectangle 427.png',
      title : 'اجتماع شیمیایی کشان کشور در برج میلاد'
    },
    smallArticles : [
      {
        img : '/Rectangle 428.png',
        title : 'شو لباس کبری خانم'
      },
      {
        img : '/Rectangle 430.png',
        title : 'شنیدن موزیک میمون'
      },
      {
        img : '/Rectangle 432.png',
        title : 'خانه میلیاردی دلاری در تهران'
      },
      {
        img : '/Rectangle 433.png',
        title : 'ابری عجیب در جنگل های شمال'
      },
    ]
  },
  ArticleBox2 : {
    largeArticle : {
      img : '/Rectangle 434.png',
      title : 'بفرمایید شام با لاله'
    },
    smallArticles : [
      {
        img : '/Rectangle 435.png',
        title : 'تام هاردی در انتظار جسی'
      },
      {
        img : '/Rectangle 436.png',
        title : 'کتری رو اتش خشک شده'
      },
      {
        img : '/Rectangle 437.png',
        title : 'کو کجاس؟'
      },
      {
        img : '/Rectangle 438.png',
        title : 'چشمان شما در دام ما'
      },
    ]
  },
  company : [
    "/Rectangle 441.png",
    "/Rectangle 442.png",
    "/Rectangle 443.png",
    "/Rectangle 444.png",
    "/Rectangle 445.png",
    "/Rectangle 446.png",
    "/Rectangle 447.png",
    "/Rectangle 448.png",
    "/Rectangle 449.png",
  ],
  card : [
    {
      img : '/Rectangle 451.png',
      title : 'منو بچم یهویی زنان و زندگی',
      date : 'تاریخ انتشار:18 مهر 1400'
    },
    {
      img : '/Rectangle 452.png',
      title : 'راه زندگی شماره سه هزار',
      date : 'تاریخ انتشار:18 مهر 1400'
    },
    {
      img : '/Rectangle 453.png',
      title : 'زن روز زندگی متفاوت',
      date : 'تاریخ انتشار:18 مهر 1400'
    },
    {
      img : '/Rectangle 454.png',
      title : 'ماهنامه کچل رخ عقابی',
      date : 'تاریخ انتشار:18 مهر 1400'
    },
    {
      img : '/Rectangle 455.png',
      title : 'عادل از ایران گریخت',
      date : 'تاریخ انتشار:18 مهر 1400'
    },
    {
      img : '/Rectangle 456.png',
      title : 'این مجله خارجی خویا',
      date : 'تاریخ انتشار:18 مهر 1400'
    },
    {
      img : '/Rectangle 457.png',
      title : 'ایده آل ما خیلی باحالیم',
      date : 'تاریخ انتشار:18 مهر 1400'
    },
    {
      img : '/Rectangle 458.png',
      title : 'دوباره زن روز با بوکس',
      date : 'تاریخ انتشار:18 مهر 1400'
    },
  ],
  ads1 : [
    {
      img : '/Ellipse 57.png',
      title : 'شرکت شیمیایی عباس',
      caption : 'تولید مواد شیمیایی',
      icon : '/vector2.png' ,
    },
  {
      img : '/Ellipse 58.png',
      title : 'شرکت شیمیایی شهرمات',
      caption : 'وارد کننده مواد شیمیایی',
      icon : '/vector.png' ,
    },
  {
      img : '/Ellipse 59.png',
      title : 'شرکت شیمیایی هوی',
      caption : 'وارد کننده مواد شیمیایی',
      icon : '/vector2.png' ,
    },
  {
      img : '/Ellipse 60.png',
      title : 'شرکت شیمیایی فرهاد',
      caption : 'وارد کننده مواد شیمیایی',
      icon : '/vector.png' ,
    },
  {
      img : '/Ellipse 61.png',
      title : 'شرکت شینوینمیایی ',
      caption : 'وارد کننده مواد شیمیایی',
      icon : '/vector2.png' ,
    },
  {
      img : '/Ellipse 62.png',
      title : 'شرکت ایران شیمی',
      caption : 'وارد کننده مواد شیمیایی',
      icon : '/vector.png' ,
    },
  {
      img : '/Ellipse 63.png',
      title : 'شرکت فرا شیمی',
      caption : 'وارد کننده مواد شیمیایی',
      icon : '/vector2.png' ,
    },
  {
      img : '/Ellipse 64.png',
      title : 'شرکت ورا شیمی',
      caption : 'وارد کننده مواد شیمیایی',
      icon : '/vector.png' ,
    },
  {
      img : '/Ellipse 65.png',
      title : 'شرکت پتروگاز',
      caption : 'وارد کننده مواد شیمیایی',
      icon : '/vector2.png' ,
    },
  {
      img : '/Ellipse 66.png',
      title : 'شرکت جهان پارس',
      caption : 'وارد کننده مواد شیمیایی',
      icon : '/vector.png' ,
    },
  ],
  price : [
    { 
      title : 'سکه امامی' ,
      salesPrice : '23500' ,
       buyPrice : '27500' ,
       salesPercent : '0.05%' ,
       buyPercent : '0.2%' ,
       L_percentage : 90 ,
       L_color : '#FCD87C' ,
       s_percentage : 100 ,
       s_color : '#FFA768' 
    },
    { 
      title : 'دلار آمریکا' ,
      salesPrice : '23500' ,
       buyPrice : '27500' ,
       salesPercent : '0.05%' ,
       buyPercent : '0.2%' ,
       L_percentage : 70 ,
       L_color : '#7CAFFC' ,
       s_percentage : 65 ,
       s_color : '#68FF80' 
    },
    { 
      title : 'انس طلا' ,
      salesPrice : '23500' ,
       buyPrice : '27500' ,
       salesPercent : '0.05%' ,
       buyPercent : '0.2%' ,
       L_percentage : 30 ,
       L_color : '#FCD87C' ,
       s_percentage : 40 ,
       s_color : '#7CAFFC' 
    },
    { 
      title : 'نفت خام' ,
      salesPrice : '23500' ,
       buyPrice : '27500' ,
       salesPercent : '0.05%' ,
       buyPercent : '0.2%' ,
       L_percentage : 60 ,
       L_color : '#EA7442' ,
       s_percentage : 90 ,
       s_color : '#FF68DE' 
    }

  ]

}

export default Home;
