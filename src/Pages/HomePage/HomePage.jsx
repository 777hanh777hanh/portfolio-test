import AboutComponent from '../../components/About';
import Header from '../../components/Header';
import { useClassNames } from '../../hooks';
import styles from './HomePage.module.scss';

const HomePage = () => {
    const cx = useClassNames(styles);

    return (
        <>
            <section className={cx('homePage')}>
                <div className={cx('inner')}>
                    <Header />
                    <AboutComponent />
                </div>
            </section>
        </>
    );
};

export default HomePage;
