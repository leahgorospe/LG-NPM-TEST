////import { NotificationsHubConnection } from "./signalr/NotificationsHubConnection";

////function registerNotification(signalRBase: string, token: string) {
////    console.log("Initialize StoredNotificationHubConnection");
////    NotificationsHubConnection.init(signalRBase, token);
////}

/*module.exports = registerNotification*/

function saySomething(name: string) {
    alert("Hi " + name);
}

module.exports = saySomething 