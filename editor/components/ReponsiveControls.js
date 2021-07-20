import { components, i18n } from 'wp';

import { InputWithIcon } from '@gebruederheitz/wp-editor-components';
import {
    Filter3,
    Loop as LoopIcon,
    MoreHorizontal as Dots,
    PlayCircleOutline as AutoplayIcon,
    ReadMore,
    SwapHoriz,
    ViewCarousel as CenterModeIcon,
    ViewColumn as CountIcon,
} from '@gebruederheitz/wp-editor-components/dist/icons';

const { PanelBody, PanelRow, RangeControl, ToggleControl } = components;
const { __ } = i18n;

export const ResponsiveControls = (props) => {
    const {
        attributes: {
            breakpointMedium,
            breakpointSmall,
            centerModeMedium,
            centerModeSmall,
            dotsMedium,
            dotsSmall,
            edgePaddingMedium,
            edgePaddingSmall,
            infiniteLoopMedium,
            infiniteLoopSmall,
            slidesShownMedium,
            slidesShownSmall,
            slidesToScrollMedium,
            slidesToScrollSmall,
            useAutoplayMedium,
            useAutoplaySmall,
        },
        setAttributes,
    } = props;
    return (
        <PanelBody
            title={__('Responsive Options', 'ghwp')}
            initialOpen={false}
            icon={'more'}
        >
            <PanelBody
                title={__('Medium screens', 'ghwp')}
                initialOpen={false}
                icon={'more'}
            >
                <PanelRow>
                    <InputWithIcon
                        icon={SwapHoriz}
                        label={__('Breakpoint (up to width in px)', 'ghwp')}
                        onChange={(breakpointString) => {
                            setAttributes({
                                breakpointMedium: parseInt(
                                    breakpointString,
                                    10
                                ),
                            });
                        }}
                        type="number"
                        value={breakpointMedium.toString()}
                    />
                </PanelRow>
                <PanelRow>
                    <InputWithIcon
                        icon={CountIcon}
                        label={__('Slides shown', 'ghwp')}
                        setAttributes={setAttributes}
                        attributeName={'slidesShownMedium'}
                        component={RangeControl}
                        value={slidesShownMedium}
                        withInputField={true}
                        min={1}
                        max={10}
                        isShiftStepEnabled={false}
                    />
                </PanelRow>
                <PanelRow>
                    <InputWithIcon
                        icon={Filter3}
                        label={__('Slides scrolled', 'ghwp')}
                        setAttributes={setAttributes}
                        attributeName={'slidesToScrollMedium'}
                        component={RangeControl}
                        value={slidesToScrollMedium}
                        withInputField={true}
                        min={1}
                        max={slidesShownMedium}
                        isShiftStepEnabled={false}
                    />
                </PanelRow>
                <PanelRow>
                    <InputWithIcon
                        icon={LoopIcon}
                        label={__('Infinite loop', 'ghwp')}
                        setAttributes={setAttributes}
                        attributeName={'infiniteLoopMedium'}
                        component={ToggleControl}
                        checked={infiniteLoopMedium}
                    />
                </PanelRow>
                <PanelRow>
                    <InputWithIcon
                        icon={AutoplayIcon}
                        label={__('Autoplay', 'ghwp')}
                        setAttributes={setAttributes}
                        attributeName={'useAutoplayMedium'}
                        component={ToggleControl}
                        checked={useAutoplayMedium}
                    />
                </PanelRow>
                <PanelRow>
                    <InputWithIcon
                        icon={CenterModeIcon}
                        label={__('Center Mode', 'ghwp')}
                        setAttributes={setAttributes}
                        attributeName={'centerModeMedium'}
                        component={ToggleControl}
                        checked={centerModeMedium}
                    />
                </PanelRow>
                <PanelRow>
                    <InputWithIcon
                        icon={ReadMore}
                        label={__('Edge padding', 'ghwp')}
                        setAttributes={setAttributes}
                        attributeName={'edgePaddingMedium'}
                        component={RangeControl}
                        value={edgePaddingMedium}
                        withInputField={true}
                        min={0}
                        max={200}
                        isShiftStepEnabled={false}
                    />
                </PanelRow>
                <PanelRow>
                    <InputWithIcon
                        icon={Dots}
                        label={__('Show dots', 'ghwp')}
                        setAttributes={setAttributes}
                        attributeName={'dotsMedium'}
                        component={ToggleControl}
                        checked={dotsMedium}
                    />
                </PanelRow>
            </PanelBody>
            <PanelBody
                title={__('Small screens', 'ghwp')}
                initialOpen={false}
                icon={'more'}
            >
                <PanelRow>
                    <InputWithIcon
                        icon={SwapHoriz}
                        label={__('Breakpoint (up to width in px)', 'ghwp')}
                        onChange={(breakpointString) => {
                            setAttributes({
                                breakpointSmall: parseInt(breakpointString, 10),
                            });
                        }}
                        type="number"
                        value={breakpointSmall.toString()}
                    />
                </PanelRow>
                <PanelRow>
                    <InputWithIcon
                        icon={CountIcon}
                        label={__('Slides shown', 'ghwp')}
                        setAttributes={setAttributes}
                        attributeName={'slidesShownSmall'}
                        component={RangeControl}
                        value={slidesShownSmall}
                        withInputField={true}
                        min={1}
                        max={10}
                        isShiftStepEnabled={false}
                    />
                </PanelRow>
                <PanelRow>
                    <InputWithIcon
                        icon={Filter3}
                        label={__('Slides scrolled', 'ghwp')}
                        setAttributes={setAttributes}
                        attributeName={'slidesToScrollSmall'}
                        component={RangeControl}
                        value={slidesToScrollSmall}
                        withInputField={true}
                        min={1}
                        max={slidesShownSmall}
                        isShiftStepEnabled={false}
                    />
                </PanelRow>
                <PanelRow>
                    <InputWithIcon
                        icon={LoopIcon}
                        label={__('Infinite loop', 'ghwp')}
                        setAttributes={setAttributes}
                        attributeName={'infiniteLoopSmall'}
                        component={ToggleControl}
                        checked={infiniteLoopSmall}
                    />
                </PanelRow>
                <PanelRow>
                    <InputWithIcon
                        icon={AutoplayIcon}
                        label={__('Autoplay', 'ghwp')}
                        setAttributes={setAttributes}
                        attributeName={'useAutoplaySmall'}
                        component={ToggleControl}
                        checked={useAutoplaySmall}
                    />
                </PanelRow>
                <PanelRow>
                    <InputWithIcon
                        icon={CenterModeIcon}
                        label={__('Center Mode', 'ghwp')}
                        setAttributes={setAttributes}
                        attributeName={'centerModeSmall'}
                        component={ToggleControl}
                        checked={centerModeSmall}
                    />
                </PanelRow>
                <PanelRow>
                    <InputWithIcon
                        icon={ReadMore}
                        label={__('Edge padding', 'ghwp')}
                        setAttributes={setAttributes}
                        attributeName={'edgePaddingSmall'}
                        component={RangeControl}
                        value={edgePaddingSmall}
                        withInputField={true}
                        min={0}
                        max={200}
                        isShiftStepEnabled={false}
                    />
                </PanelRow>
                <PanelRow>
                    <InputWithIcon
                        icon={Dots}
                        label={__('Show dots', 'ghwp')}
                        setAttributes={setAttributes}
                        attributeName={'dotsSmall'}
                        component={ToggleControl}
                        checked={dotsSmall}
                    />
                </PanelRow>
            </PanelBody>
        </PanelBody>
    );
};
