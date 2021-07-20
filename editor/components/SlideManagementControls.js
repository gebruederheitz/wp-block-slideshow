import classnames from 'classnames';
import { components, i18n } from 'wp';
import {
    Delete as DeleteIcon,
    KeyboardArrowDown,
    KeyboardArrowUp,
} from '@gebruederheitz/wp-editor-components/dist/icons';
import { truncateString } from '@gebruederheitz/wp-editor-components';

const { Button, ButtonGroup, Icon, PanelBody, PanelRow } = components;
const { __ } = i18n;

export const SlideManagementControls = (props) => {
    const {
        /* Parent component props passed down directly */
        attributes: { currentlyEditedChildIndex, type },
        children,
        deleteChild,
        moveChild,
        setCurrentlyEditedChild,
        /* Own props */
        onSlideAdd,
        getSlideDisplayName,
    } = props;

    return (
        <PanelBody
            title={__('Slide management', 'ghwp')}
            initialOpen={true}
            icon={'more'}
        >
            {children.map((slide, index) => (
                <PanelRow key={index}>
                    <ButtonGroup
                        style={{
                            display: 'inline-flex',
                            paddingBottom: '2px',
                            width: '100%',
                        }}
                        className={classnames({
                            'is-active': index === currentlyEditedChildIndex,
                        })}
                    >
                        {/*Button UP*/}
                        <Button
                            isPrimary
                            style={{
                                alignItems: 'center',
                            }}
                            onClick={() => moveChild(slide, 'up')}
                        >
                            <KeyboardArrowUp />
                        </Button>
                        {/*Select Button & Title*/}
                        <Button
                            isPrimary
                            style={{
                                alignItems: 'center',
                                flex: '1 1 auto',
                            }}
                            onClick={() => setCurrentlyEditedChild(slide)}
                        >
                            {truncateString(
                                getSlideDisplayName(type, slide.attributes),
                                {
                                    length: 20,
                                }
                            ) || `Slide ${index + 1}`}
                        </Button>
                        {/*Delete Button*/}
                        <Button
                            isPrimary
                            isDestructive
                            style={{
                                alignItems: 'center',
                            }}
                            onClick={() => {
                                if (
                                    window.confirm(__('Delete slide?', 'ghwp'))
                                ) {
                                    deleteChild(slide);
                                }
                            }}
                        >
                            <DeleteIcon />
                        </Button>
                        {/*Button DOWN*/}
                        <Button
                            isPrimary
                            style={{
                                alignItems: 'center',
                            }}
                            onClick={() => moveChild(slide, 'down')}
                        >
                            <KeyboardArrowDown />
                        </Button>
                    </ButtonGroup>
                </PanelRow>
            ))}
            <PanelRow>
                <Button
                    isPrimary
                    style={{
                        alignItems: 'center',
                        width: '100%',
                    }}
                    onClick={onSlideAdd}
                >
                    <Icon icon="plus" />
                    {__('Add slide', 'ghwp')}
                </Button>
            </PanelRow>
        </PanelBody>
    );
};
