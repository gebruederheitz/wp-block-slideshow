import { components, i18n } from 'wp';
import { ViewCarousel as CenterModeIcon } from '@gebruederheitz/wp-editor-components/dist/icons';

import { libraries } from '../../../frontend';
import { ModalInputWithIcon } from './ModalInputWithIcon';

const { ButtonGroup, Button } = components;
const { __ } = i18n;

export const LibraryControl = (props) => {
    const {
        /* Parent component props passed down directly */
        attributes: { sliderLibrary },
        setAttributes,
    } = props;

    return (
        <ModalInputWithIcon
            label="Frontend Library Module to use"
            icon={CenterModeIcon}
        >
            <ButtonGroup>
                <Button
                    isPrimary
                    isPressed={sliderLibrary === libraries.GLIDE}
                    onClick={() => {
                        setAttributes({
                            sliderLibrary: libraries.GLIDE,
                        });
                    }}
                >
                    {__('Glide.js', 'ghwp')}
                </Button>
                <Button
                    isPrimary
                    isPressed={sliderLibrary === libraries.SPLIDE}
                    onClick={() => {
                        setAttributes({
                            sliderLibrary: libraries.SPLIDE,
                        });
                    }}
                >
                    {__('Splide', 'ghwp')}
                </Button>
            </ButtonGroup>
        </ModalInputWithIcon>
    );
};
