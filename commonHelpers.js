import"./assets/styles-ef6648e7.js";import{f as p,i as d}from"./assets/vendor-651d7991.js";const a=document.querySelector("#datetime-picker"),e=document.querySelector("[data-start]"),l=document.querySelector("[data-days]"),m=document.querySelector("[data-hours]"),c=document.querySelector("[data-minutes]"),u=document.querySelector("[data-seconds]");let n=0,r=null,s=null;const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){console.log(t[0]),v(t[0])}};e.setAttribute("disabled",!0);p(a,C);e.addEventListener("click",x);window.addEventListener("keydown",t=>{t.code==="Escape"&&r&&(clearInterval(r),a.removeAttribute("disabled"),e.setAttribute("disabled",!0),u.textContent="00",c.textContent="00",m.textContent="00",l.textContent="00")});function x(){r=setInterval(S,1e3)}function v(t){const i=Date.now();if(t<i){e.setAttribute("disabled",!0),d.error({message:"Please choose a date in the future",position:"topRight",progressBar:!1,messageColor:"white"});return}n=t.getTime()-i,s=o(n),f(s),e.removeAttribute("disabled")}function S(){e.setAttribute("disabled",!0),a.setAttribute("disabled",!0),n-=1e3,u.textContent<=0&&c.textContent<=0?(d.success({message:"Time end",position:"topRight",close:!1,progressBar:!1,messageColor:"white"}),clearInterval(r)):(s=o(n),f(s))}function f(t){u.textContent=t.seconds,c.textContent=t.minutes,m.textContent=t.hours,l.textContent=t.days}function o(t){const h=Math.floor(t/864e5),b=Math.floor(t%864e5/36e5),y=Math.floor(t%864e5%36e5/6e4),g=Math.floor(t%864e5%36e5%6e4/1e3);return{days:h,hours:b,minutes:y,seconds:g}}console.log(o(2e3));console.log(o(14e4));console.log(o(2414e4));
//# sourceMappingURL=commonHelpers.js.map
