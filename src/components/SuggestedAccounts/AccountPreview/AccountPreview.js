import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/da76805fc6fdb09c68cd1e50c0af8cc5~c5_100x100.jpeg?x-expires=1663837200&x-signature=C2dCIIywmylZ3whIxnMX9t7kNWw%3D"
                    alt=""
                />
                <div>
                    <Button className={cx('follower-btn')} primary>
                        Follow
                    </Button>
                </div>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>tieu_hy26</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Tieu Hy</p>
                <p className={cx('analystics')}>
                    <strong className={cx('value')}>9.2M</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>9.2M</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
