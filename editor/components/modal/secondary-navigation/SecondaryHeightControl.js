import { components } from 'wp';
import { Height as HeightIcon } from '@gebruederheitz/wp-editor-components/dist/icons';

import {
    InputWrap,
    MediumVariation,
    ModalInputWithIcon,
    SmallVariation,
} from '../ModalInputWithIcon';

const { RangeControl } = components;

export const SecondaryHeightControl = (props) => {
    const {
        attributes: {
            secondaryHeight,
            secondaryHeightMedium,
            secondaryHeightSmall,
        },
        setAttributes,
    } = props;

    return (
        <ModalInputWithIcon icon={HeightIcon} label="Thumbnail height">
            <InputWrap>
                <RangeControl
                    value={secondaryHeight}
                    withInputField={true}
                    min={20}
                    max={200}
                    isShiftStepEnabled={false}
                    onChange={(secondaryHeight) => {
                        setAttributes({
                            secondaryHeight,
                        });
                    }}
                />
            </InputWrap>
            <MediumVariation {...props}>
                <RangeControl
                    value={secondaryHeightMedium}
                    withInputField={true}
                    min={20}
                    max={200}
                    isShiftStepEnabled={false}
                    onChange={(secondaryHeightMedium) => {
                        setAttributes({
                            secondaryHeightMedium,
                        });
                    }}
                />
            </MediumVariation>
            <SmallVariation {...props}>
                <RangeControl
                    value={secondaryHeightSmall}
                    withInputField={true}
                    min={20}
                    max={200}
                    isShiftStepEnabled={false}
                    onChange={(secondaryHeightSmall) => {
                        setAttributes({
                            secondaryHeightSmall,
                        });
                    }}
                />
            </SmallVariation>
        </ModalInputWithIcon>
    );
};
