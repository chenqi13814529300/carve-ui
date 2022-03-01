import axios from"axios";
import service from '@/utils/service'


const getHomeImg=(typeId)=>{

    return axios.get('/api/img/getHomeImg',{
        params:{
            typeId:typeId
        }
    })
}

export default{
    getHomeImg
}