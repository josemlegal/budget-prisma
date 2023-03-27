<script lang="ts">
	import type { PageData } from './$types';
	import { Button, Card } from 'flowbite-svelte';

	export let data: PageData;
	$: ({ transactions } = data);
</script>

<!-- Botton para ir a CreateTx -->
<Button href="/transactions/create">Add Tx</Button>

<!-- Iteracion de todas las transactiones -->
{#each transactions as tx}
	<Card href="/cards">
		<a
			href="/transactions/{tx.id}"
			class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
		>
			{tx.title}
		</a>
		<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
			{tx.createdAt}
		</p>
		<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
			{tx.description}
		</p>
		<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
			{tx.amount}
		</p>
	</Card>
{/each}
