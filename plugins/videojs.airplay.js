!function(e,t){"function"==typeof define&&define.amd?define([],t.bind(this,e,e.videojs)):"undefined"!=typeof module&&module.exports?module.exports=t(e,e.videojs):t(e,e.videojs)}(window,function(e,t){"use strict";e.videojs_airplay={version:"1.00.2"},t.registerPlugin("airplay",function(a){var i=this;a=t.obj.merge({controlbarButton:!0},a||{});var o=e.WebKitPlaybackTargetAvailabilityEvent;if(i.controlBar){if(a.controlbarButton&&!i.el().querySelector(".vjs-airplay-button")){var l=t.dom.createEl("button",{className:"vjs-airplay-button vjs-control vjs-button"},{role:"button",type:"button","aria-disabled":"false"}),r=i.controlBar.addChild("button",{el:l});r.el_.innerHTML='<span aria-hidden="true" class="vjs-icon-placeholder"></span><span class="vjs-control-text" aria-live="polite">'+i.localize("Start AirPlay")+"</span>",i.controlBar.el_.insertBefore(r.el_,i.controlBar.getChild("fullscreenToggle").el_),o||r.hide(),function(){var e=i.el().querySelector("video, audio"),t=this;e&&o&&e.addEventListener("webkitplaybacktargetavailabilitychanged",function(e){"available"===e.availability?t.show():t.hide()})}(),r.el_.onclick=function(){i.trigger("airPlayRequested")},r.el_.ontouchstart=function(e){e.stopImmediatePropagation(),i.trigger("airPlayRequested")}}i.on("airPlayRequested",function(e){var t=e.el().querySelector("video, audio");t&&t.webkitShowPlaybackTargetPicker&&t.webkitShowPlaybackTargetPicker()}.bind(null,i))}})});