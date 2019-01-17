<template>
  <div class="content">
    <note v-for="(item,index) in noteDate" :key="index" :style="`left:${180*index}px`">{{item}}</note>
  </div>
</template>

<script>
import Vue from "vue";
import Note from "@/components/note.vue";

export default {
  data() {
    return {
      aaa: [],
      noteDate: JSON.parse(`[${Vue.localStorage.get("noteDate")}]`)
    };
  },
  created() {
    if (!Vue.localStorage.note) {
      Vue.localStorage.set("noteDate", this.aaa);
    }
    localStorage.set('ss',11)
    localStorage.t=1
  },
  mounted() {
    this.$EventBus.$on("add_note", () => {
      this.aaa.push("1");
      this.noteDate.push("1")
      Vue.localStorage.set("noteDate", this.aaa);
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

