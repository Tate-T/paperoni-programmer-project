(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const q of a.addedNodes)q.tagName==="LINK"&&q.rel==="modulepreload"&&o(q)}).observe(document,{childList:!0,subtree:!0});function s(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerPolicy&&(a.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?a.credentials="include":l.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(l){if(l.ep)return;l.ep=!0;const a=s(l);fetch(l.href,a)}})();const A=document.querySelector(".header-modal-input"),me=document.querySelector(".header-hello"),W=document.querySelector(".header-modal-btn-save");document.querySelector(".header-modal");const he=document.querySelector(".header-modal-backdrop"),pe=document.querySelector(".header-modal-sub-backdrop");document.querySelector(".header-modal-sub");const xe=document.querySelector(".header-modal-btn-close"),Se=document.querySelector(".header-modal-sub-btn-close");W.addEventListener("click",()=>{A.value.length>=3?me.textContent=`Вітаємо ${A.value}!`:alert("Введіть щонайменше 3 символи!")});A.addEventListener("input",()=>{W.disabled=A.value.length<3});W.addEventListener("click",()=>{me.textContent=`Вітаємо ${A.value}!`});xe.addEventListener("click",()=>{he.classList.toggle("header-modal-backdrop-vision")});W.addEventListener("click",()=>{he.classList.toggle("header-modal-backdrop-vision"),pe.classList.toggle("header-modal-sub-backdrop-vision")});Se.addEventListener("click",()=>{pe.classList.toggle("header-modal-sub-backdrop-vision")});const Ee=document.querySelector(".header-dropdown-btn"),qe=document.querySelector(".header-dropdown-content"),w=document.querySelector(".header-cirkle"),_=document.querySelector(".header-ellipse"),F=document.querySelector(".time-calculator-cirkle"),j=document.querySelector(".time-calculator-ellipse"),ee=document.querySelector(".header-cirkle-img");document.querySelector("body");const te=document.querySelectorAll("section"),se=document.querySelectorAll("p"),oe=document.querySelector("header"),le=document.querySelector("footer"),ie=document.querySelector("li"),z=document.querySelectorAll("h1");console.log(z);const D=document.querySelectorAll("h2");console.log(D);const re=document.querySelectorAll("h3");Ee.addEventListener("click",()=>{qe.classList.toggle("show")});w.addEventListener("click",t=>{w.classList.toggle("header-cirkle-right"),w.classList.contains("header-cirkle-right")?(ee.src="../img/moon.svg",w.style.backgroundColor="black",_.style.backgroundColor="#FFF",j.style.backgroundColor="#FFF",se.forEach(e=>{e.classList.toggle("all-text-white"),e.classList.toggle("all-text-black")}),z.forEach(e=>{e.classList.toggle("all-title-white"),e.classList.toggle("all-title-black")}),D.forEach(e=>{e.classList.toggle("all-title-white"),e.classList.toggle("all-title-black")}),re.forEach(e=>{e.classList.toggle("all-title-white"),e.classList.toggle("all-title-black")}),te.forEach(e=>{e.classList.toggle("all-section-black"),e.classList.toggle("all-section-white")}),oe.classList.toggle("all-section-black"),le.classList.toggle("all-section-black"),F.classList.toggle(".all-circle-bg-white"),F.classList.toggle(".all-circle-bg-black"),ie.forEach(e=>{e.classList.toggle("all-title-white"),e.classList.toggle("all-title-black")})):(ee.src="../img/sun.svg",w.style.backgroundColor="white",_.style.backgroundColor="#7a7a7a",j.style.backgroundColor="#7a7a7a",se.forEach(e=>{e.classList.toggle("all-text-white"),e.classList.toggle("all-text-black")}),z.forEach(e=>{e.classList.toggle("all-title-white"),e.classList.toggle("all-title-black")}),D.forEach(e=>{e.classList.toggle("all-title-white"),e.classList.toggle("all-title-black")}),re.forEach(e=>{e.classList.toggle("all-title-white"),e.classList.toggle("all-title-black")}),te.forEach(e=>{e.classList.toggle("all-section-black"),e.classList.toggle("all-section-white")}),oe.classList.toggle("all-section-black"),le.classList.toggle("all-section-black"),F.classList.toggle(".all-circle-bg-white"),F.classList.toggle(".all-circle-bg-black"),ie.forEach(e=>{e.classList.toggle("all-link-white"),e.classList.toggle("all-link-black")}))});const v=document.querySelector("[data-remove]"),we=document.querySelector("[data-btnYear]"),Ce=document.querySelector("[data-inputYear]");we.addEventListener("click",()=>{const t=parseInt(Ce.value,10);isNaN(t)||t<=0?(v.textContent="Введіть коректний рік!",v.style.color="black"):t%4===0&&t%100!==0||t%400===0?(v.textContent="Ви народилися у високосний рік!",v.style.color="green"):(v.textContent="Ви народилися не у високосний рік!",v.style.color="red")});document.querySelector(".guess-number-form");const P=document.querySelector(".guess-number-input"),Be=document.querySelector(".guess-number-btn"),f=document.querySelector(".guess-number-text"),Me=document.querySelector(".guess-number-search");function ge(){return Math.round(Math.random()*100)}Be.addEventListener("click",t=>{t.preventDefault();const e=Number(P.value),s=ge();e===s?(f.textContent=`Вітаю ви відгадали число! ${s}`,f.classList.toggle("guess-number-text-true")):(f.textContent=`Ви програли, комп’ютер загадав ${s}`,f.classList.toggle("guess-number-text-false")),P.value=""});Me.addEventListener("click",t=>{t.preventDefault();const e=Number(P.value),s=ge();e===s?(f.textContent=`Вітаю ви відгадали число! ${s}`,f.classList.toggle("guess-number-text-true")):(f.textContent=`Ви програли, комп’ютер загадав ${s}`,f.classList.toggle("guess-number-text-false")),P.value=""});const O=function(){document.querySelector(".rock-paper-scissors-user").textContent=0,document.querySelector(".rock-paper-scissors-tie").textContent=0,document.querySelector(".rock-paper-scissors-pc").textContent=0,g.textContent="Почніть гру",g.style.color="black",K=0,J=0,Q=0,i=0,c[0].classList.remove("rock-paper-scissors-item-hover"),c[1].classList.remove("rock-paper-scissors-item-hover"),c[2].classList.remove("rock-paper-scissors-item-hover")},m=document.querySelectorAll(".rock-paper-scissors-difficulty"),c=document.querySelectorAll(".rock-paper-scissors-item"),$e=document.querySelector(".rock-paper-scissors-button"),g=document.querySelector(".rock-paper-scissors-text");let i=0,T=2;m[0].addEventListener("click",t=>{T=1,m[0].classList.add("rock-paper-scissors-difficulty-hover"),m[1].classList.remove("rock-paper-scissors-difficulty-hover"),m[2].classList.remove("rock-paper-scissors-difficulty-hover"),O()});m[1].addEventListener("click",t=>{T=2,m[0].classList.remove("rock-paper-scissors-difficulty-hover"),m[1].classList.add("rock-paper-scissors-difficulty-hover"),m[2].classList.remove("rock-paper-scissors-difficulty-hover"),O()});m[2].addEventListener("click",t=>{T=3,m[0].classList.remove("rock-paper-scissors-difficulty-hover"),m[1].classList.remove("rock-paper-scissors-difficulty-hover"),m[2].classList.add("rock-paper-scissors-difficulty-hover"),O()});c[0].addEventListener("click",t=>{i=1,c[0].classList.add("rock-paper-scissors-item-hover"),c[1].classList.remove("rock-paper-scissors-item-hover"),c[2].classList.remove("rock-paper-scissors-item-hover")});c[1].addEventListener("click",t=>{i=2,c[1].classList.add("rock-paper-scissors-item-hover"),c[0].classList.remove("rock-paper-scissors-item-hover"),c[2].classList.remove("rock-paper-scissors-item-hover")});c[2].addEventListener("click",t=>{i=3,c[2].classList.add("rock-paper-scissors-item-hover"),c[0].classList.remove("rock-paper-scissors-item-hover"),c[1].classList.remove("rock-paper-scissors-item-hover")});let K=0,J=0,Q=0;$e.addEventListener("click",t=>{let e=Math.floor(Math.random()*3)+1;T===1?Math.floor(Math.random()*10)+1===1?i===1?e=3:e=i-1:Math.floor(Math.random()*10)+1===1?e=i:i===3?e=1:e=i+1:T===3&&(Math.floor(Math.random()*50)+1===1?i===3?e=1:e=i+1:Math.floor(Math.random()*50)+1===1?e=i:i===1?e=3:e=i-1),i===1&&e===2||i===2&&e===3||i===3&&e===1?(J+=1,document.querySelector(".rock-paper-scissors-user").textContent=J,g.textContent="Ви виграли раунд!",g.style.color="green"):i===e?(Q+=1,document.querySelector(".rock-paper-scissors-tie").textContent=Q,g.textContent="Нічия!",g.style.color="grey"):i===0||(K+=1,document.querySelector(".rock-paper-scissors-pc").textContent=K,g.textContent="Комп'ютер виграв раунд!",g.style.color="red"),e=Math.round(Math.random()*(3-1)+1)});document.querySelector(".rock-paper-scissors-update").addEventListener("click",t=>{O()});let Ie=document.getElementById("counter-calculator1"),Ae=document.getElementById("counter-calculator2"),ce=document.getElementById("text-result"),N=null;document.getElementById("plus-button").addEventListener("click",()=>{N="+",highlightActiveButton("plus-button")});document.getElementById("plus-umltiplate").addEventListener("click",()=>{N="*",highlightActiveButton("plus-umltiplate")});document.getElementById("plus-minus").addEventListener("click",()=>{N="-",highlightActiveButton("plus-minus")});document.getElementById("plus-divadet").addEventListener("click",()=>{N="/",highlightActiveButton("plus-divadet")});document.getElementById("button-equal").addEventListener("click",()=>{let t=parseFloat(Ie.value),e=parseFloat(Ae.value);if(isNaN(t)||isNaN(e)){ce.value="Помилка: введіть числа";return}let s;switch(N){case"+":s=t+e;break;case"*":s=t*e;break;case"-":s=t-e;break;case"/":s=e!==0?t/e:"Ділення на 0!";break;default:s="Оберіть операцію"}ce.value=s});function Te(t){const e=document.createElement("span");document.body.appendChild(e),e.style.visibility="hidden",e.style.position="absolute",e.style.whiteSpace="pre",e.style.font=getComputedStyle(t).font,e.style.padding=getComputedStyle(t).padding;const s=()=>{e.textContent=t.value||t.placeholder,t.style.width=`${e.offsetWidth+10}px`};t.addEventListener("input",s),s(),t.addEventListener("blur",()=>{document.body.removeChild(e)})}const Ne=document.querySelectorAll(".calculator-field");Ne.forEach(Te);const fe=document.querySelector(".time-calculator-cirkle"),C=document.querySelector(".time-calculator-input"),G=document.querySelector(".time-calculator-result");fe.addEventListener("click",t=>{t.target.classList.toggle("time-calculator-cirkle-right"),t.target.classList.contains("time-calculator-cirkle-right")?(C.placeholder="Кількість хвилин",C.value="",G.textContent="0р. 0 дн. 0год. 0хв."):(C.placeholder="Кількість секунд",C.value="",G.textContent="0 дн. 0год. 0хв. 0сек.")});let r;C.addEventListener("change",t=>{r=t.target.value});document.querySelector(".time-calculator-wrap").addEventListener("click",t=>{!isNaN(r)&&r>=0&&(fe.classList.contains("time-calculator-cirkle-right")?G.textContent=`${(r-r%525600)/525600}р. ${(r%525600-r%525600%1440)/1440} дн. ${(r%525600%1440-r%525600%1440%60)/60}год. ${r%525600%1440%60}хв.`:G.textContent=`${(r-r%86400)/86400} дн. ${(r%86400-r%86400%3600)/3600}год. ${(r%86400%3600-r%86400%3600%60)/60}хв. ${r%86400%3600%60}сек.`)});const L=document.querySelector(".football-box"),u=document.querySelector(".football-ball"),Fe=document.querySelector(".football-goal"),ye=document.getElementById("score"),ve=document.querySelector(".football-end"),Pe=document.querySelector(".football-end-btn");let k=0;const ne=5,H={left:"20px",top:"20px"};u.style.left=H.left;u.style.top=H.top;function Ge(){const t=Fe.getBoundingClientRect(),e=u.getBoundingClientRect(),s=e.left+e.width/2,o=e.top+e.height/2;return s>t.left&&s<t.right&&o>t.top&&o<t.bottom}function He(){u.style.left=H.left,u.style.top=H.top}function We(){ve.style.display="block"}function Oe(){ve.style.display="none",k=0,ye.textContent=k}Pe.addEventListener("click",()=>{Oe()});L.addEventListener("click",t=>{if(k>=ne)return;const e=L.getBoundingClientRect();let s=t.clientX-e.left-u.offsetWidth/2,o=t.clientY-e.top-u.offsetHeight/2;s<0&&(s=0),o<0&&(o=0),s+u.offsetWidth>L.clientWidth&&(s=L.clientWidth-u.offsetWidth),o+u.offsetHeight>L.clientHeight&&(o=L.clientHeight-u.offsetHeight),u.style.left=`${s}px`,u.style.top=`${o}px`,Ge()&&(k+=1,ye.textContent=k,He(),k>=ne&&We())});const Re=document.querySelectorAll(".max-number-box-item"),Ye=document.querySelector(".max-number-text"),U=[];console.log(U);Re.forEach(t=>{t.addEventListener("input",e=>{const s=Number(e.target.value);U.push(s);const o=Math.max(...U);Ye.textContent=`Найбільше число, яке ви ввели  ${o}`})});const Xe=document.querySelector("[data-left]"),ze=document.querySelector("[data-right]"),B=document.querySelector("[data-name]"),M=document.querySelector("[data-description]"),De=document.querySelectorAll(".part"),$=document.querySelector(".team-img");let S=0;const x=[{name:"Андрій Мальцев",description:"Скрам-майстер, зробив секції: Калькулятор часу; Google динозавр; Камінь - ножиці - папір; Footer; Scroll To Top",image:"../img/team1.jpg"},{name:"Артем Дикий",description:"Лідер команди, зробив секції: Header; Вгадай число, яке загадав комп’ютер; Футбол; Введіть 3 числа; Модельне вікно; Темна тема",image:"../img/team2.png"},{name:"Святослав Калугін",description:"Голова колгоспу), зробив секції: Перевір в який рік ти народився; Калькулятор; Наша команда; Обери вченого/их; Космічні загарбники",image:"../img/team3.jpg"}];function Le(t){B.textContent=x[t].name,M.innerHTML=x[t].description,$.src=x[t].image,De.forEach((e,s)=>{e.style.width="25px",e.style.backgroundColor=s===t?"#868686":"#e3e3e3"})}function be(t){const e=t?"fade-out-right":"fade-out-left",s="fade-in";B.classList.add(e),M.classList.add(e),$.classList.add(e),setTimeout(()=>{Le(S),B.classList.remove(e),M.classList.remove(e),$.classList.remove(e),B.classList.add(s),M.classList.add(s),$.classList.add(s),setTimeout(()=>{B.classList.remove(s),M.classList.remove(s),$.classList.remove(s)},500)},500)}Xe.addEventListener("click",()=>{S=(S-1+x.length)%x.length,be(!1)});ze.addEventListener("click",()=>{S=(S+1)%x.length,be(!0)});Le(S);const Ke=[{name:"Альберт",surname:"Ейнштейн",born:1879,dead:1955,id:1},{name:"Ісаак",surname:"Ньютон",born:1643,dead:1727,id:2},{name:"Галілео",surname:"Галілей",born:1564,dead:1642,id:3},{name:"Марія",surname:"Склодовська-Кюрі",born:1867,dead:1934,id:4},{name:"Йоганн",surname:"Кеплер",born:1571,dead:1630,id:5},{name:"Миколай",surname:"Коперник",born:1473,dead:1543,id:6},{name:"Макс",surname:"Планк",born:1858,dead:1947,id:7},{name:"Кетрін",surname:"Блоджетт",born:1898,dead:1979,id:8},{name:"Ада",surname:"Лавлейс",born:1815,dead:1852,id:9},{name:"Сара Е.",surname:"Гуд",born:1855,dead:1905,id:10},{name:"Ліза",surname:"Мейтнер",born:1878,dead:1968,id:11},{name:"Ганна",surname:"Хаммарстрьом",born:1829,dead:1909,id:12}],h=document.querySelectorAll(".sort-list-item"),V=document.querySelectorAll(".scientist");let Y=0;const I=[];function Je(){let t=[...Ke];return I.forEach(e=>{t=e(t)}),t}h[0].addEventListener("click",t=>p(t,Ze));h[1].addEventListener("click",t=>p(t,_e));h[2].addEventListener("click",t=>p(t,je));h[3].addEventListener("click",t=>p(t,et));h[4].addEventListener("click",t=>p(t,tt));h[5].addEventListener("click",t=>p(t,st));h[6].addEventListener("click",t=>p(t,ot));h[7].addEventListener("click",t=>p(t,lt));h[8].addEventListener("click",t=>p(t,it));function Qe(){for(let t of V)t.innerHTML=""}function Ue(){for(let t of V)t.style.transform="scaleX(-1)",setTimeout(()=>t.style.transform="scaleX(1)",250)}function Ve(t,e){return t.sort((s,o)=>s[e].localeCompare(o[e],"uk"))}function p(t,e){I.includes(e)?(I.splice(I.indexOf(e),1),t.currentTarget.classList.remove("active")):(I.push(e),t.currentTarget.classList.add("active")),Ue(),setTimeout(Qe,250),setTimeout(()=>{let o=Je();Y=0,o.forEach(l=>{V[Y].innerHTML=`${l.name} ${l.surname} <br> ${l.born}-${l.dead}`,Y++})},500)}function Ze(t){return t.filter(e=>e.born>=1801&&e.born<=1900)}function _e(t){return Ve(t,"name")}function je(t){return t.sort((e,s)=>e.dead-e.born-(s.dead-s.born))}function et(t){return t.sort((e,s)=>s.born-e.born)}function tt(t){return t.filter(e=>e.name==="Альберт"&&e.surname==="Ейнштейн")}function st(t){return t.filter(e=>e.surname.startsWith("С"))}function ot(t){return t.filter(e=>e.name[0]!=="А")}function lt(t){return t.sort((e,s)=>e.dead-e.born-(s.dead-s.born))}function it(t){return t.filter(e=>e.name[0]===e.surname[0])}const y=document.querySelector("canvas"),n=y.getContext("2d"),ae=document.getElementById("startButton"),rt=document.getElementById("gameIconContainer"),ct=document.querySelector(".space-box");let Z=!1;class nt{constructor(){this.velocity={x:0,y:0},this.rotation=0;const e=new Image;e.src="../../space-assets/spaceship.png",e.onload=()=>{this.image=e,this.width=e.width*.15,this.height=e.height*.15,this.position={x:y.width/2-this.width/2,y:y.height-this.height-20}}}draw(){n.save(),n.translate(this.position.x+this.width/2,this.position.y+this.height/2),n.rotate(this.rotation),n.translate(-this.position.x-this.width/2,-this.position.y-this.height/2),n.drawImage(this.image,this.position.x,this.position.y,this.width,this.height),n.restore()}update(){this.image&&(this.draw(),this.position.x+=this.velocity.x)}}class at{constructor({position:e,velocity:s}){this.position=e,this.velocity=s,this.radius=4}draw(){n.beginPath(),n.arc(this.position.x,this.position.y,this.radius,0,Math.PI*2),n.fillStyle="red",n.fill(),n.closePath()}update(){this.draw(),this.position.x+=this.velocity.x,this.position.y+=this.velocity.y}}class dt{constructor({position:e}){this.velocity={x:0,y:0};const s=new Image;s.src="../../space-assets/invader.png",s.onload=()=>{this.image=s,this.width=s.width*1,this.height=s.height*1,this.position={x:e.x,y:e.y}}}draw(){n.drawImage(this.image,this.position.x,this.position.y,this.width,this.height)}update({velocity:e}){this.image&&(this.draw(),this.position.x+=e.x,this.position.y+=e.y)}}class ut{constructor(){this.position={x:0,y:0},this.velocity={x:3,y:0},this.invaders=[];const e=Math.floor(Math.random()*10+5),s=Math.floor(Math.random()*5+2);this.width=e*30;for(let o=0;o<e;o++)for(let l=0;l<s;l++)this.invaders.push(new dt({position:{x:o*30,y:l*30}}))}update(){this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.velocity.y=0,(this.position.x+this.width>=y.width||this.position.x<=0)&&(this.velocity.x=-this.velocity.x,this.velocity.y=30)}}const d=new nt,b=[],de=[],E={a:{pressed:!1},d:{pressed:!1},space:{pressed:!1}};let X=0,ue=Math.floor(Math.random()*500+500);function ke(){requestAnimationFrame(ke),n.fillStyle="black",n.fillRect(0,0,y.width,y.height),d.update(),b.forEach((t,e)=>{t.position.y+t.radius<=0?setTimeout(()=>{b.splice(e,1)},0):t.update()}),de.forEach(t=>{t.update(),t.invaders.forEach((e,s)=>{e.update({velocity:t.velocity}),b.forEach((o,l)=>{o.position.y-o.radius<=e.position.y+e.height&&o.position.y+o.radius>=e.position.y&&o.position.x+o.radius>=e.position.x&&o.position.x-o.radius<=e.position.x+e.width&&o.position.y+o.radius>=e.position.y&&setTimeout(()=>{const a=t.invaders.find(R=>R===e),q=b.find(R=>R===o);a&&q&&(t.invaders.splice(s,1),b.splice(l,1))},0)})})}),E.a.pressed&&d.position.x>=0?(d.velocity.x=-5,d.rotation=-.15):E.d.pressed&&d.position.x+d.width<=y.width?(d.velocity.x=5,d.rotation=.15):(d.velocity.x=0,d.rotation=0),X%ue===0&&(de.push(new ut),X=0,ue=Math.floor(Math.random()*500+500)),X++}ae.addEventListener("click",()=>{Z=!0,ae.style.display="none",rt.style.display="none",ct.style.display="none",y.style.display="block",document.body.classList.add("game-started"),ke()});addEventListener("keydown",({key:t})=>{if(Z)switch(t){case"a":E.a.pressed=!0;break;case"d":E.d.pressed=!0;break;case"w":b.push(new at({position:{x:d.position.x+d.width/2,y:d.position.y},velocity:{x:0,y:-10}}));break}});addEventListener("keyup",({key:t})=>{if(Z)switch(t){case"a":E.a.pressed=!1;break;case"d":E.d.pressed=!1;break}});
