// function analytic(options) {
//   var player = this;
//
//   // var defaults = {
//   // : {}
//   // };
//
//   // options = Object.assign({}, defaults, options);
//
//   var viewerId = localStorage.getItem('viewerId');
//   if (!viewerId) {
//     viewerId = generateID();
//     localStorage.setItem('viewerId', viewerId);
//   }
//
//   options.hash_id = options.hash_id;
//   options.title = options.title;
//   options.tags = options.tags;
//   options.url = options.url;
//   options.viewer_id = viewerId;
//   options.view_id = generateID();
//   options.user_agent = window.navigator.userAgent;
//
//   var firstStart = true;
//   player.ready(function() {
//     player.on('loadstart', function(event) {
//       if (firstStart) {
//         send('impression');
//         firstStart = false;
//       }
//     });
//
//     player.on('play', function(event) {
//       send('play');
//     });
//
//     player.on('timeupdate', function(event) {
//       timeUpdate(event);
//     });
//
//     player.on('ended', function(event) {
//       ended(event);
//     });
//
//     var playerLoadTime = performance.now() - options.start_time;
//     send('player_load', playerLoadTime);
//   });
//
//   var pageLoadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
//   send('page_load', pageLoadTime);
//
//   function serialize(obj) {
//     var params = [];
//     for (var p in obj) {
//       if (obj.hasOwnProperty(p)) {
//         if (Array.isArray(obj[p])) {
//           obj[p].forEach(function(element) {
//             params.push(encodeURIComponent(p) + "=" + encodeURIComponent(element));
//           });
//         } else {
//           params.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
//         }
//       }
//     }
//     return params.join("&");
//   }
//
//   function timeUpdate() {
//     var currentTime = Math.floor(player.currentTime());
//     if (currentTime > 0 && currentTime !== this.lastTime && currentTime % 10 === 0) {
//       var val = currentTime - this.lastTime;
//       this.lastTime = currentTime;
//       var val2;
//       if (player.tech && player.tech({ IWillNotUseThisInPlugins: true }).vhs) {
//         var currentBytes = +player.tech({ IWillNotUseThisInPlugins: true }).vhs.stats.mediaBytesTransferred;
//         val2 = currentBytes - this.lastBytes;
//         this.lastBytes = currentBytes;
//       }
//       send('engagement', val, val2);
//     }
//   }
//
//   function ended() {
//     var currentTime = Math.floor(player.currentTime());
//     if (currentTime > 0 && currentTime !== this.lastTime) {
//       var val = currentTime - this.lastTime;
//       this.lastTime = 0;
//       var val2;
//       if (player.tech && player.tech({ IWillNotUseThisInPlugins: true }).vhs) {
//         var currentBytes = +player.tech({ IWillNotUseThisInPlugins: true }).vhs.stats.mediaBytesTransferred;
//         val2 = currentBytes - this.lastBytes;
//         this.lastBytes = 0;
//       }
//       send('engagement', val, val2);
//     }
//     send('complete');
//     options.view_id = generateID();
//     player.one('play', function(event) {
//       send('play');
//     });
//   }
//
//   function send(typ, value1, value2) {
//     var params = JSON.parse(JSON.stringify(options));
//     params['type'] = typ;
//     params['referer'] = document.referrer;
//     if (value1 && value1 > 0) {
//       params['value1'] = +value1;
//     }
//     if (value2 && value2 > 0) {
//       params['value2'] = +value2;
//     }
//
//     fetch(options.domain + '/t', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(params)
//       })
//       .catch(function(error) {
//         console.error('There has been a problem with event request:', error);
//       });
//   }
//
//   function generateID() {
//     return (performance.now().toString(36) + Math.random().toString(36)).replace(/\./g, "");
//   }
// }
//
// // Define default values for the plugin's `state` object here.
// analytic.defaultState = {};
//
// // Register the plugin with video.js.
// videojs.registerPlugin('analytic', analytic);




const Plugin = videojs.getPlugin('plugin');

const defaultopt = {
  parameters: {}
};

class Analytic extends Plugin {

  lastTime;
  lastBytes;

  constructor(player, options) {
    super(player);

    this.options = videojs.obj.merge(defaultopt, options);

    let viewerId = localStorage.getItem('viewerId');
    if (!viewerId) {
      viewerId = this.generateID();
      localStorage.setItem('viewerId', viewerId)
    }
    this.options.parameters.hash_id = options.hash_id;
    this.options.parameters.title = options.title;
    this.options.parameters.tags = options.tags;
    this.options.parameters.url = options.url;
    this.options.parameters.viewer_id = viewerId;
    this.options.parameters.view_id = this.generateID();
    this.options.parameters.user_agent = window.navigator.userAgent;

    let firstStart = true;
    this.player.ready(() => {
      this.player.on('loadstart', (event) => {
        if (firstStart) {
          this.send('impression');
          firstStart = false;
        }
      });

      this.player.one('play', (event) => {
        this.send('play');
      });

      this.player.on('timeupdate', (event) => {
        this.timeUpdate(event);
      });
      this.player.on('ended', (event) => {
        this.ended(event);
      });
      const playerLoadTime = performance.now() - this.options.start_time;
      this.send('player_load', playerLoadTime);
    });
    const pageLoadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    this.send('page_load', pageLoadTime);
  }

  serialize(obj) {
    let params = [];
    for (let p in obj)
      if (obj.hasOwnProperty(p)) {
        if (Array.isArray(obj[p])) {
          obj[p].forEach(element => {
            params.push(encodeURIComponent(p) + "=" + encodeURIComponent(element));
          });
        } else {
          params.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
      }
    return params.join("&");
  }

  timeUpdate() {
    let currentTime = Math.floor(this.player.currentTime());
    if (currentTime > 0 && currentTime !== this.lastTime && currentTime % 10 === 0) {
      let val = currentTime - this.lastTime
      this.lastTime = currentTime;
      let val2;
      if (this.player.tech({
          IWillNotUseThisInPlugins: true
        }).vhs) {
        let currentBytes = +this.player.tech({
          IWillNotUseThisInPlugins: true
        }).vhs.stats.mediaBytesTransferred;
        val2 = currentBytes - this.lastBytes;
        this.lastBytes = currentBytes;
      }
      this.send('engagement', val, val2);
    }
  }

  ended() {
    let currentTime = Math.floor(this.player.currentTime());
    if (currentTime > 0 && currentTime !== this.lastTime) {
      let val = currentTime - this.lastTime
      this.lastTime = 0;
      let val2;
      if (this.player.tech({
          IWillNotUseThisInPlugins: true
        }).vhs) {
        let currentBytes = +this.player.tech({
          IWillNotUseThisInPlugins: true
        }).vhs.stats.mediaBytesTransferred;
        val2 = currentBytes - this.lastBytes;
        this.lastBytes = 0;
      }
      this.send('engagement', val, val2);
    }
    this.send('complete');
    this.options.parameters.view_id = this.generateID();
    this.player.one('play', (event) => {
      this.send('play');
    });
  }

  send(typ, value1, value2) {
    let params = JSON.parse(JSON.stringify(this.options.parameters));
    params['type'] = typ;
    params['referer'] = document.referrer;
    if (value1 && value1 > 0) {
      params['value1'] = +value1;
    }
    if (value2 && value2 > 0) {
      params['value2'] = +value2;
    }

    fetch(this.options.domain + '/t', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)
      })
      .catch(error => {
        console.error('There has been a problem with event request:', error);
      });
  }

  generateID() {
    return (performance.now().toString(36) + Math.random().toString(36)).replace(/\./g, "");
  }

}

// Define default values for the plugin's `state` object here.
Analytic.defaultState = {};

// Register the plugin with video.js.
videojs.registerPlugin('analytic', Analytic);
