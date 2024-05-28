import { $$, Debuggable } from '@gebruederheitz/wp-frontend-utils';
import { GlideSlideshow } from './glide';
import { SplideSlideshow } from './splide';
import { SwiperSlideshow } from './swiper';
import { libraries, options, parseDataAttribute } from './slideshow-options';

export class SlideshowFactory extends Debuggable {
    /**
     * @param selector
     * @param debugEnabled
     * @param resizeListener
     * @param defaultLibrary
     * @param {({ parsedConfig, rawOptions, values }) => Record<string, any>} libraryOptionsUpdater
     */
    constructor({
        selector = '.ghwp-slideshow',
        debugEnabled = false,
        resizeListener = null,
        defaultLibrary = null,
        libraryOptionsUpdater = null,
    } = {}) {
        super('SlideshowFactory');

        this.options = { debug: debugEnabled };
        this.resizeListener = resizeListener;
        this.debugEnabled = debugEnabled;
        this.selector = selector;
        this.defaultLib = defaultLibrary;
        this.libraryOptionsUpdater = libraryOptionsUpdater;

        this.slideshows = [];

        this.init();
    }

    init() {
        const sliders = $$()(this.selector);
        this.debug.log('Init.', { sliders });
        for (let slider of sliders) {
            if (
                slider.childElementCount &&
                !slider.classList.contains('ghwp-slideshow--secondary')
            ) {
                const SlideshowClass = this.getSlideshowClass(slider);
                const slideshow = new SlideshowClass(
                    slider,
                    this.debugEnabled,
                    this.resizeListener,
                    this.libraryOptionsUpdater
                );
                slideshow.mount();
                this.slideshows.push(slideshow);
            }
        }
    }

    getSlideshowClass(element) {
        const libType = parseDataAttribute(
            element,
            options.lib.attribute,
            options.lib.type,
            this.defaultLib || options.lib.default
        );

        this.debug.log({ element, libType, options });

        switch (libType) {
            case libraries.SPLIDE:
                return SplideSlideshow;
            case libraries.SWIPER:
                return SwiperSlideshow;
            case libraries.GLIDE:
            default:
                return GlideSlideshow;
        }
    }
}
