import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Access from '@/components/Access'
import Contacts from '@/components/Contacts'
import Event from '@/components/Event'
import Blog from '@/components/Blog'
import BlogInfo from '@/components/BlogInfo'
import Search from '@/components/Search'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/access',
      name: 'Access',
      component: Access
    },
    {
      path: '/top',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/event',
      name: 'Event',
      component: Event
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/blog/:blog_id',
      name: 'BlogInfo',
      component: BlogInfo
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    // {
    //   path: '/',
    //   name: 'fff',
    //   component: Hello
    // },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
