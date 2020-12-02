<template>
    <div>
        <MainHero />
        <Contact />
        <Cause />
        <How />
    </div>
</template>

<script>
import MainHero from "@/components/MainHero";
import Contact from "@/components/Contact";
import Cause from "@/components/Cause";
import How from "@/components/How";

export default {
    components: {
        MainHero,
        Contact,
        Cause,
        How,
    }
}
</script>