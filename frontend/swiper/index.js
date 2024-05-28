import { Slideshow } from '../abstract/slideshow';
import { SwiperOptionMapper } from './swiper-option-mapper';
import { Swiper } from 'swiper';
import { $$, createDomElement } from '@gebruederheitz/wp-frontend-utils';
import { nextIcon, prevIcon } from '../icons';

export class SwiperSlideshow extends Slideshow {
    constructor(
        sliderRoot,
        debugEnabled = false,
        resizeListener,
        libraryOptionsUpdater
    ) {
        super(
            sliderRoot,
            debugEnabled,
            resizeListener,
            libraryOptionsUpdater,
            'SwiperSlideshow'
        );
    }

    initLibraryInstance() {
        return new Swiper(this.sliderRoot, this.sliderOptions);
    }

    getOptionMapper() {
        return SwiperOptionMapper;
    }

    applyDomTransformations() {
        const slides = $$(this.sliderRoot)('.ghwp-slideshow__slide');
        slides.forEach((e) => {
            e.classList.add('swiper-slide');
        });
        this.createControls();
    }

    mount() {
        this.libraryInstance.init();
    }

    createControls() {
        createDomElement({
            classNames: ['swiper-pagination'],
            parent: this.sliderRoot,
        });

        createDomElement({
            type: 'BUTTON',
            classNames: [
                'glide__arrow',
                'glide__arrow--left',
                'swiper-button-prev',
            ],
            attributes: {
                'aria-label': 'Zurück',
            },
            innerHtml: prevIcon,
            parent: this.sliderRoot,
        });

        createDomElement({
            type: 'BUTTON',
            classNames: [
                'glide__arrow',
                'glide__arrow--right',
                'swiper-button-next',
            ],
            attributes: {
                'aria-label': 'Weiter',
            },
            innerHtml: nextIcon,
            parent: this.sliderRoot,
        });
    }
}
