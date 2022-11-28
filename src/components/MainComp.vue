<template>
  <main >
    <div class="container">
      <select name="" id="" v-model="valueOptionSelected">
            <option :value="elem" v-for="(elem, index) in arrGeneri" :key="index">{{elem}}</option>
        </select>

       <AlbumList @emitGeneri="methodsListaGeneri"/> 
    </div>
     
  </main>
</template>

<script>
import AlbumList from "./AlbumList.vue"



export default {
    name: 'MainComp',

    components: {
      AlbumList
    },
    data() {
      return {
        arrGeneri: [],
        valueOptionSelected: ''
      };
    },

    methods: {
      methodsListaGeneri(valoreEmit){
        this.arrGeneri = valoreEmit
      }
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