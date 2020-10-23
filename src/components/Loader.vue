<template>
    <div id="container">
            <div id="loader">       
            </div>
            <img v-if="showLogo" src="../assets/images/logo.png" >
    </div>
</template>

<script>
export default {
    props:{
        showLogo:{
            required: false,
            default: false
        }
    }    
}
</script>

<style scoped>
img{
    width: 4rem;
    position: absolute;
    opacity: 0.6;
}
#container
{
 position: absolute;
 display:flex;
 justify-content:center ;
 align-items:center;
 min-height:100%;
 width: 100%;
 /*background:#000;*/
}
/*#container
{
 display:flex;
 flex-wrap: wrap;
 
 max-width: 12%;
 //min-height:200px;
 //background:#000;
}*/

#loader 
{
 width: 4vh; /* 51px */
 height: 4vh;
 border-radius: 50%;
 background: rgb(26, 161, 245, 0.8); /*#14ffe9 */
 animation: animate .9s linear infinite;
}

@keyframes animate
{
   0%
   { transform: rotate(0deg);
   /*filter:hue-rotate(0deg);*/
   }
   100%
   {
    transform: rotate(360deg);
     /*filter:hue-rotate(360deg);*/
   }
}

#loader:before
{
 content: '';
 position: absolute;
 top: 0px;
 left: 0px;
 right: 6px;
 bottom: 6px;
 width: 3.5vh; /* 45px */
 height: 3.5vh;
 background: white; 
 border-radius:50%;
 z-index: -20;
}

</style>