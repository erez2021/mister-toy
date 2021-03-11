<script>
import { Doughnut } from 'vue-chartjs';

export default {
  props: ['toys'],
  extends: Doughnut,
 
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['Funny', 'Adult', 'Educational'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: ['#fff4489', '#ffddd89','#ffffd89'],
       
          data: [
            this.sumTypeInStock('Funny'),
            this.sumTypeInStock('Adult'),
            this.sumTypeInStock('Educational'),
          ],
        },
      ],
    });
  },
  methods: {
    sumTypeInStock(type) {
      return this.toys.reduce((acc, toy) => {
        if (toy.inStock && toy.type === type) acc += 1;
        return acc;
      }, 0);
    },
  },
};
</script>