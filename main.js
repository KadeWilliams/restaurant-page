(()=>{"use strict";let e=0;function t(){const t=document.querySelector("#content");0!=e&&t.removeChild(t.lastChild),document.querySelector(".homeBtn").classList.add("active-page");const n=document.createElement("div");n.classList.add("homeContent");const i=document.createElement("div");i.innerHTML="Thank you for being our Best Friend!",i.classList.add("welcome");const a=document.createElement("img");a.classList.add("roy"),a.style.maxHeight="600px",a.style.maxWidth="600px",a.src="/Users/kade/Desktop/odin_project/restaurant-page/src/roy_choi.jpeg",n.appendChild(i),n.appendChild(a),t.appendChild(n),e++}const n=[{item:"Kogi Tacos",image:"/Users/kade/Desktop/odin_project/restaurant-page/src/tacos.png",price:14.99,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quibusdam! Quisquam porro eligendi, qui eum labore dolor beatae cumque, dolore maxime nisi voluptates enim commodi explicabo ea necessitatibus. Doloremque, recusandae."},{item:"Kimchi Fried Rice",image:"/Users/kade/Desktop/odin_project/restaurant-page/src/kimchi_fried_rice.jpeg",price:12.99,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quibusdam! Quisquam porro eligendi, qui eum labore dolor beatae cumque, dolore maxime nisi voluptates enim commodi explicabo ea necessitatibus. Doloremque, recusandae."},{item:"Fried Chicken",image:"/Users/kade/Desktop/odin_project/restaurant-page/src/fried_chicken.jpeg",price:16.99,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quibusdam! Quisquam porro eligendi, qui eum labore dolor beatae cumque, dolore maxime nisi voluptates enim commodi explicabo ea necessitatibus. Doloremque, recusandae."},{item:"Short Ribs",image:"/Users/kade/Desktop/odin_project/restaurant-page/src/short_ribs.jpeg",price:29.99,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quibusdam! Quisquam porro eligendi, qui eum labore dolor beatae cumque, dolore maxime nisi voluptates enim commodi explicabo ea necessitatibus. Doloremque, recusandae."}];console.log(n[0].item),document.querySelector("#content"),document.createElement("img"),function(){!function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("navbar"),t.style.display="flex",t.style.flexDirection="row",t.style.justifyContent="space-between";const n=document.createElement("div");n.classList.add("navbar-start"),n.style.display="flex",n.style.justifyContent="flex-start";const i=document.createElement("div");i.classList.add("title"),i.innerHTML="BEST FRIEND",n.appendChild(i);const a=document.createElement("div");a.classList.add("navbar-end"),a.style.display="flex",a.style.justifyContent="flex-end";const c=document.createElement("div"),s=document.createElement("button");s.innerText="Home",s.classList.add("homeBtn"),c.appendChild(s);const o=document.createElement("div"),d=document.createElement("button");d.innerText="Menu",d.classList.add("menuBtn"),o.appendChild(d);const r=document.createElement("div"),l=document.createElement("button");l.innerText="Contact",l.classList.add("contactBtn"),r.appendChild(l),a.appendChild(c),a.appendChild(o),a.appendChild(r),t.appendChild(n),t.appendChild(a),e.appendChild(t)}(),function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("footer");const n=document.createElement("p");n.innerHTML="&copy; Kade Williams",t.appendChild(n),e.appendChild(t)}(),t(),document.querySelector("#content");const e=document.querySelector(".homeBtn");e.addEventListener("click",(()=>{i.classList.remove("active-page"),a.classList.remove("active-page"),e.classList.add("active-page"),t()}));const i=document.querySelector(".menuBtn");i.addEventListener("click",(()=>{e.classList.remove("active-page"),a.classList.remove("active-page"),i.classList.add("active-page"),function(){const e=document.querySelector("#content");e.removeChild(e.lastChild);const t=document.createElement("div");t.classList.add("menuContent");const i=document.createElement("div");i.classList.add("blank"),i.innerHTML="",t.appendChild(i),n.forEach((e=>t.appendChild(function(e,t,n,i){const a=document.createElement("div");a.classList.add("menu-item");const c=document.createElement("h3");c.classList.add("header"),c.innerText=e;const s=document.createElement("img");s.classList.add("image"),s.src=t,s.style.maxHeight="500px",s.style.maxWidth="500px";const o=document.createElement("p");o.classList.add("price"),o.innerText=`$${n}`;const d=document.createElement("p");return d.classList.add("description"),d.innerText=i,d.style.maxWidth="500px",a.appendChild(c),a.appendChild(s),a.appendChild(o),a.appendChild(d),a}(e.item,e.image,e.price,e.description)))),e.appendChild(t)}()}));const a=document.querySelector(".contactBtn");a.addEventListener("click",(()=>{e.classList.remove("active-page"),i.classList.remove("active-page"),a.classList.add("active-page"),function(){const e=document.querySelector("#content");e.removeChild(e.lastChild);const t=document.createElement("div");t.classList.add("contactContent");const n=document.createElement("div");n.classList.add("contactInfo");const i=document.createElement("p"),a=document.createElement("p");i.innerText="123-456-7890",a.innerText="3770 S Las Vegas Blvd, Las Vegas, NV 89109",n.appendChild(i),n.appendChild(a);const c=document.createElement("div");c.classList.add("map");const s=document.createElement("img");s.style.maxHeight="700px",s.style.maxWidth="700px",s.src="/Users/kade/Desktop/odin_project/restaurant-page/src/map.png",c.appendChild(s),t.appendChild(n),t.appendChild(c),e.appendChild(t)}()}))}()})();