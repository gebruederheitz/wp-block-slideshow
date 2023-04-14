import { blocks, i18n } from 'wp';

import { attributes as defaultAttributes } from './attributes';
import { edit as defaultEdit } from './edit';
import { save as defaultSave } from './save';
import { slideshowChildren, DEFAULT_ALLOWED_CHILDREN } from './utils/children';
import { ViewCarousel } from '@gebruederheitz/wp-editor-components/dist/icons';
import { presetManager } from '../frontend';

const { registerBlockType } = blocks;
const { __ } = i18n;

export function register(options = {}) {
    const {
        category = 'widgets',
        icon = ViewCarousel,
        edit = defaultEdit,
        save = defaultSave,
        attributes = defaultAttributes,
    } = options;

    registerBlockType('ghwp/slideshow', {
        title: __('Slideshow', 'ghwp'),
        icon,
        description: __(
            'A slider for sliding content like news, cards or images',
            'ghwp'
        ),
        category,
        attributes,
        edit,
        save,
    });
}

export {
    defaultEdit as edit,
    defaultSave as save,
    defaultAttributes as attributes,
    slideshowChildren,
    DEFAULT_ALLOWED_CHILDREN,
    presetManager,
};
