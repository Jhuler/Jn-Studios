<template>
<header>
    <div class="pc">
        <router-link :to="{name:'home'}">Home</router-link>
        <router-link :to="{name:'servicios'}">Servicios</router-link>
        <router-link :to="{name:'home'}">
            <img src="@/assets/logos/principal.png" alt="logo">
        </router-link>
        <router-link :to="{name:'portafolio'}">Portafolio</router-link>
        <router-link :to="{name:'contacto'}">Contacto</router-link>
    </div>

    <div class="mobile">
        <router-link :to="{name:'home'}">
            <img src="@/assets/logos/principal.png" alt="logo">
        </router-link>

        <div @click="vis = !vis">
            <i class="fa-solid fa-bars" v-if="!vis"></i>
            <i class="fa-solid fa-xmark" v-else></i>
        </div>

        <nav :class="{visible: vis}">
            <router-link :to="{name:'home'}"          @click="vis = false" >Home</router-link>
            <router-link :to="{name:'servicios'}"     @click="vis = false" >Servicios</router-link>
            <router-link :to="{name:'portafolio'}"    @click="vis = false" >Portafolio</router-link>
            <router-link :to="{name:'contacto'}"      @click="vis = false" >Contacto</router-link>
        </nav>
    </div>
</header>
</template>

<script>
export default {
    data: () => ({
        vis: false,
    }),
}
</script>

<style lang="scss" scoped>
header{
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: white;
    box-shadow: 0 0 1rem rgba(0,0,0,0.3);

    .pc{
        height: 7rem;
        display: flex;
        justify-content: space-evenly;

        img{
            height: 6rem;
        }
    }

    .mobile{
        height: 5rem;
        display: none;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;

        img{
            height: 3.5rem;
        }

        div{
            width: 2.4rem;
            height: 2.5rem;
            border-radius: 0.3rem;
            cursor: pointer;
            background-color: var(--clr2);
            display: flex;
            justify-content: center;
            align-items: center;

            i{
                font-size: 1.5rem;
                color: white;
            }
        }

        nav{
            position: absolute;
            width: 100%;
            left: 0;
            top: 4.9rem;
            padding: 0.5rem 0;

            display: flex;
            flex-flow: column;
            gap: 1rem;

            background-color: white;

            transform: scaley(0);
            transform-origin: top;
            transition: 0.3s;
            box-shadow: 0 0.8rem 0.5rem rgba(0,0,0,0.3);
        }

        .visible{
            transform: scaley(1);
        }
    }

    a{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.4rem;
        color: var(--clr2);

        &:hover{
            color: var(--clr3);
        }

        &.router-link-active{
            font-weight: bold;
        }
    }

    .active{
        font-weight: bold;
    }
}

@media (max-width: 700px){
    header{
        .pc{
            display: none;
        }

        .mobile{
            display: flex;
        }
    }
}
</style>