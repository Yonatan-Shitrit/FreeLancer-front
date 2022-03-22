<template>
<section class="full-header pt-2 border border-dark bg-danger" style="--bs-bg-opacity: .2;">
<section class="navBar col-10 m-auto mb-5">
     
    <div class="d-flex bd-highlight">       
      <div class="p-1 flex-grow-1 bd-highlight align-self-center">
          <router-link to="/"> <button class="btn btn-outline-light text-dark fs-3" style="font-weight: bold; font-family: 'Crimson Pro', serif;">Fastlancer<span class="text-success">.</span> </button></router-link>
      </div>
      <div class="p-1 bd-highlight align-self-center">
          <router-link to="/gig"> <button class="btn btn-outline-light text-dark float-end" >Explore</button></router-link>
      </div>
      <div class="p-1 bd-highlight align-self-center">
          <router-link to="/"> <button class="btn btn-outline-light text-dark float-end" disabled>Become a Seller</button></router-link>
      </div>
      <div class="p-1 bd-highlight align-self-center">
          <router-link to="/"> <button class="btn btn-outline-light text-dark float-end" disabled>Sign In</button></router-link>
      </div>
      <div class="p-1 bd-highlight align-self-center">
          <router-link to="/"> <button class="btn btn-outline-light text-dark float-end" disabled>Join</button></router-link>
      </div>
      <div class="p-1 bd-highlight align-self-center">
          <router-link to="/about"> <button class="btn btn-outline-light text-dark float-end">About</button></router-link>
      </div>
    </div>
        
    </section>
    <section class="search-home col-10 m-auto mt-5">
        <div class="col-6">
            <p class="lead fs-3">
                Find the perfect <span class="text-danger" style="font-family: 'Inspiration', cursive;">freelance</span> <br>
                services for your business
            </p>
            <div class="input-group mb-5">              
              <input type="text" class="form-control" :placeholder="searchPlaceHolder" aria-label="search" aria-describedby="basic-addon1">
              <span class="input-group-text bg-success" style="--bs-bg-opacity: .6;" id="basic-addon1">search</span>
            </div>
            
        </div>
    </section>

</section>
  
</template>

<script>
export default {
    computed:{
        searchPlaceHolder(){
            return `🔎 Try "building mobile app"`
        }
    }
}
</script>

<style>

</style>