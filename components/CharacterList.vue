<template>
    <div class="character-list">
        <template v-if="list.length">

            <CharacterListItem
                        v-for="item in list" 
                        :key="item.id" 
                        :item="item" 
                        @selected="selectCharacter($event)"
            />

            <InfiniteScroll @infinite="getMore()"/>

        </template>
    </div>
</template>

<script>
import InfiniteScroll from './helpers/InfiniteScroll.vue';
export default {
    components: { InfiniteScroll },
    name: "character-list",
    computed: {
        list() {
            return this.$store.state.characters.list
        },
        page: {
            get() {
                return this.$store.state.characters.page
            },
            set(value) {
                this.$store.commit('characters/setPage', value)
            }
        }
    },
    methods: {
        selectCharacter(id) {
            this.$router.push('characters/' + id)
        },
        getMore() {
            this.$store.dispatch('characters/getMore')
        },
        test() {
            console.log('scroll')
        }
    },
    mounted() {
        this.getMore()
    },
};
</script>

<style lang="scss" scoped>
.character-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 50px;
}
</style>
