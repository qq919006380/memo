<template>
  <div class="home">
    <note/>
  </div>
</template>

<script>
// @ is an alias to /src
import Note from '@/components/note.vue'

export default {
  name: 'home',
  components: {
    'note':Note
  },
  created(){
    this.$on('addd',()=>{
      console.log('sd')
    })
  },
  
}
</script>
