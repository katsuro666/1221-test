import { RouteLocationNormalizedLoaded, createRouter, createWebHistory } from 'vue-router';
import { RoutePaths, RouteNames } from '@/constants/route.constants';

import MainPage from '@/pages/MainPage.vue';
import PostsPage from '@/pages/PostsPage.vue';

import BreadcrumbLayout from '@/layouts/BreadcrumbLayout.vue';
import MainLayout from '@/layouts/MainLayout.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: RoutePaths.HOME,
      name: RouteNames.HOME,
      component: MainPage,
      meta: {
        layout: MainLayout,
        title: 'Главная',
        breadcrumb: () => [
          {
            title: 'Главная',
          },
        ],
      },
    },

    {
      path: RoutePaths.POSTS,
      name: RouteNames.POSTS,
      component: () => import('@/pages/PostsPage.vue'),
      meta: {
        layout: BreadcrumbLayout,
        title: 'Posts',
        breadcrumb: () => [
          {
            title: 'Главная',
            link: RoutePaths.HOME,
          },
          {
            title: 'Список постов',
          },
        ],
      },
    },

    {
      path: `${RoutePaths.POSTS}/:postId`,
      name: RouteNames.POST,
      component: () => import('@/pages/PostPage.vue'),
      meta: {
        layout: BreadcrumbLayout,
        title: 'Post',
        breadcrumb: (route: RouteLocationNormalizedLoaded) => [
          {
            title: 'Главная',
            link: RoutePaths.HOME,
          },
          {
            title: 'Список постов',
            link: RoutePaths.POSTS,
          },
          {
            title: `Пост №${route.params.postId}`,
          },
        ],
      },
    },
  ],
});

export default router;
