import classNames from 'classnames/bind';
import styles from './Slidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);
function Slidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For you"
                    to={config.routes.home}
                    icons={<HomeIcon />}
                    activeIcons={<HomeActiveIcon />}
                />

                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icons={<UserGroupIcon />}
                    activeIcons={<UserGroupActiveIcon />}
                />

                <MenuItem title="LIVE" to={config.routes.live} icons={<LiveIcon />} activeIcons={<LiveActiveIcon />} />
            </Menu>

            <SuggestedAccounts label="Suggested account" />
            <SuggestedAccounts label="Follow account" />
        </aside>
    );
}

export default Slidebar;
