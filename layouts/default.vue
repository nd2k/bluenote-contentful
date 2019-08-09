<template>
  <div>
    <Topbar />
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
import Topbar from '~/components/Topbar'
import Navbar from '~/components/Navbar'

export default {
  components: {
    Topbar,
    Navbar
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/custom.scss';

html {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
