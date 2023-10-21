import PropTypes from 'prop-types';
import { useClassNames } from '../../hooks';
import styles from './Header.module.scss';
import images from '../../assets/images';
import Menu from '../Menu';
import Info from '../Info';
import ImageComponent from '../Image';

const Header = ({ children, className: cusClassName }) => {
    const cx = useClassNames(styles);

    return (
        <>
            <header className={cx('header', cusClassName)}>
                <div className={cx('wide', 'wide-heading')}>
                    <div className={cx('inner')}>
                        {children}
                        {/* Info */}
                        <section className={cx('hero')}>
                            {/* menu */}
                            <Menu className={cx('menu')} />
                            {/* Info */}
                            <Info className={cx('info')} />
                        </section>
                        {/* image */}
                        <figure>
                            <figcaption className={cx('image')}>
                                <ImageComponent src={images.myPhoto} alt="myPhoto" />
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </header>
        </>
    );
};

Header.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default Header;
