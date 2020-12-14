<template>
    <div class="infinite-scroll">
        <div class="infinite-scroll__loader" v-if="state">Loading...</div>
    </div>
</template>

<script>
export default {
    name: "infinite-scroll",
    props: {
        timeout: {
            default: 400,
            type: Number,
        },
    },
    data() {
        return {
            areaHeight: 100,
            state: false,
            timer: null,
        };
    },
    methods: {
        init() {
            const body = document.querySelector("body");

            document.addEventListener("scroll", (e) => {
                const bottom =
                    e.target.scrollingElement.scrollHeight - this.areaHeight;
                const position =
                    e.target.scrollingElement.scrollTop +
                    e.target.scrollingElement.clientHeight;

                if (!this.state) {
                    if (position >= bottom) {
                        this.state = true;
                        this.timer = setTimeout(() => {
                            this.$emit("infinite");
                        }, this.timeout);
                    }
                } else {
                    if (position < bottom) {
                        this.state = false;
                        clearTimeout(this.timer);
                    }
                }
            });
        },
    },
    mounted() {
        this.init()
    },
};
</script>

<style lang="scss" scoped>
.infinite-scroll {
    width: 100%;
    height: 100px;

    .infinite-scroll__loader,
    .infinite-scroll__loader:before,
    .infinite-scroll__loader:after {
        border-radius: 50%;
        width: 2.5em;
        height: 2.5em;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-animation: load 1.8s infinite ease-in-out;
        animation: load 1.8s infinite ease-in-out;
    }

    .infinite-scroll__loader {
        color: #b1b1b1;
        font-size: 10px;
        margin: 30px auto;
        position: relative;
        text-indent: -9999em;
        -webkit-transform: translateZ(0);
        -ms-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
    }
    .infinite-scroll__loader:before,
    .infinite-scroll__loader:after {
        content: "";
        position: absolute;
        top: 0;
    }
    .infinite-scroll__loader:before {
        left: -3.5em;
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
    }
    .infinite-scroll__loader:after {
        left: 3.5em;
    }
    @-webkit-keyframes load {
        0%,
        80%,
        100% {
            box-shadow: 0 2.5em 0 -1.3em;
        }
        40% {
            box-shadow: 0 2.5em 0 0;
        }
    }
    @keyframes load {
        0%,
        80%,
        100% {
            box-shadow: 0 2.5em 0 -1.3em;
        }
        40% {
            box-shadow: 0 2.5em 0 0;
        }
    }
}
</style>
