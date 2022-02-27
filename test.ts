
function registerNotification(signalRBase, token) {
    var NotificationsHubConnection2 = require('./signalr/NotificationsHubConnection2');

    alert('Initialise ' + signalRBase);
    console.log("Initialize StoredNotificationHubConnection");
    var x = new NotificationsHubConnection2(signalRBase, token);

    alert('instantiated');
}


module.exports = registerNotification
