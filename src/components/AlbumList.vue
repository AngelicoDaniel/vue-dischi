<template>
  <div class="albumList row row-cols-5 justify-content-center">
    <CardComp
    v-for="(elem, index) in albums"
    :key="index"
    :cardProps="elem"
    />
  </div>
</template>

<script>
import CardComp from './CardComp.vue'
import axios from 'axios'


export default {
    name: "AlbumList",
    components: {
        CardComp
    },
    data(){
        return{
            albums: []
        }
    },
    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
             .then((response) =>{
                this.albums = response.data.response
             })
    }
}
</script>

<style scoped lang="scss">
.albumList{
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-between;
    align-items: center;
}


</style>