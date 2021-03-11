
<template>
  <div class="preview">
    <div class="card">
      <p>Toy: {{ toy.name }}</p>
      <p>Price: {{ toy.price }}</p>
      <p>In stock: {{ toy.inStock }}</p>
      <button @click="removeToy">🗑️</button>
      <router-link
        :to="'/toys/' + toy._id + '/details'"
        style="decoration:none"
        class="link-btn"
        >Details</router-link>
      <router-link
        :to="'/toys/' + toy._id + '/edit'"
        style="text-decoration: none"
        class="link-btn"
        >Edit</router-link>
      
   
    </div>
  </div>
</template>



<script>
export default {
  props: ['toy'],
  
  methods: {
    removeToy() {
      this.$emit("removeToy", this.toy._id);
    },
  },
};
</script>