<template>
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Dashibodi SKW</a>
      <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <input class="form-control form-control-dark w-100" type="text" placeholder="Tafuta" aria-label="Search">
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <router-link to="/login"> Kutoka</router-link>
        </li>
      </ul>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar ">
          <div class="sidebar-sticky pt-3">
            <ul class="nav flex-column">
              <li class="nav-link nav-item">
                <!-- <a class="nav-link"
                   v-b-toggle href="#majimbo" @click.prevent
                >
                 Majimbo
                </a> -->
                <router-link :to="{ name: 'dash' }" exact>  <span data-feather="home"></span>
                  Home <span class="sr-only">(current)</span> </router-link>
              </li>
              <li class="nav-link nav-item">
                <!-- <a class="nav-link"
                   v-b-toggle href="#majimbo" @click.prevent
                >
                 Majimbo
                </a> -->
                <router-link :to="{ name: 'majimbo' }">Majimbo</router-link>
              </li>
              <li class="nav-link nav-item">
                <!-- <a class="nav-link"
                   v-b-toggle href="#sectors" @click.prevent>
                  <span data-feather="users"></span>
                 Sekta
                </a> -->
                <router-link :to="{ name: 'sekta' }">Sekta</router-link>
              </li>
             
              <li class="nav-link nav-item">
                <!-- <a class="nav-link"
                   v-b-toggle href="#maoni" @click.prevent>
                  Maoni</a> -->

                  <router-link :to="{ name: 'maoni' }">Maoni</router-link>
              </li>
              <li class="nav-link nav-item">
                <!-- <a class="nav-link"
                   v-b-toggle href="#pongezi" @click.prevent>
               Pongezi
                </a> -->

                <router-link :to="{ name: 'pongezi' }">Pongezi</router-link>
              </li>
              <li class="nav-link nav-item">
                <!-- <a class="nav-link"
                   v-b-toggle href="#pongezi" @click.prevent>
               Pongezi
                </a> -->

                <router-link :to="{ name: 'kosoa' }">Kukosolewa</router-link>
              </li>
            </ul>
          </div>
        </nav>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          </div>
          <router-view></router-view>
        </main>
      </div>
    </div>

</template>

<script>

</script>

<style scoped>

body {
  font-size: .875rem;
}

.feather {
  width: 16px;
  height: 16px;
  vertical-align: text-bottom;
}

/*
 * Sidebar
 */

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: .5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

@supports ((position: -webkit-sticky) or (position: sticky)) {
  .sidebar-sticky {
    position: -webkit-sticky;
    position: sticky;
  }
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #999;
}

.sidebar .nav-link.active {
  color: #007bff;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: .75rem;
  text-transform: uppercase;
}

/*
 * Navbar
 */

.navbar-brand {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, .25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
}

.navbar .navbar-toggler {
  top: .25rem;
  right: 1rem;
}

.navbar .form-control {
  padding: .75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, .1);
  border-color: rgba(255, 255, 255, .1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
}


</style>