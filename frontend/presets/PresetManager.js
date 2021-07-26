import _merge from 'lodash-es/merge';

import { presets as predefinedPresets } from './presets';
import { options } from '../slideshow-options';

const DEFAULT_PRESETS = {};

class PresetManager {
    constructor() {
        this.presets = null;
        this._loadDefaults();
    }

    addPreset(id, preset) {
        this.presets[id] = preset;
    }

    getAvailablePresetNames() {
        return Object.keys(this.presets).map((id) => {
            return {
                id,
                label: this.presets[id]?.prettyName ?? id,
            };
        });
    }

    getPreset(id) {
        if (!Object.keys(this.presets).includes(id)) return {};
        const overrides = this.presets[id];

        return _merge({}, this.presets.defaults, overrides);
    }

    putPreset(id, preset) {
        const originalPreset = this.presets[id];
        this.presets[id] = _merge(originalPreset, preset);
    }

    putPresets(presets) {
        Object.keys(presets).forEach((id) => {
            this.putPreset(id, presets[id]);
        });
    }

    _getDefaultPreset() {
        const defaultPreset = {};

        Object.keys(options).forEach((key) => {
            defaultPreset[key] = options[key].default || false;
        });
        defaultPreset['prettyName'] = 'Restore Defaults';

        return defaultPreset;
    }

    _loadDefaults() {
        this.presets = {
            defaults: this._getDefaultPreset(),
            ...DEFAULT_PRESETS,
            ...predefinedPresets,
        };
    }
}

export const presetManager = new PresetManager();
