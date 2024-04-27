<template>
    <div id="detailspage">
        <div id="detailsbox">
        <div v-for="flight of flightDetails" :key="flight.id">
        <FlightDetails :flight="flight" />
        </div>
    </div>
    </div>
</template>

<script>
import FlightDetails from './FlightDetails.vue'
  export default
  {
    name:'FlightDetailsBox',
    props:{
        flightDetails:Array
    },
    components:
    {
        FlightDetails
    }
  }
</script>

<style>
#detailspage
{
    background-image: url('../assets/SkyImage.jpg'); 
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding:30px;
}
#detailsbox
{
    /*border: 10px solid transparent;*/
    /*box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);*/
    width:95%;
    margin:0 auto;
    /*background-color:#ced4da; */
    padding:20px;
}

@media only screen and (max-width:500px) {
    #detailsbox
    {
        width:100%;
        padding:0px;
    }
}
</style>