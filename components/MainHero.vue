<template>
    <section id="mainHero" class="bg-main-color">
        <div>
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <b-col md="5">
                    <div>
                        <div class="mt-4 mt-sm-0">
                            <h1>Título de tu página</h1>
                            <h2>Eslogan de tu página</h2>
                            <p>Texto de ejemplo describiendo la causa y llamando a la acción animando a los visitanters a participar</p>
                            <p>
                                <b-button pill class="d-md-none ml-auto mr-auto p-2 mt-3 w-75 bg-secondary-color" block squared to="/donar">Donar</b-button>
                                <b-button pill class="d-none d-md-inline bg-secondary-color" squared size="lg" to="/donar">Donar</b-button>
                                <b-button pill class="d-md-none ml-auto mr-auto p-2 mt-3 w-75 bg-secondary-color" block squared to="/solicitar">Solicitar</b-button>
                                <b-button pill class="d-none d-md-inline bg-secondary-color" squared size="lg" to="/solicitar">Solicitar</b-button>
                            </p>
                        </div>
                    </div>
                </b-col>
                <b-col md="5" class="d-none d-md-block">
                    <div class="d-none d-md-block"><img id="main-hero-image" src="~/assets/images/main-hero-image.png" alt="Main hero image" /></div>
                </b-col>
            </div>
        </div>
    </div>
    </section>
</template>

<style scoped>
#main-hero-image {
    max-height: 20vw;
    padding: 1em;
}
</style>
