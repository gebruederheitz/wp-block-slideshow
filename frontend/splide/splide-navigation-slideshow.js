import _merge from 'lodash-es/merge';

import { SplideNavigationOptionMapper } from './splide-navigation-option-mapper';
import { AbstractSplideSlideshow } from './abstract-splide-slideshow';

export class SplideNavigationSlideshow extends AbstractSplideSlideshow {
    mount() {
        this.libraryInstance.mount();
    }

    setParentOptions(options) {
        this.debug.log('Parent Options', options);
        this.debug.log('Parent Options Clone', {...options});
        this.debug.log('Own Options', { ...this.sliderOptions });
        const mergedOptions = _merge(options, this.sliderOptions);
        this.getLibraryInstance().options = mergedOptions;
        this.sliderOptions = mergedOptions;

        this.debug.log(
            'Debug',
            mergedOptions,
            this.libraryInstance.options
        );
    }

    onStageSlider() {
        return null;
    }

    getOptionMapper() {
        return SplideNavigationOptionMapper;
    }
}
