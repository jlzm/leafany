<style lang="scss" scoped>
.swiper-container {
    background-color: #000;
}
.swiper-slide {
    background-size: cover;
    background-position: center;
    &.slide-1 {
        background-image: url("../imges/001.jpg");
    }
    &.slide-2 {
        background-image: url("../imges/002.jpg");
    }
    &.slide-3 {
        background-image: url("../imges/003.jpg");
    }
    &.slide-4 {
        background-image: url("../imges/004.jpg");
    }
}
.gallery-top {
    height: 80% !important;
    width: 100%;
}
.gallery-thumbs {
    height: 20% !important;
    box-sizing: border-box;
    padding: 2px 0;
}
.gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
}
.gallery-thumbs .swiper-slide-active {
    opacity: 1;
}
</style>


<template>
    <div class="about">
        <Nav />
        <div style="height: 800px">
            <!-- swiper1 -->
            <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
                <swiper-slide class="slide-1"></swiper-slide>
                <swiper-slide class="slide-2"></swiper-slide>
                <swiper-slide class="slide-3"></swiper-slide>
                <swiper-slide class="slide-4"></swiper-slide>
                <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            </swiper>
            <!-- swiper2 Thumbs -->
            <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
                <swiper-slide class="slide-1"></swiper-slide>
                <swiper-slide class="slide-2"></swiper-slide>
                <swiper-slide class="slide-3"></swiper-slide>
                <swiper-slide class="slide-4"></swiper-slide>
            </swiper>
        </div>
        <Footer />
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
    },
    data() {
        return {
            swiperOptionTop: {
                spaceBetween: 10,
                loop: true,
                loopedSlides: 5, //looped slides should be the same
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false
                }
            },
            swiperOptionThumbs: {
                spaceBetween: 2,
                slidesPerView: 4,
                touchRatio: 0.2,
                loop: true,
                loopedSlides: 5, //looped slides should be the same
                slideToClickedSlide: true
            }
        };
    },
    mounted() {
        this.$nextTick(() => {
            const swiperTop = this.$refs.swiperTop.swiper;
            const swiperThumbs = this.$refs.swiperThumbs.swiper;
            swiperTop.controller.control = swiperThumbs;
            swiperThumbs.controller.control = swiperTop;
        });
    }
};
</script>
