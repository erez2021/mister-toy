<template>
     <section class="toy-filter">
        <label> Search a toy: </label>    
        <input type="text"  placeholder="Enter text" v-model="filterBy.txt"><p></p>
        <input type="number"  placeholder="Enter max price" v-model="filterBy.price"><p></p>
        <select name="toys" id="toys" v-model="filterBy.inStock" >
  <option value="in-stock">In stock!</option>
  <option value="not-in-stock">Missing</option>
        </select>
        <button @click.prevent="setFilter">Search</button>
        </section>
</template>

 

<script>
export default {
      data() {
        return {
            filterBy: {
               txt:'',
               inStock: null,
               price: null
            }
        }
    },
    methods:{
        setFilter(){
            this.$emit('filtered', {...this.filterBy}) 
           
        }
    }
}
</script>