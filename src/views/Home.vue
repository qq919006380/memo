<template>
  <div class="home">
    <note msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Note from '@/components/note.vue'

export default {
  name: 'home',
  components: {
    Note
  }
}
</script>
