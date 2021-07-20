import { components, i18n } from 'wp';
import { InputWithIcon } from '@gebruederheitz/wp-editor-components';
import {
    Alarm,
    MoreHorizontal as Dots,
    ViewCarousel as CenterModeIcon,
} from '@gebruederheitz/wp-editor-components/dist/icons';

const { PanelBody, PanelRow, RangeControl, ToggleControl } = components;
const { __ } = i18n;

export const AdvancedControls = (props) => {
    const {
        /* Parent component props passed down directly */
        attributes: {
            autoplaySpeed,
            centerMode,
            dots,
            edgePadding,
            initialSlide,
            useAutoplay,
            useAutoplayMedium,
            useAutoplaySmall,
        },
        children,
        setAttributes,
    } = props;

    return (
        <PanelBody
            title={__('Advanced Slider Options', 'ghwp')}
            icon={'more'}
            initialOpen={false}
        >
            <PanelRow>
                <InputWithIcon
                    icon={Alarm}
                    label={__('Initial slide', 'ghwp')}
                    component={RangeControl}
                    value={initialSlide + 1}
                    onChange={(newVal) => {
                        setAttributes({
                            initialSlide: newVal - 1,
                        });
                    }}
                    withInputField={true}
                    min={1}
                    max={children.length}
                />
            </PanelRow>
            <PanelRow>
                <InputWithIcon
                    icon={CenterModeIcon}
                    label={__('Center Mode', 'ghwp')}
                    setAttributes={setAttributes}
                    attributeName={'centerMode'}
                    component={ToggleControl}
                    checked={centerMode}
                />
            </PanelRow>
            <PanelRow>
                <InputWithIcon
                    icon={Alarm}
                    label={__('Edge Padding', 'ghwp')}
                    setAttributes={setAttributes}
                    attributeName={'edgePadding'}
                    component={RangeControl}
                    value={edgePadding}
                    withInputField={true}
                    min={0}
                    max={200}
                    step={10}
                />
            </PanelRow>
            <PanelRow>
                <InputWithIcon
                    icon={Dots}
                    label={__('Show dots', 'ghwp')}
                    setAttributes={setAttributes}
                    attributeName={'dots'}
                    component={ToggleControl}
                    checked={dots}
                />
            </PanelRow>
            <PanelRow>
                {(useAutoplay || useAutoplayMedium || useAutoplaySmall) && (
                    <InputWithIcon
                        icon={Alarm}
                        label={__('Autoplay speed (delay in ms)', 'ghwp')}
                        setAttributes={setAttributes}
                        attributeName={'autoplaySpeed'}
                        component={RangeControl}
                        value={autoplaySpeed}
                        withInputField={true}
                        // resetFallbackValue={2000}
                        // allowReset={true}
                        min={500}
                        max={10000}
                        step={100}
                        isShiftStepEnabled={true}
                        shiftStep={1000}
                        marks={[
                            {
                                value: 1000,
                                label: '1s',
                            },
                            {
                                value: 2000,
                                label: '2s',
                            },
                            {
                                value: 3000,
                                label: '3s',
                            },
                            {
                                value: 5000,
                                label: '5s',
                            },
                        ]}
                    />
                )}
            </PanelRow>
        </PanelBody>
    );
};
