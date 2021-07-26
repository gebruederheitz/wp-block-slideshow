import { components } from 'wp';
import { Loop as LoopIcon } from '@gebruederheitz/wp-editor-components/dist/icons';

import {
    InputWrap,
    MediumVariation,
    ModalInputWithIcon,
    SmallVariation,
} from './ModalInputWithIcon';

const { ToggleControl } = components;

export const InfiniteLoopControl = (props) => {
    const {
        /* Parent component props passed down directly */
        attributes: { infiniteLoop, infiniteLoopMedium, infiniteLoopSmall },
        setAttributes,
    } = props;

    return (
        <ModalInputWithIcon icon={LoopIcon} label="Infinite loop">
            <InputWrap>
                <ToggleControl
                    checked={infiniteLoop}
                    onChange={(infiniteLoop) => {
                        setAttributes({ infiniteLoop });
                    }}
                />
            </InputWrap>
            <MediumVariation {...props}>
                <ToggleControl
                    checked={infiniteLoopMedium}
                    onChange={(infiniteLoopMedium) => {
                        setAttributes({ infiniteLoopMedium });
                    }}
                />
            </MediumVariation>
            <SmallVariation {...props}>
                <ToggleControl
                    checked={infiniteLoopSmall}
                    onChange={(infiniteLoopSmall) => {
                        setAttributes({ infiniteLoopSmall });
                    }}
                />
            </SmallVariation>
        </ModalInputWithIcon>
    );
};
