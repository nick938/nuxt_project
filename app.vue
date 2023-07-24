<template>
  <!-- <h1>Welcome to the homepage</h1> -->
  <NuxtLayout>
    <!-- <AppAlert> This is an auto-imported component </AppAlert> -->
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Site Title` : 'Site Title no'
  },
})
</script>
