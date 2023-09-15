<template>
  <div id="app">
      <div class="bg">
        <div class="container">

          <div class="sidebar">
   <div id="wrapper">
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
                <li>
                    <router-link v-if="authenticated"  class="btn btn-outline nvb" to="/unos">Unos narudzbe</router-link>
                </li>
                <li>
                    <router-link v-if="authenticated"  class="btn btn-outline nvb" to="/cekanje">Narudzbe na cekanju</router-link>
                </li>
                <li>
                    <router-link v-if="authenticated"  class="btn btn-outline nvb" to="/narudzbeuobr">Narudzbe u obradi</router-link>
                </li>
                <li>
                    <router-link v-if="authenticated"  class="btn btn-outline nvb" to="/obrnarudzbe">Obrađene narudzbe</router-link>
                    <span v-if="authenticated"> 
                    </span>
                  </li>
            </ul>
            
        </div>
    </div>

</div>
          <div class="row">
            <div class="col">
              <nav class="navbar navbar-expand-lg navbar-light mb-2">
                <router-link class="navbar-brand" :to="{name: 'posts'}">         
                <a id="naziv"> <b> ŠparDeliveryApp </b></a>              
              </router-link>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>           
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <form class="form-inline my-2 my-lg-0 mr-auto ml-5">   
                </form>
                <router-link v-if="!authenticated" id="bprijavaireg" class="btn btn-outline my-2 my-sm-0 mr-2" to="/prijava">Prijava</router-link>
                <span v-if="authenticated">
                  {{ userEmail }}
                  <a @click="logout" id="bodjava" class="btn btn-outline my-2 my-sm-0 mr-2" href="#">Odjava</a>
                </span>
                <router-link v-if="!authenticated" id="bprijavaireg" class="btn btn-outline my-2 my-sm-0 mr-2" to="/registracija">Registracija</router-link>
            </div>
          </nav>
        </div>
      </div>
    </div>
    </div>
      <div class="nk">
        <router-view/>
    </div>
  </div>
</template>

<script type="text/javascript">
import store from '@/store.js'

export default {
  data () {
    return store;
  },

  methods: {
    logout() {
      firebase.auth().signOut()
    }
  },

  mounted () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("User is logged in with email " + user.email)
        this.authenticated = true

         firebase.firestore().collection("Korisnici")
          .doc(user.email)
          .get()
          .then(doc => {
              if (doc.exists) {
                this.profil=doc.data().profil
                this.ime=doc.data().ime
                this.prezime=doc.data().prezime
                console.log("Document data:", doc.data());
                this.tipKorisnika = doc.data().tipProfila;
              } else {
                console.log("No such document!");
              }
          });
        this.userEmail = user.email
        if (this.$route.name === 'login')
          this.$router.push({name: 'home'}).catch(err => console.log(err))
      }
      else {
        console.log("User is not logged in")
        this.authenticated = false
        if (this.$route.name !== 'login')
          this.$router.push({name: 'login'}).catch(err => console.log(err))
      }
    });
  }
}

</script>

<style lang="scss">
.bg{
  background-color: rgb(57, 57, 57);
}

#bprijavaireg {
color: rgb(240, 194, 182);
}

#bodjava {
color: rgb(240, 194, 182);
}

.nk{
padding-left: 24.5%;
}

#naziv {
margin-bottom: 3%;
color: rgba(248, 241, 236, 1);
font-size: 32px;
}

body {
  background-color: rgba(var(--b3f,248,241,236),1)
}

nav.navbar {
  background-color: rgb(57, 57, 57);
}

#sidebar-wrapper {
    left: 250px;
    height: 100%;
    margin-left: -250px;
    overflow-y: auto;
    background: rgb(244, 182, 149);
    border-right: 10px;
    border-color: rgb(57, 57, 57);
}

.sidebar-nav {
    width: 170px;
    margin: 0;
    padding: 0;
    list-style: none;
}

.sidebar-nav li {
    text-indent: 20px;
    line-height: 80px;
}

.sidebar-nav li a {
    display: block;
    text-decoration: none;
    color: #000000;
}

.sidebar-nav li a:hover {
    text-decoration: none;
    color: rgb(232, 220, 220);
    background: rgba(255,255,255,0.2);
}

@media(min-width:768px) {
    #sidebar-wrapper {
      position: absolute;
      top:13.5%;
        width: 220px;
        border-right: rgb(253, 253, 253) 1px solid;
    }
}
</style>
