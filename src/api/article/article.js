import axios from"axios";


const getArticleList = (queryInfo) => {
    return axios.get("/api/article/articleList", {
        params: {
            ...queryInfo
        }
    })
}
const getArticleByType = (queryInfo) => {
    return axios.get("/api/article/articleByType", {
        params: {
            ...queryInfo
        }
    })
}


const updateArticle = (article) => {
    return axios.put("/api/article/updateArticle",article)
}
const getArticleDetails=(id) => {
    return axios.get("/api/article/articleDetails", {
        params: {
            id:id
        }
    })
}


export default{
    getArticleList,
    getArticleByType,
    updateArticle,
    getArticleDetails
}