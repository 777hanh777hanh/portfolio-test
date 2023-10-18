import { useClassNames } from '../../hooks';
import styles from './HomePage.module.scss';

const HomePage = () => {
    const cx = useClassNames(styles);

    return <h1 className={cx('inner')}>Hello Guys!</h1>;
};

export default HomePage;
