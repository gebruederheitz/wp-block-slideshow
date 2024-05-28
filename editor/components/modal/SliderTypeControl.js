import { components, i18n } from 'wp';
import { ViewCarousel as CenterModeIcon } from '@gebruederheitz/wp-editor-components/dist/icons';

import { libraries } from '../../../frontend';
import { types } from '../../../frontend/slideshow-options';
import { ModalInputWithIcon } from './ModalInputWithIcon';

const { ButtonGroup, Button } = components;
const { __ } = i18n;

export const SliderTypeControl = (props) => {
    const {
        /* Parent component props passed down directly */
        attributes: { sliderLibrary, sliderType },
        setAttributes,
    } = props;

    let firstOption;
    let secondOption;
    let thirdOption = null;

    switch (sliderLibrary) {
        case libraries.GLIDE:
            firstOption = types.GLIDE_SLIDER;
            secondOption = types.GLIDE_CAROUSEL;
            if (
                [types.GLIDE_SLIDER, types.GLIDE_CAROUSEL].indexOf(
                    sliderType
                ) === -1
            ) {
                setAttributes({ sliderType: firstOption });
            }
            break;
        case libraries.SPLIDE:
            firstOption = types.SPLIDE_SLIDER;
            secondOption = types.SPLIDE_CAROUSEL;
            if (
                [types.SPLIDE_SLIDER, types.SPLIDE_CAROUSEL].indexOf(
                    sliderType
                ) === -1
            ) {
                setAttributes({ sliderType: firstOption });
            }
            break;
        case libraries.SWIPER:
            firstOption = types.SWIPER_SLIDER;
            secondOption = types.SWIPER_CAROUSEL;
            thirdOption = types.SWIPER_COVERFLOW;
            if (
                [
                    types.SWIPER_SLIDER,
                    types.SWIPER_CAROUSEL,
                    types.SWIPER_COVERFLOW,
                ].indexOf(sliderType) === -1
            ) {
                setAttributes({ sliderType: firstOption });
            }
            break;
    }

    return (
        <ModalInputWithIcon label="Slideshow Type" icon={CenterModeIcon}>
            <ButtonGroup>
                <Button
                    isPrimary
                    isPressed={sliderType === firstOption}
                    onClick={() => {
                        setAttributes({
                            sliderType: libraries.GLIDE,
                        });
                    }}
                >
                    {__('Slider', 'ghwp')}
                </Button>
                <Button
                    isPrimary
                    isPressed={sliderType === secondOption}
                    onClick={() => {
                        setAttributes({
                            sliderType: secondOption,
                        });
                    }}
                >
                    {__('Carousel', 'ghwp')}
                </Button>
                {thirdOption !== null && (
                    <Button
                        isPrimary
                        isPressed={sliderType === thirdOption}
                        onClick={() => {
                            setAttributes({
                                sliderType: libraries.SWIPER,
                            });
                        }}
                    >
                        {__('Coverflow', 'ghwp')}
                    </Button>
                )}
            </ButtonGroup>
        </ModalInputWithIcon>
    );
};
