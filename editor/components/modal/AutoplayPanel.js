import { components, i18n } from 'wp';

import {
    Alarm,
    PlayCircleOutline as AutoplayIcon,
} from '@gebruederheitz/wp-editor-components/dist/icons';
import {
    InputWrap,
    MediumVariation,
    ModalInputWithIcon,
    SmallVariation,
} from './ModalInputWithIcon';
import { libraries } from '../../../frontend';

const { Panel, PanelBody, PanelRow, RangeControl, ToggleControl } = components;

const { __ } = i18n;

export const AutoplayPanel = (props) => {
    const {
        attributes: {
            autoplaySpeed,
            sliderLibrary,
            useAutoplay,
            useAutoplayMedium,
            useAutoplaySmall,
        },
        setAttributes,
    } = props;

    return (
        <Panel>
            <PanelBody
                title={__('Autoplay', 'ghwp')}
                icon={'more'}
                initialOpen={false}
            >
                <ModalInputWithIcon label="Autoplay" icon={AutoplayIcon}>
                    <InputWrap>
                        <ToggleControl
                            checked={useAutoplay}
                            onChange={(useAutoplay) => {
                                setAttributes({ useAutoplay });
                            }}
                        />
                    </InputWrap>
                    {sliderLibrary === libraries.GLIDE && (
                        <>
                            <MediumVariation {...props}>
                                <ToggleControl
                                    checked={useAutoplayMedium}
                                    onChange={(useAutoplayMedium) => {
                                        setAttributes({
                                            useAutoplayMedium,
                                        });
                                    }}
                                />
                            </MediumVariation>
                            <SmallVariation {...props}>
                                <ToggleControl
                                    checked={useAutoplaySmall}
                                    onChange={(useAutoplaySmall) => {
                                        setAttributes({
                                            useAutoplaySmall,
                                        });
                                    }}
                                />
                            </SmallVariation>
                        </>
                    )}
                </ModalInputWithIcon>
                {(useAutoplay || useAutoplayMedium || useAutoplaySmall) && (
                    <PanelRow>
                        <ModalInputWithIcon
                            icon={Alarm}
                            label={'Autoplay speed (delay in ms)'}
                        >
                            <RangeControl
                                value={autoplaySpeed}
                                withInputField={true}
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
                                onChange={(autoplaySpeed) => {
                                    setAttributes({ autoplaySpeed });
                                }}
                            />
                        </ModalInputWithIcon>
                    </PanelRow>
                )}
            </PanelBody>
        </Panel>
    );
};
