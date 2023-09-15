<template>
  <div id="unos">
<div>
    <div class="row">
      <div class="col">
        <h3 class="text-center mb-5">Unos narudžbe</h3>
      </div>
    </div>
    <div v-if="profil === 'Dostavljac'" class="row">
      <div class="col">
        <h5>Nemate ovlasti za unos</h5>
      </div>
    </div>
    <div v-if="profil === 'Upravitelj'" class="row">
      <div class="col"></div>
      <div class="col">
        <form @submit.prevent="unosnarudzbe">
          <div v-if="errorMessage" class="alert alert-danger">
            <strong>Ups!</strong>
            {{ errorMessage }}
          </div>

          <div class="form-group">
            <label for="passwordField">Broj narudžbe</label>
            <input
              v-model="id"
              class="form-control"
              id="id"
              placeholder="Narudžba"
            />
          </div>
          <div class="form-group">
            <label >Broj poslovnice</label>
            <input
              v-model="poslovnica"
              class="form-control"
              id="isk"
              placeholder="Poslovnica"
            />
          </div>
          <div class="form-group">
            <label for="passwordField">Mjesto</label>
            <input
              v-model="mjesto"
              class="form-control"
              id="prezime"
              placeholder="Mjesto"
            />
          </div>
          <button type="submit" class="btn btn-warning" >Potvrdi</button>
        </form>
      </div>
      <div class="col"></div>
    </div>
  </div>
  </div>
</template>

<script>
import store from "../store";
import moment from 'moment';
export default {
  data() {
    return store;
  },
  mounted() {},
  methods: {

      unosnarudzbe(){
          var date = new Date();
          var formattedDate = moment(date).format('YYYY/MM/DD/ [u] hh:mm');
           firebase.firestore().collection("Narudzba").doc(this.id).set
                      ({
                      id: this.id,
                      poslovnica: this.poslovnica,
                      mjesto: this.mjesto,
                      obradeno: false,
                      uobradi: false,
                      cekanje: true

                       }
                       ).then(alert("Uspješan unos")).then(setTimeout(function() {
         window.location.reload();
      }, 1000));
      },

  }
};
</script>