const Component = videojs.getComponent('Component');

// Default options for the plugin.
const defaultOptions = {
    hash_id: '',
    domain: ''
};

const onPlayerReady = (player, options) => {

    player.addClass('vjs-concurrent-viewers');

    player.controlBar.concurrentViewerContainer = player.controlBar.addChild('ConcurrentViewerContainer', {
        hash_id: options.hash_id,
        domain: options.domain
    }, 5);

};

const concurrentViewers = function (options) {
    this.ready(() => {
        onPlayerReady(this, videojs.mergeOptions(defaultOptions, options));
    });
};

class ConcurrentViewerContainer extends Component {

    constructor(player, options) {
        super(player, options);
        this.options = options;
        this.player = player;

        this.updateShowing();
        this.on(this.player, 'timeupdate', (e) => this.updateShowing(e));
    }

    createEl() {
        const el = super.createEl('div', {
            className: 'vjs-cv-control vjs-control'
        });
        this.contentEl_ = document.createElement('div');
        this.contentEl_.className = 'vjs-cv-display';
        this.textNode_ = document.createTextNode(`1`);
        this.contentEl_.appendChild(this.textNode_);
        el.appendChild(this.contentEl_);
        return el;
    }

    dispose() {
        this.contentEl_ = null;

        super.dispose();
    }

    updateShowing(event) {
        if (!this.textNode_ === undefined) {
            return
        }
        let currentTime = Math.floor(this.player.currentTime());
        if (currentTime > 0 && currentTime !== this.lastTime && currentTime % 5 === 0) {
            this.lastTime = currentTime;

            fetch(this.options.domain + '/c?hash_id=' + this.options.hash_id)
                .then(response => response.json())
                .then(data => {
                    if (data.count == 0) {
                        data.count = 1
                    }
                    let oldNode = this.textNode_;
                    if (data.count > 1) {
                        this.textNode_ = document.createTextNode(this.abbrNum(data.count, 2));
                    } else {
                        this.textNode_ = document.createTextNode(`1`);
                    }
                    if (oldNode) {
                        this.contentEl_.replaceChild(this.textNode_, oldNode);
                    } else {
                        this.contentEl_.appendChild(this.textNode_);
                    }
                });
        }
    }

    abbrNum(number, decPlaces) {
        // 2 decimal places => 100, 3 => 1000, etc
        decPlaces = Math.pow(10, decPlaces);

        // Enumerate number abbreviations
        var abbrev = ["k", "m", "b", "t"];

        // Go through the array backwards, so we do the largest first
        for (var i = abbrev.length - 1; i >= 0; i--) {

            // Convert array index to "1000", "1000000", etc
            var size = Math.pow(10, (i + 1) * 3);

            // If the number is bigger or equal do the abbreviation
            if (size <= number) {
                // Here, we multiply by decPlaces, round, and then divide by decPlaces.
                // This gives us nice rounding to a particular decimal place.
                number = Math.round(number * decPlaces / size) / decPlaces;

                // Handle special case where we round up to the next abbreviation
                if ((number == 1000) && (i < abbrev.length - 1)) {
                    number = 1;
                    i++;
                }

                // Add the letter for the abbreviation
                number += abbrev[i];

                // We are done... stop
                break;
            }
        }

        return number;
    }

}
videojs.registerComponent('ConcurrentViewerContainer', ConcurrentViewerContainer);

// Register the plugin with video.js.
videojs.registerPlugin('concurrentViewers', concurrentViewers);
