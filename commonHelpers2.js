import"./assets/styles-ef6648e7.js";import{i as s}from"./assets/vendor-651d7991.js";const i=document.querySelector(".form"),c=document.querySelector("button");c.addEventListener("click",l);function l(o){o.preventDefault();let t=Number(i.delay.value);m(t).then(({delay:e})=>{s.success({message:`✅ Fulfilled promise in ${e}ms`,timeout:e,position:"topRight",icon:"",close:!1,progressBar:!1,messageColor:"white"})}).catch(({delay:e})=>{s.error({message:`❌ Rejected promise in ${e}ms`,timeout:e,position:"topRight",icon:"",close:!1,progressBar:!1,messageColor:"white"})})}function m(o){const t={delay:o},e=i.state.value==="fulfilled";return new Promise((r,n)=>{setTimeout(()=>{e?r(t):n(t)},o)})}
//# sourceMappingURL=commonHelpers2.js.map