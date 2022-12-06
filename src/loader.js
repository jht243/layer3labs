export default `

* {
  margin: 0;
  padding: 0;
}

body {
    display: block;
}

#globalLoader {
    width: 100vw;
    background-color: #272822;
    z-index: 9999;
    transition: opacity 1s ease 1s;
}

#loaderImg {
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;
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
