<template>
  <div class="posts__wrapper">
    <EpicSpinner v-if="isLoading"></EpicSpinner>

    <h1 v-else-if="isError">Ошибка во время загрузки постов</h1>

    <ul v-else class="posts__container">
      <li v-for="post in posts" :key="post.id" class="posts__item">
        <router-link :to="{ name: 'Post', params: { postId: post.id } }">
          <v-card
            hover
            :title="post.title"
            :text="post.body"
            variant="tonal"
            @contextmenu.prevent="deletePost(post.id)"></v-card>
        </router-link>
      </li>
    </ul>

    <v-snackbar v-model="isPostDeleted" timeout="3000" timer="true" text="Ого! Пост удалён 😳">
      <template v-slot:actions>
        <v-btn color="green" variant="text" @click="isPostDeleted = false">Ясно</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import EpicSpinner from '../components/EpicSpinner/EpicSpinner.vue';

type PostsType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const url = 'https://jsonplaceholder.typicode.com/posts';

const isLoading = ref(false);
const isError = ref(false);
const isPostDeleted = ref(false);

const posts = ref<PostsType[]>([]);

async function getPosts() {
  try {
    isLoading.value = true;
    const res = await axios.get(url);
    posts.value = res.data;
    isLoading.value = false;
    isError.value = false;
  } catch (error) {
    console.log(error, 'error while fetching posts');
    isLoading.value = false;
    isError.value = true;
  }
}

function deletePost(id: number) {
  posts.value = posts.value.filter((post) => post.id !== id);
  isPostDeleted.value = true;
}

onMounted(getPosts);
</script>

<style scoped lang="scss">
.posts__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.posts__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 60px 15px 20px;
}

.posts__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
}
</style>
