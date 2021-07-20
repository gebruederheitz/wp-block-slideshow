import { components } from 'wp';

import { SlideControlButtons } from './SlideControlButtons';
import { AddIconButton } from '@gebruederheitz/wp-editor-components';

const { ButtonGroup } = components;

export const SlideshowHeader = (props) => {
    const {
        attributes: { currentlyEditedChildIndex },
        children,
        onSlideAdd,
    } = props;

    return (
        <ul className="ghwp-slide-list">
            {children.map((slide, index) => {
                return (
                    <SlideControlButtons
                        key={index}
                        index={index}
                        slide={slide}
                        active={index === currentlyEditedChildIndex}
                        {...props}
                    />
                );
            })}
            <li>
                <ButtonGroup>
                    <div className="ghwp-editor-tab">
                        <AddIconButton
                            className="ghwp-editor-slide-add-button"
                            onClick={onSlideAdd}
                        />
                    </div>
                </ButtonGroup>
            </li>
        </ul>
    );
};
