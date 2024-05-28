import { components } from 'wp';
import { Filter3 } from '@gebruederheitz/wp-editor-components/dist/icons';

import {
    InputWrap,
    MediumVariation,
    ModalInputWithIcon,
    SmallVariation,
} from './ModalInputWithIcon';
import { libraries } from '../../../frontend';

const { RangeControl } = components;

export const SlidesToScrollControl = (props) => {
    const {
        attributes: {
            sliderLibrary,
            slidesShown,
            slidesToScroll,
            slidesToScrollMedium,
            slidesToScrollSmall,
        },
        setAttributes,
    } = props;

    return (
        <>
            {[libraries.SPLIDE, libraries.SWIPER].indexOf(sliderLibrary) >
                -1 && (
                <ModalInputWithIcon icon={Filter3} label="Slides scrolled">
                    <InputWrap>
                        <RangeControl
                            value={slidesToScroll}
                            withInputField={true}
                            min={1}
                            max={slidesShown}
                            isShiftStepEnabled={false}
                            onChange={(slidesToScroll) => {
                                setAttributes({ slidesToScroll });
                            }}
                        />
                    </InputWrap>
                    <MediumVariation {...props}>
                        <RangeControl
                            value={slidesToScrollMedium}
                            withInputField={true}
                            min={1}
                            max={slidesShown}
                            isShiftStepEnabled={false}
                            onChange={(slidesToScrollMedium) => {
                                setAttributes({ slidesToScrollMedium });
                            }}
                        />
                    </MediumVariation>
                    <SmallVariation {...props}>
                        <RangeControl
                            value={slidesToScrollSmall}
                            withInputField={true}
                            min={1}
                            max={slidesShown}
                            isShiftStepEnabled={false}
                            onChange={(slidesToScrollSmall) => {
                                setAttributes({ slidesToScrollSmall });
                            }}
                        />
                    </SmallVariation>
                </ModalInputWithIcon>
            )}
        </>
    );
};
