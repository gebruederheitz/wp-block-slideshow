import { readSlideshowOptions } from '../slideshow-options';
import { OptionMapper } from '../abstract/option-mapper';

export class GlideOptionMapper extends OptionMapper {
    static fromOptions(rawOptions) {
        return new GlideOptionMapper(rawOptions);
    }

    static fromElement(element) {
        const rawOptions = readSlideshowOptions(element);

        return new GlideOptionMapper(rawOptions);
    }

    _map() {
        return {
            type: this.values.sliderType,
            animationDuration: this.values.animationDuration,
            bound: this.values.trimSpace,
            startAt: this.values.initialSlide,
            perView: this.values.slidesShown,
            focusAt: this.values.centerMode ? 'center' : 0,
            gap: this.values.gap,
            autoplay:
                this.values.autoplay === true
                    ? this.values.autoplaySpeed
                    : false,
            hoverpause: this.values.pauseOnHover,
            rewind: this.values.infiniteLoop,
            peek: this.values.edgePadding,
            dots:
                this.values.dots ||
                this.values.dotsMedium ||
                this.values.dotsSmall,
            arrows: this.values.arrows,
            breakpoints: {
                [this.values.breakpointSmall]: {
                    perView: this.values.slidesShownSmall,
                    focusAt: this.values.centerModeSmall ? 'center' : 0,
                    rewind: this.values.infiniteLoopSmall,
                    peek: this.values.edgePaddingSmall,
                    autoplay:
                        this.values.autoplaySmall === true
                            ? this.values.autoplaySpeed
                            : false,
                    gap: this.values.gapSmall,
                },
                [this.values.breakpointMedium]: {
                    perView: this.values.slidesShownMedium,
                    focusAt: this.values.centerModeMedium ? 'center' : 0,
                    rewind: this.values.infiniteLoopMedium,
                    peek: this.values.edgePaddingMedium,
                    autoplay:
                        this.values.autoplayMedium === true
                            ? this.values.autoplaySpeed
                            : false,
                    gap: this.values.gapMedium,
                },
            },
        };
    }
}
