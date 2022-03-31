<template>
    <div style="display:flex; justify-content: space-between; height:100%" class="a-main-subheader-container">
    <section style="color:black; width:fit-content; height:100%"  v-for="slide in 9" :key="slide">
      <a :href="links" class="a-main-subheader">
      <h4   style=" margin:auto; color:#74767e; font-weight:400; text-align:center;" class="header-menu-carousel-text">
        
  {{menus[slide-1]}}
  </h4>
  </a>
    </section>
</div>
</template>

<script>
export default {
    data(){
        return{
            links: [
            
          ],
            menus:[
                'Graphics & Design','Digital Marketing','Writing & Translation','Video & Animation','Music & Audio','Programming & Tech','Business', 'Lifestyle','Trending',
            ]
    }},

};
</script>

<style>

</style>