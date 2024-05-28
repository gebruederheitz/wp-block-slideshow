import { flattenToValues } from '../slideshow-options';

/**
 * @abstract
 */
export class OptionMapper {
    // eslint-disable-next-line no-unused-vars
    static fromOptions(options) {}

    // eslint-disable-next-line no-unused-vars
    static fromElement(element) {}

    constructor(rawOptions) {
        this.rawOptions = rawOptions;
        this.values = flattenToValues(rawOptions);
    }

    map(libraryOptionsUpdater = null) {
        const parsedConfig = this._map();

        if (libraryOptionsUpdater !== null) {
            return libraryOptionsUpdater({
                parsedConfig,
                rawOptions: this.rawOptions,
                values: this.values,
            });
        }

        return parsedConfig;
    }

    _map() {}
}
