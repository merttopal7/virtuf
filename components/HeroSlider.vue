<template>
    <section class="home-slider-area slider-default">
        <div class="home-slider-content">
            <div class="home-slider-container">
                <swiper :options="swiperOptions">




                    <!-- Start Slide Item -->
                    <div class="swiper-slide home-slider-item" :style="{ backgroundImage: `url('/images/slider/bg1.jpg')` }" v-for="slide of Slides" :key="slide.id">
                        <div class="slider-content-area">
                            <div class="content">
                                <div class="subtitle-content">
                                    <img src="/images/shape/line1.png" alt="Images">
                                    <h6>{{slide.smallText}}</h6>
                                </div>
                                <div class="tittle-wrp">
                                    <h2>{{slide.mainText}} <span>{{slide.mainTextSecond}}</span></h2>
                                </div>
                                <p>{{slide.description}}</p>
                                <n-link v-bind:to="slide.button.link ? slide.button.link : ''" class="btn btn-theme btn-theme-color2">{{slide.button.title}} <i class="icon icofont-long-arrow-right"></i></n-link>
                            </div>
                            <div class="layer-style">
                                <div class="thumb">
                                    <img v-bind:src="$options.filters.getImgSrc(mainUrl,slide.Photo.url)" alt="Images">
                                </div>
                                <div class="success-rate"><div class="content">{{slide.CircleOnPhoto.topText}} <span>{{slide.CircleOnPhoto.bottomText}}</span></div></div>
                                <div class="trusted-clients-content">
                                    <span v-html="$options.filters.getTrust(slide.clientsOnPhoto.Text)"></span>
                                    <ul class="clients-list">
                                        <li v-for="client of slide.clientsOnPhoto.Clients" :key="client.id"><img :src="$options.filters.getImgSrc(mainUrl,client.url)" alt="Images"></li>
                                    </ul>
                                </div>
                                <div class="shape-style1">
                                    <img src="/images/shape/1.png" alt="Images">
                                </div>
                                <div class="shape-style2">
                                    <img src="/images/shape/2.png" alt="Images">
                                </div>
                                <div class="shape-style3">
                                    <img src="/images/shape/3.png" alt="Images">
                                </div>
                                <div class="shape-style4">
                                    <img src="/images/shape/4.png" alt="Images">
                                </div>
                                <div class="shape-style5">
                                    <img src="/images/shape/5.png" alt="Images">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End Slide Item -->







                </swiper>
                <!-- Add Arrows -->
                <div class="swiper-button-next">
                    <i class="icofont-rounded-double-right"></i>
                </div>
                <div class="swiper-button-prev">
                    <i class="icofont-rounded-double-left"></i>
                </div>
            </div>
        </div>
        <div class="home-slider-sidebar" data-aos="fade-zoom-in" data-aos-duration="1300" :style="{ backgroundColor: `#19ce67` }">
            <div class="social-icon">
                <a v-bind:href="social.link ? social.link : ''" v-for="social of Configs.Social" :key="social.id"><i :class="social.ikon ? 'icofont-' + social.ikon : 'icofont-share'"></i></a>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        async created() {
        await this.getSlides();
        await this.getConfig();
        },
        data() {
            return {
                swiperOptions: {
                    slidesPerView : 1,
                    loop: true,
                    spaceBetween : 30,
                    autoplay: false,
                    navigation: {
                        nextEl: '.home-slider-container .swiper-button-next',
                        prevEl: '.home-slider-container .swiper-button-prev',
                    }
                },
                Slides: [],
                Configs: [],
                mainUrl: this.$axiosUrl,
                errors: []
            }
        },
    methods: {
      async getSlides() {
        try {
          const response = await this.$axios.get(
            this.$axiosUrl+"slides"
          );
          this.Slides = response.data
        } catch (error) { this.errors.push(error); }
      },
      async getConfig() {
        try {
          const response = await this.$axios.get(
            this.$axiosUrl+"ayarlar"
          );
          this.Configs = response.data
        } catch (error) { this.errors.push(error); }
      }

    },
    filters: {
        getTrust(string) {
            return string.split(' ').join('<br>');
        },
        getImgSrc(str1,str2) {
            return str1.substring(0, str1.length - 1) + str2;
        }
    }
    };
</script>
