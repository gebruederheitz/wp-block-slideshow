import { components } from 'wp';
import {
    KeyboardArrowLeft,
    KeyboardArrowRight,
} from '@gebruederheitz/wp-editor-components/dist/icons';

const { Button } = components;

export const SlideshowEditorArrow = ({
    direction,
    onClick,
    disabled = false,
}) => (
    <Button className="ghwp-slider-arrow" onClick={onClick} disabled={disabled}>
        {direction === 'left' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
    </Button>
);
