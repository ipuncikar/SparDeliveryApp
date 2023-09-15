<template>
 <div id="nat">
  <div class="kartica">
      <div class="podaci">
    <div class="row">
    <div class="column"><h6>Broj narudžbe</h6><a>{{narudzbecekanje.id}}</a></div>
  <div class="column"><h6>Poslovnica</h6><a>{{ narudzbecekanje.poslovnica }}</a></div>
  <div class="column"><h6>Mjesto</h6><a>{{ narudzbecekanje.mjesto}}</a></div>
  <div v-if="profil === 'dostavljac'" class="column2"><button class="btn btn-warning" @click="preuzmi(ime, prezime, narudzbecekanje.id)" id="obrisi">Preuzmi</button></div>

</div>
      </div>
  </div>


  </div>
</template>
<style>
.column2{
padding-top: 20px;
}

</style>

<script>
import store from "../store";
import moment from 'moment';
export default {
    data() {
    return store;
  },
  props: [ "narudzbecekanje" ],
  methods: {
      

  preuzmi(i,p,id){
var date = new Date();
var formattedDate = moment(date).format('YYYY/MM/DD/ [u] hh:mm');
var imeiprezime = i.concat(" ", p);
var brisanje_upit = firebase.firestore().collection("Narudzba").where("id","==",id);
brisanje_upit.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    doc.ref.set({
 dostavljac: imeiprezime,
 vrijemep: formattedDate,
 cekanje: false,
 uobradi: true
},{merge:true})
  });
}).then(alert("Narudzba preuzeta"));
  }
  
  },
  
}
</script>


