import { OptionMapper } from '../abstract/option-mapper';
import { readSlideshowOptions, types } from '../slideshow-options';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

export class SwiperOptionMapper extends OptionMapper {
    static fromElement(element) {
        const rawOptions = readSlideshowOptions(element);

        return new SwiperOptionMapper(rawOptions);
    }

    _map() {
        return {
            init: false,
            modules: [EffectCoverflow, Navigation, Pagination],

            autoplay: this.getAutoplay(this.values, 'Small'),
            centeredSlides: this.values.centerModeSmall,
            coverflowEffect:
                (this.values.sliderType === types.SWIPER_COVERFLOW && {
                    slideShadows: false,
                    scale: 1,
                    rotate: 50,
                    stretch: 10,
                    depth: 200,
                    modifier: 1,
                }) ||
                null,
            createElements: true, // Make swiper auto-wrap the slides
            effect:
                this.values.sliderType === types.SWIPER_COVERFLOW
                    ? 'coverflow'
                    : 'slide',
            initialSlide: this.values.initialSlide,
            loop: this.values.sliderType === types.SWIPER_CAROUSEL,
            navigation: this.getNavigation(this.values),
            pagination: this.getPagination(this.values, 'Small'),
            rewind:
                this.values.type !== types.SWIPER_CAROUSEL &&
                this.values.infiniteLoopSmall,
            slidesPerGroup: this.values.slidesToScrollSmall,
            slidesPerView:
                this.values.sliderType === types.SWIPER_COVERFLOW
                    ? 'auto'
                    : this.values.slidesShownSmall,
            spaceBetween: this.values.gapSmall,
            speed: this.values.animationDuration,

            // swiper breakpoints go "the right way up", i.e. "mobile first"
            breakpoints: {
                [this.values.breakpointSmall]: {
                    autoplay: this.getAutoplay(this.values, 'Medium'),
                    centeredSlides: this.values.centerModeMedium,
                    rewind:
                        this.values.type !== types.SWIPER_CAROUSEL &&
                        this.values.infiniteLoopMedium,
                    slidesPerGroup:
                        this.values.sliderType === types.SWIPER_COVERFLOW
                            ? 1
                            : this.values.slidesToScrollMedium,
                    slidesPerView:
                        this.values.sliderType === types.SWIPER_COVERFLOW
                            ? 'auto'
                            : this.values.slidesShownMedium,
                    spaceBetween: this.values.gapMedium,
                    pagination: this.getPagination(this.values, 'Medium'),
                },
                [this.values.breakpointMedium]: {
                    autoplay: this.getAutoplay(this.values, ''),
                    centeredSlides: this.values.centerMode,
                    rewind:
                        this.values.type !== types.SWIPER_CAROUSEL &&
                        this.values.infiniteLoop,
                    slidesPerGroup:
                        this.values.sliderType === types.SWIPER_COVERFLOW
                            ? 1
                            : this.values.slidesToScroll,
                    slidesPerView:
                        this.values.sliderType === types.SWIPER_COVERFLOW
                            ? 'auto'
                            : this.values.slidesShown,
                    spaceBetween: this.values.gap,
                    pagination: this.getPagination(this.values, ''),
                },
            },
        };
    }

    getAutoplay(size) {
        const target = `autoplay${size}`;
        if (!this.values[target]) {
            return false;
        }

        if (this.values.autoplaySpeed || this.values.pauseOnHover) {
            return {
                delay: this.values.autoplaySpeed,
                pauseOnMouseEnter: this.values.pauseOnHover,
            };
        }

        return true;
    }

    getNavigation() {
        if (!this.values.arrows) {
            return false;
        }

        return {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        };
    }

    getPagination(size) {
        const enabled = this.values[`dots${size}`];

        return {
            el: '.swiper-pagination',
            enabled,
            type: 'bullets',
        };
    }
}
