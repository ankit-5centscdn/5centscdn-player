// Related video items setup
var related_videos = [
	{thumb: '../assets/images/thumbs/surf.jpg',url: '/videojs/demo/surf',title: 'Surfing is beatiful', duration:'04:12'},
	{thumb: '../assets/images/thumbs/big_buck.jpg',url: '/videojs/demo/big_buck',title: 'Big Buck Bunny', duration: '02:17'},
	{thumb: '../assets/images/thumbs/animals.jpg',url: '/videojs/demo/animals',title: 'Amazing animals!', duration: '03:03'},
	{thumb: '../assets/images/thumbs/freeride.jpg',url: '/videojs/demo/freeride',title: 'Free Ride', duration: '05:50'},
	{thumb: '../assets/images/thumbs/australia.jpg',url: '/videojs/demo/australia',title: 'Australia', duration: '02:29'},
	{thumb: '../assets/images/thumbs/thailand.jpg',url: '/videojs/demo/thailand',title: 'Thailand', duration: '02:06'},
	{thumb: '../assets/images/thumbs/alaska.jpg',url: '/videojs/demo/alaska',title: 'Alasca beauty', duration: '02:54'},
	{thumb: '../assets/images/thumbs/cymaticjazz.jpg',url: '/videojs/demo/cymaticjazz',title: 'Cymatic Jazz', duration: '02:35'},
	{thumb: '../assets/images/thumbs/serenity.jpg',url: '/videojs/demo/serenity',title: 'Serenity Trailer', duration: '02:13'},
	{thumb: '../assets/images/thumbs/newyorkcity.jpg',url: '/videojs/demo/newyorkcity',title: 'New York', duration: '01:07'},
	{thumb: '../assets/images/thumbs/thailand.jpg',url: '/videojs/demo/thailand',title: 'Thailand', duration: '02:06'},
	{thumb: '../assets/images/thumbs/freeride.jpg',url: '/videojs/demo/titanic',title: 'Titanic 2', duration: '04:09'},
];

var customEndHtml = `<h1>5centscdn player</h1>`;

var player_url = (document.getElementById("player_skin")) ? document.getElementById("player_skin").href: '';

var skin = player_url.split('/');
var currentSkin = skin[skin.length - 2];

const urlParams = new URLSearchParams(window.location.search);

var pip = urlParams.get('pip');

var poster = 'https://push-2501.5centscdn.com/startsplash.jpg';
if (urlParams.get('poster')) poster = urlParams.get('poster');

var buttonOrder = [];
var buttonMenu = [];
var volumeInline = false;
if (currentSkin === 'skin5') {
	buttonOrder = ["PlayToggle", "currentTimeDisplay", "timeDivider", "progressControl", "durationDisplay",
    "volumePanel", "liveDisplay", "seekToLive", "remainingTimeDisplay", "customControlSpacer", 'qualitySelector',
    "playbackRateMenuButton", "QualityButton", "chaptersButton", "descriptionsButton", "subsCapsButton",
    "audioTrackButton", "pictureInPictureToggle", "fullscreenToggle"
  ];

  volumeInline = false;
} else if (currentSkin === 'skin4') {
  buttonOrder = ["PlayToggle", "volumePanel", "timeDivider", "durationDisplay", "progressControl", "liveDisplay",
    "seekToLive", "customControlSpacer", 'QualityButton', "playbackRateMenuButton", "chaptersButton",
    "descriptionsButton", "subsCapsButton", "audioTrackButton", "pictureInPictureToggle", "fullscreenToggle"
  ];
  buttonMenu = [];
  volumeInline = true;
} else if (currentSkin === 'skin3') {
  buttonOrder = ["PlayToggle", "progressControl", "durationDisplay", "volumePanel", "liveDisplay", "seekToLive",
    "remainingTimeDisplay", "customControlSpacer", 'qualitySelector', "playbackRateMenuButton", "QualityButton",
    "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton",
    "pictureInPictureToggle", "fullscreenToggle", 'settingsMenuButton'
  ];
  buttonMenu = ["QualityButton", "PlaybackRateMenuButton", 'chaptersButton', "subsCapsButton"];
  volumeInline = true;
} else if (currentSkin === 'skin2') {
  buttonOrder = ["PlayToggle", "currentTimeDisplay", "timeDivider", "progressControl", "durationDisplay",
    "liveDisplay", "seekToLive", "remainingTimeDisplay", "customControlSpacer", 'qualitySelector',
    "playbackRateMenuButton", "QualityButton", "volumePanel", "chaptersButton", "descriptionsButton",
    "subsCapsButton", "audioTrackButton", "pictureInPictureToggle", "fullscreenToggle",
  ];
  buttonMenu = ["QualityButton", "PlaybackRateMenuButton", "subsCapsButton"];
  volumeInline = true;
} else if (currentSkin === 'skin1') {
  buttonOrder = ["PlayToggle", "volumePanel", "timeDivider", "durationDisplay", "progressControl", "liveDisplay",
    "seekToLive", "customControlSpacer", 'QualityButton', "playbackRateMenuButton", "chaptersButton",
    "descriptionsButton", "subsCapsButton", "audioTrackButton", "pictureInPictureToggle", "fullscreenToggle"
  ];
  buttonMenu = [];
  volumeInline = true;
}







window.addEventListener("DOMContentLoaded", (event) => {
	let option = {
			techOrder: ['html5'],
			autoplay : false,
	    muted: false,
			show_cv: true,
			title: "Tears Of Steel",
	    poster: poster,
	    hash_id: "5jlu9ndsy2y7a664",
			// playbackRates: [ 0.5, 0.75, 1, 1.25, 1.5],

			controlBar: {
				volumePanel: {
					inline: volumeInline,
				},
				children: buttonOrder,
			},

	    sources: [
	      {
	        // src: "https://j7md5ep4drwv-hls-live.5centscdn.com/test/9ec4c0afd450ceac7adb81c3bcfc9732.sdp/playlist_dvr.m3u8",
	        src: "https://push-2501.5centscdn.com/TearsofSteel.mp4",
	        // type:"application/x-mpegURL",
	        type: "video/mp4",
	        res: "1080",
	        label: "1080p",
	      },

	      {
	        src: "https://push-2501.5centscdn.com/mp4/TearsofSteel_720p.mp4",
	        type: "video/mp4",
	        res: "720",
	        label: "720p",
	      },
	      {
	        src: "https://push-2501.5centscdn.com/mp4/TearsofSteel_480p.mp4",
	        type: "video/mp4",
	        res: "480",
	        label: "480p",
	      },

	      {
	        src: "https://push-2501.5centscdn.com/mp4/TearsofSteel_360p.mp4",
	        type: "video/mp4",
	        res: "360",
	        label: "360p",
	      },

	    ],

	    tracks: [
	      {
	        src: "https://push-2501.5centscdn.com/TearsofSteel_en.vtt",
	        kind: 'captions',
	        srclang: 'en',
	        label: 'English'
	      },
	      {
	        src: "https://push-2501.5centscdn.com/TearsofSteel_fr.vtt",
	        kind: 'captions',
	        srclang: 'fr',
	        label: 'French'
	      },
	      {
	        src: "https://push-2501.5centscdn.com/TearsofSteel_de.vtt",
	        kind: 'captions',
	        srclang: 'de',
	        label: 'German'
	      },

	      { // video chapters
	        src: "../assets/chapter.vtt",
	        kind: 'chapters',
	        srclang: 'en',
	      }
	    ]
	  };

		let nuevo = {
			nuevoSetting: {
				title: "5centscdn player",


				contextMenu: true,// default, false
				contextUrl: 'https://www.wikipedia.com',
				contextText: '5centsCDN Player 1.0.0 (Beta)',
				contextIcon: '//www.wikipedia.org/static/favicon/wikipedia.ico',

		  	// Title Info Overlay
				/**
				* other options:
				* infoFont - Text font family for text. Must be system font or font loaded through css.
				*	infoSize - Text font size (pixels) from range 15-24 (default is 18).
				*	infoBold - set true to show tinfor text bolden
				*/
				videoInfo: true,
				infoIcon: "http://localhost/5player/videojs8/examples/assets/images/logo.png",  // optional
				infoUrl: "http://localhost/5player/videojs8/examples/assets/images/logo.png",  // optional
				infoTitle: "This is video title text",
				infoDescription: "This is video description example text",


			  // // logo
		  	// logotitle: "Nuevo plugin for Videojs",
				// logo: "http://localhost/5player/videojs8/examples/assets/images/logo.png",
				// logoposition: "RT", // options: Rt, LT, LB
				// logourl: "https://www.nuevodevel.com/nuevo/",
				// //logomin: true, // hide logo while playing (true)
				// //logocontrolbar: "../examples/assets/images/logo2.png", // Controlbar logo
				// // logo end


				related: related_videos, // related video


				startTime:0, // Video start time position

				pipButton: true,
				ccButton: true,


				buttonForward: true, // Rewind Button default: true
				rewindforward:10, // Rewind Button/
				// buttonRewind: true,


				// video zoom
				zoonInfo: true,
				zoomWheel: true,


				// quality
				hdicon : false,
				settingsButton : true,
				relatedMenu : true,
				shareMenu : true,
				rateMenu : true,
				zoomMenu : true,
				// qualityMenu: true,
				controlbar : true,


				captions: false,


				// tooltips: false, // set false to disable button tooltips in control bar


				/*
				* If you prefer not to show chapter markers over progress bar chapterMarkers to false.
				* dealt value is true.
				*/
				chapterMarkers: true,


				// share container
				// title: 'This is video title', // If not defined, get it from current website meta title tag.
				url: '//domain.com/path/to/video.html',
				embed: '<iframe src="embed-player-url" width="640" height="360" frameborder="0" allowfullscreen></iframe>',


				// End Action
				/**
				* By default when video ends, big replay button is displayed.
				* Instead of big Replay icon you can order to display related videos container or sharing container by (endAction: related or endAction: share).
				* OR
				* Another option is to display completely custom HTML container when video ends.
				* by (customEnd: myHTML)
				*/
				endAction: 'related',
				// customEnd: customEndHtml,


			},

			thumbnails : {
				src : "../assets/vtt/demo.vtt?p=7"
			},

			offline: {
				offlineImage: "https://www.nuevodevel.com/img/off.png",
				offlineTimeout:20,
				offlineCountdown:false,
				label:"Neustart"
			},

			hotkeys: {
				volumeStep: 0.1,
				seekStep: 5
			},

			// // chromecast
			// chromecast: {
			// 	// button: "controlbar", // By default chromecast button appears in top-left corner.
			// 	// overlayButton:false,
			// 	metaTitle: 'video title',
			// 	metaSubtitle: 'video subtitle',
			// 	// metaThumbnail: "//path-to-thumbnail.jpg", // optional
			//  },


		}

		let ads = {
			// vroll_ad_option: [ // Prerroll, Midroll, Postroll vroll ads
			// 	{
			// 		src: "https://push-3094.5centscdn.com/pexels-mikhail-nilov-6964235.mp4",
			// 		type: "video/mp4",
			// 		href: "https://url-to-go-on-click",
			// 		offset: '0',  //must be '0' for preroll video
			// 		skip: 5, //optionally
			// 		id: '1' //useful for tracking roll video
			// 	},
			// 	{
			// 		src: "https://push-3094.5centscdn.com/pexels-mikhail-nilov-6962343.mp4",
			// 		type: "video/mp4",
			// 		href: "https://url-to-go-on-click",
			// 		offset: '10', //midroll starts at 00:10
			// 		skip: 5, //optionally
			// 		id: '2'
			// 	},
			// 	{
			// 		src: "https://push-3094.5centscdn.com/indian%20guy%20laughing%20meme%20%28original%29.mp4",
			// 		type: "video/mp4",
			// 		href: "https://url-to-go-on-click",
			// 		offset: '50%', //midroll starts at half of video
			// 		skip: 5, //optionally
			// 		id: '3'
			// 	},
			// 	{
			// 		// Note:- Postroll video starts playing when the main video finished. It's obvious that it will not play for live streams
			// 		src: "https://push-3094.5centscdn.com/pexels-mikhail-nilov-6964235.mp4",
			// 		type: "video/mp4",
			// 		href: "https://url-to-go-on-click",
			// 		offset: '100%', //must be '100%' for postroll video
			// 		skip: 5, //optionally
			// 		id: '4'
			// 	}
			// ],

			// ima_ad_option: {
			// 	// YOUR_IMA_AD_TAG
			// 	adTagUrl: 'http://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=xml_vmap1&unviewed_position_start=1&cust_params=sample_ar%3Dpremidpostpod%26deployment%3Dgmf-js&cmsid=496&vid=short_onecue&correlator='
			// },

			// vast_pro_option: {
			// 	/**
			// 	* Ad tag waterfall allows you to set several ad tags to a single ad break and
			// 	* the player will play the first ad that returns a valid response.
			// 	* When you create an ad tag waterfall, you assign an array of ad tags to a single ad break.
			// 	*/
			// 	tagURL: [
			// 		// "../assets/ads/vast_adpods_sample.xml", // Ad pods
			// 		"../assets/ads/icon_sample.xml", // icon Ad
			// 		"../assets/ads/companion_sample.xml", // companion Ad
			// 		// "../assets/ads/vast_clickthrough_sample.xml", // clickthrough Ad
			// 		// "../assets/ads/nonlinear_sample.xml", // nonlinear Ad
			// 		// "../assets/ads/vmap_ad_sample.xml", // VMAP ad
			// 	],
			//
			// }


		};

		nuevo.ads = ads;

  player = new FiveCentsCDNPlayer("my-video", option, nuevo, function () {
    var vjsPlayer5centsCDN = this;

		vjsPlayer5centsCDN.on('ready', function(){
			// Captions Style Settings
			/**
			* available options :
			* color
			* textOpacity
			* backgroundColor
			* backgroundOpacity
			* windowColor
			* windowOpacity
			* fontPercent - default value: 1.25
			* edgeStyle - default: "raised"
			* fontFamily
			*/
			if (option.sources && option.tracks) {
				vjsPlayer5centsCDN.textTracksStyle({color: "#FF0", backgroundOpacity: 1, fontPercent: 1.5})
			}

		});

		// events are fired when Chromecast connected and disconnected from device.
		vjsPlayer5centsCDN.on('chromecastConnected', function() {
			console.log('Chromecast connected');
		});
		vjsPlayer5centsCDN.on('chromecastDisconnected', function() {
			console.log('Chromecast disconnected');
		});

		// track Prerroll, Midroll, Postroll vroll events..
		vjsPlayer5centsCDN.on('vroll', function(event, data) {
			var ad_id = data.id;
			var action = data.action;
		});


		//
		// vjsPlayer5centsCDN.ready(function() {
		// 	this.controlBar.show(); // Show the control bar
		// });


		document.getElementsByClassName("vjs-picture-in-picture-control")[0].style.display = (pip == '1') ? 'block' : 'none';

		/* social share section */

		if (currentSkin === 'skin4' || currentSkin == 'skin1') {
			var shareButton = this.controlBar.addChild("button", {
				text: "Share",
				children: {
					buttonChildExample: {
						buttonChildOption: true,
					},
				},
				clickHandler: function (event) {
					vjsPlayer5centsCDN.share();
				}
			})
			shareButton.addClass("vjs-social-share");

		}


		// shareEvent = () => {
		// 	var sharable_url = window.location.href;
		// 	var fivecents_sharelink_facebook = "https://www.facebook.com/sharer.php?u=" + sharable_url;
		// 	var fivecents_sharelink_google = "http://plus.google.com/share?url=" + sharable_url;
		// 	var fivecents_sharelink_linkedin = "https://www.linkedin.com/shareArticle?&url=" +
		// 		sharable_url;
		// 	var fivecents_sharelink_twitter = "https://twitter.com/intent/tweet?url=" + sharable_url;
		// 	var fivecents_sharelink_pinterest = "https://in.pinterest.com/pin/create/button/?url=" +
		// 		sharable_url;
		// 	var share_modal_content = `
		// 				<div class="vjs-5centscdn-share">
		// 					<p class="vjs-share-title">Copy the link to share</p>
		// 					<input id="share_link_save_to_clipboard_5centscdn" value="${sharable_url}" class="share-url-field" type="text"
		// 						disabled />
		// 					<span id="share_url_copied_popup">copied</span>
		// 					<div class="vjs-share-group-button">
		// 						<button id="share_clipboard_5centscdn" class=" share-button vjs-copy-url-button"><span
		// 								class="icon"></span></button>
		// 						<button onClick="return window.open ('${fivecents_sharelink_facebook}');"
		// 							class=" share-button vjs-facebook-share"><span class="icon"></span></button>
		// 						<button onClick="return window.open ('${fivecents_sharelink_google}'); "
		// 							class="share-button vjs-google-share"><span class="icon"></span></button>
		// 						<button onClick="return window.open ('${fivecents_sharelink_linkedin}'); "
		// 							class="share-button vjs-linkedin-share"><span class="icon"></span></button>
		// 						<button onClick="return window.open ('${fivecents_sharelink_twitter}'); "
		// 							class="share-button vjs-twitter-share"><span class="icon"></span></button>
		// 						<button onClick="return window.open ('${fivecents_sharelink_pinterest}'); "
		// 							class="share-button vjs-pinterest-share"><span class="icon"></span></button>
		// 					</div>
		// 				</div>
		// 	 `;
		//
		// 	var contentEl = document.createElement("div");
		// 	contentEl.innerHTML = share_modal_content;
		// 	var shareModal = vjsPlayer5centsCDN.createModal(contentEl);
		// 	shareModal.addClass("vjs-5centscdn-share-modal");
		// 	vjsPlayer5centsCDN.pause();
		// 	shareModal.on("modalclose", function () {
		// 		vjsPlayer5centsCDN.play();
		// 	});
		//
		// 	document
		// 		.getElementById("share_clipboard_5centscdn")
		// 		.addEventListener("click", function () {
		// 			var copyText = document.getElementById("share_link_save_to_clipboard_5centscdn");
		//
		// 			copyText.select();
		// 			copyText.setSelectionRange(0, 99999);
		// 			/* For mobile devices */
		// 			navigator.clipboard.writeText(copyText.value);
		// 			document.getElementById("share_url_copied_popup").style.display = "block";
		// 			setTimeout(function () {
		// 				document.getElementById("share_url_copied_popup").style.display = "none";
		// 			}, 500);
		// 		}, false);
		// }




  });




});



// (function () {
//
//   if (parent && parent.redrawiFrame) parent.redrawiFrame()
//
// })();
