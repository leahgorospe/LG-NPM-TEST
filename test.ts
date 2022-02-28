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

    console.log("Initialize StoredNotificationHubConnection");
    NotificationsHubConnection2.init(signalRBase, token);
    NotificationsHubConnection2.getInstance().start();
}

function getStatus() {
    const { NotificationsHubConnection2 } = require('./signalr/NotificationsHubConnection2');
    alert('status ' + JSON.stringify(NotificationsHubConnection2.getInstance().connection.state));
    return NotificationsHubConnection2.getInstance().connection.state;
}

function getInstance() {
    const { NotificationsHubConnection2 } = require('./signalr/NotificationsHubConnection2');

    return NotificationsHubConnection2.getInstance();
}

module.exports = {
    registerNotification,
    getStatus,
    getInstance
}
