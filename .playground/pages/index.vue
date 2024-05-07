<template>
  <div>
    index
  </div>
</template>

<script setup lang="ts">
import routes from '#build/routes';

if(import.meta.client) {
  console.log(routes);
}

definePageMeta({
  todo: 'always',
  name: 'indexdd',
})
</script>

<style scoped>

</style>