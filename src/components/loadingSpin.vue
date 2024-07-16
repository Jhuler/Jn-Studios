<template>
  <div class="loading-overlay">
    <div class="spinner">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loading-overlay {
//   position: fixed;
//   top: 0;
//   left: 0;
  width: 100%;
//   height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
//   background-color: rgba(255, 255, 255, 0.8);
  z-index: 9999;
}

.spinner {
  width: 70px;
  text-align: center;
}

.spinner > div {
  width: 18px;
  height: 18px;
  background-color: var(--clr3);
  border-radius: 100%;
  display: inline-block;
  animation: loading-bounce 1.4s infinite ease-in-out both;
}

.spinner .bounce1 {
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  animation-delay: -0.16s;
}

@keyframes loading-bounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
</style>