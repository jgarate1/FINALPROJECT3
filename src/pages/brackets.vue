<script setup>
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
<div class="block duration-700 delay-150 relative transform transition-all opacity-0 translate-y-12 ease-in-out min-h-screen bg-gray-800 bg-opacity-75" data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'>
    <div class="py-20">
        <div class="py-20 bg-gray-300 container mx-auto text-center rounded-lg">
            <h1>Brackets</h1>
        </div>
    </div>
</div>
</template>