# 5centscdn-player

for testing:

use public/index.html

# To change configuration use src\vjs.config.js file 
  un-comment comented line to test like-
  
  		 vast_pro_option: {
			 	/**
			 	* Ad tag waterfall allows you to set several ad tags to a single ad break and
				* the player will play the first ad that returns a valid response.
			 	* When you create an ad tag waterfall, you assign an array of ad tags to a single ad break.
			 	*/
		  	tagURL: [
			 		 "../assets/ads/vmap_ad_sample.xml", // VMAP ad 
			 		// "../assets/ads/vast_adpods_sample.xml", // Ad pods
			 		// "../assets/ads/icon_sample.xml", // icon Ad
			 		// "../assets/ads/companion_sample.xml", // companion Ad
			 		// "../assets/ads/vast_clickthrough_sample.xml", // clickthrough Ad
			 		// "../assets/ads/nonlinear_sample.xml" // nonlinear Ad
			 	],
			 }
       
       to test VMAP ad.

