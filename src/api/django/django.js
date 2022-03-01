import axios from 'axios'

const getContents = () => {
    return axios.get('/api/contents/', {

    })
}
const addContent = (content) => {
    return axios.post('api/add_contents/', {
            ...content
    })
}
export default {
    getContents,
    addContent
}