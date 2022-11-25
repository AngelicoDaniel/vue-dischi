<template>
  <div>
    <div>
      <img src="../assets/logo.png" alt="">
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'HeaderComp',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div{
  height: 10vh;
  background-color: #2E3A46 ;
  text-align: start;
  img{
    width: 50px;
    padding-top: 15px;
    margin-left: 20px;
  }
}
</style>
