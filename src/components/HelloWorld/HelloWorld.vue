<template>
  <div class="hello">
    <h1>Test: {{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  text-align: center;
  h1 {
    text-transform: uppercase;
    font-size: 2rem;
    @media (min-width: 1024px) {
      font-size: 5rem;
    }
  }
}
</style>
