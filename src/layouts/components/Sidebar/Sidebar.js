import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/component/Icons';
import SuggestedAccounts from '~/component/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem to={config.routes.home} title="For you" icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    to={config.routes.following}
                    title="Following"
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem to={config.routes.live} title="LIVE" icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <SuggestedAccounts label="Suggested Accounts" />
        </aside>
    );
}

export default Sidebar;
