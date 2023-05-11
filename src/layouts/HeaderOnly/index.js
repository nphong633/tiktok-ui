import Header from '~/layouts/components/Header';
import styles from './HeaderOnly.module.scss';
import classNames from 'classnames';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className={classNames(styles.container)}>
                <div>{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
