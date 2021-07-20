import classnames from 'classnames';
import { components, i18n } from 'wp';

import {
    FontAwesomeIcon,
    truncateString,
} from '@gebruederheitz/wp-editor-components';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';

const { ButtonGroup, Button } = components;
const { __ } = i18n;

export const SlideControlButtons = (props) => {
    const {
        active,
        attributes: { type },
        deleteChild,
        moveChild,
        index,
        setCurrentlyEditedChild,
        slide,
        getSlideDisplayName,
    } = props;

    let nameShown =
        getSlideDisplayName(type, slide.attributes) || `Slide ${index + 1}`;

    return (
        <li className={classnames({ 'is-active': active })}>
            {active ? (
                <ButtonGroup>
                    <Button
                        isPrimary
                        onClick={() => {
                            moveChild(slide, 'up');
                        }}
                    >
                        ←
                    </Button>
                    <Button
                        isPrimary
                        onClick={() => {
                            setCurrentlyEditedChild(slide);
                        }}
                    >
                        {truncateString(nameShown, { length: 20 })}
                    </Button>
                    <Button
                        isPrimary
                        isDestructive
                        onClick={() => {
                            if (window.confirm(__('Delete slide?', 'ghwp'))) {
                                deleteChild(slide);
                            }
                        }}
                    >
                        <FontAwesomeIcon icon={faTrash} small />
                    </Button>
                    <Button
                        isPrimary
                        onClick={() => {
                            moveChild(slide, 'down');
                        }}
                    >
                        →
                    </Button>
                </ButtonGroup>
            ) : (
                <Button
                    isPrimary
                    onClick={() => {
                        setCurrentlyEditedChild(slide);
                    }}
                >
                    {truncateString(nameShown, { length: 20 })}
                </Button>
            )}
        </li>
    );
};
