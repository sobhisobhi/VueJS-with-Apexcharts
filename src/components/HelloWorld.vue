<template>
  <div>
    <apexchart 
      width="500" type="bar" 
      :options="options" :series="series">
    </apexchart>  
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    options: {
      chart: {
        id: 'vuechart-example'
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
      }
    },
    series: [{
      name: 'series-1',
      data: [55, 62, 89, 66, 98, 72, 101, 75, 94, 120, 117, 139]
    }]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.chart-wrapper {
  display: flex;
  align-items: center;
  justify-content: center 
}
</style>
