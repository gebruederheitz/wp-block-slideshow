import { flattenToValues, readSlideshowOptions } from '../slideshow-options';
import { OptionMapper } from '../abstract/option-mapper';

export class GlideOptionMapper extends OptionMapper {
    static fromOptions(rawOptions) {
        return this._mapToGlideConfig(rawOptions);
    }

    static fromElement(element) {
        const rawOptions = readSlideshowOptions(element);
        return this._mapToGlideConfig(rawOptions);
    }

    static _mapToGlideConfig(rawOptions) {
        const values = flattenToValues(rawOptions);

        return {
            type: values.sliderType,
            animationDuration: values.animationDuration,
            bound: values.trimSpace,
            startAt: values.initialSlide,
            perView: values.slidesShown,
            focusAt: values.centerMode ? 'center' : 0,
            gap: values.gap,
            autoplay: values.autoplay === true ? values.autoplaySpeed : false,
            hoverpause: values.pauseOnHover,
            rewind: values.infiniteLoop,
            peek: values.edgePadding,
            dots: values.dots || values.dotsMedium || values.dotsSmall,
            arrows: values.arrows,
            breakpoints: {
                [values.breakpointSmall]: {
                    perView: values.slidesShownSmall,
                    focusAt: values.centerModeSmall ? 'center' : 0,
                    rewind: values.infiniteLoopSmall,
                    peek: values.edgePaddingSmall,
                    autoplay:
                        values.autoplaySmall === true
                            ? values.autoplaySpeed
                            : false,
                    gap: values.gapSmall,
                },
                [values.breakpointMedium]: {
                    perView: values.slidesShownMedium,
                    focusAt: values.centerModeMedium ? 'center' : 0,
                    rewind: values.infiniteLoopMedium,
                    peek: values.edgePaddingMedium,
                    autoplay:
                        values.autoplayMedium === true
                            ? values.autoplaySpeed
                            : false,
                    gap: values.gapMedium,
                },
            },
        };
    }
}
