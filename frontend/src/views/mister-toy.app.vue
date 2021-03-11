

<template>
  <section>
    <div class='main-container'>
      <h2>Add Toy</h2>
      <form @submit.prevent='saveToy' class='main-form'>
        <input
          type='text'
          placeholder='toy name'
          v-model='toyToEdit.name'
          required
        />
        <input
          type='number'
          placeholder='price'
          v-model='toyToEdit.price'
          required
        />
        <el-select
          v-model='toyToEdit.type'
          placeholder='Select'
        >
          <el-option
            v-for='type in toyTypes'
            :key='type.value'
            :label='type.label'
            :value='type.value'
          >
          </el-option>
        </el-select>
        <button>Save</button>
      </form>
        <toy-filter class="flex" @filtered="setFilter"></toy-filter>
      <toy-list :toys="toysForDisplay" @remove="removeToy"> </toy-list>
    </div>
     
  </section>
</template>

<script>
import toyFilter from '../cmps/toy-filter.vue';
import toyList from '../cmps/toy-list.vue';
import { toyService } from '../services/toy.srevice.js';
export default {
  data() {
    return {
      toyToEdit: toyService.getEmptyToy(),
      toyTypes: [
        {
          value: 'Funny',
          label: 'Funny',
        },
        {
          value: 'Adult',
          label: 'Adult',
        },
        {
          value: 'Educational',
          label: 'Educational',
        },
       ],
    };
  },
  computed: {
    toysForDisplay() {
      return this.$store.getters.toysForDisplay;
    },
  },
  methods: {
    removeToy(toyId) {
      this.$store
        .dispatch({ type: 'removeToy', toyId })
        .then(() => {
          this.toyToEdit = toyService.getEmptyToy();
        })
        .catch((err) => {
          console.log('Can\'t delete');
        });
    },
    setFilter(filterBy) {
      console.log('filter');
            this.$store.commit({type:'setFilter', filterBy})
        },
    saveToy() {
      this.$store
        .dispatch({ type: 'saveToy', toy: this.toyToEdit })
        .then(() => {
          console.log('Toy added');
          this.toyToEdit = toyService.getEmptyToy();
        })
        .catch((err) => {
          console.log('failed to add');
        });
    },
  },

  created() {},
  components: {
    toyList,
    toyService,
    toyFilter
  },
};
</script>