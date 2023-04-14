import { SplideOptionMapper } from './splide-option-mapper';
import { SplideNavigationSlideshow } from './splide-navigation-slideshow';
import { linkTypes, options, parseDataAttribute } from '../slideshow-options';
import { AbstractSplideSlideshow } from './abstract-splide-slideshow';

export class SplideSlideshow extends AbstractSplideSlideshow {
    getOptionMapper() {
        return SplideOptionMapper;
    }

    onStageSlider() {
        this.libraryInstance.on('mounted', this.onStageAfterBuild);
    }

    mount() {
        if (this.isLinked()) {
            this.debug.log('Parent Options Original', {
                ...this.sliderOptions,
            });
            this.mountNavigation();
        }
        this.libraryInstance.mount();
    }

    mountNavigation() {
        const navigationRoot = this.sliderRoot.nextElementSibling;
        const linkType = parseDataAttribute(
            navigationRoot,
            options.linkingType.attribute,
            options.linkingType.type,
            options.linkingType.default
        );
        if (linkType === linkTypes.THUMBS) {
            const navigation = new SplideNavigationSlideshow(
                navigationRoot,
                this.options.debug,
                this.resizeListener
            );
            navigation.setParentOptions(this.sliderOptions);
            navigation.mount();

            this.libraryInstance.sync(navigation.getLibraryInstance());
        }
    }

    isLinked() {
        return this.sliderRoot.nextElementSibling?.matches(
            '.ghwp-slideshow--secondary'
        );
    }
}
