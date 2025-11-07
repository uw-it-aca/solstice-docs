<template>404 page not found asdfasdf</template>

<script>
  export default {
    name: "PageNotFound",
    components: {},
    data() {
      return {};
    },
    mounted() {
      // MARK: override layout pageTitle prop
      document.title = "Page Not Found - Solstice";
    },
  };
</script>
