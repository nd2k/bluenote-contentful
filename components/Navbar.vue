<template>
  <b-navbar toggleable="lg" type="dark" class="navbar">
    <b-navbar-brand href="#">
      <img
        src="../assets/img/logo.jpg"
        alt="Blue Note"
        width="60"
        height="60"
        class="d-inline-block align-top"
      >
    </b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse id="nav_collapse" is-nav>
      <b-navbar-nav class="mx-auto">
        <b-nav-item
          v-scroll-to="'#suggestion'"
          href="#"
        >
          Suggestions
        </b-nav-item>
        <b-nav-item
          v-scroll-to="'#partenaire'"
          href="#"
        >
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
  background: $secondary;
  font-size: 1.5rem;
  color: $quaternary;
  padding: 0 1rem;
}
</style>
