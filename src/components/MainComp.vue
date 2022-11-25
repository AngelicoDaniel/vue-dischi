<template>
  <div>
    <div>
        <div class="card p-4 m-3 justify-content-center align-items-center" style="width: 12rem">
          <img :src="card.poster" class="p-1" alt="..." />
          <div>
            <h5 class="text-white">{{card.title}}</h5>
            <p class="text-secondary">{{card.author}} <br>
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

 
    img{
        width: 150px;
    }
    .card{
        background-color: #424242;
        height: 300px; 

    }

</style>