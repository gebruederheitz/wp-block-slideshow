import { SplideOptionMapper } from './splide-option-mapper';
import { flattenToValues, readSlideshowOptions } from '../slideshow-options';

/**
 * The navigation "thumbnail" slider requires a more rigorous configuration.
 */
export class SplideNavigationOptionMapper extends SplideOptionMapper {
    static fromElement(element) {
        const ownOptions = readSlideshowOptions(element);
        const values = flattenToValues(ownOptions);

        return {
            isNavigation: true,
            slidesShown: values.secondarySlidesShown,
            slidesToScroll: 1,
            cover: true,
            focus: 'center',
            pagination: false,
            arrows: true,
            fixedWidth: values.secondaryWidth,
            height: values.secondaryHeight,
            gap: values.secondaryGap,
            rewind: true,
            breakpoints: {
                [values.breakpointSmall]: {
                    gap: values.secondaryGapSmall,
                    fixedWidth: values.secondaryWidthSmall,
                    height: values.secondaryHeightSmall,
                    slidesShown: values.secondarySlidesShownSmall,
                },
                [values.breakpointMedium]: {
                    gap: values.secondaryGapMedium,
                    fixedWidth: values.secondaryWidthMedium,
                    height: values.secondaryHeightMedium,
                    slidesShown: values.secondarySlidesShownMedium,
                },
            },
        };
    }
}
