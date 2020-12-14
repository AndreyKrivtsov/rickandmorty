<template functional>
    <div class="header-logo">
        <img class="logo-image" src="~/assets/logo.png" />
    </div>
</template>

<script>
export default {
    name: "header-logo",
};
</script>

<style lang="scss" scoped>
.header-logo {
    width: 100px;
    height: 100px;
    margin: auto;

    .logo-image {
        width: 100%;
        animation: 1s appear;
        margin: auto;
    }

    @keyframes appear {
        0% {
            opacity: 0;
        }
    }
}

@media screen and (max-width: 500px) {
    .header-logo {
        width: 100px;
        height: 100px;
        margin: auto;
    }
}
</style>
