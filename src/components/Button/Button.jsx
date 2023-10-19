import PropTypes from 'prop-types';
import { useClassNames } from '../../hooks';
import styles from './Button.module.scss';

const Button = ({
    className: cusClassName,
    link,
    active,
    onClick,
    href,
    to,
    disabled,
    children,
    ...passProps
}) => {
    const cx = useClassNames(styles);
    const classes = cx('wrapper', {
        [cusClassName]: cusClassName,
        to,
        href,
        disabled,
        link,
        active,
    });
    const props = {
        onClick,
        ...passProps,
    };

    // Check what Type of Button: button || a tag
    let Comp = 'button';
    if (href) {
        Comp = 'a';
        props.href = href;
    }

    // remove events listener when button disabled
    if (disabled) {
        Object.keys(
            props.forEach((key) => {
                if (key.startsWith('on') && typeof props[key] === 'function') {
                    delete props[key];
                }
            }),
        );
    }

    return (
        <Comp className={classes} {...props}>
            {children}
        </Comp>
    );
};

Button.prototype = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    href: PropTypes.string,
    to: PropTypes.string,
    link: PropTypes.bool,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    children: PropTypes.node.isRequired,
    passProps: PropTypes.any,
};

export default Button;
