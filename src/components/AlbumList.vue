<template>
    <div class="albumList">


        <div class="row row-cols-5 justify-content-center">
            <CardComp v-for="(elem, index) in funzioneComputed" :key="index" :cardProps="elem"/>
        </div> 
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
    props: {
        sceltaUtente: String
    },
    data(){
        return{
            albums: [],
            arrGeneri: [],           
        }
    },
    computed: {
        funzioneComputed(){
            if(this.sceltaUtente == '') {
                return this.albums  
            } else {
                return this.albums.filter((elem) => {
                    return elem.genre == this.sceltaUtente
                })
            }
        }
    },
    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
             .then((response) =>{
                this.albums = response.data.response

                this.albums.forEach((singoloAlbum) => {
                    if(!this.arrGeneri.includes(singoloAlbum.genre)) {
                        this.arrGeneri.push(singoloAlbum.genre)
                    }
                })
                this.$emit('emitGeneri', this.arrGeneri)

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