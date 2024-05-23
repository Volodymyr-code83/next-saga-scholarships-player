(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[834],{9048:function(e,t,l){Promise.resolve().then(l.bind(l,9598))},9598:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return m}});var s=l(3827),i=l(703),a=e=>{let{index:t,blogData:l,onEdit:a,onDelete:n}=e;return(0,s.jsxs)("div",{className:"flex w-full items-start justify-start gap-[35px]",children:[(0,s.jsx)("div",{className:"relative flex h-full max-h-[427px] min-h-[427px] w-full max-w-[714px] items-center justify-center  rounded-[10px] bg-[#9D9595]",children:l.imageUrl&&(0,s.jsx)(i.default,{src:l.imageUrl,width:714,height:427,alt:"",className:"h-full max-h-[427px] w-full max-w-[714px] rounded-[10px] bg-cover bg-center"})}),(0,s.jsxs)("div",{className:"relative flex h-full max-h-[427px] min-h-[427px] w-full  max-w-[714px] flex-col items-start justify-between gap-[10px] rounded-[10px]  bg-white p-5 ",children:[(0,s.jsxs)("div",{className:"flex w-full flex-col items-start justify-start gap-[10px]",children:[(0,s.jsx)("h5",{className:"line-clamp-1 text-[17px] font-medium text-blue",children:null==l?void 0:l.title}),(0,s.jsx)("p",{className:"line-clamp-[15] text-[15px] font-normal text-black",children:null==l?void 0:l.details})]}),(0,s.jsxs)("div",{className:"flex w-full items-center justify-end gap-5",children:[(0,s.jsx)("button",{className:"rounded bg-blue px-4 py-[6px] text-[13px] uppercase leading-[13px] text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-blue",type:"button",onClick:()=>a(l,t),children:"Edit"}),(0,s.jsx)("button",{className:" rounded bg-red px-4 py-[6px] text-[13px] uppercase leading-[13px] text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-red",type:"button",onClick:()=>n(l,t),children:"Delete"})]})]})]})},n=l(7295),r=e=>{let{isOpen:t,onClose:l,onSubmit:i}=e;return(0,s.jsx)(n.Z,{isOpen:t,onClose:l,title:"Delete this blog",className:"h-full  w-full max-w-[738px] ",children:(0,s.jsxs)("div",{className:"mt-[60px] flex  w-full flex-col   items-center justify-start gap-11",children:[(0,s.jsx)("div",{className:"relative flex h-auto w-full max-w-[565px] items-center justify-center ",children:(0,s.jsx)("p",{className:"text-center text-[20px] text-textBlack ",children:"Are you sure you want to delete news? You will not be able to recover this news information after it get’s deleted."})}),(0,s.jsxs)("div",{className:" flex w-full items-center justify-center gap-[100px]",children:[(0,s.jsx)("button",{className:" w-[154px] rounded-[10px] bg-red px-4 py-3 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-red",type:"button",onClick:l,children:"Cancel"}),(0,s.jsx)("button",{className:" w-[154px] rounded-[10px] bg-blue px-4 py-3 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-blue",type:"button",onClick:()=>{i()},children:"Confirm"})]})]})})},o=l(4090),d=l(2670),u=l(7957),x=l(1991);let c=x.Ry().shape({title:x.Z_().required("Title is required"),details:x.Z_().required("Content is required"),imageUrl:x.Z_().required("Image is required")});var p=e=>{var t,l,a;let{isOpen:r,blog:x,onClose:p,onSubmit:m}=e,{register:f,handleSubmit:h,setValue:v,setError:w,formState:{errors:g}}=(0,d.cI)({resolver:(0,u.X)(c)}),[j,b]=(0,o.useState)(x?null==x?void 0:x.imageUrl:""),[y,C]=(0,o.useState)(null),N=(0,o.useRef)(null);(0,o.useEffect)(()=>{x&&v("title",x.title),x&&v("details",x.details),x&&v("imageUrl",x.imageUrl)},[x,v]);let k=async e=>{var t,l,s,i;b(null),(null===(t=e.target)||void 0===t?void 0:t.files)&&C(null===(l=e.target)||void 0===l?void 0:l.files[0]);let a=new FileReader;(null===(s=e.target)||void 0===s?void 0:s.files)&&a.readAsDataURL(null===(i=e.target)||void 0===i?void 0:i.files[0]),a.onload=async e=>{var t;let l=null===(t=e.target)||void 0===t?void 0:t.result;l&&(w("imageUrl",{message:""}),v("imageUrl",l),b(l))}},F=h(e=>{j&&m({...e,imageUrl:j})});return(0,s.jsx)(n.Z,{isOpen:r,onClose:p,title:"Edit blog details",className:"h-full w-full max-w-[802px]",children:(0,s.jsx)("form",{onSubmit:F,children:(0,s.jsxs)("div",{className:"mt-[50px] flex  w-full flex-col   items-center justify-start gap-[36px]",children:[(0,s.jsxs)("div",{className:"flex w-full   flex-col items-start justify-start gap-[33px]",children:[(0,s.jsxs)("div",{className:" flex w-full  items-center justify-start gap-[18px]",children:[(0,s.jsx)("label",{className:"min-w-[97px] text-right text-[20px] font-medium text-textBlack dark:text-white",htmlFor:"name",children:"Title"}),(0,s.jsxs)("div",{className:"flex w-full flex-col items-start justify-start gap-4",children:[(0,s.jsx)("input",{className:"w-full rounded-[10px] border border-[#AFAFAF] bg-[#F2F2F2] px-5 py-[11px] text-[#131E42] focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary",type:"text",id:"title",...f("title")}),(null==g?void 0:g.title)&&(0,s.jsx)("p",{className:" text-[14px] text-red ",children:null==g?void 0:null===(t=g.title)||void 0===t?void 0:t.message})]})]}),(0,s.jsxs)("div",{className:" flex w-full  items-start justify-start gap-[18px]",children:[(0,s.jsx)("label",{className:"min-w-[97px] text-right text-[20px] font-medium text-textBlack dark:text-white",htmlFor:"details",children:"Content"}),(0,s.jsxs)("div",{className:"flex w-full flex-col items-start justify-start gap-4",children:[(0,s.jsx)("textarea",{className:"w-full rounded-[10px] border border-[#AFAFAF] bg-[#F2F2F2] px-5 py-[11px] text-[#131E42] focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary",rows:5,id:"details",...f("details")}),(null==g?void 0:g.details)&&(0,s.jsx)("p",{className:" text-[14px] text-red ",children:null==g?void 0:null===(l=g.details)||void 0===l?void 0:l.message})]})]})]}),(0,s.jsxs)("div",{className:"mx-auto flex w-full max-w-[415px] flex-col items-start justify-start  gap-4",children:[(0,s.jsxs)("div",{className:"relative mx-auto flex h-full max-h-[271px] min-h-[271px] w-full max-w-[415px] items-center justify-center  rounded-[10px] bg-[#9D9595]",children:[j&&(0,s.jsx)(i.default,{src:j,width:415,height:271,alt:"User",className:"h-full max-h-[271px] w-[415px] rounded-[10px] bg-cover bg-center"}),(0,s.jsxs)("div",{role:"button",onClick:()=>{if(N.current){var e;null===(e=N.current)||void 0===e||e.click()}},className:"absolute left-1/2 top-1/2 -ml-8 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center gap-6 ",children:[(0,s.jsxs)("svg",{width:"26",height:"31",viewBox:"0 0 26 31",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M21.3438 5.23792C18.7565 2.54238 15.1818 1.0186 11.4455 1.0186H6.9581C3.72621 1.00621 1.07699 3.58085 1.00086 6.81274V23.6698C0.946475 26.8551 3.48382 29.4826 6.67065 29.5385C6.76543 29.5385 6.86177 29.5385 6.9581 29.5354H19.3698C22.5846 29.5028 25.1701 26.8846 25.1655 23.6698V14.7385C25.1655 11.1971 23.7961 7.79287 21.3438 5.23792V5.23792Z",stroke:"#131E42","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),(0,s.jsx)("path",{d:"M16.8864 1V5.51998C16.8864 7.72637 18.6717 9.51478 20.878 9.521H25.1572",stroke:"#131E42","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),(0,s.jsx)("path",{d:"M16.6057 16.793H8.99213",stroke:"#131E42","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),(0,s.jsx)("path",{d:"M12.8 20.5989V12.9854",stroke:"#131E42","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})]}),(0,s.jsx)("p",{className:" text-nowrap text-[20px]  font-semibold text-blue",children:"Add new image"}),(0,s.jsx)("input",{accept:"image/png",ref:N,onChange:k,type:"file",style:{display:"none"}})]})]}),g.imageUrl&&(0,s.jsx)("p",{className:"text-[14px] text-red",children:null==g?void 0:null===(a=g.imageUrl)||void 0===a?void 0:a.message})]}),(0,s.jsxs)("div",{className:" flex w-full items-center justify-center gap-[100px]",children:[(0,s.jsx)("button",{className:" w-[154px] rounded-[10px] bg-red px-4 py-3 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-red",type:"button",onClick:p,children:"Cancel"}),(0,s.jsx)("button",{className:" w-[154px] rounded-[10px] bg-blue px-4 py-3 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-blue",type:"submit",children:"Update"})]})]})})})},m=()=>{let[e,t]=(0,o.useState)([]),[l,i]=(0,o.useState)(!1),[n,d]=(0,o.useState)(!1),[u,x]=(0,o.useState)(null),c=(e,t)=>{x({blog:e,index:t}),i(!0)},m=(e,t)=>{x({blog:e,index:t}),d(!0)},f=()=>{x(null),i(!1),d(!1)};return(0,s.jsxs)("div",{className:"flex h-full w-full flex-col items-start justify-center gap-15",children:[(0,s.jsx)("div",{className:"flex w-full flex-row items-center justify-end ",children:(0,s.jsxs)("button",{className:" flex items-center justify-center gap-4 rounded-[10px] bg-blue px-4 py-2 text-xs uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-blue",type:"button",onClick:()=>{x(null),i(!0)},children:[(0,s.jsx)("svg",{width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M11.5641 7.69672C13.6113 7.69672 15.2694 5.94262 15.2694 3.79508C15.2694 1.68033 13.6113 0 11.5641 0C9.53384 0 7.85886 1.70492 7.85886 3.81148C7.86732 5.95082 9.51692 7.69672 11.5641 7.69672ZM11.5641 6.2623C10.3967 6.2623 9.40695 5.18852 9.40695 3.81148C9.40695 2.46721 10.3882 1.43443 11.5641 1.43443C12.7484 1.43443 13.7213 2.45082 13.7213 3.79508C13.7213 5.17213 12.74 6.2623 11.5641 6.2623ZM11.5641 8.64754C10.0837 8.64754 8.7894 8.96721 7.71505 9.4918C8.12956 9.80328 8.49332 10.1803 8.7894 10.6148C9.56768 10.2869 10.4982 10.082 11.5641 10.082C15.2863 10.082 17.3758 12.418 17.3758 13.6721C17.3758 13.8197 17.2996 13.8852 17.0966 13.8852H9.91451C9.90606 14.3934 9.83838 14.8361 9.67765 15.3197H16.8344C18.2979 15.3197 19 14.8689 19 13.9016C19 11.6475 16.0984 8.64754 11.5641 8.64754ZM4.35663 18C6.72529 18 8.72173 16.082 8.72173 13.7705C8.72173 11.459 6.75067 9.54918 4.35663 9.54918C1.97106 9.54918 0 11.459 0 13.7705C0 16.0902 1.97106 18 4.35663 18ZM1.59884 13.7705C1.59038 13.4344 1.82725 13.2131 2.17409 13.2131H3.78139V11.6639C3.78139 11.3279 4.0098 11.0984 4.35663 11.0984C4.71193 11.0984 4.94034 11.3279 4.94034 11.6639V13.2131H6.54764C6.88602 13.2131 7.12289 13.4344 7.12289 13.7705C7.12289 14.1148 6.88602 14.3361 6.54764 14.3361H4.94034V15.8934C4.94034 16.2295 4.71193 16.4508 4.35663 16.4508C4.0098 16.4508 3.78139 16.2295 3.78139 15.8934V14.3361H2.17409C1.83571 14.3361 1.59884 14.1148 1.59884 13.7705Z",fill:"white"})}),"Add new blog"]})}),(0,s.jsx)("div",{className:"flex w-full flex-col items-start justify-start gap-10",children:null==e?void 0:e.map((e,t)=>(0,s.jsx)(a,{index:t,blogData:e,onEdit:c,onDelete:m},t))}),l&&(0,s.jsx)(p,{isOpen:l,blog:u?null==u?void 0:u.blog:null,onClose:f,onSubmit:l=>{let s=structuredClone(e);if(u){let e=null==s?void 0:s.findIndex((e,t)=>t===(null==u?void 0:u.index));-1!==e&&(s[e]=l),t(s),x(null),i(!1)}else t([...s,l]),i(!1)}}),n&&(0,s.jsx)(r,{isOpen:n,onClose:f,onSubmit:()=>{let l=structuredClone(e);t(null==l?void 0:l.filter((e,t)=>t!==(null==u?void 0:u.index))),x(null),d(!1)}})]})}},7295:function(e,t,l){"use strict";var s=l(3827),i=l(4090),a=l(129),n=l(8324);t.Z=e=>{let{isOpen:t,onClose:l,title:r,className:o,children:d}=e,u=(0,i.useRef)(null);return(0,s.jsx)(a.u.Root,{show:t,as:i.Fragment,children:(0,s.jsxs)(n.V,{className:"relative z-999999",initialFocus:u,onClose:l,children:[(0,s.jsx)(a.u.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,s.jsx)("div",{className:"fixed inset-0 bg-[#131E42CC] bg-opacity-75 transition-opacity"})}),(0,s.jsx)("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:(0,s.jsx)("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:(0,s.jsx)(a.u.Child,{as:i.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:(0,s.jsxs)(n.V.Panel,{className:"relative transform overflow-hidden rounded-lg bg-white p-11 text-left shadow-xl transition-all sm:my-8 sm:w-full ".concat(o),children:[(0,s.jsx)("div",{className:"flex w-full items-center justify-center ",children:(0,s.jsx)("h3",{className:"text-[30px] font-semibold text-textBlack",children:r})}),d]})})})})]})})}}},function(e){e.O(0,[703,247,342,971,69,744],function(){return e(e.s=9048)}),_N_E=e.O()}]);