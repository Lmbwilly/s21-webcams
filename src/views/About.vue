<template>
  <div class="about">
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card>
          <v-card-title>
            <h1 class="headline font-weight-bold font-italic">Über mich</h1>
          </v-card-title>
          <v-card-text class="body-2 font-italic">
            <p class="caption">
              Zwischen diese Seite und das
              <a
                href="http://www.s21erleben.de/"
              >Bahnprojekt Stuttgart–Ulm e.V.</a> oder der
              <a
                href="http://www.bahnprojekt-stuttgart-ulm.de"
              >DB Projekt Stuttgart–Ulm GmbH</a>
              besteht keine Verbindung.
            </p>
            <p>Sie entstand aus reine Interesse um das Projekt Stuttgart 21. So kann man alle Webcams des Projekts auf einer Seite sehen.</p>
            <p>Die bisherigen Lösung der IG Bürger für Baden-Württemberg e.V. oder die offizielle Lösung haben meine Erwartungen nicht getroffen. Deswegen habe ich entschieden meine eigene Lösung zu machen.</p>
            <p>Ich möchte betonen, dass das Bildmaterial mir nicht gehört. Sie werden aus Sicherheitsgründe zwischen gespeichert, damit ich sicher bin, dasss der erwarteten Inhalt geliefert wird. Dennoch werden die gespeicherte Bilder nicht bearbeitet.</p>
            <p>
              Der Code dieser Webseite ist auf
              <a
                href="https://github.com/Lmbwilly/s21-webcams"
              >GitHub</a> zur verfügung.
            </p>
            <p class="caption font-weight-black">
              Bitte kontaktieren Sie mich auf GitHub oder auf
              <a
                href="https://twitter.com/Lmbwilly"
              >twitter</a>
              , falls es nötig ist. Andere Wege mich zu kontaktieren sind ebenfalls möglich, wenn sie bisschen suchen.
            </p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { page } from 'vue-analytics'

export default {
  name: 'About',
  methods: {
    track() {
      page('/about')
    }
  }
};
</script>