import { fail, type Actions, type ServerLoad } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';
import type { Prisma } from '@prisma/client';

export const load: ServerLoad = async () => {
	return {
		transactions: await prisma.transaction.findMany({
			where: {
				deleteStatus: false
			},
			orderBy: {
				createdAt: 'desc'
			}
		})
	};
};

export const actions: Actions = {
	create: async ({ request }) => {
		const { title, description, amount } = Object.fromEntries(
			await request.formData()
		) as unknown as {
			title: string;
			description: string;
			amount: number;
		};

		try {
			await prisma.transaction.create({
				data: {
					title,
					description,
					amount
				} as unknown as Prisma.TransactionCreateInput
			});
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not create the trans.' });
		}

		return {
			status: 201
		};
	}
};
