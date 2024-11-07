<script>
    import { onMount } from 'svelte';
    let username = '';
    let password = '';

    const login = async () => {
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token); // Store token in localStorage
            // Redirect or update UI
        } else {
            // Handle login failure
            console.error('Login failed');
        }
    };
</script>

<form on:submit|preventDefault={login}>
    <input type="text" bind:value={username} placeholder="Username" required />
    <input type="password" bind:value={password} placeholder="Password" required />
    <button type="submit">Login</button>
</form>

