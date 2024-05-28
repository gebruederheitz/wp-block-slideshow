import { components } from 'wp';
import { SwapHoriz as GapIcon } from '@gebruederheitz/wp-editor-components/dist/icons';

import {
    InputWrap,
    MediumVariation,
    ModalInputWithIcon,
    SmallVariation,
} from './ModalInputWithIcon';

const { RangeControl } = components;

export const GapControl = (props) => {
    const {
        attributes: { gap, gapMedium, gapSmall },
        setAttributes,
    } = props;

    return (
        <ModalInputWithIcon icon={GapIcon} label="Slide Gap">
            <InputWrap>
                <RangeControl
                    value={gap}
                    withInputField={true}
                    min={0}
                    max={200}
                    isShiftStepEnabled={false}
                    onChange={(gap) => {
                        setAttributes({
                            gap,
                        });
                    }}
                />
            </InputWrap>
            <MediumVariation {...props}>
                <RangeControl
                    value={gapMedium}
                    withInputField={true}
                    min={0}
                    max={200}
                    isShiftStepEnabled={false}
                    onChange={(gapMedium) => {
                        setAttributes({
                            gapMedium,
                        });
                    }}
                />
            </MediumVariation>
            <SmallVariation {...props}>
                <RangeControl
                    value={gapSmall}
                    withInputField={true}
                    min={0}
                    max={200}
                    isShiftStepEnabled={false}
                    onChange={(gapSmall) => {
                        setAttributes({
                            gapSmall,
                        });
                    }}
                />
            </SmallVariation>
        </ModalInputWithIcon>
    );
};
