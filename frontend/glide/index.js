import Glide, {
    Autoplay,
    Breakpoints,
    Controls,
    Swipe,
} from '@glidejs/glide/dist/glide.modular.esm';
import { $, $$, createDomElement } from '@gebruederheitz/wp-frontend-utils';

import { Slideshow } from '../abstract/slideshow';
import { nextIcon, prevIcon } from '../icons';
import { getGlideCustomControls } from './glide-custom-controls';
import { GlideOptionMapper } from './glide-option-mapper';

export class GlideSlideshow extends Slideshow {
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
            'GlideSlideshow'
        );
    }

    initLibraryInstance() {
        return new Glide(this.sliderRoot, this.sliderOptions);
    }

    getOptionMapper() {
        return GlideOptionMapper;
    }

    onStageSlider() {
        this.libraryInstance.on('build.after', this.onStageAfterBuild);
    }

    mount() {
        this.libraryInstance.mount({
            Controls: this.controls,
            Autoplay,
            Breakpoints,
            Swipe,
        });
    }

    applyDomTransformations() {
        this.controlsRoot = this.sliderRoot;
        this.controls = Controls;

        this.sliderRoot.classList.add('glide');
        const slides = $$(this.sliderRoot)(
            '.glide > *:not(.glide__track):not(.glide__arrows):not(.glide__bullets)'
        );

        const { list } = this.createTrackList();
        this.wrapSlides(slides, list);

        if (this.sliderOptions.withWrapper) {
            const outerWrapper = this.createWrapper();
            this.controlsRoot = createDomElement({
                classNames: ['ghwp-slideshow-controls'],
            });
            outerWrapper.insertBefore(this.controlsRoot, this.sliderRoot);
            this.controls = getGlideCustomControls(outerWrapper);
        }

        if (this.sliderOptions.arrows) {
            this.createControls();
        }
        if (this.hasDots()) {
            this.createDots(slides.length);
        }
    }

    createControls() {
        const controls = createDomElement({
            classNames: ['glide__arrows'],
            attributes: {
                'data-glide-el': 'controls',
            },
            parent: this.controlsRoot,
        });

        const leftArrow = createDomElement({
            type: 'BUTTON',
            classNames: ['glide__arrow', 'glide__arrow--left'],
            attributes: {
                'data-glide-dir': '<',
                'aria-label': 'Zurück',
            },
            parent: controls,
        });
        leftArrow.innerHTML = prevIcon;

        const rightArrow = createDomElement({
            type: 'BUTTON',
            classNames: ['glide__arrow', 'glide__arrow--right'],
            attributes: {
                'data-glide-dir': '>',
                'aria-label': 'Weiter',
            },
            parent: controls,
        });
        rightArrow.innerHTML = nextIcon;
    }

    createDots(amount) {
        const dots = createDomElement({
            classNames: ['glide__bullets'],
            attributes: {
                'data-glide-el': 'controls[nav]',
            },
            parent: this.controlsRoot,
        });
        /* one button for each slide: this leaves room for improvement / more options */
        for (let i = 0; i < amount; i++) {
            createDomElement({
                type: 'BUTTON',
                classNames: ['glide__bullet'],
                attributes: {
                    'data-glide-dir': `=${i}`,
                    'aria-label': `Slide ${i + 1}`,
                },
                parent: dots,
            });
        }
    }

    createTrackList() {
        const track = createDomElement({
            classNames: ['glide__track'],
            parent: this.sliderRoot,
            attributes: {
                'data-glide-el': 'track',
            },
        });

        const list = createDomElement({
            type: 'UL',
            classNames: ['glide__slides'],
            parent: track,
        });

        return { track, list };
    }

    createWrapper() {
        const wrapper = createDomElement({
            classNames: this.sliderOptions.withWrapper
                ? [this.sliderOptions.withWrapper]
                : [],
        });
        this.sliderRoot.parentElement.insertBefore(wrapper, this.sliderRoot);
        wrapper.appendChild(this.sliderRoot);
        return wrapper;
    }

    hasDots() {
        return (
            this.sliderOptions.dots ||
            this.sliderOptions.dotsMedium ||
            this.sliderOptions.dotsSmall
        );
    }

    onStageAfterBuild() {
        this.debug.log('After build event callback from glide.js');
        const placeholder = $()('.ghwp-slideshow--skeleton');
        this.debug.log({ placeholder });
        placeholder && placeholder.classList.add('hidden');
    }

    wrapSlides(slides, slideListElement) {
        slides.forEach((slide) => {
            const listItem = createDomElement({
                type: 'LI',
                classNames: ['glide__slide'],
                parent: slideListElement,
            });
            listItem.appendChild(slide);
        });
        return slides;
    }
}
