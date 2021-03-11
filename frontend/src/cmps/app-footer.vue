
<template>
   <footer>
                <div class="footer">
                    <h5>   coffeerights</h5>
                     
                   <pop-up v-if="isOpen"> 
                       open chat here:
                   </pop-up>
              
                   <button @click="toggleChat"> 💬 </button>
         </div>
        </footer>
</template>

<script>
import popUp from '../cmps/pop-up.vue'
export default {
    data(){
        return {
            isOpen: false
        }
    },
    methods: {
        toggleChat() {
            console.log('open')
            this.isOpen = !this.isOpen
        }
    },
    computed: {
    },
  components: { popUp },
 
}
</script>