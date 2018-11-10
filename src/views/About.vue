<template>
  <v-container grid-list-lg>
    <v-layout
      row
      wrap>
      <v-subheader class="display-1">
        Our Story
      </v-subheader>
      <v-flex xs12>
        <v-card>
          <v-card-text class="body-2">
            The members of The Naticks initially met through Scouting at a young age. Learning of their common interest in music, the band began jamming together in 2007. They first hit the Rhode Island live circuit in 2010 under the name Juice. In 2015, the group changed their name to The Naticks, and began focusing their efforts to writing, gigging, and recording on a more consistent basis. Several changes to the line up have led to the current group that tours today. With a diverse taste in music among the 5, they've worked together to create a unique sound which blends their influences and compliments the high energy atmosphere at their shows.
            <br>
            <br>
            Though they are not from Natick, the band appreciates the local history and Native American roots. They found the word's meaning (a place of searching) to be representative of themselves as a band and as individuals.​ Now, reinvigorated, The Naticks are ready to explore some new sound and make some serious noise!
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex
        v-for="(mem,index) in members"
        :key="mem.bio"
        xs12>
        <bio-card
          :pic="mem.pic"
          :bio="mem.bio"
          :right="index %2 == 0"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import chris from '../assets/chris.jpg';
import ross from '../assets/ross.jpg';
import telli from '../assets/telli.jpg';
import nick from '../assets/nick.jpg';
import drew from '../assets/drew.jpg';
import BioCard from '../components/BioCard.vue';
export default {
  components: {
    BioCard,
  },
  data() {
    return {
      chris,
      members: [
        {
          pic: chris,
          bio: 'Chris Capuano is a keyboardist and vocalist that began his musical career in the 1st grade. His first exposure to musical training involved learning to play the piano by ear via Suzuki, a Japanese learning method. After years of classical lessons, Chris decided that rocking out with friends was way more fun and quit piano lessons. He recently graduated from the University of Rhode Island with a degree in Mechanical Engineering and Spanish. In addition to music, Chris enjoys skiing, hiking and traveling.',
        },
        {
          pic: telli,
          bio: 'Telli Quinn is a vocalist that has been singing and playing piano since she was 10.  She has previously been a part of several choirs and ensembles ranging from a tight-knit group of 12 to a state-wide group of 60 members. Other than playing music, her hobbies include art (painting, drawing, and sculpting) and being by the ocean. As the only female in the group, she adds higher range and accompanying harmony.',
        },
        {
          pic: ross,
          bio: 'Ross MacAndrew has been playing guitar since he was 9, but really stepped up his playing in high school after listening to Hendrix. Through jazz band, ensembles, and impromptu jams he\'s learned to love switching between lead and rhythm. Beyond music, he enjoys hanging outside, comedy, and running. He is a graduate from Northeastern where he studied business and music.',
        },
        {
          pic: nick,
          bio: 'Nick joined The Naticks in the Fall of 2018, and jumped right into action with a number of sets at local festivals, proving his skills as a drummer and ability to learn on the fly. His commitment to music is exemplified by the fact that he is in the process of building his own studio. Nick is a graduate of Rutgers University, and is looking forward to bringing his unique sound and style to the group!',
        },
        {
          pic: drew,
          bio: 'Drew Croll is a semi-self taught bassist who spends the majority of his time not playing the bass, but rather slapping it silly. Well known for his high voltage stage antics, Drew kicks up the energy of The Natick\'s live performances. He enjoys outdoor adventures, a variety of sports and relaxing with friends. He graduated from the University of Rhode Island with degrees in Economics and Political Science.',
        },
      ],
    };
  },
};
</script>
