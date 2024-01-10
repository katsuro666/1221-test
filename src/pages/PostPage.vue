<template>
  <div>{{ `this is a page of post ${postId}` }}</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const postId = useRoute().params.postId;
</script>

<style scoped></style>
