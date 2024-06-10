const { createRouter, createWebHistory } = VueRouter;

import dataBinding from "./dataBinding.js"; 
import fors from "./for.js";
import ifs from "./if.js";
import events from "./event.js";
import posts from "./post.js";
import todos from "./todo.js";

const routes = [
    { path : '/dataBinding', component:dataBinding},
    { path : '/for', component:fors},
    { path : '/if', component:ifs},
    { path : '/event', component:events},
    { path : '/post', component:posts},
    { path : '/todo', component: todos},
    
]

const router = createRouter({
    history : createWebHistory(),
    routes : routes,
})

export default router;