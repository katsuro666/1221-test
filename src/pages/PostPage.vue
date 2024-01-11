<template>
  <div class="post__wrapper">
    <v-card v-if="isPostLoaded" :title="post.title" :text="post.body" variant="tonal" class="post__item">
      <v-card-text>Об авторе:</v-card-text>
      <v-card :title="user.name" :subtitle="user.email" variant="outlined">
        <v-card-text>Номер телефона: {{ user.phone }}</v-card-text>
        <v-card-text>Вебсайт: {{ user.website }}</v-card-text>
      </v-card>
    </v-card>

    <div v-else class="post__skeleton">
      <v-skeleton-loader type="article" color="#4a4a4a" height="200"></v-skeleton-loader>
      <v-skeleton-loader type="article" color="#4a4a4a" height="200"></v-skeleton-loader>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import axios from 'axios';

type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type UserType = {
  name: string;
  email: string;
  phone: string;
  website: string;
};

const postId = useRoute().params.postId as string;
const post = ref<PostType>({
  userId: 0,
  id: 0,
  title: '',
  body: '',
});
const user = ref<UserType>({
  name: '',
  email: '',
  phone: '',
  website: '',
});

const isPostLoaded = ref(false);

async function getPost() {
  try {
    const postData: PostType = (await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)).data;
    post.value = postData;

    const authorData: UserType = (await axios.get(`https://jsonplaceholder.typicode.com/users/${post.value.userId}`))
      .data;
    user.value = authorData;
    isPostLoaded.value = true;
  } catch (err) {
    console.log(err);
  }
}

onMounted(getPost);
</script>

<style scoped lang="scss">
.post__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
.post__item,
.post__skeleton {
  width: 80%;
}
</style>
