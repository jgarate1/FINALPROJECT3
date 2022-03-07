<template>
<div class="bg-gradient-to-r from-sky-500 to-indigo-500 text-black-200">
    <div class="container mx-auto flex items-center">
        <h1 class=" px-6 font-medium tracking-wider text-4xl ">THRUST</h1>
        <nav>
            <ul class="flex space-x-4">
                <router-link to="/"><li class="py-8 px-4 hover:cursor-pointer hover:bg-gray-500 hover:text-gray-800">
                    Home</li>
                </router-link>
                <router-link :to="{name:'About'}"><li class="py-8 px-4 hover:cursor-pointer hover:bg-gray-500 hover:text-gray-800">FAQ</li></router-link>
                <router-link :to="{name:'Hello'}"><li class="py-8 px-4 hover:cursor-pointer hover:bg-gray-500 hover:text-gray-800">Support</li></router-link>

                <router-link :to="{name:'Tournaments'}"><li class="py-8 px-4 hover:cursor-pointer hover:bg-gray-500 hover:text-gray-800">Tournaments</li></router-link>

                <router-link :to="{name:'Login'}"><li class="py-8 px-4 hover:cursor-pointer hover:bg-gray-500 hover:text-gray-800">Login</li></router-link>

                <router-link :to="{name:'Brackets'}"><li class="py-8 px-4 hover:cursor-pointer hover:bg-gray-500 hover:text-gray-800">Brackets</li></router-link>
            </ul>
        </nav>
    </div>
</div>
</template>