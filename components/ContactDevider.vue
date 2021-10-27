<template>
    <section class="contact-divider-area" :style="{ backgroundColor: '#f6f7fc' }">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-9 col-lg-8">
                    <div class="contact-divider-content" data-aos="fade-up" data-aos-duration="1100">
                        <div class="section-title">
                            <div class="subtitle-content">
                                <img src="/images/shape/line1.png" alt="shape">
                                <h5>{{Devider.SmallText}}</h5>
                            </div>
                            <h2 class="title">{{Devider.text}} <span class="bottom-style">{{Devider.text2}}</span></h2>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-lg-4 text-left text-md-right">
                    <n-link :to="DeviderBtn.link ? DeviderBtn.link : ''" class="btn btn-theme" data-aos="fade-up" data-aos-duration="1100">{{DeviderBtn.title}} <i class="icon icofont-long-arrow-right"></i></n-link>
                </div>
            </div>
        </div>
        <div class="layer-shape">
            <img class="shape-style1" src="/images/shape/15.png" alt="shape">
        </div>
    </section>
</template>

<script>
    export default {
        async created() {
        await this.getDevider();
        },
        data() {
            return {
                mainUrl: this.$axiosUrl,
                Devider: [],
                DeviderBtn: [],
                errors: []
            }
        },

        methods: {
            async getDevider() {
                
            try {
                const confs = await this.$axios.get(
                this.$axiosUrl+`pages?Slug=${this.$route.params.page}`
                );
                if(confs.data[0].Content != null) {
                    confs.data[0].Content.forEach(elem => {
                    if(elem.__component == "page.contact-divider") {
                        this.Devider = elem
                        this.DeviderBtn = elem.Button
                    }
                });
                }
            } catch (error) { this.errors.push(error); }
            }
        },
    };
</script>