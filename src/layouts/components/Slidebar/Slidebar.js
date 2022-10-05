import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

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
import * as userService from '~/services/userService';
import Discover from './Discover';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 20;

function Slidebar() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const [isSeeAll, setIsSeeAll] = useState(false);

    useEffect(() => {
        userService
            .getSuggested({ page: INIT_PAGE, perPage: PER_PAGE })
            .then((data) => {
                setSuggestedUsers(data);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleSeeAll = () => {
        setIsSeeAll(!isSeeAll);
    };

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

            <div className={cx('frame-login')}>
                <p className={cx('title')}>Log in to follow creators, like videos, and view comments.</p>
                <Button outline className={cx('nav-login-btn')}>
                    Log in
                </Button>
            </div>

            <SuggestedAccounts
                label={'Suggested accounts'}
                data={suggestedUsers}
                isSeeAll={isSeeAll}
                onSeeAll={handleSeeAll}
            />
            {/* <SuggestedAccounts label="Follow account" /> */}

            <Discover />
        </aside>
    );
}

export default Slidebar;
