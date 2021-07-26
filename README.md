# WP Block: Slideshow

_A Gutenberg block creating a slideshow / carousel._

ES-module for a Gutenberg block allowing you to put various child blocks in a
slideshow / carousel block using [GlideJS](https://glidejs.com/).

The modular makeup a pre-parsing allows to plug in various other slideshow
libraries. Historically there has been a module for using tiny-slider, which
has been removed because of its jQuery dependency.

It's a PHP-rendered "dynamic block", so you'll also need to register the block,
and provide a template. To make this easier, you can use
the matching Composer package `gebruederheitz/wp-block-slideshow`, which will
do most of the heavy lifting for you.


## Installation

```shell
> npm i @gebruederheitz/wp-block-slideshow
```

## Usage

### In the editor

```js
import Slideshow from '@gebruederheitz/wp-block-slideshow';

Slideshow.register();
```

You may provide custom attributes, methods / components etc.:
```js
import {register, attributes} from '@gebruederheitz/wp-block-slideshow';
import {MyIconComponent} from 'your/icon/components/path';

const customAttributes = {
    newAttr: {
        type: 'string',
        default: 'default value',
    },
    ...attributes,
};

const edit = ({attributes: {newAttr}}) => {
    return (
        <p>{newAttr}</p>
    );
};

register({
    attributes: customAttributes,
    edit,
    icon: <MyIconComponent />,
});

```


#### Custom Presets

Use the `PresetManager` singleton to override existing presets or add new ones:

```js
import { presetManager } from '@gebruederheitz/wp-block-slideshow';

// Create a new preset with the id "mypreset" that will effectively
// deviate from the defaults by the name and autoplay setting: 
presetManager.addPreset('mypreset', {
    prettyName: 'My Preset',
    autoplay: true,    
});

// Completely override the existing default preset:
presetManager.addPreset('defaults', {...});

// Merge your values into the existing default preset (i.e. override certain values):
presetManager.putPreset('defaults', {...});

// The same, but with an object of presets:
presetManager.putPresets({
    defaults: {...},
    mypreset: {...},
})
```

### On the frontend

```js
import { GlideSlideshowFactory } from '@gebruederheitz/wp-block-slideshow';

// Init all elements '.ghwp-slideshow' as slideshows
new GlideSlideshowFactory();

// Optionally pass an instance of ResizeListener to re-init slideshows after 
// resize events
const resizeListener = new ResizeListener();
new GlideSlideshowFactory({
    resizeListener,
});

// Optionally pass a custom selector
new GlideSlideshowFactory({
    selector: '.my-custom-slideshow-selector',
});

// Optionally enable debug output
new GlideSlideshowFactory({
    debugEnabled: true,
})

```


### Usage with "static" elements (non-gutenberg)

You may use data-attributes to configure any element as a compatible slideshow.
A mapping of `data`-attributes to option names can be found in 
[`/frontend/ghwp-slideshows.js`](/frontend/ghwp-slideshows.js). How these options
are passed to parameters for the Glide.js call is visible in 
[`/frontend/glide/get-options.js`](/frontend/glide/get-options.js).


### Styling

You may use and extend the default styles provided by this package in your 
(S)CSS:
```sass
// Your frontend SASS file

// Import the Glide.js default styles as a basis
@use 'node_modules/@glidejs/glide/src/assets/sass/glide.core';

// Override the default variable values if you need to
// Import the stylesheet
@use 'node_modules/@gebruederheitz/wp-block-slideshow/scss/slideshow' with (
    /* General Slideshow style variables */
    $slider-margin: 90px 0,
    $slider-medium-breakpoint: 768px,
    
    /* Arrows style variables */
    $slider-arrows-z-index: 1,
    $slider-arrows-padding: 1rem 2rem,
    $slider-arrows-opacity: 1,
    
    $slider-arrows-caret-width: 12px,
    $slider-arrows-caret-height: 20px,
    
    $slider-arrows-caret-left: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%234a4d4a' viewBox='0 0 12 20'%3E%3Cpath d='M12 17.5L9.554 20 0 10 9.554 0 12 2.5 4.8 10z'/%3E%3C/svg%3E"),
    $slider-arrows-caret-right: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%234a4d4a' viewBox='0 0 12 20'%3E%3Cpath d='M0 2.5L2.446 0 12 10 2.446 20 0 17.5 7.2 10z'/%3E%3C/svg%3E"),
    
    $slider-arrows-before: false,
    $slider-arrows-use-inline-svg: true,
    
    $slider-arrows-before-bg: linear-gradient( 180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 10%, rgba(0, 0, 0, 0.1) 50%, rgba(255, 255, 255, 0) 90%, rgba(255, 255, 255, 0) 100% ),
);
```

```sass
// Your editor SASS file

// Import the stylesheet
@use 'node_modules/@gebruederheitz/wp-block-slideshow/scss/slideshow.editor';
```

Or use the precompiled CSS files:
```html
<link 
  rel="stylesheet"
  href="/path/to/node_modules/@gebruederheitz/wp-block-slideshow/dist/slideshow.css"
/>
<link 
  rel="stylesheet"
  href="/path/to/node_modules/@gebruederheitz/wp-block-slideshow/dist/slideshow.editor.css"
/>
```

## Development

> (tbd)
