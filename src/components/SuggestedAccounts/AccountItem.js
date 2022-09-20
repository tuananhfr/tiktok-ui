import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import style from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(style);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} placement="bottom" offset={[-20, 0]} render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/da76805fc6fdb09c68cd1e50c0af8cc5~c5_100x100.jpeg?x-expires=1663837200&x-signature=C2dCIIywmylZ3whIxnMX9t7kNWw%3D"
                        alt=""
                    />
                    <div className={cx('item-infor')}>
                        <p className={cx('nickname')}>
                            <strong>tieu_hy26</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Tieu Hy</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

//AccountItem.PropTypes = {};
export default AccountItem;
