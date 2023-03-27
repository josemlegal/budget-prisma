export interface Transaction {
	id: number;
	title: string;
	description: string;
	amount: number;
	createdAt: Date;
	updatedAt: Date;
	deletedAt: Date;
	deleteStatus: boolean;
}
