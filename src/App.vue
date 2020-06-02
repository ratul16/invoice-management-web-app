<template>
    <div id="app">
        <div id="nav">
            <h1 class="text-capitalize font-weight-bold">
                <transition name="fade">
                    <img src="./assets/InVoicing.svg" class="mr-2" width="50" />
                </transition>
                InVoicing
            </h1>
            <button class="btn btn-light">
              <router-link to="/"><i class="fas fa-home"></i> &nbsp;Home</router-link>
            </button> 
            &nbsp;<i class="fas fa-exchange-alt"></i> &nbsp;
            <button class="btn btn-light">            
              <router-link to="/invoice"><i class="fas fa-receipt"></i> &nbsp;Invoice</router-link>
            </button>
        </div>
        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
    </div>
</template>

<style>
@import "./assets/style.css";
</style>
