export default `
body {
    display: block;
}
#globalLoader {
    position: fixed; 
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #272822;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 1s ease 0.5s;
}
#globalLoader img {
    max-width: 85vw;
    max-height: 40vh;
    margin: 1.4vh auto 1.4vh;
    animation: animate 6s linear infinite;
}
@keyframes animate {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
}
  `
