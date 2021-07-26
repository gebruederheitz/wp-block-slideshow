import { components, i18n } from 'wp';
import { Preview } from '@gebruederheitz/wp-editor-components/dist/icons';

import { linkTypes } from '../../../frontend';
import { ModalInputWithIcon } from './ModalInputWithIcon';
import {
    SecondaryGapControl,
    SecondarySlideCountControl,
    SecondaryHeightControl,
    SecondaryWidthControl,
} from './secondary-navigation';

const { ButtonGroup, Button, Panel, PanelBody, PanelRow } = components;
const { __ } = i18n;

export const SecondarySliderPanel = (props) => {
    const {
        attributes: { linkingType, type },
        setAttributes,
    } = props;

    return (
        <>
            {type === 'core/image' && (
                <Panel>
                    <PanelBody
                        title={__('Navigation / Secondary slider', 'ghwp')}
                        icon={'more'}
                        initialOpen={false}
                    >
                        <PanelRow>
                            <ModalInputWithIcon
                                label="Navigation Mode"
                                icon={Preview}
                            >
                                <ButtonGroup>
                                    <Button
                                        isPrimary
                                        isPressed={
                                            linkingType === linkTypes.NONE
                                        }
                                        onClick={() => {
                                            setAttributes({
                                                linkingType: linkTypes.NONE,
                                            });
                                        }}
                                    >
                                        {__('No Navigation', 'ghwp')}
                                    </Button>
                                    <Button
                                        isPrimary
                                        isPressed={
                                            linkingType === linkTypes.THUMBS
                                        }
                                        onClick={() => {
                                            setAttributes({
                                                linkingType: linkTypes.THUMBS,
                                            });
                                        }}
                                    >
                                        {__(
                                            'Thumbnail style navigation',
                                            'ghwp'
                                        )}
                                    </Button>
                                </ButtonGroup>
                            </ModalInputWithIcon>
                        </PanelRow>
                        {linkingType !== linkTypes.NONE && (
                            <>
                                <SecondarySlideCountControl {...props} />
                                <SecondaryGapControl {...props} />
                                <SecondaryHeightControl {...props} />
                                <SecondaryWidthControl {...props} />
                            </>
                        )}
                    </PanelBody>
                </Panel>
            )}
        </>
    );
};
