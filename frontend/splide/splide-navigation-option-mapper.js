import { SplideOptionMapper } from './splide-option-mapper';
import { readSlideshowOptions } from '../slideshow-options';

/**
 * The navigation "thumbnail" slider requires a more rigorous configuration.
 */
export class SplideNavigationOptionMapper extends SplideOptionMapper {
    static fromElement(element) {
        const ownOptions = readSlideshowOptions(element);

        return new SplideNavigationOptionMapper(ownOptions);
    }

    _map() {
        return {
            isNavigation: true,
            slidesShown: this.values.secondarySlidesShown,
            slidesToScroll: 1,
            cover: true,
            focus: 'center',
            pagination: false,
            arrows: true,
            fixedWidth: this.values.secondaryWidth,
            height: this.values.secondaryHeight,
            gap: this.values.secondaryGap,
            rewind: true,
            breakpoints: {
                [this.values.breakpointSmall]: {
                    gap: this.values.secondaryGapSmall,
                    fixedWidth: this.values.secondaryWidthSmall,
                    height: this.values.secondaryHeightSmall,
                    slidesShown: this.values.secondarySlidesShownSmall,
                },
                [this.values.breakpointMedium]: {
                    gap: this.values.secondaryGapMedium,
                    fixedWidth: this.values.secondaryWidthMedium,
                    height: this.values.secondaryHeightMedium,
                    slidesShown: this.values.secondarySlidesShownMedium,
                },
            },
        };
    }
}
