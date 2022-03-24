<template>
<section class="full-header">
<section class="app-header">
    <ul>
      <li class="header-item logo"> <router-link to="/"><a href="">Fastlancer<span>.</span></a> </router-link></li>
      <li class="header-item"> <router-link to="/"><a class="not-exist" href="">Join</a> </router-link></li>      
      <li class="header-item"> <router-link to="/login"><a class="" href="">Sign In</a> </router-link></li>
      <li class="header-item"> <router-link to="/"><a class="not-exist" href="">Become a Seller</a> </router-link></li>
      <li class="header-item"> <router-link to="/gig"><a href="">Explore</a> </router-link></li>
    </ul>

</section> 
</section>
 
</template>

<script>
export default {
    
    computed:{
        searchPlaceHolder(){
            return `🔍 Try "building mobile app"`
        }
    }
}
</script>

<style>

</style>