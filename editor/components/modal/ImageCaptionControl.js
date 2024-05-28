import { components } from 'wp';

import { Label } from '@gebruederheitz/wp-editor-components/dist/icons';
import { InputWrap, ModalInputWithIcon } from './ModalInputWithIcon';

const { ToggleControl } = components;

export const ImageCaptionControl = (props) => {
    const {
        attributes: { imageShowCaptions, type },
        setAttributes,
    } = props;

    return (
        type === 'core/image' && (
            <ModalInputWithIcon label="Show image captions" icon={Label}>
                <InputWrap>
                    <ToggleControl
                        checked={imageShowCaptions}
                        onChange={(imageShowCaptions) => {
                            setAttributes({ imageShowCaptions });
                        }}
                    />
                </InputWrap>
            </ModalInputWithIcon>
        )
    );
};
