import { BaseMonitorHubConnection2 } from "./BaseMonitorHubConnection2";
import { sendNotification2 } from "./SignalRConstants";
import { StoredNotification2 } from "./../interfaces/StoredNotification2";


export class NotificationsHubConnection2 extends BaseMonitorHubConnection2 {
    /**
     * Holds the singleton class
     *
     * @private
     * @static
     * @type {NotificationsHubConnection}
     * @memberof NotificationsHubConnection
     */
    private static instance: NotificationsHubConnection2;
    
    /**
     * Creates an instance of NotificationsHubConnection.
     * @memberof NotificationsHubConnection
     */
    private constructor(signalRBase: string, token: string) {
        super("/notification2", signalRBase, token);
    }

    public static init(signalRBase: string, token: string) {
        if (!NotificationsHubConnection2.instance) {
            NotificationsHubConnection2.instance = new NotificationsHubConnection2(signalRBase, token);
        }
    }

    public static getInstance(): NotificationsHubConnection2 {
        return NotificationsHubConnection2.instance;
    }

    public static OnReceiveNotification = (callback: (storedNotif: StoredNotification2) => void) => {
        NotificationsHubConnection2.instance.connection.on(sendNotification2, (storedNotif: StoredNotification2) => callback(storedNotif));
    }
    public static OffReceiveNotification = () => NotificationsHubConnection2.instance.connection.off(sendNotification2);

 
}