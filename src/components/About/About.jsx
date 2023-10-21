import styles from './About.module.scss';
import { useClassNames } from '../../hooks';

const AboutComponent = () => {
    const cx = useClassNames(styles);

    return (
        <>
            <section className={cx('about')}>
                <div className={cx('inner')}>
                    <h2 className={cx('heading', 'section-heading')}>About Me</h2>
                    <p className={cx('desc', 'section-desc')}>
                        I am Tran Thien Thanh, a recent college graduate and a strong passion for Front-End
                        development. With a solid foundation in HTML5, CSS, SCSS, JavaScript, and the ability
                        to work with Frameworks like ReactJS, I am eager to kick-start my career as a
                        Front-End Developer.
                    </p>
                    <p className={cx('desc', 'section-desc')}>
                        My educational background has equipped me with the essential skills and knowledge
                        required to create responsive and user-friendly websites.
                    </p>
                    <p className={cx('desc', 'section-desc')}>
                        I am confident in my ability to self-learn and adapt to new technologies.
                    </p>
                    <p className={cx('desc', 'section-desc')}>
                        I am excited to contribute my technical skills to projects and look forward to
                        collaborating with your organization.
                    </p>
                </div>
            </section>
        </>
    );
};

export default AboutComponent;
