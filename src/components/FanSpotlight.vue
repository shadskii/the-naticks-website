<template>
  <v-container
    fluid
    fill-height
  >
    <v-layout
      align-center
      row
      wrap
      justify-space-around
      text-xs-center
    >
      <v-flex
        lg12
      >
        <v-card id="fanSpotlightCard">
          <h1>Fan Spotlight</h1>
          <br>
          <h2>Emerson Torrey</h2>
          <br>
          <p>We're very happy to give Emerson Torrey this shout out in the FANaticks Spotlight! Local music legend and former guitarist of The Schemers, we were already impressed by Emerson's resume before we checked out his studio. It was quickly decided after the visit that this was the place we would record our EP. Emerson's honest criticism complimented by his hard work and enthusiasm to produce great music helped us create the final product that is available for listening today. The first couple sessions were a little nerve racking, but in no time, we all got really comfortable going in and cranking out some new tracks. He's become a great friend of the group and attended our album release, where he got a standing ovation for his contributions to the project. We highly recommend Satellite Studios for recording and are looking forward to spending more time there in the future! On top of that, Emerson can't speak highly enough of the softness of his Naticks t-shirts, and wears them often!</p>
          <v-img
            :src="emerson"
            aspect-ratio="1.5"
          />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import emerson from '../assets/fan-spotlight-emerson.jpg';


export default {
  data() {
    return {
      emerson,
    };
  },
  computed: {

  },
  methods: {

  },
};
</script>
<style>
    #fanSpotlightCard{

        padding: 2%;
    }
</style>
