import { components } from 'wp';
import { ViewColumn as CountIcon } from '@gebruederheitz/wp-editor-components/dist/icons';

import {
    InputWrap,
    MediumVariation,
    ModalInputWithIcon,
    SmallVariation,
} from '../ModalInputWithIcon';

const { RangeControl } = components;

export const SecondarySlideCountControl = (props) => {
    const {
        attributes: {
            secondarySlidesShown,
            secondarySlidesShownMedium,
            secondarySlidesShownSmall,
        },
        setAttributes,
    } = props;

    return (
        <ModalInputWithIcon icon={CountIcon} label="Thumbnails shown">
            <InputWrap>
                <RangeControl
                    value={secondarySlidesShown}
                    withInputField={true}
                    min={1}
                    max={16}
                    isShiftStepEnabled={false}
                    onChange={(secondarySlidesShown) => {
                        setAttributes({
                            secondarySlidesShown,
                        });
                    }}
                />
            </InputWrap>
            <MediumVariation {...props}>
                <RangeControl
                    value={secondarySlidesShownMedium}
                    withInputField={true}
                    min={1}
                    max={12}
                    isShiftStepEnabled={false}
                    onChange={(secondarySlidesShownMedium) => {
                        setAttributes({
                            secondarySlidesShownMedium,
                        });
                    }}
                />
            </MediumVariation>
            <SmallVariation {...props}>
                <RangeControl
                    value={secondarySlidesShownSmall}
                    withInputField={true}
                    min={1}
                    max={10}
                    isShiftStepEnabled={false}
                    onChange={(secondarySlidesShownSmall) => {
                        setAttributes({
                            secondarySlidesShownSmall,
                        });
                    }}
                />
            </SmallVariation>
        </ModalInputWithIcon>
    );
};
