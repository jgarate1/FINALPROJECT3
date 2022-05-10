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
            <div class="grid grid-flow-row auto-rows-max justify-center">
                <div>
                    <img src="../assets/rocketleague.png" style="style=width:256px;height:92px;">
                    <label class="flex items-center mt-8">
                        <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" checked><span class="ml-2 text-gray-700 font-bold">7/21/2022: LAN Event hosted by T H R U S T</span>
                    </label>
                    <label class="flex items-center mt-8">
                        <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" checked><span class="ml-2 text-gray-700 font-bold">5/15/2022: Clover Valley Derby LAN hosted by G2</span>
                    </label>
                    <label class="flex items-center mt-8">
                        <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" checked><span class="ml-2 text-gray-700 font-bold">12/20/2022: Semi Regional Comp hosted by Cloud 9</span>
                    </label>
                </div>
                <div>
                    <div>
                        <img src="../assets/leagueoflgends.png" style="style=width:300px;height:300px;">
                    <label class="flex items-center">
                        <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" checked><span class="ml-2 text-gray-700 font-bold">7/21/2022: Regional Event hosted by RIOT Games</span>
                    </label>
                    <label class="flex items-center mt-8">
                        <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" checked><span class="ml-2 text-gray-700 font-bold">5/15/2022: ZOTAC CUP by ZOTAC</span>
                    </label>
                    <label class="flex items-center mt-8">
                        <input type="checkbox" class="form-checkbox h-5 w-5 text-gray-600" checked><span class="ml-2 text-gray-700 font-bold">12/20/2022: The Hunting for MOBIUZ Sqaud by MOBIUZ</span>
                    </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>