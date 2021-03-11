

<template>
  <div class="toy-list">
    <div v-for="toy in toys" :key="toy._id" class="toy-preview-container">
      <toy-preview :toy="toy" @removeToy="removeToy" />
      <div class="btns-container"></div>
    </div>
  </div>
</template>


<script>
import toyPreview from "../cmps/toy-preview.vue";
export default {
  props: ['toys'],
  methods: {
    removeToy(toyId) {
      console.log(toyId);
      this.$emit("remove", toyId);
    },
  },
  components: {
    toyPreview,
  },
};
</script>