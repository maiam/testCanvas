(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();const c=document.querySelector(".btn"),d=document.querySelector(".image"),n=document.querySelector("#canvas"),o=n.getContext("2d");c.addEventListener("click",t=>{t.target.innerText==="Open Canvas"?u():t.target.innerText==="Close Canvas"&&f(),p(c)});function f(){n.getAttribute("data-open-close")=="1"&&(n.setAttribute("data-open-close","0"),n.classList.add("visibility-hidden"))}function u(){if(n.getAttribute("data-open-close")!="0")return;n.setAttribute("data-open-close","1"),n.classList.remove("visibility-hidden"),n.width=500,n.height=350,d.classList.remove("visibility-hidden");let t=!1;function r(e){t=!0,s(e)}function a(){t=!1,o.beginPath()}function s(e){!t||(o.lineWidth=10,o.lineCap="round",o.strokeStyle="rgba(255,0,0,0.2)",o.lineTo(e.offsetX,e.offsetY),o.stroke(),o.beginPath(),o.moveTo(e.offsetX,e.offsetY))}n.addEventListener("pointerdown",r),n.addEventListener("pointermove",s),n.addEventListener("pointerup",a)}function p(t){t.innerText==="Open Canvas"?t.innerText="Close Canvas":t.innerText==="Close Canvas"&&(t.innerText="Open Canvas")}
