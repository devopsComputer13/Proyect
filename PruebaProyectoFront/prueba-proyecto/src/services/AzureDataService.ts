import {Ref, ref} from 'vue'
import IMaslConfig from '@/types/IMaslConfig'

class AzureDataService{
    private msalConfig : Ref<IMaslConfig>
    private accessToken :Ref<string>

    constructor(){
        this.msalConfig =ref({
            auth:{
                clientId:'5847fb40-a9a4-44e9-9985-c57cda8dfa28',
                authority:'https://login.microsoftonline.com/0f247f75-0f50-4f9b-ab53-21c09dd11046/oauth2/authorize',
            },
            cache:{
                cacheLocation:'localStorage'
            },
        })

        this.accessToken =ref('') 
    }

    setAccessToken(token:string):Ref<string>{
        this.accessToken.value = token
        return this.accessToken
    }

    getAccessToken():Ref<string>{
        return this.accessToken
    }

    getMsalConfig():Ref<IMaslConfig>{
        return this.msalConfig
    }
}

export default AzureDataService