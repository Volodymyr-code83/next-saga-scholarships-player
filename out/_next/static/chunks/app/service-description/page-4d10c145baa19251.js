(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10],{3557:function(e,t,r){Promise.resolve().then(r.bind(r,2347))},3605:function(e,t){"use strict";t.Z={apiKey:"AIzaSyDjnFrNhs940hViU6K7iGrWw99hCUnD78Y",authDomain:"fiercedev-next.firebaseapp.com",projectId:"fiercedev-next",storageBucket:"fiercedev-next.appspot.com",messagingSenderId:"779969971905",appId:"1:779969971905:web:0f916e9ab4b3cd8425b640",measurementId:"G-BMHYSSP91Q"}},2347:function(e,t,r){"use strict";r.r(t);var s=r(3827),l=r(4090),n=r(703),a=r(42),i=r(3605),o=r(6142),d=r(2730),u=r(1748),c=r(5183);let x=(0,o.ZF)(i.Z),p=(0,d.v0)(),m=(0,u.N8)(x);t.default=()=>{let[e,t]=(0,l.useState)(!1),[r,i]=(0,l.useState)(0),[o,x]=(0,l.useState)("Saving data..."),[h,f]=(0,l.useState)(!1);(0,c.jl)().token;let[g,v]=(0,l.useState)({imageUrl1:"",imageUrl2:"",day:0,month:0,year:0,preferredPosition:"",secondaryPreferredPosition:"",resume:"",text:""}),[j,w]=(0,l.useState)(!1),[b,y]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let e=(0,d.Aj)(p,e=>{if(e){let t=e.uid,r=(0,u.iH)(m,"userData/".concat(t,"/toDoData"));(0,u.jM)(r,e=>{let t=e.val();t&&v(t)})}else v({imageUrl1:"",imageUrl2:"",day:0,month:0,year:0,preferredPosition:"",secondaryPreferredPosition:"",resume:"",text:""})});return()=>{e()}},[]);let k=()=>{w(!0)},N=()=>{y(!0)};return(0,s.jsxs)("div",{className:"mx-auto flex w-full max-w-screen-xl flex-col items-start justify-start gap-[30px]",children:[(0,s.jsxs)("div",{className:"mx-auto flex w-full max-w-screen-xl items-start justify-center gap-[120px]",children:[(0,s.jsxs)("button",{className:"relative mx-auto flex h-full max-h-[588px] min-h-[588px] w-full max-w-[892px] items-center justify-center  rounded-[20px] bg-white",type:"button",onClick:()=>k(),children:[(null==g?void 0:g.imageUrl1)&&(0,s.jsx)(n.default,{src:null==g?void 0:g.imageUrl1,width:892,height:588,alt:"",className:"h-full z-[2] max-h-[588px] w-full max-w-[892px] rounded-[20px] bg-cover bg-center"}),(0,s.jsx)("p",{className:"absolute z-[1] text-lg font-medium leading-6 pb-[5px]",children:"Upload profile picture here"}),(0,s.jsx)("div",{className:"absolute z-[1] px-[10px] py-[10px] bg-blue rounded-[5px] mt-[80px]",children:(0,s.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),(0,s.jsx)("path",{d:"M7.0835 8.33337C7.77385 8.33337 8.3335 7.77373 8.3335 7.08337C8.3335 6.39302 7.77385 5.83337 7.0835 5.83337C6.39314 5.83337 5.8335 6.39302 5.8335 7.08337C5.8335 7.77373 6.39314 8.33337 7.0835 8.33337Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),(0,s.jsx)("path",{d:"M17.4998 12.5L13.3332 8.33337L4.1665 17.5",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})})]}),(0,s.jsxs)("button",{className:"relative mx-auto flex h-full max-h-[588px] min-h-[588px] w-full max-w-[892px] items-center justify-center  rounded-[20px] bg-white",type:"button",onClick:()=>N(),children:[(null==g?void 0:g.imageUrl2)&&(0,s.jsx)(n.default,{src:null==g?void 0:g.imageUrl2,width:892,height:588,alt:"",className:"h-full z-[2] max-h-[588px] w-full max-w-[892px] rounded-[20px] bg-cover bg-center"}),(0,s.jsx)("p",{className:"absolute z-[1] text-lg font-medium leading-6 pb-[5px]",children:"Upload your in-action picture here"}),(0,s.jsx)("div",{className:"absolute z-[1] px-[10px] py-[10px] bg-blue rounded-[5px] mt-[80px]",children:(0,s.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),(0,s.jsx)("path",{d:"M7.0835 8.33337C7.77385 8.33337 8.3335 7.77373 8.3335 7.08337C8.3335 6.39302 7.77385 5.83337 7.0835 5.83337C6.39314 5.83337 5.8335 6.39302 5.8335 7.08337C5.8335 7.77373 6.39314 8.33337 7.0835 8.33337Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),(0,s.jsx)("path",{d:"M17.4998 12.5L13.3332 8.33337L4.1665 17.5",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})})]})]}),(0,s.jsxs)("div",{className:"flex w-full max-w-screen-xl items-start justify-between",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("p",{className:"text-lg font-medium leading-6 pb-[10px] pt-[30px]",children:"Date of birth"}),(0,s.jsxs)("div",{className:"date-of-birth-container",children:[(0,s.jsx)("h2",{className:"date-of-birth-header",children:"Date of Birth"}),(0,s.jsxs)("div",{className:"date-inputs flex gap-[10px]",children:[(0,s.jsx)("input",{type:"number",placeholder:"Day",min:"1",max:"31",value:(null==g?void 0:g.day)||"",onChange:e=>{v({...g,day:parseInt(e.target.value)})}}),(0,s.jsx)("input",{type:"number",placeholder:"Month",min:"1",max:"12",value:(null==g?void 0:g.month)||"",onChange:e=>{v({...g,month:parseInt(e.target.value)})}}),(0,s.jsx)("input",{type:"number",placeholder:"Year",min:"1900",max:"2024",value:(null==g?void 0:g.year)||"",onChange:e=>{v({...g,year:parseInt(e.target.value)})}})]})]})]}),(0,s.jsxs)("div",{className:"flex flex-col justify-between w-full gap-5 mb-[10px]",children:[(0,s.jsxs)("div",{className:"w-96",children:[(0,s.jsx)("p",{className:"text-lg font-medium leading-6 pb-[10px] pt-[20px]",children:"Preferred position"}),(0,s.jsx)("input",{className:"w-full rounded-[10px] border border-[#AFAFAF] bg-[#F2F2F2] px-2 py-[8px] text-[#131E42] focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary",type:"text",name:"preferredPosition",id:"preferredPosition",value:null==g?void 0:g.preferredPosition,onChange:e=>{v({...g,preferredPosition:e.target.value})},placeholder:"Enter the position you prefer"})]}),(0,s.jsxs)("div",{className:"w-96",children:[(0,s.jsx)("p",{className:"text-lg font-medium leading-6 pb-[10px]",children:"Secondary preferred position"}),(0,s.jsx)("input",{className:"w-full rounded-[10px] border border-[#AFAFAF] bg-[#F2F2F2] px-2 py-[8px] text-[#131E42] focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary",type:"text",name:"secondaryPosition",id:"secondaryPosition",value:null==g?void 0:g.secondaryPreferredPosition,onChange:e=>{v({...g,secondaryPreferredPosition:e.target.value})},placeholder:"Enter your secondary preferred position you prefer"})]})]})]}),(0,s.jsxs)("div",{className:"w-[580px]",children:[(0,s.jsx)("p",{className:"text-lg font-medium leading-6 pb-[10px] pt-[30px]",children:"Upload your soccer resume(in words)"}),(0,s.jsx)("textarea",{className:"block w-full h-48 px-4 py-3 rounded-lg shadow-sm bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500 resize-none",placeholder:"Enter your resume text here...",value:null==g?void 0:g.resume,onChange:e=>{v({...g,resume:e.target.value})},rows:6}),(0,s.jsx)("div",{className:"flex justify-end mt-[1rem]",children:(0,s.jsx)("button",{type:"submit",className:"bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",onClick:()=>{t(!0),i(0),x("Saving data..."),f(!1);let e=p.currentUser;if(e){let r=e.uid,s=(0,u.iH)(m,"userData/".concat(r,"/toDoData"));(0,u.t8)(s,{imageUrl1:g.imageUrl1,imageUrl2:g.imageUrl2,day:g.day,month:g.month,year:g.year,preferredPosition:g.preferredPosition,secondaryPreferredPosition:g.secondaryPreferredPosition,resume:g.resume,text:g.text}).then(()=>{console.log("Page data saved successfully!"),i(100),x("Data saved successfully! ✔️"),setTimeout(()=>{f(!0),setTimeout(()=>{t(!1)},3e3)},1e3)}).catch(e=>{console.error("Error saving page data: ",e),t(!1)});let l=setInterval(()=>{i(e=>e<90?e+10:(clearInterval(l),e))},300)}else console.error("No user is currently signed in.")},children:" Submit"})})]})]}),j&&(0,s.jsx)(a.Z,{isOpen:j,onClose:()=>{w(!1)},imageUrl:null==g?void 0:g.imageUrl1,onSubmit:e=>{v({...g,imageUrl1:e}),w(!1)}}),b&&(0,s.jsx)(a.Z,{isOpen:b,onClose:()=>{y(!1)},imageUrl:null==g?void 0:g.imageUrl2,onSubmit:e=>{v({...g,imageUrl2:e}),y(!1)}}),e&&(0,s.jsx)(e=>{let{message:t,progress:r,success:l}=e;return(0,s.jsxs)("div",{className:"fixed right-5 bottom-5 w-80 p-4 bg-green-600 text-white rounded shadow-lg transition-transform duration-700 ".concat(l&&"transform translate-x-full"),children:[(0,s.jsx)("div",{children:t}),!l&&(0,s.jsx)("div",{className:"w-full bg-green-200 h-2 rounded mt-2",children:(0,s.jsx)("div",{className:"bg-green-500 h-full rounded",style:{width:"".concat(r,"%")}})})]})},{message:o,progress:r,success:h})]})}},7295:function(e,t,r){"use strict";var s=r(3827),l=r(4090),n=r(129),a=r(8324);t.Z=e=>{let{isOpen:t,onClose:r,title:i,className:o,children:d}=e,u=(0,l.useRef)(null);return(0,s.jsx)(n.u.Root,{show:t,as:l.Fragment,children:(0,s.jsxs)(a.V,{className:"relative z-999999",initialFocus:u,onClose:r,children:[(0,s.jsx)(n.u.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,s.jsx)("div",{className:"fixed inset-0 bg-[#131E42CC] bg-opacity-75 transition-opacity"})}),(0,s.jsx)("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:(0,s.jsx)("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:(0,s.jsx)(n.u.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,s.jsxs)(a.V.Panel,{className:"relative transform overflow-hidden rounded-lg bg-white p-11 text-left shadow-xl transition-all sm:my-8 sm:w-full ".concat(o),children:[(0,s.jsx)("div",{className:"flex w-full items-center justify-center ",children:(0,s.jsx)("h3",{className:"text-[30px] font-semibold text-textBlack",children:i})}),d]})})})})]})})}},42:function(e,t,r){"use strict";var s=r(3827),l=r(4090),n=r(703),a=r(2670),i=r(7957),o=r(7295),d=r(1991);let u=d.Ry().shape({image:d.Z_().required("Image is required")});t.Z=e=>{var t;let{isOpen:r,imageUrl:d,onClose:c,onSubmit:x}=e,[p,m]=(0,l.useState)(d||""),[h,f]=(0,l.useState)(null),g=(0,l.useRef)(null),{register:v,handleSubmit:j,setValue:w,setError:b,formState:{errors:y}}=(0,a.cI)({resolver:(0,i.X)(u)});(0,l.useEffect)(()=>{w("image",d)},[]);let k=async e=>{var t,r,s,l;m(null),(null===(t=e.target)||void 0===t?void 0:t.files)&&f(null===(r=e.target)||void 0===r?void 0:r.files[0]);let n=new FileReader;(null===(s=e.target)||void 0===s?void 0:s.files)&&n.readAsDataURL(null===(l=e.target)||void 0===l?void 0:l.files[0]),n.onload=async e=>{var t;let r=null===(t=e.target)||void 0===t?void 0:t.result;r&&(b("image",{message:""}),w("image",r),m(r))}};return(0,s.jsxs)(o.Z,{isOpen:r,onClose:c,title:"Add new image",className:"h-full w-full max-w-[1330px]",children:[" ",(0,s.jsx)("form",{onSubmit:j(()=>{p&&!y.image&&x(p)}),children:(0,s.jsxs)("div",{className:"mt-[50px] flex  w-full flex-col   items-center justify-start gap-[36px]",children:[(0,s.jsxs)("div",{className:"flex w-full flex-col items-start justify-center gap-[22px]",children:[(0,s.jsx)("div",{className:"relative mx-auto flex h-full max-h-[597px] min-h-[597px] w-full max-w-[926px] items-center justify-center  rounded-[20px] bg-[#9D9595]",children:p&&(0,s.jsx)(n.default,{src:p,width:926,height:597,alt:"User",className:"h-full max-h-[597px] w-[926px] rounded-[20px] bg-cover bg-center"})}),(0,s.jsxs)("div",{role:"button",onClick:()=>{if(g.current){var e;null===(e=g.current)||void 0===e||e.click()}},className:"mx-auto flex cursor-pointer items-center justify-center gap-6 ",children:[(0,s.jsxs)("svg",{width:"26",height:"31",viewBox:"0 0 26 31",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M21.3438 5.23792C18.7565 2.54238 15.1818 1.0186 11.4455 1.0186H6.9581C3.72621 1.00621 1.07699 3.58085 1.00086 6.81274V23.6698C0.946475 26.8551 3.48382 29.4826 6.67065 29.5385C6.76543 29.5385 6.86177 29.5385 6.9581 29.5354H19.3698C22.5846 29.5028 25.1701 26.8846 25.1655 23.6698V14.7385C25.1655 11.1971 23.7961 7.79287 21.3438 5.23792V5.23792Z",stroke:"#131E42","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),(0,s.jsx)("path",{d:"M16.8864 1V5.51998C16.8864 7.72637 18.6717 9.51478 20.878 9.521H25.1572",stroke:"#131E42","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),(0,s.jsx)("path",{d:"M16.6057 16.793H8.99213",stroke:"#131E42","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),(0,s.jsx)("path",{d:"M12.8 20.5989V12.9854",stroke:"#131E42","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),(0,s.jsx)("p",{className:" text-nowrap text-[20px]  font-semibold text-blue",children:"Add new image"}),(0,s.jsx)("input",{accept:"image/png",ref:g,onChange:k,type:"file",style:{display:"none"}})]})]}),(null==y?void 0:y.image)&&(0,s.jsx)("p",{className:"text-[14px] text-red",children:null==y?void 0:null===(t=y.image)||void 0===t?void 0:t.message}),(0,s.jsxs)("div",{className:" flex w-full items-center justify-end gap-[50px]",children:[(0,s.jsx)("button",{className:" w-[154px] rounded-[10px] bg-red px-4 py-3 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-red",type:"button",onClick:c,children:"Cancel"}),(0,s.jsx)("button",{className:" w-[154px] rounded-[10px] bg-blue px-4 py-3 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-blue",type:"submit",children:"Update"})]})]})})]})}},1748:function(e,t,r){"use strict";r.d(t,{N8:function(){return s.N8},iH:function(){return s.iH},jM:function(){return s.jM},t8:function(){return s.t8}});var s=r(3363)}},function(e){e.O(0,[802,481,703,247,134,342,971,69,744],function(){return e(e.s=3557)}),_N_E=e.O()}]);