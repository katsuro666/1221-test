<template>
  <div>
    <BreadcrumbBar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import BreadcrumbBar from '../components/BreadcrumbBar/BreadcrumbBar.vue';
</script>

<style scoped></style>
