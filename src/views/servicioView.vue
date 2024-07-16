<template>
    <main v-if="$route.name == 'servicios'">
        <section class="portada">
            <img src="@/assets/servicios/portada.png">
    
            <div>
                <h2>CONOCE MIS SERVICIOS</h2>
                <p>Estoy aquí para ayudarte a construir una <strong>marca sólida y reconocible</strong>. Deja que mis habilidades creativas y conocimientos en marketing impulsen el <strong>éxito de tu negocio</strong>.</p>
            </div>
        </section>
    
        <article id="pais-div" v-if="pais == ''">
            <div>
                <button class="btn btn-hvr-1" @click="selPais('PERÚ')" :class="{active: pais=='PERÚ'}">
                    SOY DE PERÚ
                </button>
    
                <button class="btn btn-hvr-1" @click="selPais('OTRO')" :class="{active: pais=='OTRO'}">
                    SOY EXTRANJERA
                </button>
            </div>
    
            <p>
                Elije una opción y comienza tu viaje de diseño
            </p>
        </article>
        
        <section v-if="pais!=''" class="container-servicios">
            <article v-for="a in servicios" :key="a.id">
                <div>
                    <img :src="require(`@/${a.image}`)" alt="">
                </div>
                <h3>{{a.name}}</h3>
                <span></span>
                <p>{{a.info}}</p>
                <div>
                    <router-link :to="{name:'servicioDetalle', params:{id: a.uri}}" class="btn btn-hvr-1">
                        SABER MÁS
                    </router-link>
                </div>
            </article>
        </section>
    
        <article v-else id="cargando">
            <loadingSpin/>
        </article>
    </main>
    
    <router-view/>
</template>

<script>
import loadingSpin from '@/components/loadingSpin.vue'
import servicios from '@/data/servicios.json'

import {useHead} from '@vueuse/head'

export default {
    components:{
        loadingSpin
    },
    setup() {
        useHead({
            title: 'Servicios | JnStudios',
            meta: [{name:'description', content:'Estoy aquí para ayudarte a construir una marca sólida y reconocible.'}],
        })
    },
    data:() => ({
        pais:'',
        servicios,
    }),
    created(){
        this.pais = 'PERÚ'
        // this.pais = localStorage.getItem('pais') ? localStorage.getItem('pais') : 'PERÚ'
    },
    methods:{
        selPais(pais){
            localStorage.setItem('pais',pais)
            this.pais = ''
            setTimeout(() => {
                this.pais = pais
            }, 500)
        }
    }
}
</script>

<style lang="scss" scoped>
main{
    #pais-div{
        display: flex;
        flex-flow: column;
        align-items: center;
        padding: 4rem 5%;
        gap: 2rem;

        div{
            display: flex;
            flex-wrap: wrap;
            gap: 1rem 3rem;
            justify-content: center;
            align-items: center;

            .active{
                background-color: var(--clr3);
                color: white;
            }
        }

        p{
            font-size: 1.1rem;
        }
    }

    .container-servicios{
        padding: 5rem 5%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 6rem;

        article{
            display: flex;
            flex-flow: column;
            width: 20rem;

            div:nth-child(1){
                --alto: 30rem;
                height: var(--alto);
                overflow: hidden;

                img{
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    transition: all 0.3s ease;
                    border-radius: calc(var(--alto) / 2);
                }
            }

            h3{
                margin-top: 3rem;
                text-align: center;
            }

            span{
                width: 100%;
                margin-top: 1rem;
                display: flex;
                justify-content: center;

                &::after{
                    content: '';
                    width: 20%;
                    border: 0.05rem solid var(--clr2);
                }
            }

            p{
                margin-top: 3rem;
                color: var(--clr6);
                transition: all 0.3s ease;
                text-align: center;
            }

            div:nth-child(5){
                margin-top: 2rem;
                display: flex;
                justify-content: center;
            }
        }
    }

    #cargando{
        height: 70rem;
        align-items: top;
    }
}

@media (max-width: 450px) {
}
</style>