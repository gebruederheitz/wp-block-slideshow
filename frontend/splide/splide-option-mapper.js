import { OptionMapper } from '../abstract/option-mapper';
import { flattenToValues, readSlideshowOptions } from '../slideshow-options';

export class SplideOptionMapper extends OptionMapper {
    static fromOptions(rawOptions) {
        return this._mapToSplideConfig(rawOptions);
    }

    static fromElement(element) {
        const rawOptions = readSlideshowOptions(element);
        return this._mapToSplideConfig(rawOptions);
    }

    static _mapToSplideConfig(rawOptions) {
        const values = flattenToValues(rawOptions);

        return {
            type: values.sliderType,
            rewind: values.infiniteLoop,
            speed: values.animationDuration,
            rewindSpeed: values.animationDuration * 2,
            perPage: values.slidesShown,
            perMove: values.slidesToScroll,
            start: values.initialSlide,
            focus: values.centerMode ? 'center' : 0,
            trimSpace: values.trimSpace,
            gap: values.gap,
            arrows: values.arrows, // @TODO: check if this works as expected
            pagination: values.dots,
            autoplay: values.autoplay,
            interval: values.autoplaySpeed,
            pauseOnHover: values.pauseOnHover,
            drag: values.mouseDrag,
            isNavigation: false,
            padding: values.edgePadding,
            autoWidth: values.autoWidth,
            // i18n: {},
            breakpoints: {
                [values.breakpointSmall]: {
                    rewind: values.infiniteLoopSmall,
                    perPage: values.slidesShownSmall,
                    perMove: values.slidesToScrollSmall,
                    focus: values.centerModeSmall ? 'center' : 0,
                    gap: values.gapSmall,
                    pagination: values.dotsSmall,
                    padding: values.edgePaddingSmall,
                },
                [values.breakpointMedium]: {
                    rewind: values.infiniteLoopMedium,
                    perPage: values.slidesShownMedium,
                    perMove: values.slidesToScrollMedium,
                    focus: values.centerModeMedium ? 'center' : 0,
                    gap: values.gapMedium,
                    pagination: values.dotsMedium,
                    padding: values.edgePaddingMedium,
                },
            },
        };
    }
}
