import PropTypes from 'prop-types';

import { useClassNames } from '../../hooks';
import styles from './Info.module.scss';
import Button from '../Button';
import docs from '../../assets/text';

const Info = () => {
    const cx = useClassNames(styles);

    const handleDownloadFileCV = (fileUrl) => {
        const a = document.createElement('a');
        a.href = fileUrl;
        a.download = fileUrl.split('/').pop().split('.').shift();
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <>
            <section className={cx('info')}>
                <h3 className={cx('title')}>I Am Tran Thien Thanh</h3>
                <h2 className={cx('heading')}>Web developer</h2>
                <p className={cx('desc')}>
                    A Web developer, I Specialize in Designing and Developing Custom Websites That Meet the
                    Unique Needs of My Clients.
                </p>
                <Button className={cx('download')} onClick={() => handleDownloadFileCV(docs.myCV)} active>
                    Download CV
                </Button>
            </section>
        </>
    );
};

Info.propTypes = {
    className: PropTypes.string,
};

export default Info;
