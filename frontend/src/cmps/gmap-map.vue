<template>
  <gmap-map
  ref="gMap"
  :options="{
   zoomControl: true,
   mapTypeControl: true,
   scaleControl: false,
   streetViewControl: true,
   rotateControl: true,
  }"
  :center="{lat:31, lng:34}"
  :zoom="7"
  map-type-id="terrain"
  style="width: 500px; height: 400px"
>
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="markerClicked"
  />
   @click="center=m.position(m.position)"
</gmap-map>
</template>

<script>
export default {
  props: {
    pos:{
      type: Object
    }
  },
    data() {
        return {
            markers: [
                {position:{lat:32.11, lng:34.855}},
                {position:{lat:31.77, lng:35.21}},
                {position:{lat:29.8, lng:34.9}}
            ]
        }
    },
    methods: {
      markerClicked(pos) {
        this.$refs.gMap.penTo(pos)
      }
    }
}
</script>

<style>

</style>