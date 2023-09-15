<template>

 <div id="nat">
  <div>
  </div>
      <div class="col">
        <h3 class="text-center mb-5">Narudžbe u obradi</h3>
      </div>
<narudzbeobrada :key="narudzbeobrada.id" :narudzbeobrada="narudzbeobrada" v-for="narudzbeobrada in narudzbeuobradi" />

  </div>
</template>


<script>
import narudzbeobrada from '@/components/narudzbeobrada.vue'
import store from "../store";
export default {
  data() {
    return store;
  },
    components: {
      narudzbeobrada
  },
  mounted(){
   if(this.narudzbeuobradi.some(narudzbeobrada => narudzbeobrada.id === doc.data().id)==false){
    firebase.firestore().collection("Narudzba").where("uobradi", "==", true).onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
         if(change.type === 'added'){
        let doc = change.doc
         let narudzbeobrada=doc.data()
         narudzbeobrada.id = doc.id
        this.narudzbeuobradi.push(narudzbeobrada);
}

 else if( change.type === 'removed'){
                           this.narudzbeuobradi = this.narudzbeuobradi.filter(narudzbeuobradi =>{
                            return narudzbeuobradi.id != change.doc.id
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
  width: 10%;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>