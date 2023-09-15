<template>
 <div id="nat">
  <div>
  </div>
      <div class="col">
        <h3 class="text-center mb-5">Narudžbe na čekanju</h3>
      </div>
<narudzbecekanje :key="narudzbecekanje.id" :narudzbecekanje="narudzbecekanje" v-for="narudzbecekanje in narucekanju" />
  </div>
</template>

<script>
import narudzbecekanje from '@/components/narudzbecekanje.vue'
import store from "../store";
export default {
  data() {
    return store;
  },
    components: {
    narudzbecekanje
  },
  mounted(){
   if(this.narucekanju.some(narudzbecekanje => narudzbecekanje.id === doc.data().id)==false){
    firebase.firestore().collection("Narudzba").where("cekanje", "==", true).onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
         if(change.type === 'added'){
        let doc = change.doc
         let narudzbecekanje=doc.data()
         narudzbecekanje.id = doc.id
        this.narucekanju.push(narudzbecekanje);
}

 else if( change.type === 'removed'){
                           this.narucekanju = this.narucekanju.filter(narucekanju =>{
                            return narucekanju.id != change.doc.id
                          })
                        }
    });
});
 }

  },
  methods: {
 },
};
</script>

<style>

.kartica{
margin-left: -10%;
height: 40px;
width: 100vw;
border-top: rgb(244, 182, 149);
border-bottom: rgb(0, 0, 0);
padding-bottom: 10%;
}
.podaci{
margin-left: 5%;
}

.column {
  float: left;
  width: 15%;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>