<script setup>
import useAuth from "../composable/useAuth";
const { isAuthenticated, user } = useAuth();

document.addEventListener("DOMContentLoaded",function(){
    setTimeout(function(){
        var replacers = document.querySelectorAll('[data-replace]');
        for(var i=0; i<replacers.length; i++){
            console.log('hit here2');
            let replaceClasses = JSON.parse(replacers[i].dataset.replace.replace(/'/g, '"'));
            Object.keys(replaceClasses).forEach(function(key) {
                replacers[i].classList.remove(key);
                replacers[i].classList.add(replaceClasses[key]);
            });
        }
    }, 1);
});

document.addEventListener("click",function(){
    setTimeout(function(){
        var replacers = document.querySelectorAll('[data-replace]');
        for(var i=0; i<replacers.length; i++){
            console.log('hit here2');
            let replaceClasses = JSON.parse(replacers[i].dataset.replace.replace(/'/g, '"'));
            Object.keys(replaceClasses).forEach(function(key) {
                replacers[i].classList.remove(key);
                replacers[i].classList.add(replaceClasses[key]);
            });
        }
    }, 1);
});
</script>
<template>
<div class="
block duration-700 delay-150 relative transform transition-all opacity-0 translate-y-12 ease-in-out min-h-screen bg-gray-800 bg-opacity-75" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
    <div class="pt-60 flex justify-center text-6xl text-gray-100">
        <h1>Tournaments hosted by <span class="tracking-wider font-medium text-gray-100">THRUST</span></h1>
    </div>
    <div class="py-10">
        <div class="flex space-x-2 justify-center">
            <div class="flex space-x-2 justify-center">
                <div>
                     <router-link v-if= "!isAuthenticated" :to="{path:'/login', name:'Login'}">
                        <button type="button" class="inline-block px-6 py-2.5 bg-transparent text-gray-100 font-medium text-lg leading-tight uppercase rounded hover:text-black hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out">Get Started</button>
                     </router-link>
                    
                </div>
            </div>
        </div>
    </div>
</div>
    
</template>