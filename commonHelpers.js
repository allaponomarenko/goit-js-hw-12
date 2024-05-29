import{a as y,S as g,i as m}from"./assets/vendor-b11e2a50.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}})();const b="44031619-a947df2c149ce3ba62f1c08d8",w="https://pixabay.com/api/";class L{constructor(){this.query="",this.page=1}async fetchPhoto(){try{const e=await y.get(`${w}?key=${b}&q=${this.query}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=15`);return this.incrementPage(),e.data}catch(e){throw console.error("Error fetching data:",e),e}}incrementPage(){this.page+=1}resetPage(){this.page=1}}let c;function v(t,e){const s=t.map(n=>P(n)).join("");e.insertAdjacentHTML("beforeend",s),c?c.refresh():c=new g(".gallery a")}function P(t){return`
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
  `}const o={searchform:document.querySelector(".search-form"),galleryContainer:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".btn"),loader:document.createElement("div")};o.loader.className="loader";document.body.appendChild(o.loader);o.loadMoreBtn.style.display="none";const u=new L;let d=0,p=0;o.searchform.addEventListener("submit",q);o.loadMoreBtn.addEventListener("click",R);function q(t){t.preventDefault();const e=t.currentTarget.elements.query.value.trim();if(!e)return l("red","Please, fill the main field","topRight");h(),o.galleryContainer.innerHTML="",o.loadMoreBtn.style.display="none",u.query=e,u.resetPage(),f(!0)}async function R(){h(),await f(!1),M()}async function f(t){try{const e=await u.fetchPhoto();e.hits.length===0?l("red","Sorry, there are no images matching your search query. Please try again!","topRight"):(v(e.hits,o.galleryContainer),d=t?e.totalHits:d,p=t?e.hits.length:p+e.hits.length,p>=d?(o.loadMoreBtn.style.display="none",l("blue","We're sorry, but you've reached the end of search results.","topRight")):o.loadMoreBtn.style.display="block")}catch{l("red","An error occurred while fetching images. Please try again later.","topRight")}finally{$()}}function l(t,e,s="topRight"){m.show({color:t,message:e,position:s})}function h(){o.loader.style.display="block"}function $(){o.loader.style.display="none"}function M(){const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
