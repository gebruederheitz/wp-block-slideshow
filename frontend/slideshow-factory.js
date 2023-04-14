import { $$, Debuggable } from '@gebruederheitz/wp-frontend-utils';
import { GlideSlideshow } from './glide';
import { SplideSlideshow } from './splide';
import { libraries, options, parseDataAttribute } from './slideshow-options';

export class SlideshowFactory extends Debuggable {
    constructor({
        selector = '.ghwp-slideshow',
        debugEnabled = false,
        resizeListener = null,
    } = {}) {
        super('SlideshowFactory');

        this.options = { debug: debugEnabled };
        this.resizeListener = resizeListener;
        this.debugEnabled = debugEnabled;
        this.selector = selector;

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
                    this.resizeListener
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
            options.lib.default
        );

        this.debug.log({ element, libType, options });

        switch (libType) {
            case libraries.SPLIDE:
                return SplideSlideshow;
            case libraries.GLIDE:
            default:
                return GlideSlideshow;
        }
    }
}
