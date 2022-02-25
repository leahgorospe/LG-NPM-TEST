import {
    HttpTransportType,
    HubConnectionBuilder,
    IHttpConnectionOptions,
    HubConnection,
    HubConnectionState
} from "@microsoft/signalr";


export class BaseMonitorHubConnection2 {
    public connection: HubConnection;
    public hubEndpoint: string;

    constructor(hubEndpoint, signalRBase, token) {
        this.hubEndpoint = hubEndpoint;    
        this.connection = new HubConnectionBuilder()
            .withUrl(`${signalRBase}${hubEndpoint.startsWith('/') ? hubEndpoint : ('/' + hubEndpoint)}`, {
                accessTokenFactory: () => token
            } as IHttpConnectionOptions)
            .withAutomaticReconnect()
            .build();
    }

    public start = async () => {
        try {
            if (this.connection.state === HubConnectionState.Disconnected) {
                await this.connection.start();
                console.log(`WSS endpoint - ${this.hubEndpoint} - has started!`)
            } else {
                console.log("Already connected!");
            }
        } catch (err) {
            console.assert(this.connection.state === HubConnectionState.Disconnected);
            console.log(err);
            setTimeout(async () => await this.start(), 5000); // Retry in 5 seconds
        }
    }

 
    public dispose = () => this.connection.stop();
    public onClose = (callback: (error?: Error | undefined) => void) => this.connection.onclose(callback);
}