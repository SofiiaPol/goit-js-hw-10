import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as S,i as f}from"./assets/vendor-77e16229.js";const o=document.getElementById("datetime-picker"),a=document.querySelector("button[data-start]"),h=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),p=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]");let r=null,n,d;const M={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){r=t[0];const e=new Date;r<e?f.error({title:"Error",message:"Please choose a data in the future"}):(n=r-e,a.removeAttribute("disabled"))}},T=()=>{a.setAttribute("disabled",""),o.setAttribute("disabled",""),d=setInterval(D,1e3)};S(o,M);function v(t){const c=Math.floor(t/864e5),u=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:c,hours:u,minutes:l,seconds:m}}function g({days:t,hours:e,minutes:s,seconds:i}){h.innerHTML=String(t).padStart(2,"0"),y.innerHTML=String(e).padStart(2,"0"),p.innerHTML=String(s).padStart(2,"0"),b.innerHTML=String(i).padStart(2,"0")}function D(){let t=v(n);g(t),n=n-1e3,n<=0&&(clearInterval(d),o.removeAttribute("disabled"))}a.addEventListener("click",T);
//# sourceMappingURL=commonHelpers.js.map
