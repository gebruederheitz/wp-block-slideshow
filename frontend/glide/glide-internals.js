/*
 * Internal Glide.js helpers used by the custom controls component.
 *
 * These used to be deep imports from `@glidejs/glide/src/*`, but Glide's
 * package "exports" map only exposes "." and "./dist/*" — the `src` tree is
 * unreachable for any tooling that enforces export maps (Vite/rolldown,
 * webpack 5, Node ESM, …), and the utilities are not re-exported by the dist
 * builds. Since they are tiny and stable, we vendor them here instead.
 *
 * Copied from Glide.js v3.7.1 (https://github.com/glidejs/glide),
 * © Jędrzej Chałubek, released under the MIT license:
 * - src/utils/dom.js (siblings)
 * - src/utils/object.js (define)
 * - src/utils/detect-passive-event.js (supportsPassive)
 * - src/utils/unit.js (isString)
 * - src/core/event/events-binder.js (EventsBinder)
 */

/**
 * Finds siblings nodes of the passed node.
 *
 * @param  {Element} node
 * @return {Array}
 */
export function siblings(node) {
    if (node && node.parentNode) {
        let n = node.parentNode.firstChild;
        const matched = [];

        for (; n; n = n.nextSibling) {
            if (n.nodeType === 1 && n !== node) {
                matched.push(n);
            }
        }

        return matched;
    }

    return [];
}

/**
 * Defines getter and setter property on the specified object.
 *
 * @param  {Object} obj         Object where property has to be defined.
 * @param  {String} prop        Name of the defined property.
 * @param  {Object} definition  Get and set definitions for the property.
 * @return {Void}
 */
export function define(obj, prop, definition) {
    Object.defineProperty(obj, prop, definition);
}

/**
 * Checks if value is a string.
 *
 * @param  {*} value
 * @return {Boolean}
 */
function isString(value) {
    return typeof value === 'string';
}

/**
 * Test via a getter in the options object to see
 * if the passive property is accessed.
 *
 * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
 */
let passive = false;

try {
    const opts = Object.defineProperty({}, 'passive', {
        // Feature detection: only the access matters, the value is unused.
        // eslint-disable-next-line getter-return
        get() {
            passive = true;
        },
    });

    window.addEventListener('testPassive', null, opts);
    window.removeEventListener('testPassive', null, opts);
} catch {
    // noop — passive events unsupported
}

export const supportsPassive = passive;

export class EventsBinder {
    /**
     * Construct a EventsBinder instance.
     */
    constructor(listeners = {}) {
        this.listeners = listeners;
    }

    /**
     * Adds events listeners to arrows HTML elements.
     *
     * @param  {String|Array} events
     * @param  {Element|Window|Document} el
     * @param  {Function} closure
     * @param  {Boolean|Object} capture
     * @return {Void}
     */
    on(events, el, closure, capture = false) {
        if (isString(events)) {
            events = [events];
        }

        for (let i = 0; i < events.length; i++) {
            this.listeners[events[i]] = closure;

            el.addEventListener(events[i], this.listeners[events[i]], capture);
        }
    }

    /**
     * Removes event listeners from arrows HTML elements.
     *
     * @param  {String|Array} events
     * @param  {Element|Window|Document} el
     * @param  {Boolean|Object} capture
     * @return {Void}
     */
    off(events, el, capture = false) {
        if (isString(events)) {
            events = [events];
        }

        for (let i = 0; i < events.length; i++) {
            el.removeEventListener(
                events[i],
                this.listeners[events[i]],
                capture
            );
        }
    }

    /**
     * Destroy collected listeners.
     *
     * @returns {Void}
     */
    destroy() {
        delete this.listeners;
    }
}
