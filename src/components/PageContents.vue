// HelloWorld.vue

<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  inject: ["mq"],
  data() {
    return {};
  },
  methods: {},
};
</script>
