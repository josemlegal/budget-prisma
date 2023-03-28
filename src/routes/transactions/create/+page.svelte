<script lang="ts">
	import { Button, Helper, Input, Label, Select } from 'flowbite-svelte';

	import { Textarea } from 'flowbite-svelte';
	let textareaprops = {
		id: 'description',
		name: 'description',
		label: 'Your description',
		rows: 4,
		placeholder: 'Agregar una description...'
	};

	// export let actionUrl: string;
</script>

<form action="?/create" method="POST">
	<Label class="block mb-2">Title</Label>
	<Input
		label="title"
		id="title"
		name="title"
		required
		placeholder="Agregar titulo a la transaction"
	/>
	<Label class="block mb-2">Description</Label>
	<Textarea {...textareaprops} />

	<Label class="block mb-2">Amount</Label>
	<Input label="amount" id="amount" name="amount" />

	<Button type="submit">Add</Button>
</form>

<!-- <form action={actionUrl} method="POST">
	<h3>New Transaction</h3>
	<label for="title"> Title </label>
	<input type="text" id="title" name="title" />
	<label for="description"> Description </label>
	<textarea id="description" name="description" rows={5} />
	<button type="submit">Add Project</button>
</form> -->
