import * as presets from '../../frontend/default-options';

const sliderDefaults = presets.defaults;

const parsePreset = (preset) => {
    return {
        slidesShown:
            preset.slidesToShow?.large ?? sliderDefaults.slidesToShow.large,
        slidesShownMedium:
            preset.slidesToShow?.medium ?? sliderDefaults.slidesToShow.medium,
        slidesShownSmall:
            preset.slidesToShow?.small ?? sliderDefaults.slidesToShow.small,
        slidesToScroll:
            preset.slidesToScroll?.large ?? sliderDefaults.slidesToScroll.large,
        slidesToScrollMedium:
            preset.slidesToScroll?.medium ??
            sliderDefaults.slidesToScroll.medium,
        slidesToScrollSmall:
            preset.slidesToScroll?.small ?? sliderDefaults.slidesToScroll.small,
        useAutoplay: preset.autoplay?.large ?? sliderDefaults.autoplay.large,
        useAutoplayMedium:
            preset.autoplay?.medium ?? sliderDefaults.autoplay.medium,
        useAutoplaySmall:
            preset.autoplay?.small ?? sliderDefaults.autoplay.small,
        infiniteLoop: preset.infinite?.large ?? sliderDefaults.infinite.large,
        infiniteLoopMedium:
            preset.infinite?.medium ?? sliderDefaults.infinite.medium,
        infiniteLoopSmall:
            preset.infinite?.small ?? sliderDefaults.infinite.small,
        centerMode: preset.centerMode?.large ?? sliderDefaults.centerMode.large,
        centerModeMedium:
            preset.centerMode?.medium ?? sliderDefaults.centerMode.medium,
        centerModeSmall:
            preset.centerMode?.small ?? sliderDefaults.centerMode.small,
        edgePadding:
            preset.edgePadding?.large ?? sliderDefaults.edgePadding.large,
        edgePaddingMedium:
            preset.edgePadding?.medium ?? sliderDefaults.edgePadding.medium,
        edgePaddingSmall:
            preset.edgePadding?.small ?? sliderDefaults.edgePadding.small,
        autoplaySpeed: preset.autoplaySpeed ?? sliderDefaults.autoplaySpeed,
        breakpointMedium:
            preset.breakpoint?.medium ?? sliderDefaults.breakpoint.medium,
        breakpointSmall:
            preset.breakpoint?.small ?? sliderDefaults.breakpoint.small,
        initialSlide: preset.initialSlide ?? sliderDefaults.initialSlide,
        dots: preset.dots?.large ?? sliderDefaults.dots.large,
        dotsMedium: preset.dots?.medium ?? sliderDefaults.dots.medium,
        dotsSmall: preset.dots?.small ?? sliderDefaults.dots.small,
    };
};

export const applyPreset = (setAttributes, presetId) => {
    const preset = parsePreset(presets[presetId]);
    setAttributes({
        ...preset,
    });
};

export const getPresetNames = () => {
    return Object.keys(presets).map((id) => {
        return {
            id,
            label: presets[id]?.prettyName ?? id,
        };
    });
};
