<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Logo</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class=
          "navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link  class="nav-link" to="/" exact :active="$route.name == 'CP'">Create Points</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/CS" exact :active="$route.name == 'CS'">Custom Shopes</router-link>
            </li>

             <!--<li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
              Objects
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown" text="Page 4" left :class="{ active: $route.path.startsWith('/page4') }">
                <router-link class="dropdown-item" to="/page4a" exact :active="$route.name == 'page4a'">Page 4a</router-link>
                <router-link class="dropdown-item" to="/page4b" exact :active="$route.name == 'page4b'">Page 4b</router-link>
              </div>
            </li>-->



             <li class="nav-item">
              <router-link class="nav-link" to="/El" exact :active="$route.name == 'El'">Create Elements</router-link>
            </li> 

            



            <li class="nav-item">
              <router-link class="nav-link" to="/GUI" exact :active="$route.name == 'GUI'">Design Views GUI</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/page3" exact :active="$route.name == 'page3'">Page 3</router-link>
            </li>
             <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown" text="Page 4" left :class="{ active: $route.path.startsWith('/page4') }">
              <router-link class="dropdown-item" to="/page4a" exact :active="$route.name == 'page4a'">Page 4a</router-link>
              <router-link class="dropdown-item" to="/page4b" exact :active="$route.name == 'page4b'">Page 4b</router-link>
            </div>
          </li>
          </ul>
        </div>
       
      </nav>

      

  </div>  


  
</template>

<script>
export default {
  methods: {
    shutDown() {
      uibuilder.send({
        
      });
      console.log("Message sent for Shutdown");
    },
  },
};
</script>

<style scoped>
.nav-link router-link-exact-active active{
  color: red;
}
</style>