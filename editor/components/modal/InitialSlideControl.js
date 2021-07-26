import { components } from 'wp';
import { Alarm } from '@gebruederheitz/wp-editor-components/dist/icons';

import { ModalInputWithIcon } from './ModalInputWithIcon';

const { ButtonGroup, Button, RangeControl } = components;

export const InitialSlideControl = (props) => {
    const {
        /* Parent component props passed down directly */
        attributes: { initialSlide },
        children,
        setAttributes,
        /* own props */
        rangeSlider = false,
    } = props;

    return (
        <ModalInputWithIcon label="Initial slide" icon={Alarm}>
            {rangeSlider ? (
                <RangeControl
                    value={initialSlide + 1}
                    onChange={(newVal) => {
                        setAttributes({
                            initialSlide: newVal - 1,
                        });
                    }}
                    min={1}
                    max={children.length}
                    withInputField={true}
                />
            ) : (
                <ButtonGroup style={{ display: 'flex' }}>
                    {children.map((e, i) => (
                        <Button
                            key={e.title}
                            isPrimary
                            onClick={() => {
                                setAttributes({
                                    initialSlide: i,
                                });
                            }}
                            isPressed={initialSlide === i}
                        >
                            {i + 1}
                        </Button>
                    ))}
                </ButtonGroup>
            )}
        </ModalInputWithIcon>
    );
};
