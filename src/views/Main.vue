<template>
  <v-container>
    <p class="headline font-weight-bold text-center">
      Articles
    </p>

    <v-card
      v-for="(article, key) in get_articles"
      :key="key"
      color="transparent"
      class="list_articles mb-2"
      outlined
    >
      <div class="d-flex flex-no-wrap justify-space-between">
        <v-avatar class="ma-1" size="80" tile>
          <v-img height="80" width="80" :src="article.image"></v-img>
        </v-avatar>

        <v-card-text class="pt-1">
          <div class="caption font-weight-bold indigo--text">
            {{ article.category }}
          </div>
          <h2 class="list_articles__caption subtitle-2 mt-1 mb-1">{{ article.caption }}</h2>
          <div class="overline grey--text">
            {{ article.date }}
          </div>
        </v-card-text>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "main",
  components: {},
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    ...mapGetters(["get_articles"])
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.list_articles {
  &__caption {
    line-height: 1.4em;
  }
}
</style>
