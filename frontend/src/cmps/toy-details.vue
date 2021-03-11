
  <template>
  <div  v-if="toy" @close="toy = null" class="toy-details" >
    <!-- <p >what to do:<toy-edit :toy="toy" @updateTxt="updateTxt" /></p> -->
        <p>Toy: {{toy.name}}</p>
        <p >Group: {{toy.type}}</p>
        <p >Date arrived: {{toy.createdAt}}</p>
        <router-link class="link-btn" :to="'/toys/'">Close</router-link>
        </div>
     </template>

<script>
import {toyService} from '../services/toy.srevice.js'
import toyEdit from '../cmps/toy-edit.vue'

     export default {
             data() {
        return {
            toy:null
           
        }
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
         toyEdit 
    }
     }
     </script>