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
    const { NotificationsHubConnection } = require('./signalr/NotificationsHubConnection');

    console.log("Initialize StoredNotificationHubConnection");
    NotificationsHubConnection.init(signalRBase, token);
    NotificationsHubConnection.getInstance().start();
}

function getStatus() {
    const { NotificationsHubConnection } = require('./signalr/NotificationsHubConnection');
    alert('status ' + JSON.stringify(NotificationsHubConnection.getInstance().connection.state));
    return NotificationsHubConnection.getInstance().connection.state;
}

function getInstance() {
    const { NotificationsHubConnection } = require('./signalr/NotificationsHubConnection');
    return NotificationsHubConnection.getInstance();
}

function OnReceive() {
    const { NotificationsHubConnection } = require('./signalr/NotificationsHubConnection');
    const { ko } = require('knockout');
    const NotificationReceived = "NotificationReceived";

    NotificationsHubConnection.OnReceiveNotification((storedNotif: StoredNotification) => {
        alert('received 11');
        ko.postbox.publish(NotificationReceived);
    });
}

module.exports = {
    registerNotification,
    getStatus,
    getInstance,
    OnReceive
}
