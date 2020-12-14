<template>
    <h1 class="header-title">The Rick and Morty</h1>
</template>

<script>
export default {
    name: 'header-title'
}
</script>

<style lang="scss" scoped>
.header-title {
    margin: auto;
    text-align: center;
    font-family: "Quicksand", "Source Sans Pro", -apple-system,
        BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 80px;
    letter-spacing: 1px;
}

@media screen and (max-width: 900px) {
  .header-title {
    font-size: 50px;
  }
}
</style>
