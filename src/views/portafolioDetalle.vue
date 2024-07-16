<template>
<main>
    <section>
        <img :src="require(`@/${uno.mock_up}`)">
    </section>

    <ruedaLogo/>

    <section>
        <div>
            <router-link :to="{name:'portafolio'}">
                <i class="fa-solid fa-reply"></i>
                Regresar
            </router-link>

            <div>
                <p>¿Tienes dudas? <br> ¡Ponte en contato <br> ahora mismo!</p>
                <router-link :to="{name:'contacto'}" class="btn btn-hvr-1">
                    <i class="fa-solid fa-envelope-open-text"></i>
                    Contáctame
                </router-link>
            </div>
        </div>
    </section>
</main>
</template>

<script>
import ruedaLogo from '@/components/ruedaLogo.vue'
import portafolio from '@/data/portafolio.json'

export default {
    components:{
        ruedaLogo
    },
    data: () =>  ({
        uno:{},
    }),
    async created() {
        this.uno = portafolio.find(a => a.id == this.$route.params.id)
    },
}
</script>

<style lang="scss" scoped>
main{
    section:nth-child(1){
        display: flex;
        justify-content: center;
        padding: 5rem 1rem;
        
        img{
            width: 60rem;
            max-width: 100%;
        }
    }

    section:nth-child(3){
        display: flex;
        justify-content: center;

        >div{
            width: 60rem;
            max-width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5rem 2rem;
    
            >a{
                display: flex;
                justify-content: left;
                align-items: center;
                flex-wrap: wrap;
                gap: 0.5rem;

                i{
                    font-size: 2rem;
                    color: var(--clr2);
                }
            }
    
            div{
                display: flex;
                justify-content: right;
                align-items: center;
                flex-wrap: wrap;
                gap: 1rem;
    
                p{
                    text-align: right;
                }
            }
        }
    }
}
</style>