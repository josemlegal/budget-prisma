<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<img
			src="https://flowbite.com/docs/images/logo.svg"
			class="mr-3 h-6 sm:h-9"
			alt="Flowbite Logo"
		/>
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			Budget App
		</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/" active={true}>Home</NavLi>
		<NavLi href="/login">Login</NavLi>
		<NavLi href="/transactions">Transactions Manager</NavLi>
		<NavLi href="/dashboard">Dashboard</NavLi>
	</NavUl>
</Navbar>
