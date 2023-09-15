<template>
 <div id="nat">
  <div class="kartica">
      <div class="podaci">
    <div class="row">
  <div class="column"><h6>Dostavljač</h6><a>{{ obradenenarudzbe.dostavljac }}</a></div>
  <div class="column"><h6>Poslovnica</h6><a>{{ obradenenarudzbe.poslovnica }}</a></div>
  <div class="column"><h6>Mjesto</h6><a>{{ obradenenarudzbe.mjesto }}</a></div>
  <div class="column"><h6>Vrijeme preuzimanja narudžbe</h6><a>{{ obradenenarudzbe.vrijemep }}</a></div>
  <div class="column"><h6>Vrijeme završetka narudžbe</h6><a>{{ obradenenarudzbe.vrijemez }}</a></div>

</div>
      </div>
  </div>


  </div>
</template>
<style>
.column2{
padding-top: 10px;
}

</style>

<script>
import store from "../store";
import moment from 'moment';
export default {
    data() {
    return store;
  },
  props: [ "obradenenarudzbe" ],

  
}
</script>


