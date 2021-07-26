import { components } from 'wp';
import { SwapHoriz } from '@gebruederheitz/wp-editor-components/dist/icons';

import {
    InputWrap,
    MediumVariation,
    ModalInputWithIcon,
    SmallVariation,
} from './ModalInputWithIcon';

const { RangeControl } = components;

export const EdgePaddingControl = (props) => {
    const {
        attributes: { edgePadding, edgePaddingMedium, edgePaddingSmall },
        setAttributes,
    } = props;

    return (
        <ModalInputWithIcon icon={SwapHoriz} label="Edge Padding">
            <InputWrap>
                <RangeControl
                    value={edgePadding}
                    withInputField={true}
                    min={0}
                    max={200}
                    step={10}
                    onChange={(edgePadding) => {
                        setAttributes({ edgePadding });
                    }}
                />
            </InputWrap>
            <MediumVariation {...props}>
                <RangeControl
                    value={edgePaddingMedium}
                    withInputField={true}
                    min={0}
                    max={200}
                    step={10}
                    onChange={(edgePaddingMedium) => {
                        setAttributes({ edgePaddingMedium });
                    }}
                />
            </MediumVariation>
            <SmallVariation {...props}>
                <RangeControl
                    value={edgePaddingSmall}
                    withInputField={true}
                    min={0}
                    max={200}
                    step={10}
                    onChange={(edgePaddingSmall) => {
                        setAttributes({ edgePaddingSmall });
                    }}
                />
            </SmallVariation>
        </ModalInputWithIcon>
    );
};
