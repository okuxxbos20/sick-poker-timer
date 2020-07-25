import IndexComp from '@/components/';
import BlogComp from '@/components/Blog/';

export const routes = [
  {
    path: '/',
    component: IndexComp,
    name: 'index'
  }, {
    path: '/blog',
    component: BlogComp,
    name: 'blog'
  },
];
