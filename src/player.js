const defaults = {
    // fit: true,
    responsive: true,
    controls: true,
};
const domain = 'https://collector-videoplayer.5centscdn.net';

class FiveCentsCDNPlayer {
    id;
    options;
    playerInstance;
    playerStartTime = performance.now();

    constructor(id, options, nuevo, callback) {
        this.id = id;
        this.options = options;
        this.nuevo = nuevo;
        this.callback = callback;
        if (this.options.hash_id === '') {
            throw new Error('[FiveCentsCDNPlayer] hash_id is required');
        }
        if (this.options.title === '') {
            throw new Error('[FiveCentsCDNPlayer] title is required');
        }
        this.init();
    }

    init() {
        // fetch(domain + '/v', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             'Is-Trial': this.options.is_trial !== '' ? 'true' : 'false',
        //         },
        //         body: JSON.stringify({
        //             hash_id: this.options.hash_id,
        //             url: this.options.sources[0].src
        //         })
        //     })
        //     .then(response => {
        //         if (!response.ok) {
        //             throw new Error('[FiveCentsCDNPlayer] Validate request was not successfull');
        //         }
        //         return response.blob();
        //     })
        //     .then(response => {
        //         this.initPlayer();
        //     })
        //     .catch(error => {
        //         console.error('[FiveCentsCDNPlayer] There has been a problem with your play request:', error);
        //     });
				this.initPlayer();
    }

    initPlayer() {
        if (this.options.is_trial && this.options.is_trial !== '') {
            videojs.Vhs.xhr.beforeRequest = (options) => {
                if (!options.headers) {
                    options.headers = {}
                }
                options.headers["X-Trial-Key"] = this.options.is_trial;
                return options;
            };
        }

				// player init
        this.playerInstance = videojs(this.id, videojs.obj.merge(defaults, this.options), this.callback);

				// nuevo init.
				if (this.nuevo.nuevoSetting) this.playerInstance.nuevo(this.nuevo.nuevoSetting); else this.playerInstance.nuevo();
				if (this.nuevo.thumbnails) this.playerInstance.thumbnails(this.nuevo.thumbnails);
				if (this.nuevo.offline) this.playerInstance.offline(this.nuevo.offline);
				if (this.nuevo.hotkeys) this.playerInstance.hotkeys(this.nuevo.hotkeys);
				if (this.nuevo.chapters) this.playerInstance.on('loadeddata', function(){ this.playerInstance.loadTracks(chapters); });
				 // this.playerInstance.chromecast();

         this.playerInstance.chromecast({metaTitle:"Chromecast demo", metaSubtitle:"Have fun casting your videos!", metaThumbnail:"//nvd.nuevodevel.com/media/democr.jpg" });
				 this.playerInstance.airplay();


				//ads
				// this.playerInstance.vastAds ({ tagURL: "../examples/assets/vast/spotx.xml", id:"Ad001", hidebar:true });
				// var adid=false;
				// this.playerInstance.on('adEvent', function(event, data) { console.log('ll');
				// 	var textarea = document.querySelector(".events");
				// 	var ad_id = data.id;
				// 	var event_type = data.type;
				// 	if(adid!=true) {
				// 		adid=true;
				// 		textarea.innerHTML='<span>AD Id: '+ad_id+'</span>';
				// 	}
				// 	textarea.innerHTML=textarea.innerHTML+'\r\n'+'<span>'+event_type+'</span>';
				// });



				// Prerroll, Midroll, Postroll ads
				if (this.nuevo.ads.vroll_ad_option) this.playerInstance.vroll(this.nuevo.ads.vroll_ad_option);


				// IMA
				if (this.nuevo.ads.ima_ad_option) {
					var ima_option = this.nuevo.ads.ima_ad_option;
					ima_option.id = this.id;

					// Enable iOS playback
					google.ima.settings.setDisableCustomPlaybackForIOS10Plus(true);
					this.playerInstance.ima(ima_option);

					// Part required for proper Ima playback on mobile device
					var contentPlayer =  document.getElementById('player_1_html5_api');
					if ((navigator.userAgent.match(/iPad/i) ||
						  navigator.userAgent.match(/Android/i)) &&
						contentPlayer.hasAttribute('controls')) {
					  contentPlayer.removeAttribute('controls');
					}
					var startEvent = 'click';
					if (navigator.userAgent.match(/iPhone/i) ||
						navigator.userAgent.match(/iPad/i) ||
						navigator.userAgent.match(/Android/i)) {
					  startEvent = 'touchend';
					}

					this.playerInstance.one(startEvent, function() {
						this.playerInstance.ima.initializeAdDisplayContainer();
					});
				}


				// VASTPro
        if (this.nuevo.ads.vast_pro_option) {
          this.playerInstance.vastAds (this.nuevo.ads.vast_pro_option);

          this.playerInstance.on('vast', (e, data) => {
            console.log(data.eventType);
          });
        }


				// Outstream Ads
				/**
				* Outstream video ads are a great way to boost your ad revenues, especially on pages without dedicated video content.
				*/
				// if (!this.options.sources && this.nuevo.ads.outstream_ad.enable) {
				// 	this.playerInstance.vastAds (
				// 		{tagURL: "../assets/ads/vast_clickthrough_sample.xml"},
				// 		 {closeButton:true}
				// 	)
				// }

    }

    play() {
        return this.playerInstance.play();
    }

    pause() {
        return this.playerInstance.pause();
    }

    getVideoJSPlayer() {
        return this.playerInstance;
    }
}
