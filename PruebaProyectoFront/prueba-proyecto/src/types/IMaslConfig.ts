import IAuth from './IAuth'
interface IMaslConfig{

    auth:IAuth,
    cache:{
        cacheLocation: string
    }
}

export default IMaslConfig

