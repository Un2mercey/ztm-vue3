<template>
    <div class="glass-blocker" >
        <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "GlassBlocker",
    created() {
        document.getElementById("appBody").style.overflow = "hidden";
    },
};
</script>

<style lang="scss" scoped>
.glass-blocker {
    &:before {
        content: '';
        width: 100%;
        height: 100%;
        background: inherit;
        position: absolute;
        box-shadow: inset 0 0 0 10000px rgba(0, 0, 0, 0.3);
        filter: blur(10px);
    }

    background: inherit;
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    z-index: 201;
    display: flex;
    justify-content: center;
    align-items: center;

    .lds-ring {
        display: inline-block;
        position: absolute;
        width: 80px;
        height: 80px;
        z-index: 202;
        margin: auto auto;
    }

    .lds-ring {
        div {
            box-sizing: border-box;
            display: block;
            position: absolute;
            width: 64px;
            height: 64px;
            margin: 8px;
            border: 8px solid;
            border-radius: 50%;
            animation: lds-ring 1.2s cubic-bezier(.5, 0, .5, 1) infinite;
            border-color: #22c55e transparent transparent transparent;
            box-shadow: 10px 10px 10px 10px rgba(34, 197, 94, 0.4);

            &:nth-child(1) {
                animation-delay: -.45s;
            }

            &:nth-child(2) {
                animation-delay: -.3s;
            }

            &:nth-child(3) {
                animation-delay: -.15s;
            }
        }

        @keyframes lds-ring {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }
}
</style>
