import mitt from 'mitt';
import _merge from 'lodash-es/merge';
import _debounce from 'lodash-es/debounce';

const DEFAULT_OPTIONS = {
    debug: false,
};

export class ResizeListener {
    constructor(userOptions = {}) {
        this.currentViewportWidth = 0;
        this.options = {};
        this.eventProxy = new mitt();

        this.debouncedOnResize = _debounce(this._onResize.bind(this), 300);

        this._parseOptions(userOptions);
        this._listen();
        this._onResize();
    }

    fakeResize() {
        const ev = new Event('resize');
        window.dispatchEvent(ev);
    }

    getCurrentViewportWidth() {
        return this.currentViewportWidth;
    }

    get on() {
        return this.eventProxy.on;
    }

    recalculateAndSet() {
        this.currentViewportWidth = this._getInnerWidth();
        this.setCssWidthProperty();
        this.currentViewportHeight = this._getInnerHeight();
        this.setCssHeightProperty();
    }

    setCssHeightProperty() {
        document.documentElement.style.setProperty(
            '--vh',
            `${this.currentViewportHeight / 100}px`
        );
    }

    setCssWidthProperty() {
        document.documentElement.style.setProperty(
            '--vw',
            `${this.currentViewportWidth / 100}px`
        );
    }

    subscribe(...args) {
        return this.eventProxy.on(...args);
    }

    _getInnerHeight() {
        return Math.min(
            document.documentElement.clientHeight || 0,
            window.innerHeight || 0
        );
    }

    _getInnerWidth() {
        return Math.min(
            document.documentElement.clientWidth || 0,
            window.innerWidth || 0
        );
    }

    _listen() {
        window.addEventListener('resize', this.debouncedOnResize);
    }

    _onResize() {
        this.recalculateAndSet();
        this.eventProxy.emit('resize', this.currentViewportWidth);
    }

    _parseOptions(userOptions) {
        this.options = _merge(DEFAULT_OPTIONS, userOptions);
    }
}
