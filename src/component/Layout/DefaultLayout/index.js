import Header from '~/component/Layout/DefaultLayout/Header';
import Sidebar from '~/component/Layout/DefaultLayout/Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
