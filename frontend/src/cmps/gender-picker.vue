
<template>
   
                <div class="gender-picker">
                  <form @submit.prevent="pickGender">
                <input type="radio"  :value="gender" @input="gender=$event.target.value" />
               
                </form>
                   
         </div>
      
</template>


<script>



export default {
    props: {
        value:{
            type:String,
            default: male
        }
    },
      data:{
        return: {
            gender: this.value
        }
    },

  
 
}
</script>