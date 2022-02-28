//import "./signalr/NotificationsHubConnection2";
//import { NotificationsHubConnection2 } from "./signalr/NotificationsHubConnection2";

export interface StoredNotification {
    id: number;
    userEmail: string;
    created: string;
    title: string;
    body: string;
    link: string;
    isRead: boolean;
}

function registerNotification(signalRBase, token) {
    const { NotificationsHubConnection2 } = require('./signalr/NotificationsHubConnection2');

    alert('Initialise ' + signalRBase);
    console.log("Initialize StoredNotificationHubConnection");
    NotificationsHubConnection2.init(signalRBase, token);
    NotificationsHubConnection2.getInstance().start();
    alert('instantiated and started');
}

function getStatus() {
    const { NotificationsHubConnection2 } = require('./signalr/NotificationsHubConnection2');
    alert('status ' + JSON.stringify(NotificationsHubConnection2.getInstance().connection.state));
    return NotificationsHubConnection2.getInstance().connection.state;
}

function onReceivedEvent () {
    const { NotificationsHubConnection2 } = require('./signalr/NotificationsHubConnection2');
    const { ko } = require('knockout');

    NotificationsHubConnection2.OnReceiveNotification((storedNotif: StoredNotification) => {
        ko.postbox.publish("NotificationReceived");
    });
}

module.exports = {
    registerNotification,
    getStatus,
    onReceivedEvent
}
