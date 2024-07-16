<template>
<main>
    <section class="home-portada">
        <div class="left">
            <h2 class="oculto">¡Haz que tu marca brille!</h2>
            <p class="oculto">Con creatividad en cada detalle te ayudo a diseñar marcas únicas y poderosas.</p>
            <router-link :to="{name:'servicios'}" class="btn btn-hvr-2 oculto">
                VER SERVICIOS
            </router-link>
        </div>

        <div class="right">
            <img src="@/assets/home/perfil.jpg">
        </div>
    </section>

    <section>
        <i class="fa-solid fa-quote-left"></i>
        <p>Bienvenidas a un mundo de diseño dedicado a mujeres <strong>emprendedoras y soñadoras.</strong> Aquí, transformamos tus ideas en identidades visuales únicas que cuentan tu historia.</p>
        <strong>¡Tu marca merece destacar!</strong>
        <i class="fa-solid fa-ellipsis"></i>
    </section>

    <section class="carrusel-clientes">
        <div>
            <h2>Conoce mi trabajo</h2>
            <p>Descubre cómo transformamos marcas en belleza</p>
        </div>

        <sliderData :gap="0.3" :perView="perViewClientes" :speed="2000" :sizeArrows="1.7" class="clientes" v-if="portafolio.length > 0">
            <li v-for="a in portafolio" :key="a.id">
                <img :src="require(`@/${a.logo}`)">
            </li>
        </sliderData>

        <div>
            <router-link :to="{name:'portafolio'}" class="btn btn-hvr-1">
                VER PORTAFOLIO
            </router-link>
        </div>
    </section>

    <sliderData class="comentarios" v-if="comentarios.length > 0">
        <li v-for="a in comentarios" :key="a.id">
            <i class="fa-regular fa-comments"></i>
            <p>{{a.comentario}}</p>
            <strong>{{capitalizarPalabras(a.cliente_nombre)}}</strong>
        </li>
    </sliderData>

    <article>
        <ruedaLogo/>

        <h2>No te pierdas mi contenido</h2>
        
        <ul ref="publicaciones" v-if="instagramPosts.length > 0">
            <li v-for="a in instagramPosts" :key="a.id">
                <img :src="require(`@/${a.image}`)" alt="">

                <a class="link" :href="a.link" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                </a>
            </li>
        </ul>

        <a :href="instalink" target="_blank" class="btn btn-hvr-1">
            <i class="fa-brands fa-instagram"></i>
            jenifer_noemi28
        </a>
    </article>
</main>
</template>

<script>
import ruedaLogo from '@/components/ruedaLogo.vue'
import sliderData from '@/components/sliderData.vue'

import portafolio from '@/data/portafolio.json'
import comentarios from '@/data/comentarios.json'
import instagramPosts from '@/data/instagram-posts.json'

import { capitalizarPalabras } from '@/store/util'
import { instalink } from '@/store/global'

import { useHead } from '@vueuse/head'

export default {
    components:{
        sliderData,
        ruedaLogo
    },
    setup() {
        useHead({
            title: 'Home - JnStudios',
            meta: [{name:'description', content:'¡Haz que tu marca brille! Con creatividad en cada detalle te ayudo a diseñar marcas únicas y poderosas.'}],
        })
    },
    data: () => ({
        perViewClientes:3,

        portafolio,
        comentarios,
        instagramPosts,

        capitalizarPalabras,
        instalink
    }),
    created(){
        this.setPerView()
    },
    mounted(){
        window.addEventListener('resize', this.setPerView)
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.setPerView);
    },
    methods: {
        setPerView() {
            this.perViewClientes = window.innerWidth > 500 ? 3 : 1
        }
    },
}
</script>

<style lang="scss" scoped>
main{
    .home-portada{
        height: 50rem;
        display: grid;
        grid-template-columns: 50% 50%;

        .left{
            padding: 4rem;
            // background-color: var(--clr3);
            background: radial-gradient(circle at 0% 0%, var(--clr3), transparent),
                        radial-gradient(circle at 50% 50%, var(--clr4), transparent),
                        radial-gradient(circle at 75% 55%, var(--clr2), transparent),
                        radial-gradient(circle at 75% 75%, var(--clr4), transparent);
            background-blend-mode: multiply;
            display: flex;
            flex-flow: column;
            justify-content: center;
            gap: 1rem;

            h2,p,a{
                animation: aparicion 1s;
            }

            .visible-div{
                left: 0%;
            }

            h2{
                font-size: 4rem;
                color: white;
                line-height: 1.2;
            }

            p{
                color: white;
                font-size: 1.3rem;
                line-height: 1.8;
            }
        }

        .right{
            overflow: hidden;

            img{
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
    }

    section:nth-child(2){
        margin: 7rem 0;
        padding: 0 20%;
        display: flex;
        flex-flow: column;
        justify-content: center;

        i{
            text-align: center;
            color: var(--clr2);
            font-size: 5rem;
        }

        i:nth-child(1){
            margin-bottom: 2rem;
        }

        i:nth-child(4){
            margin-top: 2rem;
        }

        p, strong{
            text-align: center;
            font-size: 1.3rem;
        }
    }

    .carrusel-clientes{
        margin: 7rem 0;

        div:nth-child(1){
            display: flex;
            flex-flow: column;
            gap: 1rem;
            align-items: center;
            margin-bottom: 3rem;

            p{
                font-size: 1.2rem;
                text-align: center;
            }

            h2{
                text-align: center;
            }
        }

        .clientes{
            padding: 0 12%;

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
            }
        }

        div:nth-child(3){
            display: flex;
            justify-content: center;
            margin-top: 3rem;
        }
    }  

    .comentarios{
        padding: 5rem 20%;
        background-color: rgba($color: #FFD9D5, $alpha: 0.3);

        li{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;

            i{
                font-size: 4rem;
                margin-bottom: 1rem;
            }

            p{
                font-size: 1.2rem;
                text-align: center;
                line-height: 1.4;
            }

            strong{
                font-size: 1.4rem;
                font-family: 'Montserrat', sans-serif;
            }
        }
    }

    article{
        margin: 7rem 0;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        gap: 3rem;

        h2{
            text-align: center;
        }
        
        ul{
            display: flex;
            padding: 0 5rem;
            gap: 0.7rem;
            justify-content: center;
            flex-wrap: wrap;

            li{
                
                position: relative;

                &:hover{
                    .link{
                        opacity: 1;
                        top: 0;
                    }
                }

                img{
                    width: 20rem;
                    object-fit: cover;
                    object-position: center;
                }

                .link{
                    position: absolute;
                    top: 3rem;
                    height: 100%;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: rgba(0, 0, 0, 0.3);
                    transition: 0.3s;
                    opacity: 0;
                    cursor: pointer;

                    i{
                        color: whitesmoke;
                    }
                }
            }
        }
    }
}

@keyframes aparicion{
    0% {transform: translateX(-50vw);}
    100% { transform: translateX(0);}
}

@media (max-width: 720px){
    main{
        .home-portada{
            grid-template-columns: 1fr;
            height: initial;

            .left{
                padding: 3rem 5%;
                gap: 2rem;

                h2{
                    font-size: 3rem;
                }

                a{
                    margin-top: 3rem;
                    align-self: center;
                }
            }

            .right{
                grid-row: 1/2;
                
                img{
                    height: 40rem;
                }
            }
        }

        section:nth-child(2){
            padding: 0 3rem;

            p, strong{
                font-size: 1.2rem;
            }
        }

        .carrusel-clientes{
            .clientes{
                padding: 0 3rem;
            }
        }

        .comentarios{
            padding: 5rem 3rem;

            li{
                i{
                    font-size: 2rem;
                }

                p{
                    font-size: 1rem;
                }
            }
        }

        article{
            ul{
                padding: 1rem;

                img{
                    width: 10rem !important;
                }
            }
        }
    }
}
</style>