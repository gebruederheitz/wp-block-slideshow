import { blockEditor, components, i18n } from 'wp';
import {
    Loop as LoopIcon,
    PlayCircleOutline as AutoplayIcon,
    ViewColumn as CountIcon,
} from '@gebruederheitz/wp-editor-components/dist/icons';
import {
    InputWithIcon,
    ModalOpener,
} from '@gebruederheitz/wp-editor-components';

import { SlideManagementControls } from './components/SlideManagementControls';
import { SlideCountToolbar } from './components/SlideCountToolbar';
import { PresetControls } from './components/PresetControls';

const {
    Panel,
    PanelRow,
    RangeControl,
    ToggleControl,
    Toolbar: WPToolbar,
    ToolbarButton,
} = components;
const { BlockControls, InspectorControls } = blockEditor;
const { __ } = i18n;

export const Controls = (props) => {
    const {
        /* Parent component props passed down directly */
        attributes: {
            currentlyEditedChildIndex,
            infiniteLoop,
            slidesShown,
            useAutoplay,
        },
        setAttributes,
        /* Own props */
        showSlideCountControls = true,
    } = props;

    const showBlockControls =
        currentlyEditedChildIndex !== null &&
        typeof currentlyEditedChildIndex !== undefined;

    return (
        <>
            <InspectorControls>
                <div className="ghwp-inspector-section">
                    <InputWithIcon
                        icon={CountIcon}
                        label={__('Slides shown', 'ghwp')}
                        setAttributes={setAttributes}
                        attributeName={'slidesShown'}
                        component={RangeControl}
                        value={slidesShown}
                        withInputField={true}
                        min={1}
                        max={10}
                        isShiftStepEnabled={false}
                    />
                    <InputWithIcon
                        icon={LoopIcon}
                        label={__('Infinite loop', 'ghwp')}
                        onChange={(infiniteLoop) => {
                            setAttributes({
                                infiniteLoop,
                                infiniteLoopMedium: infiniteLoop,
                                infiniteLoopSmall: infiniteLoop,
                            });
                        }}
                        component={ToggleControl}
                        checked={infiniteLoop}
                    />
                    <InputWithIcon
                        icon={AutoplayIcon}
                        label={__('Autoplay', 'ghwp')}
                        onChange={(useAutoplay) => {
                            setAttributes({
                                useAutoplay,
                                useAutoplayMedium: useAutoplay,
                                useAutoplaySmall: useAutoplay,
                            });
                        }}
                        component={ToggleControl}
                        checked={useAutoplay}
                    />
                    <PanelRow>
                        <ModalOpener {...props}>Advanced Settings</ModalOpener>
                    </PanelRow>
                    <PresetControls {...props} />
                    <Panel>
                        <SlideManagementControls {...props} />
                    </Panel>
                </div>
            </InspectorControls>

            {showBlockControls && (
                <BlockControls>
                    <WPToolbar>
                        {showSlideCountControls && (
                            <SlideCountToolbar {...props} />
                        )}
                    </WPToolbar>
                    <WPToolbar>
                        <ToolbarButton
                            icon={AutoplayIcon}
                            label={'Autoplay'}
                            isPressed={useAutoplay}
                            onClick={(useAutoplay) => {
                                setAttributes({ useAutoplay });
                            }}
                        />
                        <ToolbarButton
                            icon={LoopIcon}
                            label={'Infinite Loop'}
                            isPressed={infiniteLoop}
                            onClick={(infiniteLoop) => {
                                setAttributes({ infiniteLoop });
                            }}
                        />
                        <ModalOpener toolbar icon="admin-generic" {...props} />
                    </WPToolbar>
                </BlockControls>
            )}
        </>
    );
};
