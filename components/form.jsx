import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup'

let validationSchema = Yup.object({
    material : Yup.string().required('required field'),
    number : Yup.number().required('required field !!'),
    unit : Yup.string().required('this field is required')
})

const initialValues = {
    material : '',
    number : '' , 
    unit : '',
    text : ''
}

const onSubmit = value => {
    console.log(value)
}

export default function Form_1 () {

  return (

  <div className="bg-white px-6 py-5 mt-3 rounded-3xl text-right md:hidden">
    <Formik
        initialValues={initialValues} 
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        // className={exampleStyle.center}
    >
        <Form>
            <div>
                <label className="block" htmlFor="material">نام ماده یا محصول</label>
                <Field className="my-2 border border-[#3C81C2] rounded-md w-full px-[22px] py-[9px] text-right" type="text" name="material" id="material" placeholder="مثال : اسیدسولفوریک" />
                <div className="text-red-600">
                  <ErrorMessage name='material' />
                </div>
            </div>

            <div>
                <label className="block" htmlFor="number">مقدار</label>
                <Field className="my-2 border border-[#3C81C2] rounded-md w-full px-[22px] py-[9px] text-right" type="text" name="number" id='number' placeholder="مثال : 120" />
                <div className="text-red-600">
                  <ErrorMessage className="text-red-600" name='number' />
                </div>
            </div>

            <div>
                <label className="block" htmlFor="unit">واحد</label>
                <select className="my-2 border border-[#3C81C2] rounded-md w-full px-[22px] py-[9px] text-right" type="" name="unit" id="unit" placeholder="مثال : اسیدسولفوریک" >
                  <option className="w-full" value="g">گرم</option>
                  <option value="kg">کیلوگرم</option>
                </select>
            </div>
            <label className="block" htmlFor="title">توضیحات</label>
             <textarea className="my-2 border border-[#3C81C2] rounded-md w-full px-[22px] py-[9px] text-right" placeholder="در بخش توضیحات لطفا از قرار دادن اطلاعات شخصی مانند ایمیل و شماره تماس جدا خود داری فرمایید ، در صورت مشاهده اخطار و رد درخواست دریافت خواهید کرد" name="title" id="title" cols="30" rows="10"></textarea>
             <div className="text-center">
                 <input className="w-3/4 py-2 bg-button-blue rounded-md mx-auto text-white" type="button" value="استعلام قیمت"  />
             </div>
        </Form>
    </Formik>
  </div>
  )
}


// function Form() {
//   return (
//     <div className="bg-white px-6 py-5 mt-3 rounded-3xl text-right md:hidden">
//         <form action="">
//             <label className="block" htmlFor="material">نام ماده یا محصول</label>
//             <input className="my-2 border border-[#3C81C2] rounded-md w-full px-[22px] py-[9px] text-right" type="text" name="material" placeholder="مثال : اسیدسولفوریک" />
//             <label className="block" htmlFor="number">مقدار</label>
//             <input className="my-2 border border-[#3C81C2] rounded-md w-full px-[22px] py-[9px] text-right" type="text" name="number" placeholder="مثال : 120" />
//             <label className="block" htmlFor="unit">واحد</label>
//             <select className="my-2 border border-[#3C81C2] rounded-md w-full px-[22px] py-[9px] text-right" type="" name="unit" placeholder="مثال : اسیدسولفوریک" >
//                 <option className="w-full" value="g">گرم</option>
//                 <option value="kg">کیلوگرم</option>
//             </select>
//             <label className="block" htmlFor="title">توضیحات</label>
//             <textarea className="my-2 border border-[#3C81C2] rounded-md w-full px-[22px] py-[9px] text-right" placeholder="در بخش توضیحات لطفا از قرار دادن اطلاعات شخصی مانند ایمیل و شماره تماس جدا خود داری فرمایید ، در صورت مشاهده اخطار و رد درخواست دریافت خواهید کرد" name="title" id="title" cols="30" rows="10"></textarea>
//             <div className="text-center">
//                 <input className="w-3/4 py-2 bg-button-blue rounded-md mx-auto text-white" type="button" value="استعلام قیمت"  />
//             </div>
//         </form>
//     </div>
//   )
// }

// export default Form