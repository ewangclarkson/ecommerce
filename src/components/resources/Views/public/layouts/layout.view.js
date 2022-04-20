import React, {useEffect} from 'react';
import {Navigate, Outlet, useLocation} from "react-router-dom";
import NavBarView from "./navbar.view";
import FooterView from "./footer.view";
import {useAuth} from "../../../../Providers/Auth/useAuth";
import {useTranslation} from "react-i18next";
import '../../../lang/i18n';
import {CartProvider} from '../../../../Providers/CartProvider';
import {ErrorBoundary} from "react-error-boundary";
import ErrorView from "../../errors/error.view";
import ClientChatApp from "../chat/client.view";


const LayoutView = () => {
    let auth = useAuth();
    let location = useLocation();
    let {t} = useTranslation();


    if (auth.auth()) {
        return <Navigate to={t('protectedUrl') + t('homeUrl')} state={{from: location}} replace/>;
    }

    return (
        <React.Fragment>
            <div id="wrapper" className="wrapper clearfix">
                <ErrorBoundary FallbackComponent={ErrorView}>
                    <CartProvider>
                        <header id="navbar-spy" className="header header-1 header-transparent header-fixed">
                            <NavBarView/>
                        </header>
                        <Outlet/>
                        <footer id="footer" className="footer footer-1">
                            <FooterView/>
                        </footer>
                       <ClientChatApp/>
                    </CartProvider>
                </ErrorBoundary>
            </div>
        </React.Fragment>
    );
}

export default LayoutView;


