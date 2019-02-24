<template>
  <v-layout>
    <v-flex
      xs12
      sm6
      offset-sm3>
      <v-card>
        <v-container
          grid-list-sm
          fluid>
          <v-layout
            row
            wrap>
            <v-flex
              v-for="n in 9"
              :key="n"
              xs4
              d-flex
            >
              <v-card
                flat
                tile
                class="d-flex">
                <v-img
                  v-for="fan in fans"
                  :key="fan.pic"
                  :src="fan.pic"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <v-layout
                    slot="placeholder"
                    fill-height
                    align-center
                    justify-center
                    ma-0
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"/>
                  </v-layout>
                </v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import image1 from '../assets/fanaticks1.jpg';
import image2 from '../assets/fanaticks2.jpg';
import image3 from '../assets/fanaticks3.jpg';
import image4 from '../assets/fanaticks4.jpg';
import image5 from '../assets/fanaticks5.jpg';
import image6 from '../assets/fanaticks6.jpg';
import image7 from '../assets/fanaticks7.jpg';
import image8 from '../assets/fanaticks8.jpg';

export default {
  data() {
    return {
      fans: [
        {
          pic: image1,
          name: 'fanaticks1',

        },
        {
          pic: image2,
          name: 'fanaticks2',
        },
        {
          pic: image3,
          name: 'fanaticks3',
        },
        {
          pic: image4,
          name: 'fanaticks4',
        },
        {
          pic: image5,
          name: 'fanaticks5',
        },
        {
          pic: image6,
          name: 'fanaticks6',
        },
        {
          pic: image7,
          name: 'fanaticks7',
        },
        {
          pic: image8,
          name: 'fanaticks8',
        },
      ],

    };
  },
  computed: {

  },
  methods: {

  },
};
</script>
