<template>
<section class="full-header">
<section class="app-header">
     
    <div class="d-flex bd-highlight">       
      <div class="p-1 flex-grow-1 bd-highlight align-self-center">
          <router-link to="/"> <button class="btn btn-outline-light fs-3" style=" font-family: 'logoFont', serif;">Fastlancer<span class="text-success">.</span> </button></router-link>
      </div>
      <div class="p-1 bd-highlight align-self-center">
          <router-link to="/gig"> <button class="btn btn-outline-light float-end" >Explore</button></router-link>
      </div>
      <div class="p-1 bd-highlight align-self-center">
          <router-link to="/"> <button class="btn btn-outline-light float-end" disabled>Become a Seller</button></router-link>
      </div>
      <div class="p-1 bd-highlight align-self-center">
          <router-link to="/"> <button class="btn btn-outline-light float-end" disabled>Sign In</button></router-link>
      </div>
      <div class="p-1 bd-highlight align-self-center">
          <router-link to="/"> <button class="btn btn-outline-light float-end" disabled>Join</button></router-link>
      </div>
      <div class="p-1 bd-highlight align-self-center">
          <router-link to="/about"> <button class="btn btn-outline-light float-end">About</button></router-link>
      </div>
    </div>
        
   
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