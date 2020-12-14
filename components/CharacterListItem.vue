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
    margin: 0 20px 20px 0;
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

    .list-item__image {
        height: 200px;
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

@media (max-width: 800px) {
    .list-item {
        width: 500px;
        height: 150px;
        margin: 0 auto 20px auto;

        .list-item__image {
            height: 150px;
        }

        .list-item__title-text {
            padding: 10px;
            margin: 10px;
            font-size: 1.5rem;
        }
    }
}

@media (max-width: 500px) {
    .list-item {
        .list-item__title-text {
            padding: 0 !important;
            margin: 10px !important;
            font-size: 1.3rem;
        }
    }
}
</style>
