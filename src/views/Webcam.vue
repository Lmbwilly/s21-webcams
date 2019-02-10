<template>
  <div class="Webcam">
    <v-layout justify-space-around row fill-height wrap>
      <v-flex xs12 sm6 md4 v-for="cam in webcams" :key="cam.url">
        <v-hover data-fancybox="gallery" :href="cam.url" :data-caption="cam.name">
          <v-card slot-scope="{ hover }" class="red ma-3" hover>
            <v-img :src="cam.url" aspect-ratio="1.5">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-ease-in-out red v-card--reveal display-4"
                  style="height: 15%;"
                >
                  <v-icon class="white--text" big>zoom_in</v-icon>
                </div>
              </v-expand-transition>
            </v-img>

            <v-card-title>
              <v-layout align-center justify-space-around row fill-height>
                <v-flex shrink>
                  <h1 class="title white--text">{{ cam.name }}</h1>
                </v-flex>

                <v-flex grow>
                  <v-spacer></v-spacer>
                </v-flex>

                <v-flex shrink>
                  <v-chip small right class="caption red--text white">
                    <v-icon left>label</v-icon>
                    {{cam.category}}
                  </v-chip>
                </v-flex>
              </v-layout>
            </v-card-title>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import json from "@/data/webcams.json";
import { page } from 'vue-analytics'

export default {
  data() {
    return {
      webcams: json.webcams
    };
  },
  methods: {
    track() {
      page('/')
    }
  }
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.7;
  position: absolute;
  width: 100%;
}
</style>
