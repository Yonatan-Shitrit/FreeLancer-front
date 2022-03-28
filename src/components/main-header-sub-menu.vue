<template>
    <div style="display:flex; justify-content: space-between">
    <section  style="color:black; width:fit-content;" v-for="slide in 9" :key="slide">
      <a :href="links">
      <h4   style=" margin:auto; color:#74767e; font-weight:400; " class="header-menu-carousel-text">
        
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