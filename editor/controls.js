import { blockEditor, components, i18n } from 'wp';
import {
    Filter3,
    Loop as LoopIcon,
    PlayCircleOutline as AutoplayIcon,
    ViewColumn as CountIcon,
} from '@gebruederheitz/wp-editor-components/dist/icons';
import { InputWithIcon } from '@gebruederheitz/wp-editor-components';

import { ResponsiveControls } from './components/ReponsiveControls';
import { AdvancedControls } from './components/AdvancedControls';
import { SlideManagementControls } from './components/SlideManagementControls';
import { SlideCountToolbar } from './components/SlideCountToolbar';
import { PresetControls } from './components/PresetControls';

const {
    Panel,
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
            slidesToScroll,
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
                        icon={Filter3}
                        label={__(
                            'Slides scrolled (not supported by all slider modules)',
                            'ghwp'
                        )}
                        setAttributes={setAttributes}
                        attributeName={'slidesToScroll'}
                        component={RangeControl}
                        value={slidesToScroll}
                        withInputField={true}
                        min={1}
                        max={slidesShown}
                        isShiftStepEnabled={false}
                    />
                    <InputWithIcon
                        icon={LoopIcon}
                        label={__('Infinite loop', 'ghwp')}
                        setAttributes={setAttributes}
                        attributeName={'infiniteLoop'}
                        component={ToggleControl}
                        checked={infiniteLoop}
                    />
                    <InputWithIcon
                        icon={AutoplayIcon}
                        label={__('Autoplay', 'ghwp')}
                        setAttributes={setAttributes}
                        attributeName={'useAutoplay'}
                        component={ToggleControl}
                        checked={useAutoplay}
                    />
                    <PresetControls {...props} />
                    <Panel>
                        <AdvancedControls {...props} />
                        <SlideManagementControls {...props} />
                        <ResponsiveControls {...props} />
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
                    </WPToolbar>
                </BlockControls>
            )}
        </>
    );
};
