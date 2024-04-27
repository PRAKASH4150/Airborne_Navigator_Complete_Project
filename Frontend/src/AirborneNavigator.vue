<template>
  <MyHeader projectTitle="Airborne Navigator"/>
  <FlightDetailsBox :flightDetails=flightDetails />
</template>

<script>
  import MyHeader from './components/MyHeader.vue'
  import FlightDetailsBox from './components/FlightDetailsBox.vue'
  export default
  {
    name:'AirborneNavigator',
    components:
    {
      MyHeader,
      FlightDetailsBox
    },
    data(){
      return{
        flightDetails:[]
      }
    },
    methods:
    {
      async fetchFlightDetails()
      {
        const resp=await fetch("https://airborne-navigator-backend.onrender.com/api");
        const data =await resp.json();
        return data;
      }
    },
    async created()
    {
      this.flightDetails=await this.fetchFlightDetails();
    }
  }
</script>
  
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Montserrat', sans-serif;
}

</style>
