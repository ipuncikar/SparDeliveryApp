<template>
 <div id="nat">
  <div>
  </div>
      <div class="col">
        <h3 class="text-center mb-5">Obrađene narudžbe</h3>
      </div>
<obradenenarudzbe :key="obradenenarudzbe.id" :obradenenarudzbe="obradenenarudzbe" v-for="obradenenarudzbe in obrnarudzbe" />
  </div>
</template>


<script>
import obradenenarudzbe from '@/components/obradenenarudzbe.vue'
import store from "../store";
export default {
  data() {
    return store;
  },
    components: {
      obradenenarudzbe

  },
  mounted(){
   if(this.obrnarudzbe.some(obradenenarudzbe => obradenenarudzbe.id === doc.data().id)==false){
    firebase.firestore().collection("Narudzba").where("obradeno", "==", true).onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
         if(change.type === 'added'){
        let doc = change.doc
         let obradenenarudzbe=doc.data()
         obradenenarudzbe.id = doc.id
        this.obrnarudzbe.push(obradenenarudzbe);
}

 else if( change.type === 'removed'){
                           this.obrnarudzbe = this.obrnarudzbe.filter(obrnarudzbe =>{
                            return obrnarudzbe.id != change.doc.id
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
margin-left: -5%;
height: 98px;
width: 100vw;
border-top: rgb(244, 182, 149);
border-bottom: rgb(0, 0, 0);;
padding-bottom: 15%;
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