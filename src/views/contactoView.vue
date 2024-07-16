<template>
<main>
    <!-- <section>
        <div>
            <p>
                Deja que el arte hable por ti, <strong>contáctanos hoy.</strong>
            </p>
        </div>

        <div>
            <img src="@/assets/contacto/portada.jpg">
        </div>
    </section> -->
    

    <section>
        <h2>Contacto</h2>

        <p>Completa lo siguiente y podré enviarte la información que necesitas</p>

        <!-- <form v-on:submit.prevent="send()"> -->
        <form :action="link" method="POST">
            <div>
                <label for="">Nombre <i>*</i></label>
                <input type="text" name="nombre" v-model="nombre" required>
            </div>

            <div>
                <label for="">Correo electrónico <i>*</i></label>
                <input type="email" name="correo" v-model="correo" required>
            </div>

            <div>
                <label for="">Pais <i>*</i></label>
                <input type="text" name="pais" v-model="pais" required>
            </div>

            <div>
                <label for="">Mensaje <i>*</i></label>
                <textarea name="mensaje" rows="10" style="resize: none;" v-model="msg" required></textarea>
            </div>

            <div class="submit">
                <input type="submit" class="btn btn-hvr-1" value="ENVIAR">
                <input type="hidden" name="_next" :value="host">
                <input type="hidden" name="_captcha" value="false">
            </div>

        </form>

        <ruedaLogo/>
    </section>

</main>
</template>

<script>
import ruedaLogo from '@/components/ruedaLogo.vue'
import {correo} from '@/store/global.js'

import {useHead} from '@vueuse/head'

export default {
    components:{ruedaLogo},
    setup() {
        useHead({
            title: 'Contacto | JnStudios',
            meta: [{name:'description', content:'Estoy aquí para ayudarte. No dudes en contactarte conmigo.'}],
        })
    },
    data: () => ({
        link: 'https://formsubmit.co/',
        submitActive: false,
        nombre: '',
        pais:'',
        correo: '',
        msg: '',
        host: 'http://localhost:8080/contacto'
    }),
    mounted(){
        this.link += correo
        // console.log(this.link)
    },
    methods:{
        // activarSubmit(){
        //     if (this.nombre != '' && this.telefono != '' && this.correo != '' && this.msg != '') {
        //         this.submitActive = true
        //     } else {
        //         this.submitActive = false
        //     }
        // },
        send(){
            console.log('asd')
        }
    }
}
</script>

<style lang="scss" scoped>
main{
    // section:nth-child(1){
    //     // height: 25rem;
    //     // background-image: url('../assets/contacto/portada.jpg');
    //     // // background-size: cover;
    //     // background-position: center;

    //     // div{
    //     //     display: flex;
    //     //     flex-flow: column;
    //     //     align-items: center;
    //     //     justify-content: center;
    //     //     gap: 1rem;
    //     //     height: 100%;
    //     //     width: 100%;
    //     //     background-color: rgba(0,0,0,0.15);
    //     // }

    //     padding: 2rem;
    //     display: grid;
    //     grid-template-columns: 1fr 1fr;
    //     // justify-content: center;
    //     gap: 1rem;

    //     div:nth-child(1){
    //         display: flex;
    //         align-items: center;

    //         p, strong{
    //             font-size: 2rem;
    //             text-align: right;
    //         }
    //     }

    //     div:nth-child(2){
    //         img{
    //             height: 40rem;
    //             width: 30rem;
    //             object-fit: cover;
    //             // object-position: left;
    //         }
    //     }
    // }

    section:nth-child(1){
        padding: 5rem 2rem;
        display: flex;
        flex-flow: column;
        align-items: center;
        gap: 3rem;

        h2{
            font-size: 3rem;
        }

        p{
            font-size: 1.2rem;
            text-align: center;
        }

        form{
            width: 40rem;
            max-width: 95%;
            padding: 2rem;
            background-color: var(--clr1);

            div{
                margin-bottom: 1rem;

                i{
                    color: var(--clr2);
                    font-weight: bold;
                }
            }

            label{
                font-weight: bold;
            }

            input[type=text], input[type=email], textarea{
                width: 100%;
                padding: 1rem;
                // border: solid 0.06rem var(--clr6);

                &:focus{
                    // border: solid 0.06rem rgba(#3C3C3B, 0.3);
                }
            }

            .submit{
                display: flex;
                justify-content: right;
                // text-align: right;
            }

            .active{
                background-color: var(--clr3);
            }

        }
    }
}
</style>