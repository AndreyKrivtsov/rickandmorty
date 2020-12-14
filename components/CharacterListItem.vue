<template functional>
    <div class="list-item" @click="listeners['selected'](props.item.id)">
        <img class="list-item__image" :src="props.item.image" height="200">
        <div class="list-item__title">
            <h1 class="list-item__title-text">{{ props.item.name }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "character-list-item",
    props: {
        item: {
            default: () => {},
            type: Object,
        },
    },
};
</script>

<style lang="scss" scoped>
.list-item {
    display: flex;
    border: 1px solid #ccc;
    border-radius: 1em;
    width: 600px;
    height: 200px;
    margin: 30px 15px 0 15px;
    text-align: center;
    overflow: hidden;
    cursor: pointer;

    &:hover {
        border: 1px solid #aaa;
        box-shadow: 0 0 4px #999;
    }

    &:active {
        border: 1px solid #888;
        box-shadow: 0 0 6px #777;
    }

    .list-item__title {
        display: inline-block;
        margin: auto;

        .list-item__title-text {
            padding: 10px;
            margin: 30px;
            border-bottom: 1px solid #ccc;
            text-align: center;
            align-self: center;
        }
    }
}

@media (max-width: 900px) {
    .list-item {
        width: 400px;
        height: 100px;
        margin: 30px auto;
        box-sizing: border-box;

        .list-item__image {
            height: 200px;
            box-sizing: border-box;
        }
    }
}
</style>
