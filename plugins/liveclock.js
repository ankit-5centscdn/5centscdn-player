!function(A,e){"function"==typeof define&&define.amd?define([],e.bind(this,A,A.videojs)):"undefined"!=typeof module&&module.exports?module.exports=e(A,A.videojs):e(A,A.videojs)}(window,function(A,e){"use strict";A.liveclcok={version:"1.0"};const o=(A,o)=>{e.mergeOptions||e.util.mergeOptions;o=e.obj.merge({position:"controlbar",direction:"left",offsetV:15,offsetH:15,background:"rgba(0,0,0,.5)",fontSize:16,hours:12,locale:"en-US",timeZone:"",seconds:!1,seekable:!0},o||{});var t,n=null,i=!1,l=!1,s="";function r(){var A=new Date,e=!0,t="";24===o.hours&&(e=!1),t=""!==o.timeZone?o.seconds?A.toLocaleString(o.locale,{timeZone:o.timeZone,hour:"numeric",minute:"numeric",second:"numeric",hour12:e}):A.toLocaleString(o.locale,{timeZone:o.timeZone,hour:"numeric",minute:"numeric",hour12:e}):o.seconds?A.toLocaleString(o.locale,{hour:"numeric",minute:"numeric",second:"numeric",hour12:e}):A.toLocaleString(o.locale,{hour:"numeric",minute:"numeric",hour12:e}),n.innerHTML=t}function c(){n&&(r(),clearTimeout(t),t=setTimeout(c,1e3))}function a(){return e.dom.hasClass(A.el(),"vjs-liveui")&&(i=!0),e.dom.hasClass(A.el(),"vjs-live")&&(l=!0),!(!l||!0===i&&!0!==o.seekable)}function u(){e.dom.hasClass(A.el(),"vjs-liveui")&&(i=!0),e.dom.hasClass(A.el(),"vjs-live")&&(l=!0),a()||n&&n.classList.add("vjs-hidden");var s=document.createElement("style");if(s.textContent="@font-face{font-family:clock;src:url('data:font/woff;charset=utf-8;base64,d09GRgABAAAAAAQ4AA0AAAAABcgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEHAAAABsAAAAclWCRe0dERUYAAAP8AAAAHgAAAB4AKQALT1MvMgAAAaQAAABGAAAAVmNwZjVjbWFwAAACAAAAAEMAAAFSADXv02dhc3AAAAP0AAAACAAAAAj//wADZ2x5ZgAAAlAAAACrAAAAwEBVZNRoZWFkAAABMAAAADIAAAA2Jtu0xGhoZWEAAAFkAAAAHQAAACQOugcGaG10eAAAAewAAAATAAAAFBKqAFVsb2NhAAACRAAAAAwAAAAMAAAAYG1heHAAAAGEAAAAHgAAACAASgA0bmFtZQAAAvwAAADcAAABa5oq/91wb3N0AAAD2AAAABwAAAAyaNltc3jaY2BkYGAA4mUtberx/DZfGbg5GEDg/j1TMyhtwxD6n4F9NVsokMvBwAQSBQAmRApNAAB42mNgZGBgC/3PwLCDgwEE2FczMDKgAlYASr8C1AAAAHjaY2BkYGBgZTBkYGYAASYgZmQAiTmA+QwAB84AfwAAeNpjYORgYJzAwMrAwGrMOpOBgVEOQjNfZ0hjEmJgYGJgZWaAAUYBBgQISHNNYXBgUHjJwJb2L41hB1soI1gNiAAAbVAJZwAAeNrjYIAAplUQmoOBIRQACI8BEgB42mNgYGBmgGAZBkYGEPAB8hjBfBYGAyDNAYRMYBmFlwz//yOz/j8WZ4HqAgNGNgY4lxGkh4kBFTBCrBrOAAD9CwjzAAAAAAAAAAAAAAAAYHjaY2BmCP3PwL6aLZSBn0GewYCBgUGAiUFFgYWBSUCIgUVBBUgzsQFpNSDfDCgupiooIs4qZmZupqauKmiipsTGvnrivz//Vv5rAuI/EycysjCGM9YBMYtU+ZV/z/+d+Pf8Snn5FUZJRgtGySt/lfQZQ+VdBATEFP7dNHIzYnwDVBvGyDIRZMYqhBlMm9A0Alne/xhMJVYJiMsrOAlMZjyjbGTEwAAARuM+ogB42m2OPWrDQBCFP9mSQ35I4cL14jIgIa3BhatUPoAL90YswkRoYW0fI20gVY6RA+QAvlKe5AUX9sLsfDO8mTfAC18k9C8hU3XhEQ/MI48xtJFTab4jZzzzG3mi6ixlkj6q8zRM9TzilWnkMe+8RU6l+YycMeMn8kT9P2r5ef0fULe+VtrgaDipvyOodM2p3QnW0nUchxykcLrVUlAqrxTXTZd6SU6lsFJYFlrgu+Pah8YZW5RmZQY/5WVe5ba0Utwes5VN4MB+MDda2BuydeGw952pivLO1D/cmDF6eNpjYGLAD1iBmJGBiYGZkYk1OSc/ORsAB3gCIgAAAAH//wACAAEAAAAMAAAAFgAAAAIAAQADAAQAAQAEAAAAAgAAAAB42mNgYGBkAIKrS9Q5QPT9e6ZmUNoGAD79BgAA') format('woff');font-weight:400;font-style:normal;font-display:swap}.vjs-clock:before{font-family:clock;content:'\\e900';padding-right:8px}",document.head.appendChild(s),t&&clearTimeout(t),a()){if(!n)if((n=document.createElement("div")).className="vjs-live-control vjs-clock vjs-hidden",n.style.textAlign="left",n.style.padding="0 8px","controlbar"===o.position){var u=A.controlBar.el().querySelector(".vjs-live-control");i&&(u=A.controlBar.el().querySelector(".vjs-seek-to-live-control")),n.style.background="transparent",u.parentNode.insertBefore(n,u.nextSibling)}else"overlay"===o.position&&(n.style.position="absolute",n.style.top=o.offsetV+"px",n.style.fontSize=o.fontSize+"px",n.style.background=o.background,n.style.color="#fff",n.style.padding="2px 6px",n.style.height="auto",n.style.borderRadius="4px","right"===o.direction?n.style.right=o.offsetH+"px":"left"===o.direction&&(n.style.left=o.offsetH+"px"),A.el().appendChild(n));r(),t=setTimeout(c,1e3)}}return A.timeZone=function(A){o.timeZone=A,n&&r()},A.clockLocale=function(A){o.locale=A},A.clockHours=function(A){24!==A&&12!==A||(o.hours=A,n&&r())},A.clockSeconds=function(A){o.seconds=A,n&&r()},A.on("playing",function(){n&&n.classList.remove("vjs-hidden")}),A.on("loadeddata",function(){s!==A.currentSrc()&&(s=A.currentSrc(),u())}),A.one("play",function(){u()}),this};e.registerPlugin("liveclock",function(A){this.ready(()=>{o(this,A)})})});