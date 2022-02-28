const { BaseHubConnection } = require("./BaseHubConnection");

export interface StoredNotification {
    id: number;
    userEmail: string;
    created: string;
    title: string;
    body: string;
    link: string;
    isRead: boolean;
}

export class NotificationsHubConnection extends BaseHubConnection {
    private static instance: NotificationsHubConnection;
    
    private constructor(signalRBase, token) {
        super("/notification", signalRBase, token);
    }

    public static init(signalRBase, token) {
        if (!NotificationsHubConnection.instance) {
            NotificationsHubConnection.instance = new NotificationsHubConnection(signalRBase, token);
        }
    }

    public static getInstance(): NotificationsHubConnection {
        return NotificationsHubConnection.instance;
    }

    public static OnReceiveNotification = (callback: (storedNotif: StoredNotification) => void) => {
        alert('OnReceiveNotification');
        NotificationsHubConnection.instance.connection.on("SendNotification", (storedNotif: StoredNotification) => callback(storedNotif));
    }
    public static OffReceiveNotification = () => NotificationsHubConnection.instance.connection.off("SendNotification");

 
}