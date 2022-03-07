<script setup>
import useAuth from "../composable/useAuth";
const { isAuthenticated, user } = useAuth();
</script>
<template>
    <div class="flex flex-col space-y-12 items-center justify-center h-screen-nonav">
        <h2 v-if= "!isAuthenticated" class="font-extralight text-6xl tracking-tigher">
            Welcome
        </h2>

        <h2 v-else class="text-6xl tracking-tighter font-extralight">
            Welcome {{ user }}
        </h2>
        <img src="../assets/bgindex.png" alt="Hello BG">
    </div>
</template>