import IndexComp from '@/components/Index';
import BlogComp from '@/components/Blog/index';

export const routes = [
  {
    path: '/',
    component: IndexComp,
    name: 'index'
  }, {
    path: '/blog',
    component: BlogComp,
    name: 'blog'
  }
];
