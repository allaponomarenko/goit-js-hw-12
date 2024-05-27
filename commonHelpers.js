import{a as y,S as h,i as g}from"./assets/vendor-b11e2a50.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=o(a);fetch(a.href,s)}})();const m="44031619-a947df2c149ce3ba62f1c08d8",b="https://pixabay.com/api/";class L{constructor(){this.query="",this.page=1}async fetchPhoto(){try{const e=await y.get(`${b}?key=${m}&q=${this.query}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=15`);return this.incrementPage(),e.data}catch(e){throw console.error("Error fetching data:",e),e}}incrementPage(){this.page+=1}resetPage(){this.page=1}}let d;function w(t,e){const o=t.map(n=>P(n)).join("");e.insertAdjacentHTML("beforeend",o),d?d.refresh():d=new h(".gallery a")}function P(t){return`
    <a href="${t.largeImageURL}" class="image-card">
      <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
      <div class="info">
        <p class="info_p">
          <span class="label">Likes:</span>
          <span class="value">${t.likes}</span>
        </p>
        <p class="info_p">
          <span class="label">Views:</span>
          <span class="value">${t.views}</span>
        </p>
        <p class="info_p">
          <span class="label">Comments:</span>
          <span class="value">${t.comments}</span>
        </p>
        <p class="info_p">
          <span class="label">Downloads:</span>
          <span class="value">${t.downloads}</span>
        </p>
      </div>
    </a>
  `}const r={searchform:document.querySelector(".search-form"),galleryContainer:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".btn"),loader:document.createElement("div")};r.loader.className="loader";document.body.appendChild(r.loader);r.loadMoreBtn.style.display="none";const i=new L;let p=0;r.searchform.addEventListener("submit",v);r.loadMoreBtn.addEventListener("click",q);function v(t){t.preventDefault();const e=t.currentTarget.elements.query.value.trim();if(!e)return l("red","Please, fill the main field","topRight");f(),r.galleryContainer.innerHTML="",r.loadMoreBtn.style.display="none",i.query=e,i.resetPage(),u(!0)}async function q(){f(),await u(!1)}async function u(t){try{const e=await i.fetchPhoto();e.hits.length===0?l("red","Sorry, there are no images matching your search query. Please try again!","topRight"):(w(e.hits,r.galleryContainer),p=t?e.totalHits:p,i.page*15>=p?(r.loadMoreBtn.style.display="none",l("blue","We're sorry, but you've reached the end of search results.","topRight")):r.loadMoreBtn.style.display="block")}catch{l("red","An error occurred while fetching images. Please try again later.","topRight")}finally{$()}}function l(t,e,o="topRight"){g.show({color:t,message:e,position:o})}function f(){r.loader.style.display="block"}function $(){r.loader.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
