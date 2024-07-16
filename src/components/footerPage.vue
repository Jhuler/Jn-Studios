<template>
    <footer>
        <article>
            2023 © Jenifer Noemi
        </article>
    
        <article>
            <a class="linkto" :href="'mailto:'+correo">
                <i class="fa-regular fa-envelope"></i>
            </a>
    
            <div class="linkto" @click="atSendWtsp()">
                <i class="fa-brands fa-whatsapp"></i>
            </div>
    
            <a class="linkto" :href="instalink" target="_blank">
                <i class="fa-brands fa-instagram"></i>
            </a>
    
            <a class="linkto" :href="tiklink" target="_blank">
                <i class="fa-brands fa-tiktok"></i>
            </a>
    
            <a class="linkto" :href="ubicacion" target="_blank">
                <i class="fa-solid fa-location-dot"></i>
            </a>
        </article>
    
        <article>
            Powered by Jd-code
        </article>
    </footer>
    </template>
    
    <script>
    import { sendWtsp } from '@/store/util'
    
    import {celular, correo, instagram, instalink, ubicacion, tiktok, tiklink} from '../store/global.js'
    
    export default {
        setup(){
            return{
                celular, correo, instagram, instalink, ubicacion, tiktok, tiklink
            }
        },
        data: () => ({
        }),
        methods:{
            atSendWtsp(){
                sendWtsp('51', celular, 'Hola Jenifer, podríamos agendar una cita?')
            },
        }
    }
    </script>
    
    <style lang="scss" scoped>
    footer{
        width: 100%;
        background-color: var(--clr6);
        padding: 2rem 0;
        display: flex;
        justify-content: space-evenly;
    
        article{
            display: flex;
            align-items: center;
            color: white;
        }
    
        article:nth-child(2){
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
    
            i{
                color: white;
            }
    
            .linkto{
                height: 3rem;
                width: 3rem;
                display: block;
                border-radius: 50%;
                border: solid 0.06rem white;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all 0.3s ease;
                color: var(--clr3);
                cursor: pointer;
    
                &:hover{
                    animation: beat 0.5s infinite;
                    background-color: white;
                    color: white;
    
                    i{
                        color: var(--clr3);
                    }
                }
            }
        }
    
        article:nth-child(3){
            justify-content: right;
        }
    }
    
    @media (max-width: 700px) {
        footer{
            padding: 2rem 10%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem 1rem;
    
            article:nth-child(2){
                grid-row: 1/2;
                grid-column: 1/3;
            }
        }
    }
    </style>