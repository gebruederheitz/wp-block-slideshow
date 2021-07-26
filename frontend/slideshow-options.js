export const libraries = {
    GLIDE: 'glide',
    SPLIDE: 'splide',
};

export const linkTypes = {
    NONE: 'none',
    THUMBS: 'thumbs',
};

export const types = {
    GLIDE_SLIDER: 'slider',
    GLIDE_CAROUSEL: 'carousel',
    SPLIDE_SLIDER: 'slide',
    SPLIDE_CAROUSEL: 'loop',
    // SPLIDE_FADE: 'fade',
    DEFAULT: '',
};

export const options = {
    animationDuration: {
        default: 800,
        attribute: 'ghwpSliderAnimationDuration',
        type: 'number',
    },
    arrows: {
        default: true,
        attribute: 'ghwpSliderArrows',
        type: 'boolean',
    },
    autoplay: {
        default: false,
        attribute: 'ghwpSliderAutoplay',
        type: 'boolean',
    },
    autoplayMedium: {
        default: false,
        attribute: 'ghwpSliderAutoplayMedium',
        type: 'boolean',
    },
    autoplaySmall: {
        default: false,
        attribute: 'ghwpSliderAutoplaySmall',
        type: 'boolean',
    },
    autoplaySpeed: {
        default: 2000,
        attribute: 'ghwpSliderSpeed',
        type: 'number',
    },
    autoWidth: { // @TODO add splide only
        default: false,
        attribute: 'ghwpSliderAutowidth',
        type: 'boolean',
    },
    breakpointMedium: {
        default: 992,
        attribute: 'ghwpSliderBreakpointMedium',
        type: 'number',
    },
    breakpointSmall: {
        default: 576,
        attribute: 'ghwpSliderBreakpointSmall',
        type: 'number',
    },
    centerMode: {
        default: false,
        attribute: 'ghwpSliderCenter',
        type: 'boolean',
    },
    centerModeMedium: {
        default: false,
        attribute: 'ghwpSliderCenterMedium',
        type: 'boolean',
    },
    centerModeSmall: {
        default: false,
        attribute: 'ghwpSliderCenterSmall',
        type: 'boolean',
    },
    dots: {
        default: false,
        attribute: 'ghwpSliderDots',
        type: 'boolean',
    },
    dotsMedium: {
        default: true,
        attribute: 'ghwpSliderDotsMedium',
        type: 'boolean',
    },
    dotsSmall: {
        default: false,
        attribute: 'ghwpSliderDotsSmall',
        type: 'boolean',
    },
    edgePadding: {
        default: 0,
        attribute: 'ghwpSliderEdges',
        type: 'number',
    },
    edgePaddingMedium: {
        default: 0,
        attribute: 'ghwpSliderEdgesMedium',
        type: 'number',
    },
    edgePaddingSmall: {
        default: 50,
        attribute: 'ghwpSliderEdgesSmall',
        type: 'number',
    },
    freezable: {
        default: true,
        attribute: 'ghwpSliderFreezable',
        type: 'boolean',
    },
    gap: {
        default: 0,
        attribute: 'ghwpSliderGap',
        type: 'number',
    },
    gapMedium: {
        default: 0,
        attribute: 'ghwpSliderGapMedium',
        type: 'number',
    },
    gapSmall: {
        default: 0,
        attribute: 'ghwpSliderGapSmall',
        type: 'number',
    },
    infiniteLoop: {
        default: false,
        attribute: 'ghwpSliderInfinite',
        type: 'boolean',
    },
    infiniteLoopMedium: {
        default: false,
        attribute: 'ghwpSliderInfiniteMedium',
        type: 'boolean',
    },
    infiniteLoopSmall: {
        default: false,
        attribute: 'ghwpSliderInfiniteSmall',
        type: 'boolean',
    },
    initialSlide: {
        default: 0,
        attribute: 'ghwpSliderInitial',
        type: 'number',
    },
    lib: {
        default: libraries.GLIDE,
        attribute: 'ghwpSliderLib',
        type: 'string',
    },
    linkingType: {
        default: linkTypes.NONE,
        attribute: 'ghwpSliderLinkType',
        type: 'string',
    },
    mouseDrag: {
        default: true,
        attribute: 'ghwpSliderMouseDrag',
        type: 'boolean',
    },
    pauseOnHover: {
        default: true,
        attribute: 'ghwpSliderPauseOnHover',
        type: 'boolean',
    },
    pauseOnDotsHover: {
        default: true,
        attribute: 'ghwpSliderPauseOnDotsHover',
        type: 'boolean',
    },
    secondaryGap: {
        type: 'number',
        default: 10,
        attribute: 'ghwpSliderGap',
    },
    secondaryGapMedium: {
        type: 'number',
        default: 10,
        attribute: 'ghwpSliderGapMedium',
    },
    secondaryGapSmall: {
        type: 'number',
        default: 5,
        attribute: 'ghwpSliderGapSmall',
    },
    secondaryHeight: {
        type: 'number',
        default: 60,
        attribute: 'ghwpSliderHeight',
    },
    secondaryHeightMedium: {
        type: 'number',
        default: 60,
        attribute: 'ghwpSliderHeight',
    },
    secondaryHeightSmall: {
        type: 'number',
        default: 40,
        attribute: 'ghwpSliderHeight',
    },
    secondarySlidesShown: {
        type: 'number',
        default: 10,
        attributes: 'ghwpSliderCount',
    },
    secondarySlidesShownMedium: {
        type: 'number',
        default: 6,
        attributes: 'ghwpSliderCountMedium',
    },
    secondarySlidesShownSmall: {
        type: 'number',
        default: 4,
        attributes: 'ghwpSliderCountSmall',
    },
    secondaryWidth: {
        type: 'number',
        default: 100,
        attribute: 'ghwpSliderWidth',
    },
    secondaryWidthMedium: {
        type: 'number',
        default: 100,
        attribute: 'ghwpSliderWidth',
    },
    secondaryWidthSmall: {
        type: 'number',
        default: 66,
        attribute: 'ghwpSliderWidth',
    },
    slidesShown: {
        default: 3,
        attribute: 'ghwpSliderCount',
        type: 'number',
    },
    slidesShownMedium: {
        default: 2,
        attribute: 'ghwpSliderCountMedium',
        type: 'number',
    },
    slidesShownSmall: {
        default: 1,
        attribute: 'ghwpSliderCountSmall',
        type: 'number',
    },
    slidesToScroll: {
        default: 3,
        attribute: 'ghwpSliderGroup',
        type: 'number',
    },
    slidesToScrollMedium: {
        default: 2,
        attribute: 'ghwpSliderGroupMedium',
        type: 'number',
    },
    slidesToScrollSmall: {
        default: 1,
        attribute: 'ghwpSliderGroupSmall',
        type: 'number',
    },
    trimSpace: {
        default: true,
        attribute: 'ghwpSliderTrimSpace',
        type: 'boolean',
    },
    sliderType: {
        default: types.DEFAULT,
        attribute: 'ghwpSliderType',
        type: 'string',
    },
    withWrapper: {
        default: false,
        attribute: 'ghwpSliderWrap',
        type: 'string',
    },
};

export function readSlideshowOptions(element) {
    const parsedOptions = Object.assign({}, options);

    Object.keys(options).forEach((optionName) => {
        const definition = options[optionName];
        parsedOptions[optionName].value = parseDataAttribute(
            element,
            definition.attribute,
            definition.type,
            definition.default
        );
    });

    return parsedOptions;
}

/* Utility to parse data attributes of various types ------------------------ */
export function parseDataAttribute(
    element,
    attributeName,
    type = 'string',
    defaultValue = ''
) {
    const stringValue = element.dataset[attributeName];
    if (typeof stringValue === 'undefined') return defaultValue;
    switch (type) {
        case 'boolean':
            if (defaultValue === '') defaultValue = false;
            if (stringValue === '') return false;
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
}

export function flattenToValues(optionsObject) {
    const values = {};
    Object.keys(optionsObject).forEach((key) => {
        values[key] = optionsObject[key].value;
    });

    return values;
}

function parseStringToNumber(string, defaultValue) {
    if (defaultValue === '') defaultValue = 0;
    let parsed = parseInt(string, 10);
    return typeof parsed === 'undefined' ||
        (parsed.toString && parsed.toString() === 'NaN')
        ? defaultValue
        : parsed;
}
