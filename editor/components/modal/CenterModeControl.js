import { components } from 'wp';
import { ViewCarousel as CenterModeIcon } from '@gebruederheitz/wp-editor-components/dist/icons';

import {
    InputWrap,
    MediumVariation,
    ModalInputWithIcon,
    SmallVariation,
} from './ModalInputWithIcon';

const { ToggleControl } = components;

export const CenterModeControl = (props) => {
    const {
        /* Parent component props passed down directly */
        attributes: { centerMode, centerModeMedium, centerModeSmall },
        setAttributes,
    } = props;

    return (
        <ModalInputWithIcon icon={CenterModeIcon} label="Center Mode">
            <InputWrap>
                <ToggleControl
                    checked={centerMode}
                    onChange={(centerMode) => {
                        setAttributes({ centerMode });
                    }}
                />
            </InputWrap>
            <MediumVariation {...props}>
                <ToggleControl
                    checked={centerModeMedium}
                    onChange={(centerModeMedium) => {
                        setAttributes({ centerModeMedium });
                    }}
                />
            </MediumVariation>
            <SmallVariation {...props}>
                <ToggleControl
                    checked={centerModeSmall}
                    onChange={(centerModeSmall) => {
                        setAttributes({ centerModeSmall });
                    }}
                />
            </SmallVariation>
        </ModalInputWithIcon>
    );
};
