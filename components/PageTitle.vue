<template>
    <section class="page-title-area" :style="{ backgroundImage: `url('/images/photos/bg-page-title.jpg')` }">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="page-title-content">
                        <h2 class="title text-white">{{ title }}</h2>
                        <div class="bread-crumbs"><img class="line-shape" src="/images/shape/line-s3.png" alt="shape">
                            <n-link to="/"> Home <span class="breadcrumb-sep">/</span></n-link>
                            <span class="active">{{ breadcrumbTitle }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-sidebar" data-aos="fade-right" data-aos-duration="1100">
            <div class="social-icon">
                <a v-bind:href="social.link ? social.link : ''" v-for="social of Configs.Social" :key="social.id"><i :class="social.ikon ? 'icofont-' + social.ikon : 'icofont-share'"></i></a>
            </div>
        </div>
        <div class="layer-shape">
            <img class="layer-shape-one" src="/images/shape/1.png" alt="shape">
            <img class="layer-shape-two" src="/images/shape/4.png" alt="shape">
            <img class="layer-shape-three" src="/images/shape/5.png" alt="shape">
            <img class="layer-shape-four" src="/images/shape/3.png" alt="shape">
        </div>
    </section>
</template>

<script>
    export default {
        props: ['title', 'breadcrumbTitle'],
        async created() {
        await this.getConfig();
        },
        data() {
            return {
                mainUrl: this.$axiosUrl,
                Configs: [],
                errors: []
            }
        },

        methods: {
            async getConfig() {
            try {
            const confs = await this.$axios.get( this.$axiosUrl+"ayarlar" );
            this.Configs = confs.data
            } catch (error) { this.errors.push(error); }
            }
        },
    };
</script>