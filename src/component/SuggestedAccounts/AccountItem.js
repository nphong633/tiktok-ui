import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/c0e5acb353efad347ae0ba5a87574f1d~c5_100x100.jpeg?x-expires=1684076400&x-signature=yFhlnZa9B6AwMVxyVccRjDbpUsM%3D"
                alt="thanhphong"
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>thanhphong</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Nguyễn Thanh Phong</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
