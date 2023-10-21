import PropTypes from 'prop-types';

import styles from './Image.module.scss';
import { useClassNames } from '../../hooks';

const ImageComponent = ({ className: cusClassName, src, alt = '' }) => {
    const cx = useClassNames(styles);

    return <img className={cx('img', cusClassName)} src={src} alt={alt} />;
};

ImageComponent.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
};

export default ImageComponent;
