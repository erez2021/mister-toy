
  <template>
  <div   class="toy-edit" >
    <h1>    Edit</h1>
      <div  v-if="toy" @close="toy = null" class="toy-details" >
      <form @submit.prevent="saveToy">
     <input type="text"  v-model="toy.name" />
                <input type="number"  v-model="toy.price" />
                <input type="text"  list="stock" v-model="toy.inStock" />
                       <datalist id="stock">
  <option value=true></option>
  <option value=false></option>
  </datalist>
                <button>Save</button>
                </form>
                      <router-link class="link-btn" :to="'/toys/'">Close</router-link>
        </div>
        </div>
     </template>

<script>
import {toyService} from '../services/toy.srevice.js'

     export default {
             data() {
        return {
      toy: null
           
        }
    },
    methods: {
      saveToy() {
            this.$store.dispatch({type:'saveToy', toy: this.toy})
            .then(() => {
                console.log('Toy saved')
                this.toy = toyService.getEmptyToy()
            })
            .catch(err => {
                console.log('failed to save')
            })
        },
  
    },
      created() {
        const toyId = this.$route.params.toyId
        toyService.getById(toyId)
        .then((toy) => {
            this.toy = toy 
        })
      },
    components: {
        toyService,
    
    }
     }
     </script>