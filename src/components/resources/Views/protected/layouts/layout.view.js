import React from 'react';
import {Outlet} from "react-router-dom";
import {AuthCheck} from "../../../../Providers/Auth/Auth";
import SideBarView from "./sidebar.view";
import {ErrorBoundary} from "react-error-boundary";
import ErrorView from "../../errors/error.view";
import AgentChatApp from "../chat/agent.view";

const ProtectedLayoutView = () => {
    return (
        <React.Fragment>
            <div id="wrapper" className="wrapper clearfix">
                <ErrorBoundary FallbackComponent={ErrorView}>
                    <AuthCheck>
                        <header id="navbar-spy" className="header header-fixed-side">
                            <SideBarView/>
                        </header>
                        <main style={{backgroundColor: "whitesmoke"}}>
                            <div className="row">
                                <div className="col-xs-1">
                                </div>
                                <div className="col-sm-10">
                                    <section id="heading1" className="heading heading-1">
                                        <Outlet/>
                                    </section>
                                </div>
                                <div className="col-xs-1">
                                </div>
                            </div>
                        </main>
                        <footer>
                            <AgentChatApp/>
                        </footer>
                    </AuthCheck>
                </ErrorBoundary>
            </div>

        </React.Fragment>
    );
}

export default ProtectedLayoutView;


