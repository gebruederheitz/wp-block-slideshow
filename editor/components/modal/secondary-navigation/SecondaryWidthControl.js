import { components } from 'wp';
import { SpaceBar as WidthIcon } from '@gebruederheitz/wp-editor-components/dist/icons';

import {
    InputWrap,
    MediumVariation,
    ModalInputWithIcon,
    SmallVariation,
} from '../ModalInputWithIcon';

const { RangeControl } = components;

export const SecondaryWidthControl = (props) => {
    const {
        attributes: {
            secondaryWidth,
            secondaryWidthMedium,
            secondaryWidthSmall,
        },
        setAttributes,
    } = props;

    return (
        <ModalInputWithIcon icon={WidthIcon} label="Thumbnail width">
            <InputWrap>
                <RangeControl
                    value={secondaryWidth}
                    withInputField={true}
                    min={20}
                    max={200}
                    isShiftStepEnabled={false}
                    onChange={(secondaryWidth) => {
                        setAttributes({
                            secondaryWidth,
                        });
                    }}
                />
            </InputWrap>
            <MediumVariation {...props}>
                <RangeControl
                    value={secondaryWidthMedium}
                    withInputField={true}
                    min={20}
                    max={200}
                    isShiftStepEnabled={false}
                    onChange={(secondaryWidthMedium) => {
                        setAttributes({
                            secondaryWidthMedium,
                        });
                    }}
                />
            </MediumVariation>
            <SmallVariation {...props}>
                <RangeControl
                    value={secondaryWidthSmall}
                    withInputField={true}
                    min={20}
                    max={200}
                    isShiftStepEnabled={false}
                    onChange={(secondaryWidthSmall) => {
                        setAttributes({
                            secondaryWidthSmall,
                        });
                    }}
                />
            </SmallVariation>
        </ModalInputWithIcon>
    );
};
