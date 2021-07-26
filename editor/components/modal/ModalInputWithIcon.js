import { i18n } from 'wp';
import {
    PhoneIphone,
    SmartScreen,
} from '@gebruederheitz/wp-editor-components/dist/icons';
const { __ } = i18n;

export const ModalInputWithIcon = (props) => {
    const { icon: Icon, label, isSuboption = false, children } = props;
    return (
        <div className={isSuboption ? 'ghwp-miwi__suboption' : 'ghwp-miwi'}>
            <div className="ghwp-miwi__icon">
                <Icon />
            </div>
            <div className="ghwp-miwi__label">
                <label>
                    {!isSuboption ? (
                        <b>{__(label, 'ghwp')}</b>
                    ) : (
                        __(label, 'ghwp')
                    )}
                </label>
            </div>
            {children}
        </div>
    );
};

export const InputWrap = (props) => (
    <div className="ghwp-miwi__input">{props.children}</div>
);

export const MediumVariation = (props) => (
    <ModalInputWithIcon
        isSuboption
        icon={SmartScreen}
        label={`Medium sized screens (${props.attributes.breakpointSmall}px < x < ${props.attributes.breakpointMedium}px)`}
    >
        <InputWrap>{props.children}</InputWrap>
    </ModalInputWithIcon>
);

export const SmallVariation = (props) => (
    <ModalInputWithIcon
        isSuboption
        icon={PhoneIphone}
        label={`Small screens (< ${props.attributes.breakpointSmall}px)`}
    >
        <InputWrap>{props.children}</InputWrap>
    </ModalInputWithIcon>
);
