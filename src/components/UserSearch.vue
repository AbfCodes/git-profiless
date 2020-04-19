<template>
  <v-container>
    <br /><br />

    <v-layout class="fl">
      <v-col cols="10" xs12 sm12 md12 lg12 class="mt-5">
        <v-text-field
          class="display-1 bold text-center"
          label="Search Profiles"
          v-model.lazy="query"
          @keypress.enter="callFetchUsers(query)"
        ></v-text-field>
      </v-col>
    </v-layout>
    <v-layout v-if="getUsers.length > 0" class="fl" @click="clearProfiles">
      <v-col cols="8" xs12 sm12 md12 lg12 class="mb-5">
        <v-btn block>Clear Search Profile</v-btn>
      </v-col>
    </v-layout>

    <v-layout v-show="getUsers.length > 0">
      <v-flex xs="12" sm="12" lg="12">
        <h1 class="display-2 text-uppercase bold primary--text">
          profile(s) :
        </h1>
      </v-flex></v-layout
    >
    <v-layout row wrap class="text-center fl horizontal-center">
      <v-flex xs12 sm5 md4 lg3 xl3 v-for="user in getUsers" :key="user.id">
        <v-card class="mx-auto pb-4 mb-10" raised max-width="280">
          <v-responsive class="pt-4">
            <v-avatar size="220">
              <img :src="user.avatar_url" />
            </v-avatar>
          </v-responsive>
          <div>
            <v-chip class="ma-2" filter>
              <v-card-title> {{ user.login }} </v-card-title>
            </v-chip>
          </div>
          <!-- <router-link
            color="primary"
            :to="{ name: 'ProfileView', params: { user: user.login } }"
            tag="button"
            ><v-icon left>fa-user</v-icon>more about Profile</router-link
          > -->
          <v-btn
            color="primary"
            router
            :to="{ name: 'ProfileView', params: { user: user.login } }"
            ><v-icon left>fa-user</v-icon>more about Profile</v-btn
          >
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout
      v-if="isLoading"
      row
      wrap
      class="text-center fl horizontal-center"
    >
      <v-flex xs12 sm5 md4 lg3 xl3 v-for="n in 6" :key="n" class="ma-4">
        <v-sheet :color="`grey darken-2`" class="px-3 pt-3 pb-3">
          <v-skeleton-loader
            class="mx-auto"
            max-width="300"
            width="260"
            type="card"
          ></v-skeleton-loader> </v-sheet
      ></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'userSearch',
  data() {
    return {
      query: ''
    }
  },
  computed: {
    ...mapGetters(['getUsers', 'isLoading'])
  },
  methods: {
    ...mapActions(['fetchUsers']),
    ...mapMutations(['clearProfiles']),
    callFetchUsers(query) {
      //   console.log(query)
      //   this.$store.dispatch('fetchUsers', query)
      this.fetchUsers(query)
    }
  }
}
</script>

<style scoped>
.horizontal-center {
  margin-top: 2rem;
}
.fl {
  display: flex;
  justify-content: center;
}
.bold {
  font-weight: 900 !important;
  letter-spacing: 6px;
}
.block {
  display: block;
}
</style>
