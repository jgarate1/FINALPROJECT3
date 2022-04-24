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
        <div class=" pt-20 container mx-auto">
        <div class="py-20 px-20 bg-gray-300 text-center rounded-lg">
        <h1 class=" py-2 text-6xl">Most Frequently Asked Quetions</h1>
        <div>
            <ul class="text-lg py-6">
                <li class="text-2xl font-medium py-2">How do I sign up?</li>
                <p class="text-xl text-">You can sign up by creating an account with us! Once you log in, you will have access to all brackets and tournaments that are open. Please note that tournaments fill up fast and would be best to sign up as early as possible</p>
                <li class="text-2xl py-2">How do I report a team for cheating?</li>
                <p class="text-xl">
                    You can report a team for cheating by going through our support page. Be aware that we take any false reports are taken very seriously. It can result in automatic losses in tournaments as well as temporary and permanent bans.
                </p>
                <li class="text-2xl py-2">Can I change my team roster after sign up?</li>
                <p class="text-xl">
                    During a sign up for a tournament, you will be asked to include substitutes if you have any. You can definetely change you team roster but only with members put into your subsitutes list. Otherwise you are not allowed.
                </p>
                <li class="text-2xl py-2">How do I contact support?</li>
                <p class="text-xl">First you must create an account with us. Once you login, you will have a new tab labeled "Support" where you can
                    submit a request by email or message a live support agent straight through our webpage.
                </p>
            </ul>
        </div>
    </div>
    </div>
    
    </div>
        
    
</template>