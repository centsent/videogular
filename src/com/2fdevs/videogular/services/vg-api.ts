/// <reference path="../../../../../typings/angular2/angular2.d.ts" />

import {EventDispatcher} from 'com/2fdevs/videogular/utils/EventDispatcher';

export class VgAPI extends EventDispatcher {
    medias:Array<HTMLVideoElement|HTMLAudioElement> = [];

    constructor(){
        super();
    }

    play() {
        this.medias[0].play();
    }

    registerMedia(media:HTMLVideoElement|HTMLAudioElement) {
        this.medias.push(media);

        media.addEventListener("canplay", this.dispatchEvent.bind(this));
        media.addEventListener("canplaythrough", this.dispatchEvent.bind(this));
        media.addEventListener("loadedmetadata", this.dispatchEvent.bind(this));
        media.addEventListener("waiting", this.dispatchEvent.bind(this));
        media.addEventListener("ended", this.dispatchEvent.bind(this));
        media.addEventListener("playing", this.dispatchEvent.bind(this));
        media.addEventListener("play", this.dispatchEvent.bind(this));
        media.addEventListener("pause", this.dispatchEvent.bind(this));
        media.addEventListener("volumechange", this.dispatchEvent.bind(this));
        media.addEventListener("playbackchange", this.dispatchEvent.bind(this));
        media.addEventListener("timeupdate", this.dispatchEvent.bind(this));
        media.addEventListener("error", this.dispatchEvent.bind(this));
    }

    dispatchEvent(event) {
        console.log("dispatch event: " + event.type);
    }
}