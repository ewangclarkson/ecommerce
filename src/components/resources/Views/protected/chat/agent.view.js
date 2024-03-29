import { useEffect, useState } from "react";
import MDSpinner from "react-md-spinner";
const agentUID = process.env.REACT_APP_AGENT_ID;
const appID = process.env.REACT_APP_ID;
const region = process.env.REACT_APP_REGION;
const AUTH_KEY = process.env.REACT_APP_AUTH_KEY;
const wid = process.env.REACT_APP_W2;

const AgentChatApp = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
       /* window.CometChatWidget.init({
            appID: appID,
            appRegion: region,
            authKey: AUTH_KEY,
        }).then(
            (response) => {
                console.log("Initialization completed successfully");
                //You can now call login function.
                window.CometChatWidget.login({
                    uid: agentUID,
                }).then(
                    (response) => {
                        window.CometChatWidget.launch({
                            widgetID: wid,
                            target:'.App',
                            roundedCorners: "true",
                            height: "500px",
                            width: "330px",
                            defaultID: '', //default UID (user) or GUID (group) to show,
                            defaultType: "user", //user or group
                        });
                        setLoading(false);
                    },
                    (error) => {
                        console.log("User login failed with error:", error);
                        //Check the reason for error and take appropriate action.
                    }
                );
            },
            (error) => {
                console.log("Initialization failed with error:", error);
                //Check the reason for error and take appropriate action.
            }
        );*/
        window.CometChatWidget.init({
            appID: appID,
            appRegion: region,
            authKey: AUTH_KEY,
        }).then((response) => {
            console.log("Initialization completed successfully");
            //You can now call login function.
                window.CometChatWidget.login({
                    uid: agentUID,
                }).then((user) => {
                    window.CometChatWidget.launch({
                        widgetID: wid,
                        roundedCorners: "true",
                        docked: "true",
                        height: "500px",
                        width: "330px",
                        defaultID:'',
                        defaultType: "user", //user or group
                    });
                    setLoading(false);
                });
            });
    }, []);
    if (loading) {
        return (
            <div>
                <MDSpinner />
            </div>
        );
    }
    return <div className="App"></div>;
};
export default AgentChatApp;