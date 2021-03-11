<template>
  <div id="app" class="main-layout">
   
    <app-header class="full">  </app-header>
   
    <router-view/>
    <app-footer class="full"> 
    
       </app-footer >
  </div>
</template>

<script>
import appHeader from '../src/cmps/app-header.vue'
import appFooter from '../src/cmps/app-footer.vue'
export default {


 components: {
    appHeader,
    appFooter
  },
  created() {
    this.$store.dispatch({ type: "loadToys" });
  }
}
</script>


