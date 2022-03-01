import axios from 'axios'

const getAllNews=(queryInfo)=>{
    return axios.get('api/news/all',{
        params:{
            ...queryInfo
        }
    })
}

export default{
    getAllNews
}