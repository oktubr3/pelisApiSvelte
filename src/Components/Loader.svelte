<div class="container2 flex flex-row justify-center items-center">
  <div class="lds-ripple">
    <div>

    </div>
    <div>

    </div>
  </div>
</div>

<style>
  .container2{
      height: 80vh;
      /* Corrije lo que para mi es un error en Tailwind que no me muestra los elementos en el centro de la pantalla */
  }
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #000;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>