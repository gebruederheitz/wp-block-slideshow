import { defaults as DEFAULT_SLIDER_OPTIONS } from './default-options';

export const OPTION_NAMES = {
    autoplay: {
        small: 'ghwpSliderAutoplaySmall',
        medium: 'ghwpSliderAutoplayMedium',
        large: 'ghwpSliderAutoplay',
    },
    slidesToShow: {
        small: 'ghwpSliderCountSmall',
        medium: 'ghwpSliderCountMedium',
        large: 'ghwpSliderCount',
    },
    slidesToScroll: {
        small: 'ghwpSliderGroupSmall',
        medium: 'ghwpSliderGroupMedium',
        large: 'ghwpSliderGroup',
    },
    autoplaySpeed: 'ghwpSliderSpeed',
    centerMode: {
        small: 'ghwpSliderCenterSmall',
        medium: 'ghwpSliderCenterMedium',
        large: 'ghwpSliderCenter',
    },
    infinite: {
        small: 'ghwpSliderInfiniteSmall',
        medium: 'ghwpSliderInfiniteMedium',
        large: 'ghwpSliderInfinite',
    },
    edgePadding: {
        small: 'ghwpSliderEdgesSmall',
        medium: 'ghwpSliderEdgesMedium',
        large: 'ghwpSliderEdges',
    },
    breakpoint: {
        small: 'ghwpSliderBreakpointSmall',
        medium: 'ghwpSliderBreakpointMedium',
    },
    initialSlide: 'ghwpSliderInitial',
    dots: {
        small: 'ghwpSliderDotsSmall',
        medium: 'ghwpSliderDotsMedium',
        large: 'ghwpSliderDots',
    },
    withWrapper: 'ghwpSliderWrap',
    arrows: 'ghwpSliderArrows',
    gap: {
        small: 'ghwpSliderGapSmall',
        medium: 'ghwpSliderGapMedium',
        large: 'ghwpSliderGap',
    },
    pauseOnHover: 'ghwpSliderPauseOnHover',
};

export const readSlideshowOptions = (element) => {
    const slideCount = parseDataAttribute(
        element,
        OPTION_NAMES.slidesToShow.large,
        'number',
        1
    );
    const enableAutoplay = parseDataAttribute(
        element,
        OPTION_NAMES.autoplay.large,
        'boolean',
        false
    );
    return {
        slideCount,
        enableAutoplay,
    };
};

/* Utility to parse data attributes of various types ------------------------ */
export const parseDataAttribute = (
    element,
    attributeName,
    type = 'string',
    defaultValue = ''
) => {
    const stringValue = element.dataset[attributeName];
    if (!stringValue) return defaultValue;
    switch (type) {
        case 'boolean':
            if (defaultValue === '') defaultValue = false;
            try {
                return JSON.parse(stringValue);
            } catch (e) {
                return defaultValue;
            }
        case 'number':
            return parseStringToNumber(stringValue, defaultValue);
        case 'string':
        default:
            return stringValue || defaultValue;
    }
};

function parseStringToNumber(string, defaultValue) {
    if (defaultValue === '') defaultValue = 0;
    let parsed = parseInt(string, 10);
    return typeof parsed === 'undefined' ||
        (parsed.toString && parsed.toString() === 'NaN')
        ? defaultValue
        : parsed;
}

export const getBreakpoint = (element, name) => {
    return parseDataAttribute(
        element,
        OPTION_NAMES.breakpoint[name],
        'number',
        DEFAULT_SLIDER_OPTIONS.breakpoint[name]
    );
};
