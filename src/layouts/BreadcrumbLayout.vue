<template>
  <div class='layout__wrapper'>
    <BreadcrumbBar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import BreadcrumbBar from '../components/BreadcrumbBar/BreadcrumbBar.vue';
</script>

<style scoped lang="scss" src="./layouts.styles.scss"></style>
