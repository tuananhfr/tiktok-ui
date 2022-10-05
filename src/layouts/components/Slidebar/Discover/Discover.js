import classNames from 'classnames/bind';
import { MusicIcon, HashMarkIcon } from '~/components/Icons';

import styles from './Discover.module.scss';

const cx = classNames.bind(styles);

function Discover() {
    return (
        <div>
            <div className={cx('discover')}>
                <p className={cx('discover-title')}>Discover</p>
                <div className={cx('discover-list')}>
                    <a href="/#" className={cx('discover-link')}>
                        <HashMarkIcon />
                        <p className={cx('text')}>cunghoangdao</p>
                    </a>
                    <a href="/#" className={cx('discover-link')}>
                        <HashMarkIcon />
                        <p className={cx('text')}>laptrinh</p>
                    </a>
                    <a href="/#" className={cx('discover-link')}>
                        <HashMarkIcon />
                        <p className={cx('text')}>thaydoibanthan</p>
                    </a>
                    <a href="/#" className={cx('discover-link')}>
                        <MusicIcon />
                        <p className={cx('text')}>Vài câu nói có khiến người thay đổi- GREY D, tlinh</p>
                    </a>
                    <a href="/#" className={cx('discover-link')}>
                        <MusicIcon />
                        <p className={cx('text')}>Em đây chẳng phải thúy kiều - Hoàng Thùy Linh</p>
                    </a>
                </div>
            </div>

            <div className={cx('footer')}>
                <div className={cx('link-container')}>
                    <a href="/#">About</a>
                    <a href="/#">TikTok Browse</a>
                    <a href="/#">Newsroom</a>
                    <a href="/#">Contact</a>
                    <a href="/#">Carrers</a>
                    <a href="/#">ByteDance</a>
                </div>
                <div className={cx('link-container')}>
                    <a href="/#">TikTok for Good</a>
                    <a href="/#">Advertise</a>
                    <a href="/#">Developers</a>
                    <a href="/#">Transparency</a>
                    <a href="/#">TikTok Rewards</a>
                </div>
                <div className={cx('link-container')}>
                    <a href="/#">Help</a>
                    <a href="/#">Safety</a>
                    <a href="/#">Terms</a>
                    <a href="/#">Privacy</a>
                    <a href="/#">Creator Portal</a>
                    <a href="/#">Community Guidelines</a>
                </div>
                <span className={cx('copyright')}>{`© ${new Date().getFullYear()} TikTok`}</span>
            </div>
        </div>
    );
}

export default Discover;
