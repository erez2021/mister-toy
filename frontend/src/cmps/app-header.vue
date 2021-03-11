
<template>
   <header>
                <div class="header">
                    <h1>    Toy Store</h1>
                <router-link class="link-btn" style="text-decoration:none" :to="'/toys/'">Toys</router-link>|
                <router-link class="link-btn" style="text-decoration:none" :to="'/'">Home</router-link>|
                <router-link class="link-btn" style="text-decoration:none" :to="'/dashboard'">Dashboard</router-link>|
                <router-link class="link-btn" style="text-decoration:none" :to="'/about'">About</router-link>
         </div>
        </header>
</template>


<script>
export default {
   
 
}
</script>