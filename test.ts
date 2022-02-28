
function registerNotification(signalRBase, token) {
    const { NotificationsHubConnection2 } = require('./signalr/NotificationsHubConnection2');

    alert('Initialise ' + signalRBase);
    console.log("Initialize StoredNotificationHubConnection");
    var x = new NotificationsHubConnection2(signalRBase, token);
    x.getInstance().start();
    alert('instantiated and started');
}


module.exports = registerNotification
