import { NotificationsHubConnection } from "./signalr/NotificationsHubConnection";

function registerNotification(signalRBase, token) {
    alert('Initialise ' + signalRBase);
    console.log("Initialize StoredNotificationHubConnection");
    NotificationsHubConnection.init(signalRBase, token);
}

module.exports = registerNotification

