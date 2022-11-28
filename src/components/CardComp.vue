<template>
    <div class="col">
        <div class="card">
        <img :src="cardProps.poster" class="card-img-top" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">{{cardProps.title}}</h5>
        <p class="card-text">{{cardProps.author}}</p>
        <p class="card-text">{{cardProps.year}}</p>
  </div>
</div>
    </div>

</template>

<script>
    export default {
        name: 'CardComp',
        props: {
            cardProps: Object
        }
    }
</script>

<style lang="scss" scoped>
.card{
    background-color: #2E3A46;   
}
</style>