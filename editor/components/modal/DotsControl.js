import { components } from 'wp';

import { MoreHorizontal as Dots } from '@gebruederheitz/wp-editor-components/dist/icons';
import {
    InputWrap,
    MediumVariation,
    ModalInputWithIcon,
    SmallVariation,
} from './ModalInputWithIcon';

const { ToggleControl } = components;

export const DotsControl = (props) => {
    const {
        attributes: { dots, dotsMedium, dotsSmall },
        setAttributes,
    } = props;

    return (
        <ModalInputWithIcon label="Show dots" icon={Dots}>
            <InputWrap>
                <ToggleControl
                    checked={dots}
                    onChange={(dots) => {
                        setAttributes({ dots });
                    }}
                />
            </InputWrap>
            <MediumVariation {...props}>
                <ToggleControl
                    checked={dotsMedium}
                    onChange={(dotsMedium) => {
                        setAttributes({ dotsMedium });
                    }}
                />
            </MediumVariation>
            <SmallVariation {...props}>
                <ToggleControl
                    checked={dotsSmall}
                    onChange={(dotsSmall) => {
                        setAttributes({ dotsSmall });
                    }}
                />
            </SmallVariation>
        </ModalInputWithIcon>
    );
};
