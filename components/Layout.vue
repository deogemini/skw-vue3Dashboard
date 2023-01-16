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
