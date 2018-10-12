<template>
  <div class="about">
    <Nav />
    <h1>产品中心</h1>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "home",
    components: {
        Nav,
        Footer
    }
};
</script>
