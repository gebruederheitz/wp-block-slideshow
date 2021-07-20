import { components } from 'wp';
import {
    Filter1,
    Filter2,
    Filter3,
    Filter5,
    Filter6,
} from '@gebruederheitz/wp-editor-components/dist/icons';

const { ToolbarButton } = components;

export const SlideCountToolbar = (props) => {
    const {
        /* Parent component props passed down directly */
        attributes: { slidesShown },
        setAttributes,
    } = props;

    return (
        <>
            <ToolbarButton
                icon={Filter1}
                label={'Set maximum visible slide count to 1'}
                isPressed={slidesShown === 1}
                onClick={() => {
                    setAttributes({
                        slidesShown: 1,
                    });
                }}
            />
            <ToolbarButton
                icon={Filter2}
                label={'Set maximum visible slide count to 2'}
                isPressed={slidesShown === 2}
                onClick={() => {
                    setAttributes({
                        slidesShown: 2,
                    });
                }}
            />
            <ToolbarButton
                icon={Filter3}
                label={'Set maximum visible slide count to 3'}
                isPressed={slidesShown === 3}
                onClick={() => {
                    setAttributes({
                        slidesShown: 3,
                    });
                }}
            />
            <ToolbarButton
                icon={Filter5}
                label={'Set maximum visible slide count to 5'}
                isPressed={slidesShown === 5}
                onClick={() => {
                    setAttributes({
                        slidesShown: 5,
                    });
                }}
            />
            <ToolbarButton
                icon={Filter6}
                label={'Set maximum visible slide count to 6'}
                isPressed={slidesShown === 6}
                onClick={() => {
                    setAttributes({
                        slidesShown: 6,
                    });
                }}
            />
        </>
    );
};
