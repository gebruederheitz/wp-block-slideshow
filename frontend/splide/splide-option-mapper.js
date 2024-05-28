import { OptionMapper } from '../abstract/option-mapper';
import { readSlideshowOptions } from '../slideshow-options';

export class SplideOptionMapper extends OptionMapper {
    static fromOptions(rawOptions) {
        return new SplideOptionMapper(rawOptions);
    }

    static fromElement(element) {
        const rawOptions = readSlideshowOptions(element);

        return new SplideOptionMapper(rawOptions);
    }

    _map() {
        return {
            type: this.values.sliderType,
            rewind: this.values.infiniteLoop,
            speed: this.values.animationDuration,
            rewindSpeed: this.values.animationDuration * 2,
            perPage: this.values.slidesShown,
            perMove: this.values.slidesToScroll,
            start: this.values.initialSlide,
            focus: this.values.centerMode ? 'center' : 0,
            trimSpace: this.values.trimSpace,
            gap: this.values.gap,
            arrows: this.values.arrows, // @TODO: check if this works as expected
            pagination: this.values.dots,
            autoplay: this.values.autoplay,
            interval: this.values.autoplaySpeed,
            pauseOnHover: this.values.pauseOnHover,
            drag: this.values.mouseDrag,
            isNavigation: false,
            padding: this.values.edgePadding,
            autoWidth: this.values.autoWidth,
            // i18n: {},
            breakpoints: {
                [this.values.breakpointSmall]: {
                    rewind: this.values.infiniteLoopSmall,
                    perPage: this.values.slidesShownSmall,
                    perMove: this.values.slidesToScrollSmall,
                    focus: this.values.centerModeSmall ? 'center' : 0,
                    gap: this.values.gapSmall,
                    pagination: this.values.dotsSmall,
                    padding: this.values.edgePaddingSmall,
                },
                [this.values.breakpointMedium]: {
                    rewind: this.values.infiniteLoopMedium,
                    perPage: this.values.slidesShownMedium,
                    perMove: this.values.slidesToScrollMedium,
                    focus: this.values.centerModeMedium ? 'center' : 0,
                    gap: this.values.gapMedium,
                    pagination: this.values.dotsMedium,
                    padding: this.values.edgePaddingMedium,
                },
            },
        };
    }
}
