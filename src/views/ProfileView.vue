<template>
  <div>
    <v-btn class="v-align-2 d" to="/"
      ><v-icon small>fa-arrow-left</v-icon>
      <span class="pl-3">Back</span></v-btn
    >
    <v-container class="horizontal-center">
      <!-- Profile of selected user stars here ! -->
      <v-layout row wrap class="text-center horizontal-center">
        <v-flex xs12 sm12 md12 lg12 xl12>
          <v-card class="mx-auto pb-4 mb-5" raised max-width="550">
            <v-responsive class="pt-4">
              <v-avatar size="220">
                <img :src="getUserData.avatar_url" />
              </v-avatar>
            </v-responsive>
            <div>
              <v-chip class="ma-2" filter>
                <v-card-title> {{ getUserData.login }} </v-card-title>
              </v-chip>
              <v-chip class="ma-2" filter>
                <v-card-title class="body-2 font-weight-bold">
                  <v-icon left color="primary">fa-building</v-icon>
                  {{ getUserData.company }}
                </v-card-title>
              </v-chip>
              <v-chip
                v-if="getUserData.hireable"
                class="ma-2 font-weight-bold"
                color="green"
                text-color="white"
              >
                Hireable
              </v-chip>

              <v-chip
                v-else
                class="ma-2 font-weight-bold"
                color="red"
                text-color="white"
              >
                Not Hireable
              </v-chip>

              <v-chip class="ma-2 font-weight-bold" filter>
                <v-icon left color="primary">fa-archive</v-icon>Repositories :
                {{ getUserData.public_repos }}
              </v-chip>
              <v-chip class="ma-2" filter>
                <v-card-title class="body-2 font-weight-bold">
                  <v-icon left color="primary">fas fa-users</v-icon>
                  followers: {{ getUserData.followers }}
                </v-card-title>
              </v-chip>

              <v-card-subtitle class="font-weight-bold">
                <v-icon left small color="primary">fa-map-marker-alt</v-icon
                ><span>{{ getUserData.location }}</span>
              </v-card-subtitle>
            </div>

            <v-btn color="primary">
              <!-- <a
                :href="'https://github.com/bradtraversy'"
                rel="noopener noreferrer"
                > </a >-->
              <v-icon left>mdi-open-in-new</v-icon>Github Profile</v-btn
            >
          </v-card>
        </v-flex>
      </v-layout>
      <!-- Profile of selected user Ends here ! -->
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ProfileView',
  props: ['user'],
  methods: {
    // for dispatch fn_fetchedUserData : params(user)
    ...mapActions(['fetchedUserData']),

    //calling fetchedUserData from actions
    callFetchedUserData(user) {
      // this.$store.dispatch('fetchedUserData', user)
      this.fetchedUserData(user)
    }
  },
  computed: {
    // getting selected user profile
    ...mapGetters(['getUserData'])
  },
  created() {
    this.callFetchedUserData(this.user)
  }
}
</script>
<style scoped>
.horizontal-center {
  margin-top: 6rem;
}
.v-align-2 {
  position: absolute;
  margin: 4.4rem 0 0 0.4rem;
}
</style>
