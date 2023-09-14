import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import EmployeeRouter from '@/views/employee/EmployeeRouter.vue';
import EmployeeListView from '@/views/employee/EmployeeList.vue';
import ProductRouter from '@/views/product/ProductRouter.vue';
import ProductListView from '@/views/product/ProductList.vue';
import ProductCreateView from '@/views/product/Create.vue';
import ProductEditView from '@/views/product/Edit.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/employee",
      name: "employee",
      component: EmployeeRouter,
      children: [
        {
          path: "",
          name: "employee.index",
          component: EmployeeListView,
        },
      ],
    },
    {
      path: "/product",
      name: "product",
      component: ProductRouter,
      children: [
        {
          path: "",
          name: "product.index",
          component: ProductListView,
        },
        {
          path: "create",
          name: "product.create",
          component: ProductCreateView,
        },
        {
          path: "update/:id?/edit",
          name: "product.update",
          component: ProductEditView,
        },
      ],
    },
  ]
})

export default router
