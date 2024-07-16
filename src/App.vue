<template>
  <headerPage/>
  <router-view/>
  <footerPage/>
  <img id="whatsapp" src="@/assets/recursos/whatsapp.png" @click="atSendWtsp()">
</template>

<script>
import headerPage from '@/components/headerPage.vue'
import footerPage from '@/components/footerPage.vue'

import { sendWtsp } from '@/store/util'

import { celular } from '@/store/global.js'

export default {
  components: {
    headerPage,
    footerPage
  },
  methods:{
    atSendWtsp(){
      sendWtsp('51', celular, 'Hola Jenifer, podríamos agendar una cita?')
    },
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Krona+One&family=Montserrat:ital,wght@0,200;0,300;0,600;1,200;1,300;1,600&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,600;1,200;1,300;1,600&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Alexandria:wght@100;200;300;400;500;600;700;800;900&family=Krona+One&family=Montserrat:ital,wght@0,200;0,300;0,600;1,200;1,300;1,600&display=swap');

#whatsapp{
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  height: 4rem;
  box-shadow: 0 0 0.5rem 0.2rem rgba(0,0,0,0.3);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover{
    transform: scale(1.1);
  }
}

*{
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: none;
  outline: none;
  font-size: 14px;
  color: var(--clr6);
}

::-webkit-scrollbar{
  height: 0.7rem;
  width: 0.7rem;
  background-color: var(--clr6);
}

::-webkit-scrollbar-thumb{
  border: solid 0.2rem var(--clr6);
}

::-webkit-scrollbar-thumb{
  background-color: white;
  border-radius: 0.3rem;
}

:root{
  --clr1: #FFD9D5;
  --clr2: #E63C43;
  --clr3: #FF7351;
  --clr4: #FFD173;
  --clr5: #FFFFFF;
  --clr6: #3C3C3B;
}

ul{
  padding: 0;
  margin: 0;
}

li{
  list-style: none;
}

a{
  text-decoration: none;
}

h1, h2, h3{
  font-family: 'Krona One', sans-serif;
}

h2{
  font-size: 2rem;
}

h3{
  font-size: 1.5rem;
}

main{
  width: 100%;
  // overflow-x: hidden;
}

.btn{
  width: 15rem;
  height: 3rem;
  border-radius: 0.5rem;
  border: solid 0.06rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
  font-weight: bold;
  cursor: pointer;
}

.btn-hvr-1{
  color: var(--clr3);
  *{
    color: var(--clr3);
  }
  background-color: white;

  &:hover{
    color: white;
    *{
      color: white;
    }
    background-color: var(--clr3);
  }
}

.btn-hvr-2{
  color: white;
  *{
    color: white;
  }
  background-color: var(--clr3);

  &:hover{
    color: var(--clr3);
    *{
      color: var(--clr3);
    }
    background-color: white;
  }
}

.button-beat{
  &:hover{
      animation: beat 0.5s infinite;
      background-color: var(--clr3);
      color: white;
  }
}

.portada{
  height: 25rem;
  position: relative;

  img{
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: bottom;
  }
  
  div{
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.1);

    h2{
        text-align: center;
        font-size: 3rem;
        color: var(--clr6);
    }

    strong{
        font-size: 1.3rem;
    }

    p{
        width: 45rem;
        max-width: 100%;
        padding: 0 5%;
        color: var(--clr6);
        text-align: center;
        font-size: 1.3rem;
    }
  }
}

@keyframes beat{
  0%{transform: scale(1);}
  50%{transform: scale(1.1);}
  100%{transform: scale(1);}
}

@media (max-width: 450px){
  .portada{
    height: 20rem;

    div{
      gap: 2rem;

      h2{
        font-size: 2.5rem;
      }
      
      p, strong{
          font-size: 0.99rem;
      }
    }
  }
}
</style>