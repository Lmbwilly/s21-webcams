<template>
  <div class="Webcam">
    <v-layout justify-space-around row fill-height wrap>
      <v-flex xs12 sm6 md4 v-for="cam in webcams" :key="cam.url">
        
        <v-card class="red ma-3" hover>
          <v-img :src="cam.url" aspect-ratio="1.5"></v-img>

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
                
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import json from "@/data/webcams.json";

export default {
  data() {
    return {
      webcams: json.webcams
    };
  }
};
</script>
