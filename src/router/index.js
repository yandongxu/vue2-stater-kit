import Vue from 'vue';
import Router from 'vue-router';

// NOTE: sync components
// import Foo from '../components/views/Foo.vue';
// import Bar from '../components/views/Bar.vue';
// import Other from '../components/views/Other.vue';

// NOTE: Lazy load async components
const Foo = resolve => require(['../components/views/Foo.vue'], resolve);
const Bar = resolve => require(['../components/views/Bar.vue'], resolve);
const Other = resolve => require(['../components/views/Other.vue'], resolve);
const Posts = resolve => require(['../components/views/Posts.vue'], resolve);
const Post = resolve => require(['../components/views/Post.vue'], resolve);

// NOTE: Named async components
// const Foo = r => require.ensure([], () => r(require('../components/views/Foo.vue')), 'group-foo');
// const Bar = r => require.ensure([], () => r(require('../components/views/Bar.vue')), 'group-foo');
// const Other = r => require.ensure([], () => r(require('../components/views/Other.vue')), 'group-foo');

Vue.use(Router);

export default new Router({
  // hash|history
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      name: 'foo',
      path: '/foo',
      component: Foo
    },
    {
      name: 'bar',
      path: '/bar',
      component: Bar
    },
    {
      name: 'posts',
      path: '/posts',
      component: Posts
    },
    {
      name: 'post',
      path: '/post/:id',
      component: Post
    },
    {
      path: '*',
      component: Other
    }
  ]
});
