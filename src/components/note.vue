<template>
  <div>
    <div class="note" v-for="(item,index) in noteDate" :key="index" :style="position">
    <div class="note-head">
      <span class="username"></span>
      <span class="delete" @click="delete_note">&times;</span>
    </div>
    <div class="note-ct" contenteditable="true" @blur="edit_note">
       {{item}}
    </div>
  </div>
  </div> 
</template>

<script>
import Vue from "vue";
export default {
  name: "note",
  data(){
    return {
      noteDate:JSON.parse(`[${Vue.localStorage.get("noteDate")}]`)
    }
  },
  cumputed:{
     
    position() {
      return 's'
    }
  },
  mounted() {
    console.log(this.noteDate)
    this.init();
    this.bindEvent();
  },
  methods: {
    init() {
      if (!Vue.localStorage.note) {
        Vue.localStorage.set("noteDate", [1,2,3]);
      }

    },
    bindEvent() {
      
    },
    edit_note: function() {
      console.log('edit')
    },
    add: function(msg) {
      console.log("add");
      //todo
    },
    delete_note: function() {
      console.log("delete");
    }
  }
};
</script>

<style scoped>
.note {
  position: absolute;
  color: #333;
  width: 160px;
  margin: 20px 10px;
  transition: all 0.5s;
}
.note-ct {
  padding: 10px;
  background-color: #efb04e;
  outline: none;
}

.delete {
  position: absolute;
  top: 4px;
  right: 4px;
  font-size: 12px;
  color: #fff;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s;
}
.note-head {
  height: 20px;
  background-color: #ea9b35;
  cursor: move;
  font-size: 12px;
  line-height: 20px;
  padding-left: 10px;
  color: #666;
}
.note:hover .delete {
  opacity: 1;
}

.note:before {
  position: absolute;
  left: 50%;
  top: -11px;
  margin-left: -32px;
  content: " ";
  display: block;
  width: 64px;
  height: 18px;
  background: #35bba3;
}

.note:after {
  position: absolute;
  left: 50%;
  margin-left: 32px;
  top: -11px;
  z-index: -1;
  content: "";
  display: block;
  width: 0;
  height: 0;
  border-left: 5px solid #299683;
  border-top: 18px solid transparent;
}

.draggable {
  opacity: 0.8;
  cursor: move;
  transition: none;
}
</style>
