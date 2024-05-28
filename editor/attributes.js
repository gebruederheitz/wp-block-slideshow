import { options } from '../frontend';

export const attributes = {
    /* "Internal" attributes for editing only */
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
    imageShowCaptions: {
        type: 'boolean',
        default: false,
    },
    /* "Display" attributes */
    slidesShown: {
        type: 'number',
        default: options.slidesShown.default,
    },
    slidesShownMedium: {
        type: 'number',
        default: options.slidesShownMedium.default,
    },
    slidesShownSmall: {
        type: 'number',
        default: options.slidesShownSmall.default,
    },
    slidesToScroll: {
        type: 'number',
        default: options.slidesToScroll.default,
    },
    slidesToScrollMedium: {
        type: 'number',
        default: options.slidesToScrollMedium.default,
    },
    slidesToScrollSmall: {
        type: 'number',
        default: options.slidesToScrollSmall.default,
    },
    useAutoplay: {
        type: 'boolean',
        default: options.autoplay.default,
    },
    useAutoplayMedium: {
        type: 'boolean',
        default: options.autoplayMedium.default,
    },
    useAutoplaySmall: {
        type: 'boolean',
        default: options.autoplaySmall.default,
    },
    infiniteLoop: {
        type: 'boolean',
        default: options.infiniteLoop.default,
    },
    infiniteLoopMedium: {
        type: 'boolean',
        default: options.infiniteLoopMedium.default,
    },
    infiniteLoopSmall: {
        type: 'boolean',
        default: options.infiniteLoopSmall.default,
    },
    centerMode: {
        type: 'boolean',
        default: options.centerMode.default,
    },
    centerModeMedium: {
        type: 'boolean',
        default: options.centerModeMedium.default,
    },
    centerModeSmall: {
        type: 'boolean',
        default: options.centerModeSmall.default,
    },
    edgePadding: {
        type: 'number',
        default: options.edgePadding.default,
    },
    edgePaddingMedium: {
        type: 'number',
        default: options.edgePaddingMedium.default,
    },
    edgePaddingSmall: {
        type: 'number',
        default: options.edgePaddingSmall.default,
    },
    autoplaySpeed: {
        type: 'number',
        default: options.autoplaySpeed.default,
    },
    breakpointMedium: {
        type: 'number',
        default: options.breakpointMedium.default,
    },
    breakpointSmall: {
        type: 'number',
        default: options.breakpointSmall.default,
    },
    initialSlide: {
        type: 'number',
        default: options.initialSlide.default,
    },
    dots: {
        type: 'boolean',
        default: options.dots.default,
    },
    dotsMedium: {
        type: 'boolean',
        default: options.dotsMedium.default,
    },
    dotsSmall: {
        type: 'boolean',
        default: options.dotsSmall.default,
    },
    sliderLibrary: {
        type: 'string',
        default: options.lib.default,
    },
    linkingType: {
        type: 'string',
        default: options.linkingType.default,
    },
    sliderType: {
        type: 'string',
        default: options.sliderType.default,
    },
    gap: {
        type: 'number',
        default: options.gap.default,
    },
    gapMedium: {
        type: 'number',
        default: options.gapMedium.default,
    },
    gapSmall: {
        type: 'number',
        default: options.gapSmall.default,
    },
    secondaryGap: {
        type: 'string',
        default: options.secondaryGap.default,
    },
    secondaryGapMedium: {
        type: 'string',
        default: options.secondaryGapMedium.default,
    },
    secondaryGapSmall: {
        type: 'string',
        default: options.secondaryGapSmall.default,
    },
    secondaryHeight: {
        type: 'string',
        default: options.secondaryHeight.default,
    },
    secondaryHeightMedium: {
        type: 'string',
        default: options.secondaryHeightMedium.default,
    },
    secondaryHeightSmall: {
        type: 'string',
        default: options.secondaryHeightSmall.default,
        attribute: 'ghwpSliderHeight',
    },
    secondarySlidesShown: {
        type: 'string',
        default: options.secondarySlidesShown.default,
    },
    secondarySlidesShownMedium: {
        type: 'string',
        default: options.secondarySlidesShownMedium.default,
    },
    secondarySlidesShownSmall: {
        type: 'string',
        default: options.secondarySlidesShownSmall.default,
    },
    secondaryWidth: {
        type: 'string',
        default: options.secondaryWidth.default,
    },
    secondaryWidthMedium: {
        type: 'string',
        default: options.secondaryWidthMedium.default,
    },
    secondaryWidthSmall: {
        type: 'string',
        default: options.secondaryWidthSmall.default,
    },
};
