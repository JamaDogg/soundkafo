<template>
    <div class="navbar">
        <h1>SoundKafo</h1>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/products">Products</router-link>
            <router-link to="/">Sign in</router-link>
        </nav>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.navbar
{
    display: flex;
    padding:5px;
    justify-content: space-between;
}

nav
{
    display: flex;
    flex-direction: row;
    gap:10px;
    align-items: center;
}

h1,a{
    margin:0;
}

a{
    font-size: 20px;
    height: fit-content;
}

a:hover
{
    color: var(--primary-color);
}
</style>
