import { blockEditor, blocks, components, element, i18n } from 'wp';
import classnames from 'classnames';
import {
    WithControlledChildren,
    WithFocusWithin,
} from '@gebruederheitz/wp-editor-components';

import { SlideshowHeader } from './components/SlideshowHeader';
import { SlideshowEditorArrow } from './components/SlideshowEditorArrow';
import { Controls } from './controls';
import { slideshowChildren } from './utils/children';

const { InnerBlocks } = blockEditor;
const { createBlock } = blocks;
const { Placeholder, SelectControl } = components;
const { __ } = i18n;
const { Component } = element;

class Edit extends Component {
    constructor(props) {
        super(props);
        props.setCurrentlyEditedChild({});
    }

    render() {
        const {
            /* own props*/
            attributes: { currentlyEditedChildIndex, type },
            className,
            isSelected,
            setAttributes,
            /* select props */
            focusWithin,
            /* dispatch props */
            insertChild,
            selectNextChild,
            selectPreviousChild,
        } = this.props;

        const onSlideAdd = () => {
            const attributes =
                slideshowChildren.getSlideDefaultAttributes(type);
            const newSlide = createBlock(type, attributes);
            insertChild(newSlide);
        };

        return (
            <div className={classnames([className, 'ghwp-carousel'])}>
                {type ? (
                    <>
                        <Controls
                            onSlideAdd={onSlideAdd}
                            getSlideDisplayName={
                                slideshowChildren.getSlideDisplayName
                            }
                            {...this.props}
                        />
                        {(isSelected || focusWithin) && (
                            <SlideshowHeader
                                onSlideAdd={onSlideAdd}
                                getSlideDisplayName={
                                    slideshowChildren.getSlideDisplayName
                                }
                                {...this.props}
                            />
                        )}
                        <div
                            className="ghwp-editor-carousel-wrap"
                            data-active-slide={currentlyEditedChildIndex}
                        >
                            <SlideshowEditorArrow
                                direction="left"
                                onClick={selectPreviousChild}
                            />
                            <InnerBlocks
                                allowedBlocks={[type]}
                                template={[
                                    [
                                        type,
                                        slideshowChildren.getSlideDefaultAttributes(
                                            type
                                        ),
                                    ],
                                ]}
                                templateLock={false}
                                renderAppender={() => null}
                            />
                            <SlideshowEditorArrow
                                direction="right"
                                onClick={selectNextChild}
                            />
                        </div>
                    </>
                ) : (
                    <Placeholder>
                        <SlideshowEditorArrow
                            direction="left"
                            disabled
                            onClick={() => {}}
                        />
                        <SelectControl
                            label={__('Slider Type', 'ghwp')}
                            onChange={(type) => {
                                setAttributes({ type });
                            }}
                            options={[
                                {
                                    label: __(
                                        'Please select a block type...',
                                        'ghwp'
                                    ),
                                    value: null,
                                },
                                ...slideshowChildren.getAllowedChildrenForSelect(),
                            ]}
                        />
                        <SlideshowEditorArrow
                            direction="right"
                            disabled
                            onClick={() => {}}
                        />
                    </Placeholder>
                )}
            </div>
        );
    }
}

export const edit = WithFocusWithin(WithControlledChildren(Edit));
