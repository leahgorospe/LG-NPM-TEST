//import "./signalr/NotificationsHubConnection2";
//import { NotificationsHubConnection2 } from "./signalr/NotificationsHubConnection2";

function registerNotification(signalRBase, token) {
    const { NotificationsHubConnection2 } = require('./signalr/NotificationsHubConnection2');

    alert('Initialise ' + signalRBase);
    console.log("Initialize StoredNotificationHubConnection");
    NotificationsHubConnection2.init(signalRBase, token);
    NotificationsHubConnection2.getInstance().start();
    alert('instantiated and started');
}


module.exports = registerNotification
