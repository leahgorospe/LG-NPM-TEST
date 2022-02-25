
function registerNotification(signalRBase, token) {
    var NotificationsHubConnection2 = require('./signalr/NotificationsHubConnection2');

    alert('Initialise ' + signalRBase);
    console.log("Initialize StoredNotificationHubConnection");
    NotificationsHubConnection2.init(signalRBase, token);
}


module.exports = registerNotification
