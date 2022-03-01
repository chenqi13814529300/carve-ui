import axios from"axios";

const getComment=(queryInfo)=>{

    return axios.get('api/comment/all',{
        params:{
            ...queryInfo
        }
    })
}
const delComment=(comment_id)=>{
    return axios.get('api/comment/del',{
        params:{
            comment_id:comment_id
        }
    })
}
const addComment=(data)=>{
    return axios.post('api/comment/add',data)
}

export default{
    getComment,
    delComment,
    addComment
}