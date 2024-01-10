<template>
  <div class="breadcrumb-bar">
    <v-breadcrumbs v-for="breadcrumb in breadcrumbs" :key="breadcrumb.title">
      <v-breadcrumbs-item v-if="breadcrumb.link">
        <router-link :to="{ path: breadcrumb.link }">
          {{ breadcrumb.title }}
        </router-link>
      </v-breadcrumbs-item>

      <v-breadcrumbs-item disabled v-else>{{ breadcrumb.title }}</v-breadcrumbs-item>
    </v-breadcrumbs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { IBreadcrumb } from '@/../../router';

const route = useRoute();
const breadcrumbs = ref<IBreadcrumb[]>([]);

if (typeof route.meta.breadcrumb === 'function') {
  breadcrumbs.value = route.meta.breadcrumb(route);
}
</script>

<style scoped src="./BreadcrumbBar.styles.scss"></style>
