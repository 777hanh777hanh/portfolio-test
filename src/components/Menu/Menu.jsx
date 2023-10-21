import PropTypes from 'prop-types';
import { useClassNames } from '../../hooks';
import Button from '../Button';
import styles from './Menu.module.scss';

const Menu = ({ className: cusClassName }) => {
    const cx = useClassNames(styles);
    return (
        <>
            <section className={cx('menu', cusClassName)}>
                <Button href="#" link className={cx('link')}>
                    Home
                </Button>
                <Button href="#" link className={cx('link')}>
                    About Me
                </Button>
                <Button href="#" link className={cx('link')}>
                    What I Do
                </Button>
                <Button href="#" link className={cx('link')}>
                    My Projects
                </Button>
                <Button href="#" link className={cx('link')}>
                    Contact Me
                </Button>
            </section>
        </>
    );
};

Menu.propTypes = {
    className: PropTypes.string,
};

export default Menu;
