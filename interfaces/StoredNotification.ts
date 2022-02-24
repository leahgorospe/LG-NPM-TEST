export interface StoredNotification {
	id: number;
	userEmail: string;
	created: string;
	title: string;
	body: string;
	link: string;
	isRead: boolean;
}