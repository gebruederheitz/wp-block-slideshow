import { components } from 'wp';
import { SwapHoriz as GapIcon } from '@gebruederheitz/wp-editor-components/dist/icons';

import {
    InputWrap,
    MediumVariation,
    ModalInputWithIcon,
    SmallVariation,
} from '../ModalInputWithIcon';

const { RangeControl } = components;

export const SecondaryGapControl = (props) => {
    const {
        attributes: { secondaryGap, secondaryGapMedium, secondaryGapSmall },
        setAttributes,
    } = props;

    return (
        <ModalInputWithIcon icon={GapIcon} label="Thumbnail gap">
            <InputWrap>
                <RangeControl
                    value={secondaryGap}
                    withInputField={true}
                    min={0}
                    max={200}
                    isShiftStepEnabled={false}
                    onChange={(secondaryGap) => {
                        setAttributes({
                            secondaryGap,
                        });
                    }}
                />
            </InputWrap>
            <MediumVariation {...props}>
                <RangeControl
                    value={secondaryGapMedium}
                    withInputField={true}
                    min={0}
                    max={200}
                    isShiftStepEnabled={false}
                    onChange={(secondaryGapMedium) => {
                        setAttributes({
                            secondaryGapMedium,
                        });
                    }}
                />
            </MediumVariation>
            <SmallVariation {...props}>
                <RangeControl
                    value={secondaryGapSmall}
                    withInputField={true}
                    min={0}
                    max={200}
                    isShiftStepEnabled={false}
                    onChange={(secondaryGapSmall) => {
                        setAttributes({
                            secondaryGapSmall,
                        });
                    }}
                />
            </SmallVariation>
        </ModalInputWithIcon>
    );
};
