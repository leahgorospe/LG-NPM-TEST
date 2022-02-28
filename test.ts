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

module.exports = {
    registerNotification,
    getStatus,
    getInstance
}
