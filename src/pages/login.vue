<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import useAuth from "../composable/useAuth";
import useError from "../composable/UseError";
import { useTimeout, promiseTimeout } from "@vueuse/core";
import {
  signInWithEmailAndPassword
} from "firebase/auth";

const { isAuthenticated, login, signup, googleLogin} = useAuth();

const username = ref("");
const password = ref("");

const router = useRouter();

const logginIn = async () => {
  await login(username.value, password.value);
  if (isAuthenticated.value) {
    router.push("/");
  } else {
    setError("Invalid username or password");
    start();
  }
};

const signingUp = async () => {
  await signup(username.value, password.value);
  goToHome();
};

const google = async () => {
  await googleLogin();
  goToHome();
};
const goToHome = () => {
  if (isAuthenticated.value) {
    router.push("/");
  } else {
    setError("Invalid username or password");
    start();
  }
};

const { error, setError } = useError();
const { ready, start } = useTimeout(3000, { controls: true });

</script>
<template>
    <div class="flex flex-col space-y-12 items-center justify-center h-screen-nonav">
        <div class="flex justify-center overflow-hidden bg-gray-200 items-center shadow-2xl rounded-lg">
            <img class= "h-64" src="../assets/bglogin.png" alt="Login BG">
            <form @submit.prevent="logginIn" class="flex flex-col p-4 space-y-4">
                <input type="text" class="p-2 border-2 rounded-lg" placeholder="Username" v-model="username"/>
                <input type="password" class="p-2 border-2 rounded-lg" placeholder="Password" v-model="password" />
              <div class="flex space-x-2">

                <button type= "submit" @submit.prevent="logginIn" class= " w-1/2 rounded-lg py-2 text-indigo-200 bg-red-600">
                    Login
                </button>
                <button @click="signingUp" class= "w-1/2 rounded-lg py-2 text-indigo-200 bg-green-600">
                  Sign Up
                </button>
              </div>  
              <button @click= "google" class="bg-white flex justify-center py-2 rounged-lg hover:bg-gray-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
              </button>
            </form>
        </div>
        <div v-if="!ready && error" class="absolute w-1/3 p-4 text-center text-red-800 bg-red-300 rounded-lg  bottom-2 right-2">
      {{ error }}
        </div>
    </div>
</template>