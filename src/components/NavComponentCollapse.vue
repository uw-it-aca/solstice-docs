<template>
  <BLink
    :id="'components' + name + 'Heading'"
    class="d-flex justify-content-between nav-link rounded-3 text-light chevron bg-white-hover bg-opacity-10-hover ps-5"
    exact-active-class="bg-white bg-opacity-10"
    :to="url"
    data-bs-toggle="collapse"
    :data-bs-target="'#components' + name + 'Collapse'"
    :aria-expanded="$route.path.includes(url) ? true : false"
    :aria-controls="'components' + name + 'Collapse'"
  >
    <span>{{ name }}</span>
    <i class="bi bi-chevron-down" aria-hidden="true"></i>
  </BLink>
  <div
    :id="'components' + name + 'Collapse'"
    class="collapse"
    :class="$route.path.includes(url) ? 'show' : ''"
    :aria-labelledby="'components' + name + 'Heading'"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "NavComponentCollapse",
    props: {
      name: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    data() {
      return {};
    },
    methods: {},
  };
</script>

<style lang="css" scoped>
  .chevron .bi-chevron-down {
    display: inline-block;
    transition: transform 0.35s ease;
    transform-origin: 0.5em 50%;
    font-weight: bolder;
  }

  .chevron[aria-expanded="true"] .bi-chevron-down {
    transform: rotate(-180deg); /* transform: scaleY(-1); */
  }

  .bi-chevron-down::after {
    font-weight: bolder !important;
  }
</style>
