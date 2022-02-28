function registerNotification(signalRBase, token) {
    const { NotificationsHubConnection } = require('./signalr/NotificationsHubConnection');

    console.log("Initialize StoredNotificationHubConnection");
    NotificationsHubConnection.init(signalRBase, token);
    NotificationsHubConnection.getInstance().start();
}

function getStatus() {
    const { NotificationsHubConnection } = require('./signalr/NotificationsHubConnection');
    return NotificationsHubConnection.getInstance().connection.state;
}

function onReceiveNotification() {
    const { NotificationsHubConnection } = require('./signalr/NotificationsHubConnection');
    const ko = require('knockout');
    const NotificationReceived = "NotificationReceived";

    NotificationsHubConnection.OnReceiveNotification((storedNotif) => {
        ko.postbox.publish(NotificationReceived);
    });
}

function offReceiveNotification() {
    const { NotificationsHubConnection } = require('./signalr/NotificationsHubConnection');
    NotificationsHubConnection.OffReceiveNotification();
}


module.exports = {
    registerNotification,
    getStatus,
    onReceiveNotification,
    offReceiveNotification
}
