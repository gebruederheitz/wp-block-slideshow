import _union from 'lodash-es/union';

export const DEFAULT_ALLOWED_CHILDREN = [
    {
        /* The block's identifier */
        type: 'core/heading',
        /* The block's own attribute that is used to show its "name" in the
           slides overview and slideshow controls                             */
        nameAttribute: 'content',
        /* Here we can set some default attributes to be applied to the block
           when it's added to the slideshow as a slide                        */
        defaultAttributes: {
            content: 'New Heading Slide',
            className: 'ghwp-slideshow__slide',
        },
        /* In retrospect, we could have used the block's `title` property, but
           that would've been to easy: This is the name that will be shown
           on the placeholder / type selection screen.                        */
        prettyName: 'Heading',
    },
    {
        type: 'core/image',
        nameAttribute: 'alt',
        defaultAttributes: {
            className: 'ghwp-slideshow__slide',
        },
        prettyName: 'Image',
    },
    {
        type: 'core/paragraph',
        nameAttribute: 'content',
        defaultAttributes: {
            className: 'ghwp-slideshow__slide',
        },
        prettyName: 'Paragraph',
    },
    {
        type: 'ghwp/pricing-card',
        nameAttribute: 'title',
        defaultAttributes: {
            className: 'ghwp-slideshow__slide',
        },
        prettyName: 'Pricing Card',
    },
    {
        type: 'ghwp/post-teaser',
        nameAttribute: 'postTitle',
        defaultAttributes: {
            className: 'ghwp-slideshow__slide',
            type: 'boxed',
        },
        prettyName: 'Content Widget',
    },
];

class ChildManager {
    constructor() {
        this.allowedChildren = DEFAULT_ALLOWED_CHILDREN;
    }

    setAllowedChildren(allowedChildren) {
        this.allowedChildren = allowedChildren;
    }

    extendAllowedChildren(additionalAllowedChildren) {
        this.allowedChildren = _union(
            this.allowedChildren,
            additionalAllowedChildren
        );
    }

    getSlideDefaultAttributes(type) {
        return this.allowedChildren.find((el) => el.type === type)
            .defaultAttributes;
    }

    getSlideDisplayName(type, slideAttributes) {
        const nameAttr = this.allowedChildren.find(
            (el) => el.type === type
        ).nameAttribute;
        return slideAttributes[nameAttr];
    }

    getAllowedChildrenForSelect() {
        return this.allowedChildren.map((el) => ({
            label: el.prettyName,
            value: el.type,
        }));
    }
}

export const slideshowChildren = new ChildManager();
