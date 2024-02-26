import{S,a as d,i as n}from"./assets/vendor-b42c18af.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))u(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function c(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(r){if(r.ep)return;r.ep=!0;const o=c(r);fetch(r.href,o)}})();const $=new S(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),P=document.querySelector("form"),p=document.querySelector(".gallery"),f=document.querySelector(".loader"),a=document.querySelector(".btn");let l,s=1,y=15,h;P.addEventListener("submit",async function(t){if(t.preventDefault(),l=t.target.elements.search.value,l!==""){s=1,p.innerHTML="",L();try{const e=await m(l);g(e.hits),h=Math.ceil(e.totalHits/y),s+=1,b(),k()}catch(e){console.error(e)}finally{w()}t.target.reset()}});async function m(t){try{const e=new URLSearchParams({key:"42245077-d2f8998b656235f8798291f32",q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:"true",page:`${s}`,per_page:`${y}`});return d.defaults.baseURL="https://pixabay.com",(await d.get(`/api/?${e}`)).data}catch{return n.error({title:"Error",message:"Error",position:"topCenter"})}finally{w()}}function v(t){return t.map(e=>`<li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img
          class="gallery-image"
          src="${e.webformatURL}"
          alt="${e.tags}"
          width="360"
        />
      </a>
      <ul class="thumb-block">
        <li class="block">
          <h2 class="title">Likes</h2>
          <p class="amount">${e.likes}</p>
        </li>
        <li class="block">
          <h2 class="title">Views</h2>
          <p class="amount">${e.views}</p>
        </li>
        <li class="block">
          <h2 class="title">Comments</h2>
          <p class="amount">${e.comments}</p>
        </li>
        <li class="block">
          <h2 class="title">Downloads</h2>
          <p class="amount">${e.downloads}</p>
        </li>
      </ul>
    </li>`).join("")}function g(t){if(t.length===0)return n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again.",position:"topCenter"});const e=v(t);p.insertAdjacentHTML("beforeend",e),$.refresh()}a.addEventListener("click",async()=>{if(s>h)return a.style.display="none",n.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."});a.style.display="none",L();try{const t=await m(l);g(t.hits),s+=1,b()}catch{return n.error({title:"Error",message:"Error",position:"topCenter"})}});function k(){if(s>1){const t=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:t.height*2,left:0,behavior:"smooth"})}}function b(){s>1?a.style.display="block":a.style.display="none"}function L(){f.style.display="block"}function w(){f.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
