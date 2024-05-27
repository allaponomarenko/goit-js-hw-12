import{a as h,S as y,i as g}from"./assets/vendor-b11e2a50.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const m="44031619-a947df2c149ce3ba62f1c08d8",b="https://pixabay.com/api/";class w{constructor(){this.query="",this.page=1}async fetchPhoto(){try{const t=await h.get(`${b}?key=${m}&q=${this.query}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=15`);return this.incrementPage(),t.data}catch(t){throw console.error("Error fetching data:",t),t}}incrementPage(){this.page+=1}resetPage(){this.page=1}}let d;function L(e,t){const s=e.map(n=>v(n)).join("");t.insertAdjacentHTML("beforeend",s),d?d.refresh():d=new y(".gallery a")}function v(e){return`
    <a href="${e.largeImageURL}" class="image-card">
      <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      <div class="info">
        <p class="info_p">
          <span class="label">Likes:</span>
          <span class="value">${e.likes}</span>
        </p>
        <p class="info_p">
          <span class="label">Views:</span>
          <span class="value">${e.views}</span>
        </p>
        <p class="info_p">
          <span class="label">Comments:</span>
          <span class="value">${e.comments}</span>
        </p>
        <p class="info_p">
          <span class="label">Downloads:</span>
          <span class="value">${e.downloads}</span>
        </p>
      </div>
    </a>
  `}const o={searchform:document.querySelector(".search-form"),galleryContainer:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".btn"),loader:document.createElement("div")};o.loader.className="loader";document.body.appendChild(o.loader);o.loadMoreBtn.style.display="none";const i=new w;let p=0;o.searchform.addEventListener("submit",P);o.loadMoreBtn.addEventListener("click",q);function P(e){e.preventDefault();const t=e.currentTarget.elements.query.value.trim();if(!t)return l("red","Please, fill the main field","topRight");f(),o.galleryContainer.innerHTML="",o.loadMoreBtn.style.display="none",i.query=t,i.resetPage(),u(!0)}async function q(){f(),await u(!1),S()}async function u(e){try{const t=await i.fetchPhoto();t.hits.length===0?l("red","Sorry, there are no images matching your search query. Please try again!","topRight"):(L(t.hits,o.galleryContainer),p=e?t.totalHits:p,i.page*15>=p?(o.loadMoreBtn.style.display="none",l("blue","We're sorry, but you've reached the end of search results.","topRight")):o.loadMoreBtn.style.display="block")}catch{l("red","An error occurred while fetching images. Please try again later.","topRight")}finally{R()}}function l(e,t,s="topRight"){g.show({color:e,message:t,position:s})}function f(){o.loader.style.display="block"}function R(){o.loader.style.display="none"}function S(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
