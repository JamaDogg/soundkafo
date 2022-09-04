<template>
<div>

    <div id="content">
       <NavBar/>
    </div>
        <router-view> </router-view>
</div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
    components:{
    NavBar
}

}
</script>

<style scoped>
#content
{
    width:85%;
    margin: 0 auto;
}
</style>
