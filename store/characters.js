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
        if (!state.list.length) commit('setPage', 1)
        else if (state.page !== state.info.pages) {
            commit('nextPage')
        }
        const result = await Api.getList(this, state.page)
        commit('setList', result.data)
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
        state.info = data.info
    },
    setPage(state, page) {
        state.page = page
    },
    nextPage(state) {
        state.page++
    }
}