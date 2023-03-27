import { fail, type Actions, type ServerLoad } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';

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
		const { title, description } = Object.fromEntries(await request.formData()) as {
			title: string;
			description: string;
		};

		try {
			// await prisma.transaction.create({
			// 	data: {
			// 		title,
			// 		description
			// 	}
			// });
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not create the project.' });
		}

		return {
			status: 201
		};
	}
};
