<script setup>
import {useRouter} from "vue-router";
import useAuth from "../composable/useAuth";
const { isAuthenticated, logout } = useAuth();
const router = useRouter();
const loggingOut = () => {
  logout();
  router.push("/");
};
</script>
    <template>
            <nav class="py-2 bg-gray-100 drop-shadow-md"> 
                <div class="text-center">
                    <h1 class=" px-6 font-medium tracking-wider text-4xl">THRUST</h1>
                </div>   
                <ul class="flex flex-row justify-center space-x-20 text-lg">
                    <router-link to="/"><li class="py-2 px-4 hover:cursor-pointer hover:opacity-75 focus:opacity-75">
                        Home</li>
                    </router-link>


                    <router-link :to="{name:'Hello'}"><li class="py-2 px-4 hover:cursor-pointer hover:opacity-75 focus:opacity-75">Support</li></router-link>

                    <router-link :to="{name:'Tournaments'}"><li class="py-2 px-4 hover:cursor-pointer hover:opacity-75 focus:opacity-75">Tournaments</li></router-link>


                    <router-link v-if= "!isAuthenticated" :to="{path:'/login', name:'Login'}"><li class="py-2 px-4 hover:cursor-pointer hover:opacity-75 focus:opacity-75">Login</li></router-link>

                    <div v-else class="flex">
                        <router-link :to="{path:'/secret', name:'Brackets'}"><li class="py-2 px-4 hover:cursor-pointer hover:opacity-75 focus:opacity-75">Brackets</li></router-link>
                        
                        <button class="pl-16" @click="loggingOut">
                        <li
                        class="py-2 px-4 hover:cursor-pointer hover:opacity-75 focus:opacity-75"
                        >
                        Logout
                        </li>
                    </button>
                    </div>
                    <router-link :to="{name:'About'}"><li class="py-2 px-4 hover:cursor-pointer hover:opacity-75 focus:opacity-75">FAQ</li></router-link>
                </ul>
            </nav>
</template>