<template>
  <b-navbar toggleable="lg" fixed="top" type="dark" class="navbar">
    <b-navbar-brand href="#">
      <img
        src="../assets/img/logo.jpg"
        alt="Blue Note"
        width="100"
        height="100"
        class="d-inline-block align-top"
      >
    </b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse id="nav_collapse" is-nav>
      <b-navbar-nav class="mx-auto">
        <b-nav-item href="#">
          Suggestions
        </b-nav-item>
        <b-nav-item href="#">
          Partenaires
        </b-nav-item>
        <b-nav-item href="#">
          Réservations
        </b-nav-item>
        <b-nav-item href="#">
          Contact
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/custom.scss';

.navbar {
  background: $primary !important;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-weight: 300;
  letter-spacing: 1px;
}
</style>
