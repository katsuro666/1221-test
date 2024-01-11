<template>
  <div class="main__container">
    <h1>Привет 👋🏼</h1>
    <h2>Это главная страница</h2>
    <h4>Ниже расположены ссылки на другие страницы приложения.</h4>
    <div class="nav__container">
      <v-card
        hover
        @click="$router.push({ name: 'Posts' })"
        title="Страница списка постов"
        text="Здесь находится действующая страница со списком постов с jsonplaceholder"
        variant="tonal"
        class="nav-card"></v-card>
      <v-card
        disabled
        title="Ещё какая-то страница"
        text="Это недействующая ссылка, там нет никакой страницы 😊"
        variant="tonal"
        class="nav-card"></v-card>
      <v-card
        disabled
        title="И ещё одна страница"
        text="Это недействующая ссылка, там тоже нет никакой страницы 😉"
        variant="tonal"
        class="nav-card"></v-card>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.main__container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 20px;
}

.nav__container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
}

.nav-card {
  width: 50%;
  transition: scale 0.2s ease-in-out;

  &:hover {
    scale: 1.025;
    cursor: pointer;
  }
}
</style>
