
<template>
   
                <div class="pop-up">
                  <chat-app/>
                    <slot></slot>
         </div>
      
</template>


<script>
import chatApp from '../cmps/chat-app.vue'


export default {
      data:{
        return: {
            isOpen: null
        }
    },
  components: { chatApp },
  
 
}
</script>