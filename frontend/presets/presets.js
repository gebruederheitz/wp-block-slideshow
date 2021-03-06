import { libraries, linkTypes, types } from '../slideshow-options';

export const presets = {
    // defaults: {
    //     prettyName: 'Restore Defaults',
    //     animationDuration: 800,
    //     arrows: true,
    //     autoplay: false,
    //     autoplayMedium: false,
    //     autoplaySmall: false,
    //     autoplaySpeed: 2000,
    //     autoWidth: false,
    //     breakpointMedium: 992,
    //     breakpointSmall: 576,
    //     centerMode: false,
    //     centerModeMedium: false,
    //     centerModeSmall: false,
    //     dots: false,
    //     dotsMedium: true,
    //     dotsSmall: false,
    //     edgePadding: 0,
    //     edgePaddingMedium: 0,
    //     edgePaddingSmall: 50,
    //     freezable: true,
    //     gap: 0,
    //     gapMedium: 0,
    //     gapSmall: 0,
    //     infiniteLoop: false,
    //     infiniteLoopMedium: false,
    //     infiniteLoopSmall: false,
    //     initialSlide: 0,
    //     lib: libraries.GLIDE,
    //     linkingType: linkTypes.NONE,
    //     mouseDrag: true,
    //     pauseOnHover: true,
    //     pauseOnDotsHover: true,
    //     secondaryGap: 10,
    //     secondaryGapMedium: 10,
    //     secondaryGapSmall: 5,
    //     secondaryHeight: 60,
    //     secondaryHeightMedium: 60,
    //     secondaryHeightSmall: 40,
    //     secondarySlidesShown: 10,
    //     secondarySlidesShownMedium: 6,
    //     secondarySlidesShownSmall: 4,
    //     secondaryWidth: 100,
    //     secondaryWidthMedium: 100,
    //     secondaryWidthSmall: 66,
    //     slidesShown: 3,
    //     slidesShownMedium: 2,
    //     slidesShownSmall: 1,
    //     slidesToScroll: 3,
    //     slidesToScrollMedium: 2,
    //     slidesToScrollSmall: 1,
    //     trimSpace: true,
    //     sliderType: types.DEFAULT,
    //     withWrapper: false,
    // },
    posts: {
        prettyName: 'Content Widgets',
        arrows: false,
        centerModeSmall: true,
        edgePaddingSmall: 50,
        edgePaddingMedium: 50,
        infiniteLoopSmall: true,
        infiniteLoopMedium: true,
        slidesToScroll: 3,
        slidesToScrollMedium: 1,
        slidesToScrollSmall: 1,
    },
    imageCarousel: {
        prettyName: 'Simple Image Carousel',
        arrows: true,
        autoplay: true,
        autoplayMedium: true,
        autoplaySmall: true,
        autoplaySpeed: 2600,
        centerMode: true,
        centerModeMedium: true,
        centerModeSmall: true,
        dots: true,
        dotsMedium: true,
        dotsSmall: true,
        edgePadding: 100,
        edgePaddingMedium: 80,
        edgePaddingSmall: 50,
        infiniteLoop: true,
        initialSlide: 0,
        slidesToScroll: 1,
        slidesToScrollMedium: 1,
        slidesToScrollSmall: 1,
        /* new */
        animationDuration: 800,
        autoWidth: false,
        breakpointMedium: 992,
        breakpointSmall: 576,
        freezable: true,
        gap: 0,
        gapMedium: 0,
        gapSmall: 0,
        infiniteLoopMedium: true,
        infiniteLoopSmall: true,
        lib: libraries.GLIDE,
        linkingType: linkTypes.NONE,
        mouseDrag: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        secondaryGap: 10,
        secondaryGapMedium: 10,
        secondaryGapSmall: 5,
        secondaryHeight: 60,
        secondaryHeightMedium: 60,
        secondaryHeightSmall: 40,
        secondarySlidesShown: 10,
        secondarySlidesShownMedium: 6,
        secondarySlidesShownSmall: 4,
        secondaryWidth: 100,
        secondaryWidthMedium: 100,
        secondaryWidthSmall: 66,
        slidesShown: 5,
        slidesShownMedium: 3,
        slidesShownSmall: 1,
        sliderType: types.DEFAULT,
        trimSpace: true,
        withWrapper: false,
    },
    imageGalleryWithPreviews: {
        prettyName: 'Image Gallery with Thumbnail-Previews / Navigation-Slider',
        animationDuration: 800,
        arrows: true,
        autoplay: false,
        autoplayMedium: false,
        autoplaySmall: false,
        autoplaySpeed: 2000,
        autoWidth: false,
        breakpointMedium: 992,
        breakpointSmall: 576,
        centerMode: false,
        centerModeMedium: false,
        centerModeSmall: false,
        dots: false,
        dotsMedium: false,
        dotsSmall: false,
        edgePadding: 0,
        edgePaddingMedium: 0,
        edgePaddingSmall: 0,
        freezable: true,
        gap: 0,
        gapMedium: 0,
        gapSmall: 0,
        infiniteLoop: false,
        infiniteLoopMedium: false,
        infiniteLoopSmall: false,
        initialSlide: 0,
        lib: libraries.SPLIDE,
        linkingType: linkTypes.THUMBS,
        mouseDrag: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        secondaryGap: 10,
        secondaryGapMedium: 10,
        secondaryGapSmall: 5,
        secondaryHeight: 60,
        secondaryHeightMedium: 60,
        secondaryHeightSmall: 40,
        secondarySlidesShown: 10,
        secondarySlidesShownMedium: 6,
        secondarySlidesShownSmall: 4,
        secondaryWidth: 100,
        secondaryWidthMedium: 100,
        secondaryWidthSmall: 66,
        slidesShown: 1,
        slidesShownMedium: 1,
        slidesShownSmall: 1,
        slidesToScroll: 1,
        slidesToScrollMedium: 1,
        slidesToScrollSmall: 1,
        sliderType: types.SPLIDE_SLIDER,
        trimSpace: true,
        withWrapper: false,
    },
};
