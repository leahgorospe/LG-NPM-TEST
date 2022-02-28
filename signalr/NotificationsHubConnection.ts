import * as signalr from "@microsoft/signalr";

export class NotificationsHubConnection {
    public connection: signalr.HubConnection;
    public hubEndpoint: string;
    private static instance: NotificationsHubConnection;

    private constructor(signalRBase, token) {
        var hubEndpoint = "/notification";

        this.hubEndpoint = hubEndpoint;
        this.connection = new signalr.HubConnectionBuilder()
            .withUrl(`${signalRBase}${hubEndpoint.startsWith('/') ? hubEndpoint : ('/' + hubEndpoint)}`, {
                accessTokenFactory: () => token
            } as signalR.IHttpConnectionOptions)
            .withAutomaticReconnect()
            .build();
    }

    public start = async () => {
        try {
            if (this.connection.state === signalr.HubConnectionState.Disconnected) {
                await this.connection.start();
                console.log(`WSS endpoint - ${this.hubEndpoint} - has started!`)
            } else {
                console.log("Already connected!");
            }
        } catch (err) {
            console.assert(this.connection.state === signalr.HubConnectionState.Disconnected);
            console.log(err);
            setTimeout(async () => await this.start(), 5000); // Retry in 5 seconds
        }
    }

    public dispose = () => this.connection.stop();
    public onClose = (callback: (error?: Error | undefined) => void) => this.connection.onclose(callback);

    public static init(signalRBase, token) {
        if (!NotificationsHubConnection.instance) {
            NotificationsHubConnection.instance = new NotificationsHubConnection(signalRBase, token);
        }
    }

    public static getInstance(): NotificationsHubConnection {
        return NotificationsHubConnection.instance;
    }

    public static OnReceiveNotification = (callback: (storedNotif) => void) => {
        NotificationsHubConnection.instance.connection.on("SendNotification", (storedNotif) => callback(storedNotif));
    }
    public static OffReceiveNotification = () => NotificationsHubConnection.instance.connection.off("SendNotification");

    
}