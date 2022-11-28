<template>
  <main >
    <div class="container">
       <AlbumList/> 
    </div>
     
  </main>
</template>

<script>
import AlbumList from "./AlbumList.vue"
import axios from "axios";


export default {
    name: 'CardComp',
    components: {
      AlbumList
    },
    data() {
      return {
        dataAlbum: [],
      };
    },
    mounted() {
      axios.get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((response) => {
        console.log(response.data);
        this.dataAlbum = response.data.response
      })
    }

}
</script>

<style scoped lang="scss">
main{
    background-color: #1E2D3B;
    height: 90%;
    padding: 20px;
}

</style>