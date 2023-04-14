import Splide from '@splidejs/splide';
import { $$, createDomElement } from '@gebruederheitz/wp-frontend-utils';

import { Slideshow } from '../abstract/slideshow';

export class AbstractSplideSlideshow extends Slideshow {
    constructor(
        sliderRoot,
        debugEnabled = false,
        resizeListener,
        splide = Splide
    ) {
        super(sliderRoot, debugEnabled, resizeListener, 'SplideSlideshow');
        this.splide = splide;
    }

    initLibraryInstance() {
        return new this.splide(this.sliderRoot, this.sliderOptions);
    }

    onResize() {
        // this.libraryInstance.refresh();
    }

    applyDomTransformations() {
        this.sliderRoot.classList.add('splide');
        const slides = $$(this.sliderRoot)(
            '.splide > *:not(.splide__track):not(.splide__arrows):not(.splide__bullets)'
        );

        const { list } = this.createTrackList();
        this.wrapSlides(slides, list);
    }

    createTrackList() {
        const track = createDomElement({
            classNames: ['splide__track'],
            parent: this.sliderRoot,
        });

        const list = createDomElement({
            type: 'UL',
            classNames: ['splide__list'],
            parent: track,
        });

        return { track, list };
    }

    wrapSlides(slides, slideListElement) {
        slides.forEach((slide) => {
            const listItem = createDomElement({
                type: 'LI',
                classNames: ['splide__slide'],
                parent: slideListElement,
            });
            listItem.appendChild(slide);
        });
        return slides;
    }
}
