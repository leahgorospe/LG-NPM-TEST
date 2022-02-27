////import { BaseMonitorHubConnection2 } from "./BaseMonitorHubConnection2";
import { sendNotification2 } from "./SignalRConstants";
////import { StoredNotification2 } from "./../interfaces/StoredNotification2";


/*export class NotificationsHubConnection2 extends BaseMonitorHubConnection2 {*/
export class NotificationsHubConnection2 {
    private static instance: NotificationsHubConnection2;
    
    private constructor(signalRBase, token) {
       /* super("/notification2", signalRBase, token);*/
        alert('test');
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