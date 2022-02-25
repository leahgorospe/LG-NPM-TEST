import { NotificationsHubConnection2 } from "./signalr/NotificationsHubConnection2";
import { BaseMonitorHubConnection2 } from "./signalr/BaseMonitorHubConnection2";

function registerNotification(signalRBase, token) {
    alert('Initialise ' + signalRBase);
    console.log("Initialize StoredNotificationHubConnection");
    NotificationsHubConnection2.init(signalRBase, token);
}


module.exports = registerNotification
