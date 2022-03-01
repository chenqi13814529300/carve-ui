import { Message } from 'element-ui';
import storage from '@/utils/storage'

const isLoginToken = () => {
    // const token = localStorage.getItem("token");
    const token = storage.getItem("token")
    if (!token) {
        Message({
            showClose: true,
            message: "请先登录",
            type: "error",
            duration: "3000"
        });

    }
    return token;
}

const setToken = (token) => {
    // localStorage.setItem("token", token);
    storage.setItem({
        name: 'token',
        value: token,
        expires: 600000
    });
}


export default {
    isLoginToken,
    setToken
}