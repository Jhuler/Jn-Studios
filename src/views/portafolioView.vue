<template>
<main v-if="$route.name == 'portafolio'">
    <section class="portada">
        <img src="@/assets/portafolio/portada.png">

        <div>
            <h2>PORTAFOLIO</h2>
            <p>Descubre el poder de una identidad visual bien diseñada. Sumérgete en mi <strong>mundo creativo</strong> y descubre cómo puedo <strong>ayudar a tu marca</strong> a destacar.</p>
        </div>
    </section>

    <section>
        <router-link v-for="a in portafolio" :key="a.id" :to="{name:'portafolioDetalle', params:{id: a.id}}">
            <div>
                <img :src="require(`@/${a.image}`)">
            </div>
            <span>{{a.cliente_nombre}}</span>
        </router-link>
    </section>
</main>

<router-view/>
</template>

<script>
import portafolio from '@/data/portafolio.json'

import {useHead} from '@vueuse/head'

export default {
    data: () => ({
        portafolio,
    }),
    setup() {
        useHead({
            title: 'Portafolio | JnStudios',
            meta: [{name:'description', content:'Descubre el poder de una identidad visual bien diseñada. Sumérgete en mi mundo creativo y descubre cómo puedo ayudar a tu marca.'}],
        })
    },
}
</script>

<style lang="scss" scoped>
main{
    section:nth-child(2){
        padding: 5rem 5%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 6rem;

        a{
            width: 20rem;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-flow: column;
            gap: 0.5rem;
            cursor: pointer;

            div{
                &:hover{
                    img{
                        transform: scale(1.05);
                    }
                }
                
                img{
                    max-width: 100%;
                    object-fit: cover;
                    transition: all 0.3s ease;
                }
            }

            span{
                font-weight: bold;
                text-align: center;
            }
        }
    }
}
</style>