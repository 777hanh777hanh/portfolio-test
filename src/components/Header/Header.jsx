import PropTypes from 'prop-types';
import { useClassNames } from '../../hooks';
import styles from './Header.module.scss';
import images from '../../assets/images';
import Button from '../Button';
import docs from '../../assets/text';

const Header = ({ children, className: cusClassName }) => {
    const cx = useClassNames(styles);

    const handleDownloadFileCV = (fileUrl) => {
        const a = document.createElement('a');
        a.href = fileUrl;
        a.download = fileUrl.split('/').pop();
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    return (
        <>
            <header className={cx('header', cusClassName)}>
                <div className={cx('wide', 'wide-heading')}>
                    <div className={cx('inner')}>
                        {children}
                        {/* Info */}
                        <section className={cx('hero')}>
                            {/* menu */}
                            <section className={cx('menu')}>
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
                            {/* Info */}
                            <section className={cx('info')}>
                                <h3 className={cx('title')}>I Am Tran Thien Thanh</h3>
                                <h2 className={cx('heading')}>Web developer</h2>
                                <p className={cx('desc')}>
                                    A Web developer, I Specialize in Designing and Developing Custom Websites
                                    That Meet the Unique Needs of My Clients.
                                </p>
                                <Button
                                    className={cx('download')}
                                    onClick={() => handleDownloadFileCV(docs.myCV)}
                                    active
                                >
                                    Download CV
                                </Button>
                            </section>
                        </section>
                        {/* image */}
                        <figure>
                            <figcaption className={cx('image')}>
                                <img src={images.myPhoto} alt="myPhoto" className={cx('img')} />
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
