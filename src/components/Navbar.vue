<template>
  <nav>
    <v-toolbar class="red" app>
      <v-toolbar-title class="text-uppercase">
        <span class="white--text">S</span>
        <span class="hidden-xs-only font-weight-light white--text">tuttgart</span>
        <span class="white--text text--darken-2">21</span>
        <span class="grey--text text--darken-2">Webcams</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu offset-y>
        <v-btn flat class="red white--text" slot="activator">
          <v-icon left>expand_more</v-icon>
          <span class="white--text">Menü</span>
        </v-btn>
        <v-list class="red white--text">
          <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { icon: "linked_camera", text: "Webcams", route: "/" },
        { icon: "not_listed_location", text: "Über mich", route: "/about" }
      ]
    };
  }
};
</script>

