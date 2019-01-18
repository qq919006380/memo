<template>
  <div class="content">
    <note v-for="(item,index) in data" :key="index" :style="`left:${180*index}px`">{{item}}</note>
  </div>
</template>

<script>
import Vue from "vue";
import Note from "@/components/note.vue";

export default {
  data() {
    return {
      data: JSON.parse(`["${window.localStorage.noteDate}"]`)
    };
  },
  beforeCreate() {
    if (!Vue.localStorage.noteDate) {
      window.localStorage.noteDate = ["欢迎使用Note"];
    }
  },
  mounted() {
    this.$EventBus.$on("add_note", () => {
      this.data.push("1");
      window.localStorage.noteDate = [`[${this.data}]`];
      this.$toasted.show("新增成功");
    });

    this.$EventBus.$on("delete_note", s => {
      console.log(s);
      this.$toasted.show("删除成功");
    });
    this.$EventBus.$on("edit_note", () => {
      this.$toasted.show("编辑成功");
    });
  },

  components: {
    note: Note
  },
  created() {}
};
</script>
<style>
.content {
  position: relative;
}
</style>

