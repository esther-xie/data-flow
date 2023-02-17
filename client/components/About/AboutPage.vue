<template>
    <main>
    
      <div class="center-text">
        <p> Data flows is a project of Rebooting Social Media Institute from the Berkman Klein Center at Harvard University. </p>

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