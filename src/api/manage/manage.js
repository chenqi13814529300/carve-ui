import axios from 'axios'
import service from '@/utils/service'

const getAllComments = (queryInfo, token) => {
    return service.get('/manage/selectComment', {
        params: {
            ...queryInfo
        },
    })
}
const delComment = (commentId, token) => {
    return axios.delete('/api/manage/deleteComment', {
        params: {
            id: commentId
        },
        headers: {
            token: token
        }
    })
}

// 图片

const getImg = (type_id, token) => {
    return axios.get('/api/manage/selectImg', {
        params: {
            type: type_id
        },
        headers: {
            token: token
        }
    })
}
const delImg = (imgId, token) => {
    return axios.delete("/api/manage/deleteImg", {
        params: {
            imgId: imgId
        },
        headers: {
            token: token
        }
    })
}

// 文章管理
const createArticle = (article, token) => {
    return axios.post("/api/manage/saveArticle", article, {
        headers: {
            token: token
        }
    })
}
const getArticleList = (queryInfo, token) => {
    return axios.get("/api/manage/articleList", {
        params: {
            ...queryInfo
        },
        headers: {
            token: token
        }
    })
}
const deleteArticle = ( token,id) => {
    return axios.delete('/api/manage/deleteArticle', {
        params: {
            id: id
        },
        headers: {
            token: token
        }
    })
}

const updateArticle = (article,token) => {
    return axios.put("/api/article/updateArticle",article,{
        headers: {
            token: token
        }
    })
}


export default {
    getAllComments,
    delComment,
    getImg,
    delImg,
    createArticle,
    getArticleList,
    deleteArticle,
    updateArticle
}