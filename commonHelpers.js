import{a as y,i as p,S as g}from"./assets/vendor-b42c18af.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))u(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();const b=document.querySelector("form"),d=document.querySelector(".gallery"),n=document.querySelector(".loader"),l=document.querySelector(".btn");let a,s=1,f=15;const w=Math.ceil(500/f);b.addEventListener("submit",async function(t){if(t.preventDefault(),a=t.target.elements.search.value,a!==""){s=1,d.innerHTML="",n.style.display="block";try{const e=await h(a);m(e.hits),s+=1,s>1&&(l.style.display="block")}catch(e){console.error(e)}finally{n.style.display="none"}t.target.reset()}});async function h(t){try{const e=new URLSearchParams({key:"42245077-d2f8998b656235f8798291f32",q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:"true",page:`${s}`,per_page:`${f}`});return y.defaults.baseURL="https://pixabay.com",(await y.get(`/api/?${e}`)).data}catch(e){throw console.error(e),e}finally{n.style.display="none"}}function L(t){return t.map(e=>`<li class="gallery-item">
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
    </li>`).join("")}function m(t){if(t.length===0)return p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again.",position:"topCenter"});const e=L(t);d.insertAdjacentHTML("beforeend",e),new g(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}l.addEventListener("click",async()=>{if(s>w)return l.style.display="none",p.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."});l.style.display="none",n.style.display="block";try{const t=await h(a);m(t.hits),s+=1,l.style.display="block",S()}catch(t){console.error(t)}finally{}});function S(){let t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
