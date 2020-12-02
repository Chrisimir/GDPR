<template>
    <div id="navbar">
        <b-container class="pl-0 pr-0">
            <b-navbar fixed="top" toggleable="lg" class="bg-white pl-md-5 pr-md-5" >
                <b-navbar-brand to="/" class="m-0">
                    <img id="main-logo" src="~/assets/images/logo.png" alt="Logo" />
                </b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item to="/#mainHero">Inicio</b-nav-item>
                        <b-nav-item to="/#contacto">Contacto</b-nav-item>
                        <b-nav-item to="/#causa">¿Qué hacemos?</b-nav-item>
                        <b-nav-item to="/#how">¿Cómo funciona?</b-nav-item>
                        <b-button squared class="d-none d-lg-block ml-lg-3 bg-secondary-color" to="/donate">Donar</b-button>
                        <b-nav-item class="d-lg-none" to="/donate">
                          <b-button pill class="bg-secondary-color">Donar</b-button>
                        </b-nav-item>
                        <b-button squared class="d-none d-lg-block ml-lg-3 bg-secondary-color" to="/request">Solicitar</b-button>
                        <b-nav-item class="d-lg-none" to="/request">
                          <b-button pill class="bg-secondary-color">Solicitar</b-button>
                        </b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </b-container>
    </div>
</template>

<style scoped>
#main-logo {
  max-height: 3em;
}

#navbar {
  height: 5em;
}
</style>