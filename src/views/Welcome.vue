<template>
  <div class="container welcome">
    <Welcome />
  </div>
</template>

<script>
import Welcome from '@/components/Welcome.vue'

export default {
  name: 'welcome',
  components: {
    Welcome
  }
}
</script>

<style scoped>
  .container.welcome {
    padding: 0 0;
  }
</style>
