<template>
  <div>
    <div class="calc">
        <div class="card p-4 m-3" style="width: 18rem">
          <img :src="card.poster" class="p-1" alt="..." />
          <div>
            <h5>{{card.title}}</h5>
            <p>{{card.author}} <br>
                {{card.year}}
            </p>
          </div>
        </div>
     
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
.calc{
    width: calc(100% / 5);
    img{
        width: 150px;
        align-self: center;
    }
    .card{
        background-color: #424242;
        height: 300px;
        width: 100px;  
        color: white;
    }
}
</style>