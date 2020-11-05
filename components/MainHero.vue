<template>
    <div id="mainHero">
        <div class="container">
            <div class="row align-items-center justify-content-between">
                <b-col md="6">
                    <div>
                        <div class="mt-4 mt-sm-0">
                            <h1>PDGR</h1>
                            <h2>Ejemplo</h2>
                            <p>Texto de ejemplo</p>
                            <p>
                                <b-button class="d-md-none" block squared to="/donar">Donar</b-button>
                                <b-button class="d-none d-md-inline" squared size="lg" to="/donar">Donar</b-button>
                                <b-button class="d-md-none" block squared to="/solicitar">Solicitar</b-button>
                                <b-button class="d-none d-md-inline" squared size="lg" to="/solicitar">Solicitar</b-button>
                            </p>
                        </div>
                    </div>
                </b-col>
                <b-col md="4" class="d-none d-md-block" style="overflow:hidden;">
                    <div class="d-none d-md-block image"><img src="~/assets/images/holder_image.jpg" alt="Holder image" /></div>
                </b-col>
            </div>
        </div>
    </div>
</template>

<style scoped>
.image {
    max-height: 50vh;
}
</style>
