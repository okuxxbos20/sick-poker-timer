import IndexComp from '@/components/Index';
import BlogComp from '@/components/Blog/index';
import ArticleComp from '@/components/Blog/article';
import FormComp from '@/components/Form';
import ProfileComp from '@/components/Profile';

export const routes = [
  {
    path: '/',
    component: IndexComp,
    name: 'index'
  }, {
    path: '/blog',
    component: BlogComp,
    name: 'blog'
  }, {
    path: '/article/:id',
    component: ArticleComp,
    name: 'article'
  }, {
    path: '/form',
    component: FormComp,
    name: 'form'
  }, {
    path: '/profile',
    component: ProfileComp,
    name: 'profile'
  }
];
