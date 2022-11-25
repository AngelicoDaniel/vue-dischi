<template>
  <div>
    <div>
        <div class="card justify-content-center align-items-center" >
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
        margin: 4.2rem;
    }

</style>