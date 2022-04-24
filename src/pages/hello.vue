<script setup>
import { onUnmounted, ref } from 'vue'
import useChat from '../composable/useChat'
import useAuth from '../composable/useAuth'
  const { messages, unsubscribe, sendMessage } = useChat()
  const { user } = useAuth()
  const newMessage = ref('')
  const send = () => {
    sendMessage(newMessage.value)
    newMessage.value = ''
  }
  onUnmounted(() => {
    unsubscribe()
  })
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
        <div class="bg-gray-300 py-20 container mx-auto rounded-lg text-center">
        <h1 class=" py-2 text-4xl">Need to contact support?</h1>
        <form class="">
            <div class="flex flex-col">
                <button class="text-xl py-2"><a href="mailto:garatejustus@gmail.com">Email Us</a></button>
                <button class="text-2xl py-2">Chat with a support agent:</button>
            </div>
            <div
    class="
      min-h-[500px]
      w-full
      mt-8
      rounded-lg
      shadow-2xl
      flex flex-col
      justify-between
    "
  >
    <ul class="p-4 space-y-4">
      <li v-for="message in messages" :key="message.id">
        <div
          class="flex justify-between px-4 py-2 rounded-lg"
          :class="user === message.author ? 'bg-yellow-200' : 'bg-gray-200'"
        >
          <span>{{ message.text }}</span
          ><span>by {{ message.author }}</span>
        </div>
      </li>
    </ul>
    <div>
      <input
        class="w-full p-4 rounded-lg focus:outline-none focus:bg-yellow-200"
        type="text"
        placeholder="Type a message..."
        v-model="newMessage"
        @change="send"
      />
    </div>
  </div>
        </form>
        </div> 
    </div>
</div>


</template>