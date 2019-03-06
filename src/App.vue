<template>
  <v-app>
    <Navbar/>

    <v-content class="ma-4">
      <router-view></router-view>
    </v-content>
    <v-footer color="red" height="auto">
      <v-flex lighten-2 text-xs-center white--text xs12>
        <strong>
          Die Webcams werden vom Bahnprojekt Stuttgart–Ulm bereit gestellt, die Webcam-Übersicht finden Sie unter
          <a
            href="http://www.bahnprojekt-stuttgart-ulm.de/baustelle/webcams/"
          >http://www.bahnprojekt-stuttgart-ulm.de/baustelle/webcams/</a>
        </strong>
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  },
  data() {
    return {
      //
    };
  }
};
</script>
