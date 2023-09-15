<template>
 <div id="nat">
  <div class="kartica">
      <div class="podaci">
    <div class="row">
  <div class="column"><h6>Dostavljač</h6><a>{{ narudzbeobrada.dostavljac }}</a></div>
  <div class="column"><h6>Poslovnica</h6><a>{{ narudzbeobrada.poslovnica }}</a></div>
  <div class="column"><h6>Vrijeme preuzimanja</h6><a>{{ narudzbeobrada.vrijemep }}</a></div>
  <div class="column2"><button class="btn btn-warning" @click="zavrsi(narudzbeobrada.id)" id="obrisi">Završi</button></div>

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
  props: [ "narudzbeobrada" ],
  methods: {
      
   zavrsi(id){
var date = new Date();
var formattedDate = moment(date).format('YYYY/MM/DD/ [u] hh:mm');
var brisanje_upit = firebase.firestore().collection("Narudzba").where("id","==",id);
brisanje_upit.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
  doc.ref.set({
 vrijemez: formattedDate,
 obradeno: true,
 uobradi: false,
},{merge:true})
  });
}).then(alert("Narudžba obrađena"));
  }


  
  },
  
}
</script>


