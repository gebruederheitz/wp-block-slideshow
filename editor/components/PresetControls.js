import { components, i18n } from 'wp';

import { presetManager } from '../../frontend';

const { Button, Panel, PanelBody, PanelRow } = components;
const { __ } = i18n;

function mapPresetToAttributes(options) {
    const mappedOptions = Object.assign({}, options);

    Object.keys(options).forEach((key) => {
        const re = /^a(utoplay.*)$/;
        if (re.test(key)) {
            const parsedKey = re.exec(key);
            mappedOptions[`useA${parsedKey[1]}`] = options[key];
            delete mappedOptions[key];
        }
    });

    mappedOptions['sliderLibrary'] = options.lib;
    delete mappedOptions.lib;

    return mappedOptions;
}

function applyPreset(setAttributes, presetId) {
    const values = presetManager.getPreset(presetId);
    const mappedValues = mapPresetToAttributes(values);
    console.log({ values, mappedValues, presetId });
    setAttributes({
        ...mappedValues,
    });
}

export const PresetControls = (props) => {
    const { setAttributes } = props;
    const presets = presetManager.getAvailablePresetNames();

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
