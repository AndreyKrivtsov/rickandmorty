export default {
    async getOne(ctx, id) {
        return await ctx.$axios.get('character/' + id)
    },
    async getList(ctx, page) {
        return await ctx.$axios.get('/character/?page=' + page)
    },
}