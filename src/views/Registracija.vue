<template>
  <div>
    <div class="row">
      <div class="col">
        <h1 class="text-center mb-5">Registracija za nove zaposlenike</h1>
      </div>
    </div>
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <form @submit.prevent="signup">
          <div v-if="errorMessage" class="alert alert-danger">
            <strong>Ups!</strong>
            {{ errorMessage }}
          </div>
          <div class="form-group">
            <label for="emailField">Email adresa</label>
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="emailField"
              aria-describedby="emailHelp"
              placeholder="Unesite Email"
            />
          </div>
          <div class="form-group">
            <label for="passwordField">Lozinka</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="passwordField"
              placeholder="Lozinka"
            />
          </div>
          <div class="form-group">
            <label for="confirmPasswordField">Potvrda lozinke</label>
            <input
              v-model="password2"
              type="password"
              class="form-control"
              id="confirmPasswordField"
              placeholder="Potvrda lozinke"
            />
          </div>

   <div class="form-group">
            <label for="Ime">Ime</label>
            <input
              v-model="ime"
              type="ime"
              class="form-control"
              id="ime"
              placeholder="Unesite ime"
            />
          </div>

             <div class="form-group">
            <label for="Prezime">Prezime</label>
            <input
              v-model="prezime"
              type="prezime"
              class="form-control"
              id="prezime"
              placeholder="Unesite prezime"
            />
          </div>
          <form>
  <div class="form-row align-items-center">
<label for="cars">Tip zaposlenika:</label>
<select v-model="profil">
    <option value="Upravitelj">Upravitelj</option>
    <option value="dostavljac">Dostavljač</option>
</select>
  </div>
</form>


          <button type="submit" class="btn btn-warning" >Potvrdi</button>
        </form>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>
<script>
import store from "../store";
export default {
  data() {
    return {
      errorMessage: "",
      email: "",
      password: "",
      password2: "",
      ime: "",
      prezime: "",
      profil: "",
    };
  },
  mounted() {},
  methods: {
    signup() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          let id = this.email;
          firebase.firestore().collection("Korisnici")
            .doc(id)
            .set({
              email: id,
              ime: this.ime,
              prezime: this.prezime,
              profil: this.profil
            })
            .then(function() {
              console.log("Document successfully written!");
            })
            .catch(function(error) {
              console.error("Error writing document: ", error);
            });
        }).then(this.$router.push('/unos'))
        .catch(error => {
          console.error(error);
          this.errorMessage = error.message;
        });
    }
  }
};
</script>