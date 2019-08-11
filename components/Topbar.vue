<template>
  <section id="topbar">
    <b-container>
      <div class="d-flex flex-row">
        <div class="flex-grow-1 text-center">
          <a href="#" target="_blank" class="contact text-decoration-none">
            <font-awesome-icon
              :icon="['fas', 'phone']"
              class="icon mr-1"
            />
            <span class="d-none d-lg-inline d-xl-inline">+32 497 59 63 48</span>
          </a>
          <span class="contact align-items-center d-none d-lg-inline d-xl-inline"> | </span>
          <a href="#" target="_blank" class="contact text-decoration-none">
            <font-awesome-icon
              :icon="['fas', 'envelope-open']"
              class="icon ml-1"
            />
            <span class="d-none d-lg-inline d-xl-inline">bluenote@gmail.com</span>
          </a>
        </div>
        <div class="">
          <a href="#" target="_blank" class="contact">
            <font-awesome-icon :icon="['fab', 'facebook']" class="mr-2" />
          </a>
          <a href="#" target="_blank" class="contact">
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              class="mr-2"
            />
          </a>
          <a href="#" target="_blank" class="contact">
            <font-awesome-icon
              :icon="['fab', 'pinterest']"
              class="mr-2"
            />
          </a>
        </div>
      </div>
    </b-container>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/custom.scss';

#topbar {
  background-color: $primary;
}

.contact {
  color: rgba(255, 255, 255, 0.75);
}
</style>
