import { components, i18n } from 'wp';

import { applyPreset, getPresetNames } from '../utils/presets';

const { Button, Panel, PanelBody, PanelRow } = components;
const { __ } = i18n;

export const PresetControls = (props) => {
    const { setAttributes } = props;
    const presets = getPresetNames();

    return (
        <Panel>
            <PanelBody
                title={__('Slideshow Presets', 'ghwp')}
                icon={'more'}
                initialOpen={false}
            >
                {presets.map((preset, index) => (
                    <PanelRow key={index}>
                        <Button
                            key={index}
                            isDefault
                            onClick={() => {
                                applyPreset(setAttributes, preset.id);
                            }}
                        >
                            {preset.label}
                        </Button>
                    </PanelRow>
                ))}
            </PanelBody>
        </Panel>
    );
};
