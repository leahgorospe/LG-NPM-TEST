import { BaseMonitorHubConnection } from "./BaseMonitorHubConnection";
import { sendNotification } from "./SignalRConstants";
import { StoredNotification } from "./../interfaces/StoredNotification";


export class NotificationsHubConnection extends BaseMonitorHubConnection {
    /**
     * Holds the singleton class
     *
     * @private
     * @static
     * @type {NotificationsHubConnection}
     * @memberof NotificationsHubConnection
     */
    private static instance: NotificationsHubConnection;
    
    /**
     * Creates an instance of NotificationsHubConnection.
     * @memberof NotificationsHubConnection
     */
    private constructor(signalRBase: string, token: string) {
        super("/notification", signalRBase, token);
    }

    public static init(signalRBase: string, token: string) {
        if (!NotificationsHubConnection.instance) {
            NotificationsHubConnection.instance = new NotificationsHubConnection(signalRBase, token);
        }
    }

    public static getInstance(): NotificationsHubConnection {
        return NotificationsHubConnection.instance;
    }

    public static OnReceiveNotification = (callback: (storedNotif: StoredNotification) => void) => {
        NotificationsHubConnection.instance.connection.on(sendNotification, (storedNotif: StoredNotification) => callback(storedNotif));
    }
    public static OffReceiveNotification = () => NotificationsHubConnection.instance.connection.off(sendNotification);

 
}