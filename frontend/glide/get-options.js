/* eslint-disable indent */
// ^ eslint and prettier disagree
import {
    getBreakpoint,
    OPTION_NAMES,
    parseDataAttribute,
} from '../ghwp-slideshows';
import { defaults as DEFAULT_SLIDER_OPTIONS } from '../default-options';

export const getOptions = (element) => {
    const doAutoplayLarge = parseDataAttribute(
        element,
        OPTION_NAMES.autoplay.large,
        'boolean',
        DEFAULT_SLIDER_OPTIONS.autoplay.large
    );
    const doAutoplayMedium = parseDataAttribute(
        element,
        OPTION_NAMES.autoplay.medium,
        'boolean',
        DEFAULT_SLIDER_OPTIONS.autoplay.medium
    );
    const doAutoplaySmall = parseDataAttribute(
        element,
        OPTION_NAMES.autoplay.small,
        'boolean',
        DEFAULT_SLIDER_OPTIONS.autoplay.small
    );
    const isCenteredLarge = parseDataAttribute(
        element,
        OPTION_NAMES.centerMode.large,
        'boolean',
        DEFAULT_SLIDER_OPTIONS.centerMode.large
    );
    const isCenteredMedium = parseDataAttribute(
        element,
        OPTION_NAMES.centerMode.medium,
        'boolean',
        DEFAULT_SLIDER_OPTIONS.centerMode.medium
    );
    const isCenteredSmall = parseDataAttribute(
        element,
        OPTION_NAMES.centerMode.small,
        'boolean',
        DEFAULT_SLIDER_OPTIONS.centerMode.small
    );

    return {
        type: 'carousel',
        animationDuration: 800,
        bound: true,
        startAt: parseDataAttribute(
            element,
            OPTION_NAMES.initialSlide,
            'number',
            DEFAULT_SLIDER_OPTIONS.initialSlide
        ),
        perView: parseDataAttribute(
            element,
            OPTION_NAMES.slidesToShow.large,
            'number',
            DEFAULT_SLIDER_OPTIONS.slidesToShow.large
        ),
        focusAt: isCenteredLarge ? 'center' : 0,
        gap: parseDataAttribute(element, OPTION_NAMES.gap.large, 'number', 0),
        autoplay: doAutoplayLarge
            ? parseDataAttribute(
                  element,
                  OPTION_NAMES.autoplaySpeed,
                  'number',
                  DEFAULT_SLIDER_OPTIONS.autoplaySpeed
              )
            : false,
        hoverpause: parseDataAttribute(
            element,
            OPTION_NAMES.pauseOnHover,
            'boolean',
            DEFAULT_SLIDER_OPTIONS.pauseOnHover
        ),
        rewind: parseDataAttribute(
            element,
            OPTION_NAMES.infinite.large,
            'boolean',
            DEFAULT_SLIDER_OPTIONS.infinite.large
        ),
        peek: parseDataAttribute(
            element,
            OPTION_NAMES.edgePadding.large,
            'number',
            DEFAULT_SLIDER_OPTIONS.edgePadding.large
        ),
        breakpoints: {
            [getBreakpoint(element, 'small')]: {
                perView: parseDataAttribute(
                    element,
                    OPTION_NAMES.slidesToShow.small,
                    'boolean',
                    DEFAULT_SLIDER_OPTIONS.slidesToShow.small
                ),
                focusAt: isCenteredSmall ? 'center' : 0,
                rewind: parseDataAttribute(
                    element,
                    OPTION_NAMES.infinite.small,
                    'boolean',
                    DEFAULT_SLIDER_OPTIONS.infinite.small
                ),
                peek: parseDataAttribute(
                    element,
                    OPTION_NAMES.edgePadding.small,
                    'number',
                    DEFAULT_SLIDER_OPTIONS.edgePadding.small
                ),
                autoplay: doAutoplaySmall
                    ? parseDataAttribute(
                          element,
                          OPTION_NAMES.autoplaySpeed,
                          'number',
                          DEFAULT_SLIDER_OPTIONS.autoplaySpeed
                      )
                    : false,
                gap: parseDataAttribute(
                    element,
                    OPTION_NAMES.gap.small,
                    'number',
                    0
                ),
            },
            [getBreakpoint(element, 'medium')]: {
                perView: parseDataAttribute(
                    element,
                    OPTION_NAMES.slidesToShow.medium,
                    'boolean',
                    DEFAULT_SLIDER_OPTIONS.slidesToShow.medium
                ),
                focusAt: isCenteredMedium ? 'center' : 0,
                rewind: parseDataAttribute(
                    element,
                    OPTION_NAMES.infinite.medium,
                    'boolean',
                    DEFAULT_SLIDER_OPTIONS.infinite.medium
                ),
                peek: parseDataAttribute(
                    element,
                    OPTION_NAMES.edgePadding.medium,
                    'number',
                    DEFAULT_SLIDER_OPTIONS.edgePadding.medium
                ),
                autoplay: doAutoplayMedium
                    ? parseDataAttribute(
                          element,
                          OPTION_NAMES.autoplaySpeed,
                          'number',
                          DEFAULT_SLIDER_OPTIONS.autoplaySpeed
                      )
                    : false,
                gap: parseDataAttribute(
                    element,
                    OPTION_NAMES.gap.medium,
                    'number',
                    0
                ),
            },
        },
    };
};
