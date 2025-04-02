import{r as t,u as z,j as e,g as l,I as f}from"./index-71770ecd.js";function M({product:a,onClose:v}){const[d,x]=t.useState(0),[c,g]=t.useState(!1),[j,w]=t.useState({x:0,y:0}),m=t.useRef(null),r=t.useRef(null),h=t.useRef(null),{language:n}=z();t.useEffect(()=>{const s=setTimeout(()=>{r.current&&r.current.classList.add("visible")},10),i=o=>{o.key==="Escape"&&u()};return document.body.style.overflow="hidden",window.addEventListener("keydown",i),()=>{clearTimeout(s),window.removeEventListener("keydown",i),document.body.style.overflow=""}},[]),t.useEffect(()=>{h.current&&(h.current.scrollTop=0)},[a]);const u=()=>{r.current?(r.current.classList.remove("visible"),setTimeout(v,300)):v()},p=()=>{g(!c)},N=s=>{if(!c||!m.current)return;const{left:i,top:o,width:E,height:D}=m.current.getBoundingClientRect(),L=(s.clientX-i)/E*100,$=(s.clientY-o)/D*100;w({x:L,y:$})},k=()=>{c&&g(!1)},y=()=>{const s=n==="bn"?a.name:a.nameEn||a.name,i=n==="bn"?`হ্যালো গার্মেন্টিক পাইকারি, আমি ${s} সম্পর্কে আগ্রহী।`:`Hello Garmentik Wholesale, I'm interested in the ${s}.`,o=encodeURIComponent(i);window.open(`https://wa.me/1234567890?text=${o}`,"_blank")},C=(s,i)=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),x(i))},b=s=>n==="bn"?s.nameBn:s.nameEn;return e.jsx("div",{className:"product-detail-overlay",ref:r,onClick:s=>{s.target===r.current&&u()},children:e.jsxs("div",{className:"product-detail-container",ref:h,children:[e.jsx("button",{className:"close-button",onClick:u,"aria-label":l("productDetail.closeButton",n),children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsxs("div",{className:"product-detail-content",children:[e.jsxs("div",{className:"product-images-section",children:[e.jsxs("div",{className:`main-image-container ${c?"zoomed":""}`,onMouseMove:N,onMouseLeave:k,onClick:p,role:"button",tabIndex:"0","aria-label":n==="bn"?"ছবি বড় করে দেখুন":"Click to zoom image",onKeyDown:s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),p())},children:[e.jsx("div",{className:"image-wrapper",ref:m,children:e.jsx(f,{src:a.images[d]||"/placeholder.svg",alt:n==="bn"?a.name:a.nameEn||a.name,className:"main-image",style:c?{transformOrigin:`${j.x}% ${j.y}%`}:{}})}),!c&&e.jsxs("div",{className:"zoom-hint",children:[e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),e.jsx("span",{children:l("productDetail.zoomHint",n)})]})]}),e.jsx("div",{className:"thumbnail-container",children:a.images.map((s,i)=>e.jsx("button",{className:`thumbnail ${d===i?"active":""}`,onClick:()=>x(i),"aria-label":`${n==="bn"?"ছবি":"Image"} ${i+1}`,"aria-pressed":d===i,onKeyDown:o=>C(o,i),children:e.jsx(f,{src:s||"/placeholder.svg",alt:`${n==="bn"?a.name:a.nameEn||a.name} ${n==="bn"?"ভিউ":"view"} ${i+1}`,loading:"lazy"})},i))})]}),e.jsxs("div",{className:"product-info-section",children:[e.jsx("h2",{className:"product-detail-name",children:n==="bn"?a.name:a.nameEn||a.name}),e.jsx("p",{className:"product-detail-category",children:l(`products.categories.${a.category}`,n)}),e.jsx("div",{className:"product-description",children:e.jsx("p",{children:n==="bn"?a.description:a.descriptionEn||a.description})}),e.jsxs("div",{className:"product-specs",children:[e.jsx("h3",{children:l("productDetail.features",n)}),e.jsx("ul",{children:(n==="bn"?a.specifications:a.specificationsEn||a.specifications).map((s,i)=>e.jsx("li",{children:s},i))})]}),a.availableSizes&&a.availableSizes.length>0&&e.jsxs("div",{className:"size-options",children:[e.jsx("h3",{children:l("productDetail.availableSizes",n)}),e.jsx("div",{className:"size-display",children:a.availableSizes.map(s=>e.jsx("div",{className:"size-badge",children:s},s))})]}),a.availableColors&&a.availableColors.length>0&&e.jsxs("div",{className:"color-options",children:[e.jsx("h3",{children:l("productDetail.availableColors",n)}),e.jsx("div",{className:"color-display",children:a.availableColors.map(s=>e.jsxs("div",{className:"color-item",children:[e.jsx("div",{className:"color-badge",style:{backgroundColor:s.hex},title:b(s)}),e.jsx("span",{className:"color-name",children:b(s)})]},s.name))})]}),e.jsxs("div",{className:"wholesale-pricing",children:[e.jsx("h3",{children:l("productDetail.wholesalePricing",n)}),e.jsx("div",{className:"pricing-tiers",children:a.wholesalePrices.map((s,i)=>e.jsxs("div",{className:"pricing-tier",children:[e.jsx("div",{className:"tier-range",children:n==="bn"?s.range:s.rangeEn||s.range}),e.jsx("div",{className:"tier-price",children:n==="bn"?s.priceBn:s.price})]},i))})]}),e.jsxs("div",{className:"product-actions",children:[e.jsx("a",{href:"tel:+1234567890",className:"call-button",children:l("productDetail.callButton",n)}),e.jsx("button",{className:"whatsapp-button",onClick:y,children:l("productDetail.whatsappButton",n)})]})]})]})]})})}export{M as default};
