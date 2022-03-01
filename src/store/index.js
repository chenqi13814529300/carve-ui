
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        loginInfo: '',
    },
    getters: {
        getLoginInfo: (state) => state.loginInfo,
    },
    mutations: {
        setLoginInfo: (state, data) => {
            state.loginInfo = data
        },

        // 修改个人中心索引值
        SetIndexJump(state, index) {
            state.IndexJump = index
        },

        company_id(state, data) {
            state.company_id = data
        },
        _userInfo: (state, data) => {
            Object.assign(state.userInfo, data)
        }
    },
    actions: {

    }
})
