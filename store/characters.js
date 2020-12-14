import Api from '~/api/characters'

export const state = () => ({
    character: {},
    list: [],
    info: {},
    page: 0
})

export const actions = {
    async getOne({ commit }, id) {
        const result = await Api.getOne(this, id)
        commit('setCharacter', result.data)
    },
    async getMore({ state, commit }) {
        if (!state.list.length) commit('setPage', 0)
        const result = await Api.getList(this, state.page)
        commit('setList', result.data)
        commit('setPage', state.page + 1)
    },
}

export const mutations = {
    setCharacter(state, data) {
        state.character = data
    },
    setList(state, data) {
        for(const item of data.results) {
            state.list.push(item)
        }
        
    },
    setInfo(state, data) {
        state.info = data.info
    },
    setPage(state, page) {
        state.page = page
    }
}