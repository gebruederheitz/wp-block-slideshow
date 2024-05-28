import { components } from 'wp';
import { ViewColumn as CountIcon } from '@gebruederheitz/wp-editor-components/dist/icons';

import {
    InputWrap,
    MediumVariation,
    ModalInputWithIcon,
    SmallVariation,
} from './ModalInputWithIcon';
import { libraries } from '../../../frontend';

const { RangeControl } = components;

export const SlidesShownControl = (props) => {
    const {
        attributes: {
            sliderLibrary,
            slidesShown,
            slidesShownMedium,
            slidesShownSmall,
        },
        setAttributes,
    } = props;

    const step = sliderLibrary === libraries.SWIPER ? 0.25 : 1;

    return (
        <>
            {[libraries.SPLIDE, libraries.SWIPER].indexOf(sliderLibrary) >
                -1 && (
                <ModalInputWithIcon icon={CountIcon} label="Slides shown">
                    <InputWrap>
                        <RangeControl
                            value={slidesShown}
                            withInputField={true}
                            min={1}
                            max={10}
                            step={step}
                            isShiftStepEnabled={true}
                            onChange={(slidesShown) => {
                                setAttributes({ slidesShown });
                            }}
                        />
                    </InputWrap>
                    <MediumVariation {...props}>
                        <RangeControl
                            value={slidesShownMedium}
                            withInputField={true}
                            min={1}
                            max={10}
                            step={step}
                            isShiftStepEnabled={false}
                            onChange={(slidesShownMedium) => {
                                setAttributes({ slidesShownMedium });
                            }}
                        />
                    </MediumVariation>
                    <SmallVariation {...props}>
                        <RangeControl
                            value={slidesShownSmall}
                            withInputField={true}
                            min={1}
                            max={10}
                            step={step}
                            isShiftStepEnabled={false}
                            onChange={(slidesShownSmall) => {
                                setAttributes({ slidesShownSmall });
                            }}
                        />
                    </SmallVariation>
                </ModalInputWithIcon>
            )}
        </>
    );
};
