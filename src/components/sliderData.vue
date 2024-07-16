<template>
    <div class="carrusel">
        <i class="fa-solid fa-angle-left"
            :style="{fontSize:sizeArrows+'rem'}"
            @click="moveSlider(false)"
        ></i>

        <div>
            <ul ref="move">
                <slot></slot>
            </ul>
        </div>

        <i class="fa-solid fa-angle-right"
            :style="{fontSize:sizeArrows+'rem'}"
            @click="moveSlider(true)"
        ></i>
    </div>
</template>

<script>
export default {
    props:{
        perView: {type:Number, default:1},
        gap: {type:Number, default:1},
        speed: {type:Number, default:5000},
        sizeArrows: {type:Number, default:1}
    },
    data: () => ({
        rem: 0,
        cantidad: 0,
        scrollSlide: 0,
        interval: null,
    }),
    mounted() {
        this.rem = this.getRemSizeInPixels()
        this.cantidad = this.initSlide()

        this.initInterval()

        window.addEventListener('resize', this.initSlide)
    },
    unmounted(){
        clearInterval(this.interval)

        window.removeEventListener('resize', this.initSlide);
    },
    methods: {
        initSlide(){
            const ul = this.$refs.move
            ul.style.setProperty('--per-view', this.perView)
            ul.style.setProperty('--gap-me', this.gap+'rem')
            
            const li = Array.from(ul.childNodes).filter(node => node.nodeType === 1)

            for (let i = 0; i < this.perView; i++) {
                ul.insertAdjacentHTML('beforeend', li[i].outerHTML)
            }

            return li.length
        },
        initInterval(){
            this.interval = setInterval(() => {
                this.moveSlider(2, 14)
            }, this.speed)
        },
        moveSlider(x){
            clearInterval(this.interval)

            const slider = this.$refs.move

            if (x) {
                this.scrollSlide++

                if (this.scrollSlide == this.cantidad + 1) {
                    this.scrollSlide = 1
                    slider.style.transition = '0s'
                    slider.style.left = '0'
                }
                
                const widthEl = slider.querySelector(':first-child').offsetWidth + (this.rem*this.gap)
                slider.style.left = `-${this.scrollSlide * widthEl}px`
                slider.style.transition = '0.3s'
            }
            else {
                this.scrollSlide--
                
                if (this.scrollSlide < 0) {
                    this.scrollSlide = this.cantidad
                    slider.style.transition = '0s'
                    const widthEl = slider.querySelector(':first-child').offsetWidth + (this.rem*this.gap)
                    slider.style.left = `-${this.scrollSlide * widthEl}px`
                    this.scrollSlide--
                }

                const widthEl = slider.querySelector(':first-child').offsetWidth + (this.rem*this.gap)
                slider.style.left = `-${this.scrollSlide * widthEl}px`
                slider.style.transition = '0.3s'
            }

            this.initInterval()
        },
        getRemSizeInPixels() {
            const tempDiv = document.createElement('div')
            tempDiv.style.fontSize = '1rem'
            document.body.appendChild(tempDiv)

            const fontSizeInPixels = window.getComputedStyle(tempDiv).fontSize
            document.body.removeChild(tempDiv)
            return parseFloat(fontSizeInPixels)
        }
    },
}
</script>

<style lang="scss" scoped>
.carrusel{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    i{
        cursor: pointer;
    }

    >div{
        overflow-x: hidden;
        max-width: 80vw;

        ul{
            display: grid;
            grid-auto-flow: column;
            grid-auto-columns: calc((100% - (var(--gap-me) * (var(--per-view) - 1))) / var(--per-view));
            grid-gap: var(--gap-me);
            position: relative;
            left: 0;
            transition: 0.3s;
        }
    }
}

@media (max-width: 500px){
    :root{
        --per-view: 1;
    }
}
</style>