<template>
  <div>
    <div>
        <img :src="card.poster" alt="">
    </div>

  </div>
</template>

<script>


export default {
    name: 'MainComp',
    props: {
        card: Object,
    }
}
</script>

<style lang="scss" scoped>

</style>