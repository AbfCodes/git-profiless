<template>
  <div class="home">
    <user-search></user-search>
  </div>
</template>

<script>
// @ is an alias to /src
import UserSearch from '../components/UserSearch'

export default {
  name: 'Home',
  components: {
    UserSearch
  }
}
</script>
