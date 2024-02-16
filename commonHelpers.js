import{S as g,a as p,i as y}from"./assets/vendor-b42c18af.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))u(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();const b=new g(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),w=document.querySelector("form"),d=document.querySelector(".gallery"),n=document.querySelector(".loader"),o=document.querySelector(".btn");let l,a=1,f=15;const L=Math.ceil(500/f);w.addEventListener("submit",async function(t){if(t.preventDefault(),l=t.target.elements.search.value,l!==""){a=1,d.innerHTML="",n.style.display="block",o.style.display="none";try{const e=await h(l);m(e.hits),a+=1,a>1&&(o.style.display="block"),$()}catch(e){console.error(e)}finally{n.style.display="none"}t.target.reset()}});async function h(t){try{const e=new URLSearchParams({key:"42245077-d2f8998b656235f8798291f32",q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:"true",page:`${a}`,per_page:`${f}`});return p.defaults.baseURL="https://pixabay.com",(await p.get(`/api/?${e}`)).data}catch(e){throw console.error(e),e}finally{n.style.display="none"}}function S(t){return t.map(e=>`<li class="gallery-item">
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
    </li>`).join("")}function m(t){if(t.length===0)return y.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again.",position:"topCenter"});const e=S(t);d.insertAdjacentHTML("beforeend",e),b.refresh()}o.addEventListener("click",async()=>{if(a>L)return o.style.display="none",y.error({position:"topRight",message:"We're sorry, but you've reached the end of search results."});o.style.display="none",n.style.display="block";try{const t=await h(l);m(t.hits),a+=1,o.style.display="block"}catch(t){console.error(t)}});function $(){if(searchParams.page>1){const t=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:t.height*2,left:0,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map
