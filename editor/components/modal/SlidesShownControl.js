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

    return (
        <>
            {sliderLibrary === libraries.SPLIDE && (
                <ModalInputWithIcon icon={CountIcon} label="Slides shown">
                    <InputWrap>
                        <RangeControl
                            value={slidesShown}
                            withInputField={true}
                            min={1}
                            max={10}
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
