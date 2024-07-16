<template>
<main>
    <section class="portada">
        <img :src="require(`@/${servicio.portada}`)">

        <div>
            <h2>{{servicio.name}}</h2>
        </div>
    </section>

    <section class="parati" v-if="servicio.para_ti.length > 0 || servicio.para_ti_no.length > 0">
        <article v-if="servicio.para_ti.length > 0">
            <h3>{{servicio.name}} es para ti si ...</h3>
            
            <ul>
                <li v-for="a in servicio.para_ti" :key="a.id">
                    <i class="fa-regular fa-circle-check"></i>
                    <p>{{a.text}}</p>
                </li>
            </ul>
        </article>

        <article v-if="servicio.para_ti_no.length > 0">
            <h3>{{servicio.name}} NO es para ti si ...</h3>
            
            <ul>
                <li v-for="a in servicio.para_ti_no" :key="a.id">
                    <i class="fa-regular fa-circle-xmark"></i>
                    <p>{{a.text}}</p>
                </li>
            </ul>
        </article>
    </section>

    <div class="separador" v-if="servicio.para_ti.length > 0 || servicio.para_ti_no.length > 0">
        <p></p>
    </div>

    <section class="lista">
        <article v-for="(a,i) in servicio.packs" :key="a.id" :class="{inverso: (i+1)%2==0}">
            <div>
                <h2>{{a.name}}</h2>
                <span></span>

                <ul v-if="a.contenido.length > 0">
                    <li v-for="b in a.contenido" :key="b.id">
                        <i class="fa-solid fa-circle-check"></i>
                        <p>{{b.text}}</p>
                    </li>
                </ul>

                <ul v-if="a.regalo.length > 0">
                    <strong>REGALOS</strong>
                    <li v-for="b in a.regalo" :key="b.id">
                        <i class="fa-solid fa-gift"></i>
                        <p>{{b.text}}</p>
                    </li>
                </ul>

                <ul v-if="a.incluye.length > 0">
                    <strong>INCLUYE</strong>
                    <li v-for="b in a.incluye" :key="b.id">
                        <i class="fa-solid fa-circle-check"></i>
                        <p>{{b.text}}</p>
                    </li>
                </ul>

                <div class="tiempoEntrega">
                    <i class="fa-regular fa-clock"></i>
                    <strong>Tiempo de entrega: {{a.tiempo}}</strong>
                </div>

                <button @click="upSendWtsp(a.wtsp)" class="btn btn-hvr-1">
                    LO QUIERO!
                </button>

                <!-- <div class="precio">
                    <span>Inversión</span>
                    <span v-if="pais=='PERÚ'">S/ {{a.soles}}</span>
                    <span v-else>USD {{a.dolares}}</span>
                </div> -->
            </div>

            <div>
                <img :src="require(`@/${a.image}`)">
            </div>
        </article>
    </section>

    <section class="preguntas" v-if="preguntas.length > 0">
        <article>
            <h2>Preguntas frecuentes</h2>
        </article>
        <article>
            <ul>
                <li v-for="a in preguntas" :key="a.id">
                    <span @click="selPregunta(a.pre)" class="preg">
                        <i class="fa-solid fa-chevron-right"></i>
                        {{a.pre}}
                    </span>

                    <ul :class="{questionv:question1==a.pre}" class="resp">
                        <li v-for="b in a.res" :key="b.id">
                            <p>{{b}}</p>
                        </li>
                    </ul>
                </li>

                <li v-if="servicio.proceso.length > 0">
                    <span @click="selPregunta('proceso')" class="preg">
                        <i class="fa-solid fa-chevron-right"></i>
                        ¿Cómo es el proceso de trabajo?
                    </span>

                    <ul :class="{questionv:question1=='proceso'}" class="resp">
                        <li v-for="(a,i) in servicio.proceso" :key="a.id">
                            <span>{{i+1}}.</span>
                            <p>{{a.text}}</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </article>
    </section>
</main>
</template>

<script>
import {celular, preguntas} from '@/store/global.js'
import { sendWtsp } from '@/store/util'

import servicios from '@/data/servicios.json'

export default {
    data: () => ({
        servicio:{},
        pais:'', question1:'',
        preguntas,
    }),
    async created(){
        // this.testCountry()

        this.servicio = servicios.find(a => a.id == this.$route.params.id)
    },
    methods:{
        // testCountry(){
        //     if (localStorage.getItem('pais')) {
        //         if (localStorage.getItem('pais')=='PERÚ' || localStorage.getItem('pais')=='OTRO') {
        //             this.pais = localStorage.getItem('pais')
        //         } else {
        //             this.$router.replace({name: 'servicios'})
        //             localStorage.removeItem('pais')
        //         }
        //     } else {
        //         this.$router.replace({name: 'servicios'})
        //         this.pais = ''
        //     }
        // },
        upSendWtsp(msg){
            const wt = '¡Hola! Estoy interesada en conocer más detalles sobre tu paquete de ' + msg
            sendWtsp('51', celular, wt)
        },
        selPregunta(a){
            if (this.question1 == a) {
                this.question1 = ''
            } else {
                this.question1 = a
            }
        }
    }
}
</script>

<style lang="scss" scoped>
main{
    overflow-y: hidden;
    .portada{
        height: 20rem;
    }

    .lista{
        article{
            padding: 6rem 2rem;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 3rem;

            >div:nth-child(1){
                width: 36rem;
                max-width: 100%;
                display: flex;
                flex-flow: column;
                gap: 1rem;
                position: relative;

                h2{
                    font-size: 2rem;
                }

                >span{
                    width: 100%;
                    display: flex;
                    justify-content: left;

                    &::before{
                        content: '';
                        width: 2rem;
                        border: 0.05rem solid var(--clr2);
                    }
                }

                ul{
                    margin-top: 1.2rem;
                    display: flex;
                    flex-flow: column;
                    gap: 0.5rem;

                    strong{
                        color: var(--clr3);
                    }

                    li{
                        padding: 0 1rem;
                        display: grid;
                        grid-template-columns: 1.2rem auto;
                        align-items: center;

                        i{
                            font-size: 0.7rem;
                        }
                    }
                }

                .tiempoEntrega{
                    display: flex;
                    gap: 0.5rem;
                    margin-top: 1rem;
                    margin-bottom: 1rem;

                    i{
                        font-size: 1.5rem;
                        color: var(--clr2);
                    }
                }

                .precio{
                    position: absolute;
                    right: 0;
                    bottom: 0;
                    height: 10rem;
                    width: 10rem;
                    background-image: url('../assets/recursos/Recurso 3-8.png');
                    background-size: cover;
                    background-position: center;

                    display: flex;
                    flex-flow: column;
                    justify-content: center;
                    align-items: center;

                    span{
                        color: white;
                        font-size: 1.5rem;
                        font-weight: bold;
                    }
                }
            }

            >div:nth-child(2){
                width: 36rem;
                max-width: 100%;

                img{
                    width: 100%;
                    height: 37rem;
                    object-fit: cover;
                    object-position: center;
                }
            }
        }

        .inverso{
            background-color: rgba($color: #FFD9D5, $alpha: 0.3);
            flex-direction: row-reverse;
        }
    }

    .parati{
        padding: 5rem 5%;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;

        article:last-child{
            margin-top: 4rem;
        }

        article{
            h3{
                font-size: 2rem;
                margin-bottom: 1rem;
                text-align: center;
            }
    
            ul{
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 2rem;
    
                li{
                    width: 15rem;
                    padding: 1rem;
                    border-radius: 0.5rem;
                    background-color: var(--clr1);
                    text-align: center;
    
                    i{
                        font-size: 1.5rem;
                        margin-bottom: 0.5rem;
                    }
                }
            }
        }
    }

    .preguntas{
        padding: 5rem 5%;
        gap: 0.5rem 2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        article:nth-child(1){
            width: min-content;

            h2{
                font-size: 1.5rem;
            }
        }

        article:nth-child(2){
            width: 50rem;

            >ul{
                >li{
                    display: flex;
                    flex-flow: column;
                    border-bottom: solid 0.06rem var(--clr6);

                    .preg{
                        padding: 1rem 0.5rem;
                        width: 100%;
                        cursor: pointer;
                        font-weight: bold;
                    }

                    .resp{
                        height: 0;
                        transform: scaley(0);
                        transform-origin: top;
                        transition: 0.3s;
                        padding: 0 2rem;

                        li{
                            padding: 0.3rem 0;
                            display: flex;
                            gap: 0.5rem;
                        }
                    }

                    .questionv{
                        padding-bottom: 1.5rem;
                        transform: scaley(1);
                        height: fit-content;
                    }
                }
            }
        }
    }

    .separador{
        display: flex;
        justify-content: center;
        align-items: center;

        p{
            width: 10rem;
            height: 0.3rem;
            background-color: var(--clr2);
        }
    }
}

@media (max-width: 450px) {
    main{
        .portada{
            height: 15rem;
        }

        .lista{
            article{
                h2{
                    font-size: 1.5rem !important;
                }

                .precio{
                    transform-origin: bottom right;
                    transform: scale(0.8);
                }
            }
        }

        .preguntas{
            article:nth-child(1){
                width: max-content;
            }
        }
    }
}
</style>