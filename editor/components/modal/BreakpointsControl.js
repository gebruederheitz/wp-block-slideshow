import { components } from 'wp';
import { SwapHoriz } from '@gebruederheitz/wp-editor-components/dist/icons';

import {
    MediumVariation,
    ModalInputWithIcon,
    SmallVariation,
} from './ModalInputWithIcon';

const { TextControl } = components;

export const BreakpointsControl = (props) => {
    const {
        /* Parent component props passed down directly */
        attributes: { breakpointMedium, breakpointSmall },
        setAttributes,
    } = props;

    return (
        <ModalInputWithIcon icon={SwapHoriz} label="Breakpoints">
            <MediumVariation {...props}>
                <TextControl
                    value={breakpointMedium}
                    type={'number'}
                    onChange={(breakpointMedium) => {
                        setAttributes({ breakpointMedium });
                    }}
                />
            </MediumVariation>
            <SmallVariation {...props}>
                <TextControl
                    value={breakpointSmall}
                    type={'number'}
                    onChange={(breakpointSmall) => {
                        setAttributes({ breakpointSmall });
                    }}
                />
            </SmallVariation>
        </ModalInputWithIcon>
    );
};
