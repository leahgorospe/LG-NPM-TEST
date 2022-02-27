////import { BaseMonitorHubConnection2 } from "./BaseMonitorHubConnection2";
//import  * as sendNotification2  from "./SignalRConstants";
////import { StoredNotification2 } from "./../interfaces/StoredNotification2";
const { sendNotification2 } = require('./SignalRConstants');

export class NotificationsHubConnection2 {
    private static instance: NotificationsHubConnection2;
    
    private constructor(signalRBase, token) {
        //const { sendNotification2 } = require('./SignalRConstants');
        //super("/notification2", signalRBase, token);
        alert('test' + sendNotification2);
    }

    public static init(signalRBase, token) {
        alert('init');
        if (!NotificationsHubConnection2.instance) {
            NotificationsHubConnection2.instance = new NotificationsHubConnection2(signalRBase, token);
        }
    }

    //public static getInstance(): NotificationsHubConnection2 {
    //    return NotificationsHubConnection2.instance;
    //}

    //public static OnReceiveNotification = (callback: (storedNotif: StoredNotification2) => void) => {
    //    NotificationsHubConnection2.instance.connection.on(sendNotification2, (storedNotif: StoredNotification2) => callback(storedNotif));
    //}
    //public static OffReceiveNotification = () => NotificationsHubConnection2.instance.connection.off(sendNotification2);

 
}