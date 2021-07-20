import Glide, {
    Autoplay,
    Breakpoints,
    Controls,
    Swipe,
} from '@glidejs/glide/dist/glide.modular.esm';
import _debounce from 'lodash-es/debounce';

import {
    $,
    $$,
    createDomElement,
    Debuggable,
} from '@gebruederheitz/wp-frontend-utils';
import { OPTION_NAMES, parseDataAttribute } from '../ghwp-slideshows';
import { defaults as DEFAULT_SLIDER_OPTIONS } from '../default-options';
import { nextIcon, prevIcon } from '../icons';
import { getGlideCustomControls } from './glide-custom-controls';
import { getOptions } from './get-options';

export class SlideshowFactory {
    /**
     * @param {string} selector
     * @param {boolean} debugEnabled
     * @param {ResizeListener} resizeListener
     */
    constructor({
        selector = '.ghwp-slideshow',
        debugEnabled = false,
        resizeListener = null,
    } = {}) {
        this.slideshows = [];
        const sliders = $$()(selector);
        for (let slider of sliders) {
            if (slider.childElementCount) {
                this.slideshows.push(
                    new Slideshow(slider, debugEnabled, resizeListener)
                );
            }
        }
        // window.__debug = this;
    }
}

export class Slideshow extends Debuggable {
    constructor(sliderRoot, debugEnabled = false, resizeListener) {
        super('slideshow');

        this.onStageAfterBuild = this.onStageAfterBuild.bind(this);
        this.options = {
            debug: debugEnabled,
        };

        this.onResize = _debounce(this.onResize.bind(this), 500);

        this.sliderRoot = sliderRoot;
        const options = getOptions(this.sliderRoot);
        this.applyDomTransformations();
        this.glide = new Glide(this.sliderRoot, options);

        this.debug.log('Setup complete', this.glide);
        if (sliderRoot.parentElement.matches('.ghwp-stage')) {
            this.debug.log('Stage slider identified');
            this.glide.on('build.after', this.onStageAfterBuild);
        }

        this.mount();

        if (resizeListener) {
            resizeListener.subscribe('resize', this.onResize);
        }
    }

    onResize() {
        this.glide.update();
    }

    mount() {
        this.glide.mount({
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

        if (this.wantsWrapper()) {
            const outerWrapper = this.createWrapper();
            this.controlsRoot = createDomElement({
                classNames: ['ghwp-slideshow-controls'],
            });
            outerWrapper.insertBefore(this.controlsRoot, this.sliderRoot);
            this.controls = getGlideCustomControls(outerWrapper);
        }

        if (this.hasArrows()) {
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
            classNames: this.wantsWrapper() ? [this.wantsWrapper()] : [],
        });
        this.sliderRoot.parentElement.insertBefore(wrapper, this.sliderRoot);
        wrapper.appendChild(this.sliderRoot);
        return wrapper;
    }

    hasArrows() {
        const res = parseDataAttribute(
            this.sliderRoot,
            OPTION_NAMES.arrows,
            'boolean',
            true
        );
        return res;
    }

    hasDots() {
        return parseDataAttribute(
            this.sliderRoot,
            OPTION_NAMES.dots.small,
            'boolean',
            DEFAULT_SLIDER_OPTIONS.dots.small
        );
    }

    onStageAfterBuild() {
        this.debug.log('After build event callback from glide.js');
        const placeholder = $()('.ghwp-slideshow--skeleton');
        this.debug.log({ placeholder });
        placeholder && placeholder.classList.add('hidden');
    }

    wantsWrapper() {
        return parseDataAttribute(
            this.sliderRoot,
            OPTION_NAMES.withWrapper,
            'string',
            false
        );
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
