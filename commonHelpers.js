import{a as f,S as y,i as h}from"./assets/vendor-b11e2a50.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=o(r);fetch(r.href,a)}})();const m="44031619-a947df2c149ce3ba62f1c08d8",g="https://pixabay.com/api/";class b{constructor(){this.query="",this.page=1}async fetchPhoto(){try{const t=await f.get(`${g}?key=${m}&q=${this.query}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=15`);return this.incrementPage(),t.data}catch(t){throw console.error("Error fetching data:",t),t}}incrementPage(){this.page+=1}resetPage(){this.page=1}}let i;function L(e,t){const o=e.map(n=>w(n)).join("");t.insertAdjacentHTML("beforeend",o),i?i.refresh():i=new y(".gallery a")}function w(e){return`
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
  `}const s={searchform:document.querySelector(".search-form"),galleryContainer:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".btn"),loader:document.createElement("div")};s.loader.className="loader";document.body.appendChild(s.loader);s.loadMoreBtn.style.display="none";const c=new b;s.searchform.addEventListener("submit",P);s.loadMoreBtn.addEventListener("click",v);function P(e){e.preventDefault();const t=e.currentTarget.elements.query.value.trim();if(!t)return d("red","Please, fill the main field","topRight");u(),s.galleryContainer.innerHTML="",s.loadMoreBtn.style.display="none",c.query=t,c.resetPage(),p()}async function v(){u(),await p()}async function p(){try{const e=await c.fetchPhoto();e.hits.length===0?d("red","Sorry, there are no images matching your search query. Please try again!","topRight"):(L(e.hits,s.galleryContainer),s.loadMoreBtn.style.display="block")}catch{d("red","An error occurred while fetching images. Please try again later.","topRight")}finally{q()}}function d(e,t,o="topRight"){h.show({color:e,message:t,position:o})}function u(){s.loader.style.display="block"}function q(){s.loader.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
