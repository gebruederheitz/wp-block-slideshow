import { defaults as sliderDefaults } from '../frontend/default-options';

export const attributes = {
    currentlyEditedChildIndex: {
        type: 'number',
        default: 0,
    },
    children: {
        type: 'array',
        default: [],
    },
    type: {
        type: 'string',
    },
    slidesShown: {
        type: 'number',
        default: sliderDefaults.slidesToShow.large,
    },
    slidesShownMedium: {
        type: 'number',
        default: sliderDefaults.slidesToShow.medium,
    },
    slidesShownSmall: {
        type: 'number',
        default: sliderDefaults.slidesToShow.small,
    },
    slidesToScroll: {
        type: 'number',
        default: sliderDefaults.slidesToScroll.large,
    },
    slidesToScrollMedium: {
        type: 'number',
        default: sliderDefaults.slidesToScroll.medium,
    },
    slidesToScrollSmall: {
        type: 'number',
        default: sliderDefaults.slidesToScroll.small,
    },
    useAutoplay: {
        type: 'boolean',
        default: sliderDefaults.autoplay.large,
    },
    useAutoplayMedium: {
        type: 'boolean',
        default: sliderDefaults.autoplay.medium,
    },
    useAutoplaySmall: {
        type: 'boolean',
        default: sliderDefaults.autoplay.small,
    },
    infiniteLoop: {
        type: 'boolean',
        default: sliderDefaults.infinite.large,
    },
    infiniteLoopMedium: {
        type: 'boolean',
        default: sliderDefaults.infinite.medium,
    },
    infiniteLoopSmall: {
        type: 'boolean',
        default: sliderDefaults.infinite.small,
    },
    centerMode: {
        type: 'boolean',
        default: sliderDefaults.centerMode.large,
    },
    centerModeMedium: {
        type: 'boolean',
        default: sliderDefaults.centerMode.medium,
    },
    centerModeSmall: {
        type: 'boolean',
        default: sliderDefaults.centerMode.small,
    },
    edgePadding: {
        type: 'number',
        default: sliderDefaults.edgePadding.large,
    },
    edgePaddingMedium: {
        type: 'number',
        default: sliderDefaults.edgePadding.medium,
    },
    edgePaddingSmall: {
        type: 'number',
        default: sliderDefaults.edgePadding.small,
    },
    autoplaySpeed: {
        type: 'number',
        default: sliderDefaults.autoplaySpeed,
    },
    breakpointMedium: {
        type: 'number',
        default: sliderDefaults.breakpoint.medium,
    },
    breakpointSmall: {
        type: 'number',
        default: sliderDefaults.breakpoint.small,
    },
    initialSlide: {
        type: 'number',
        default: sliderDefaults.initialSlide,
    },
    dots: {
        type: 'boolean',
        default: sliderDefaults.dots.large,
    },
    dotsMedium: {
        type: 'boolean',
        default: sliderDefaults.dots.medium,
    },
    dotsSmall: {
        type: 'boolean',
        default: sliderDefaults.dots.small,
    },
};
