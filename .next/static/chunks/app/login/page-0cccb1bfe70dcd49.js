(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{7882:function(e,a,s){Promise.resolve().then(s.bind(s,9415))},2669:function(e,a,s){"use strict";s.d(a,{Bw:function(){return l},Ib:function(){return t},Iu:function(){return d},NB:function(){return c}}),s(5355);var r=s(3472);(0,r.$)("1aaeba0b573bb2cbf038512d41fd7a92b6cd5b92"),(0,r.$)("d5c87a8e1917c7e82fcdb2d81a981283942dc0ac"),(0,r.$)("4ff6e22bf0833a91b9576a105a5d403095cd9353"),(0,r.$)("f5e58f372c267e370d4dfc26803032922a0dd628"),(0,r.$)("10aed90bf98fe2930814a3411e60db922ebdca17"),(0,r.$)("a2acd0c1e97b1613b26e903d088c909b97c49eac"),(0,r.$)("a156e163a29f41cd4838fd3a6ef9f80dd10e4ff1");var l=(0,r.$)("86e14c8ce893992def1a82561600b67ca41213a8"),t=(0,r.$)("07c3836fd86c071944ac8fef3cfe13dffd648059"),d=(0,r.$)("8606cacb309c83776f659ed4a496a894efe87219"),c=(0,r.$)("ecb8156f6f6683cc19ca13adfa882b39043ec330")},9415:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return i}});var r=s(3827),l=s(2669),t=s(3829),d=s(8693),c=s(146),n=s(5313);function i(){let e=(0,n.useRouter)(),a=(0,d.TA)({initialValues:{email:"",password:""},validate:e=>{let a={};if(console.log(a),""===e.email&&(a.email="Please enter your email"),""===e.password&&(a.password="Please enter your password"),a.email||a.password)return a},onSubmit:async s=>{let r=await (0,l.Ib)(a.values.email,a.values.password);console.log(r),200===r.status?(c.Z.set("token",r.token),e.push("/leads")):401===r.status?a.errors.password="Wrong Password":404===r.status&&(a.errors.email="We couldn't find an account with this email")}});return(0,r.jsx)("div",{className:"w-[100vw] flex justify-center items-center min-h-screen bg-blue-100",children:(0,r.jsxs)("div",{className:"p-10 w-fit flex flex-col gap-4 justify-center items-center rounded-2xl ",style:{boxShadow:"0 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(5px)",WebkitBackdropFilter:"blur(5px)",border:"1px solid rgba(255, 255, 255, 0.3)",background:"rgba(255, 255, 255, 0.2)"},children:[(0,r.jsx)("h1",{className:"font-semibold text-xl",children:"Welcome back"}),(0,r.jsx)("h1",{className:"font-semibold text-xl",children:"Please enter your details to login"}),(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)("h1",{className:"font-semibold",children:"E-mail Address"}),(0,r.jsx)(t.Z,{label:"E-mail",handleChange:e=>{a.values.email=e}}),(0,r.jsx)("p",{className:"text-red-500 italic",children:a.errors.email?a.errors.email:""})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)("h1",{className:"font-semibold",children:"Password"}),(0,r.jsx)(t.Z,{label:"Password",type:"password",handleChange:e=>{a.values.password=e}}),(0,r.jsx)("p",{className:"text-red-500 italic",children:a.errors.password?a.errors.password:""})]}),(0,r.jsx)("button",{className:"bg-gray-700 mt-4 text-white px-16 w-fit py-2 hover:shadow-2xl transition-all ease-linear duration-200 rounded-md font-semibold",onClick:()=>a.handleSubmit(),type:"submit",children:"Login"})]})})}},3829:function(e,a,s){"use strict";var r=s(3827),l=s(6918);s(4090),a.Z=e=>{let{label:a,handleChange:s,type:t,readOnly:d,value:c,placeholder:n}=e;return(0,r.jsx)(l.Z,{id:"outlined-basic",label:a,variant:"outlined",type:t||"text",value:c||void 0,placeholder:n||void 0,InputProps:{readOnly:!!d},className:"!shadow-lg",onChange:e=>{s&&s(e.target.value)},sx:{width:300,border:"1px solid black",borderRadius:"5px"}})}}},function(e){e.O(0,[356,971,69,744],function(){return e(e.s=7882)}),_N_E=e.O()}]);