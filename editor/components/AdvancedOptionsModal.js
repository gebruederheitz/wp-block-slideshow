import { components } from 'wp';
import { ControlledModal } from '@gebruederheitz/wp-editor-components';

import {
    AutoplayPanel,
    BreakpointsControl,
    CenterModeControl,
    DotsControl,
    EdgePaddingControl,
    GapControl,
    ImageCaptionControl,
    InfiniteLoopControl,
    InitialSlideControl,
    LibraryControl,
    SecondarySliderPanel,
    SliderTypeControl,
    SlidesShownControl,
    SlidesToScrollControl,
} from './modal';
import { libraries } from '../../frontend';
import { SlideManagementControls } from './SlideManagementControls';

const { Panel } = components;

export const AdvancedOptionsModal = (props) => {
    const {
        attributes: { sliderLibrary },
    } = props;

    return (
        <ControlledModal {...props}>
            <h2>Slideshow: Advanced Settings</h2>

            <LibraryControl {...props} />
            <SliderTypeControl {...props} />
            <BreakpointsControl {...props} />
            <SlidesShownControl {...props} />
            <SlidesToScrollControl {...props} />
            <InitialSlideControl {...props} />
            <CenterModeControl {...props} />
            <EdgePaddingControl {...props} />
            <DotsControl {...props} />
            <GapControl {...props} />
            <InfiniteLoopControl {...props} />
            <ImageCaptionControl {...props} />

            <AutoplayPanel {...props} />

            {sliderLibrary === libraries.SPLIDE && (
                <SecondarySliderPanel {...props} />
            )}

            <Panel>
                <SlideManagementControls {...props} />
            </Panel>
        </ControlledModal>
    );
};
