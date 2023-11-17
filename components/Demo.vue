<template>
  <ui-input v-model="name" placeholder="请输入" @input="aaa"></ui-input>
</template>

<script>
export default {
  data() {
    return {
      name: '',
    };
  },
  methods: {
    aaa(e) {
      // debugger;
      console.log('input');
      this.name = e.replace(/\s*/g, '');
    },
    bbb() {},
  },
};
</script>
