<template>
    <div class="character">
        <template v-if="'id' in this.character">
            <div class="character-image-wrapper">
                <img class="character-image" :src="character.image" />
            </div>
            <div class="character-info">

                <div class="character-info__title">
                    <h1 class="character-info__title-name">
                        {{ character.name }}
                    </h1>
                    <div class="character-info__title-status">
                        <span v-if="character.status === 'Alive'" class="character-info_green">
                            {{ character.status }}
                        </span>
                        <span v-else class="character-info_red">{{ character.status }}</span>
                    </div>
                </div>

                <div class="character-info__desc">
                    <div class="character-info_light">Gender:</div>
                    <span>{{ character.gender }}</span>
                </div>

                <div class="character-info__desc">
                    <div class="character-info_light">Last known location:</div>
                    <span>{{ character.location.name }}</span>
                </div>

            </div>
        </template>
        <div v-if="false" style="display: block">{{ character }}</div>
    </div>
</template>

<script>
export default {
    name: "character",
    computed: {
        character(){
            return this.$store.state.characters.character
        }
    },
    methods: {
        get() {
            const id = this.$route.params.id
            this.$store.dispatch('characters/getOne', id)
        },
    },
    mounted() {
        this.get()
    },
    beforeDestroy() {
        this.$store.commit('characters/setCharacter', [])
    }
};
</script>

<style lang="scss" scoped>
.character {
    display: flex;
    justify-content: center;
    _align-items: center;
    margin: 30px 20px;

    .character-image-wrapper {
        width: 400px;
        border-radius: 1em;
        margin-left: 30px;
        overflow: hidden;

        .character-image {
            width: 100%;
            height: 100%;
        }
    }

    .character-info {
        padding: 10px 50px;
        width: 500px;

        .character-info__title {
            _padding-bottom: 20px;

            .character-info__title-name {
                font-size: 50px;
            }
        }

        .character-info__desc {
            margin-top: 20px;
        }

        .character-info_light {
            color: #aaa;
        }

        .character-info_green {
            color: rgb(38, 168, 45);
        }

        .character-info_red {
            color: rgb(175, 38, 38);
        }
    }
}
</style>
