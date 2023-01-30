<template>
    <main>
    <div id="purplefilter" :class="{ 'filteron': isActive}">
      <video autoplay muted loop id="skatevideo" @click="handleClick">
        <source src="..\public\skate.mp4" type="video/mp4">
      </video>
      <img id="retreatgif" src="..\public\retreat.gif" @click="handleClick">
      <video autoplay muted loop id="aboutvideo" @click="isActive = !isActive">
        <source src="..\public\wave.mp4" type="video/mp4">
      </video>
      <video autoplay muted loop id="flowervideo" @click="handleClick">
        <source src="..\public\flower.mp4" type="video/mp4">
      </video>
      <video autoplay muted loop id="airvideo" @click="handleClick">
        <source src="..\public\air.mp4" type="video/mp4">
      </video>
      <video autoplay muted loop id="trainvideo" @click="handleClick">
        <source src="..\public\train.mp4" type="video/mp4">
      </video>
      <div class="center-text">
        <h1> Hi, this is Esther Xie. </h1>
        <h1> I'm a designer currently studying at Harvard University. </h1>
        <h1> 我的母语是中文。 ⸜(* ॑꒳ ॑* )⸝ </h1>
        <h1> 日本語は勉強中です。 (◕ܫ◕) </h1>
      </div>
      </div>
    </main>
  </template>


<style scoped>

.filteron{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background:#4016D9;
}

.filteron video {
  -webkit-filter: sepia(100%) hue-rotate(90deg) saturate(400%);
  filter: sepia(100%) hue-rotate(90deg) saturate(400%);
}
.filteron img {
  -webkit-filter: sepia(100%) hue-rotate(90deg) saturate(400%);
  filter: sepia(100%) hue-rotate(90deg) saturate(400%);
}

.filteron h1 {
  color:aqua;
}

#skatevideo {
  position: fixed;
  left: 2%;
  bottom: 60%;
  max-width: 10%;
}

#aboutvideo {
  position: fixed;
  right: 0;
  bottom: 0;
  max-width: 30%;
}

#trainvideo {
  position: fixed;
  right: 65%;
  bottom: 55%;
  max-width: 10%;
}

#flowervideo{
  position: fixed;
  right: 15%;
  bottom: 65%;
  max-width: 20%; 
}

#airvideo {
  position: fixed;
  right: 75%;
  bottom: 5%;
  max-width: 20%; 
}

#retreatgif {
    position: fixed;
    right:50%;
    bottom: 25%;
    max-width: 17%;
}
</style>

<script>
export default {
  data() {
    return {
        isActive: false,
    };
  },
  methods: {
    handleClick(){
        this.isActive = !this.isActive;
        console.log(this.isActive);
    },
  },
}
</script>