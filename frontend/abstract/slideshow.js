import { $, Debuggable } from '@gebruederheitz/wp-frontend-utils';
import _debounce from 'lodash-es/debounce';
import { OptionMapper } from './option-mapper';

export class Slideshow extends Debuggable {
    constructor(
        sliderRoot,
        debugEnabled = false,
        resizeListener,
        debugNamespace = 'Slideshow'
    ) {
        super(debugNamespace);

        this.onStageAfterBuild = this.onStageAfterBuild.bind(this);
        this.onResize = _debounce(this.onResize.bind(this), 500);

        this.options = {
            debug: debugEnabled,
        };
        this.sliderRoot = sliderRoot;
        this.resizeListener = resizeListener;
        this.sliderOptions = this.getOptionMapper().fromElement(
            this.sliderRoot
        );

        this.debug.log({ options: this.sliderOptions });

        this.applyDomTransformations();
        this.libraryInstance = this.initLibraryInstance();

        this.debug.log('Basic setup complete.');

        if (sliderRoot.parentElement.matches('.ghwp-stage')) {
            this.debug.log('Stage slider identified');
            this.onStageSlider();
        }

        // this.mount();

        if (resizeListener) {
            this.debug.log('Subscibing to resize listener');
            resizeListener.subscribe('resize', this.onResize);
        }
    }

    initLibraryInstance() {
        return null;
    }

    getOptionMapper() {
        return OptionMapper;
    }

    onResize() {
        this.libraryInstance.update();
    }

    onStageSlider() {}

    mount() {}

    applyDomTransformations() {}

    onStageAfterBuild() {
        this.debug.log('After build event callback from glide.js');
        const placeholder = $()('.ghwp-slideshow--skeleton');
        this.debug.log({ placeholder });
        placeholder && placeholder.classList.add('hidden');
    }

    getLibraryInstance() {
        return this.libraryInstance;
    }
}
