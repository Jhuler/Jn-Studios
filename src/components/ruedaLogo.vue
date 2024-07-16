<template>
<div>
    <img src="@/assets/logos/Recurso-7-8.png" ref="rueda">
</div>
</template>

<script>
export default {
    data: () => ({
    }),
    mounted() {
        window.addEventListener('scroll', this.hacerRodar)
    },
    unmounter() {
        window.removeEventListener('scroll', this.hacerRodar)
    },
    methods: {
        hacerRodar(){
            const scrollY = window.scrollY
            const rotationDegrees = scrollY / 5
            if (this.$refs.rueda) this.$refs.rueda.style.transform = `rotate(${rotationDegrees}deg)`
        }
    }
}
</script>

<style lang="scss" scoped>
div{
    width: 100%;
    display: flex;
    justify-content: center;

    >img{
        height: 10rem;
        border-radius: 50%;
    }
}
</style>