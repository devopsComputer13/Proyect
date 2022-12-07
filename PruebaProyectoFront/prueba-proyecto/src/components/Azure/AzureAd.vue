<!-- <template>
    <h1>Azure login</h1>
    <button @click="login">Login</button>
</template>

<script lang ="ts">
import { PublicClientApplication} from '@azure/msal-browser'
import AzureDataService from '@/services/AzureDataService'
import Emitter from "tiny-emitter"
import router from "@/router";
import {defineComponent} from 'vue'
export default defineComponent({
    name:'Azure Ad',
    data(){

    },

    created(){
        const azureService = new AzureDataService()
        this.$msalInstance  = new PublicClientApplication(azureService.getMsalConfig().value)
    },

       methods:{
        const account = ''
        const login = async() =>{
        await msalInstance
        .loginPopup({})
        .then(()=> {
                //obtener todas las cuentas
                const myAccounts = msalInstance.getAllAccounts()
                account = myAccounts[0]
                emitter.emit('login', account)
            })
            .catch(error =>{
                alert(error)
            })
          }
          return {
            account, login
          }
        }
    })
</script>

    -->