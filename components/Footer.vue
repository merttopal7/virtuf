<template>
    <footer class="footer-area bg-img-cover" :style="{ backgroundImage: `url('/images/photos/bg-footer.jpg')` }">
        <div class="footer-top" data-aos="fade-up" data-aos-duration="1000">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="contact-info-content">
                            <div class="contact-info-item">
                                <div class="icon">
                                    <img class="icon-img" src="/images/icons/c1.png" alt="Icon">
                                </div>
                                <div class="content">
                                    <h4>Bizi Arayın.</h4>
                                    <img class="line-icon" src="/images/shape/line-s1.png" alt="Icon">
                                    <a :href="`tel://${tel.text}`" v-for="tel in Configs.Telephone" :key="tel.id">{{tel.text}}</a>
                                </div>
                            </div>
                            <div class="contact-info-item">
                                <div class="icon">
                                    <img class="icon-img" src="/images/icons/c2.png" alt="Icon">
                                </div>
                                <div class="content">
                                    <h4>Email.</h4>
                                    <img class="line-icon" src="/images/shape/line-s1.png" alt="Icon">
                                    <a :href="`mailto://${mail.text}`" v-for="mail in Configs.mail" :key="mail.id">{{mail.text}}</a>
                                </div>
                            </div>
                            <div class="contact-info-item">
                                <div class="icon">
                                    <img class="icon-img" src="/images/icons/c3.png" alt="Icon">
                                </div>
                                <div class="content">
                                    <h4>Adres.</h4>
                                    <img class="line-icon" src="/images/shape/line-s1.png" alt="Icon">
                                    <p v-html="Configs.adres"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" data-aos="fade-up" data-aos-duration="1000">
            <div class="row">
                <div class="col-md-9 col-lg-8 col-xl-8">
                    <div class="widget-item mt-0">
                        <div class="about-widget">
                            <n-link to="/" class="footer-logo">
                                <img :src="$options.filters.getImgSrc(mainUrl,siteLogoLightUrl)" alt="Logo">
                            </n-link>
                            <p>{{Configs.SiteAciklamasi}}</p>
                            <div class="widget-newsletter">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 col-lg-4 col-xl-4">
                    <div class="widget-item menu-wrap-two-column">
                        <h4 class="widget-title">Menü</h4>
                        <img class="line-shape" src="/images/shape/line-s1.png" alt="shape">
                        <nav class="widget-menu-wrap">
                            <div class="row">
                                <div class="col-md-12">
                                    <ul class="nav-menu nav">
                                        <li v-for="lnk in FooterMenu" :key="lnk.id"><n-link :to="lnk.Link ? lnk.Link : ''">{{lnk.Baslik}}</n-link></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="footer-bottom-content">
                    <div class="row align-items-center">
                        <div class="col-md-6 order-2 order-md-1">
                            <div class="widget-copyright">
                                <p>© {{year}} <span>{{Configs.SiteTitle}}</span></p>
                            </div>
                        </div>
                        <div class="col-md-6 order-1 order-md-2">
                            <div class="widget-social-icons">
                                <a v-bind:href="social.link ? social.link : ''" v-for="social of Configs.Social" :key="social.id"><i :class="social.ikon ? 'icofont-' + social.ikon : 'icofont-share'"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default { 
        async created() {
        await this.getConfig();
        this.year = new Date().getFullYear(); // vue get current year
        },
        data() {
            return {
                mainUrl: this.$axiosUrl,
                Configs: [],
                year: "",
                FooterMenu: [],
                errors: [],
                siteLogoLightUrl: ""
            }
        },

        methods: {
            async getConfig() {
            try {
            const confs = await this.$axios.get( this.$axiosUrl+"ayarlar" );
            this.Configs = confs.data
            this.FooterMenu = confs.data.FooterLinks.menus;
            this.siteLogoLightUrl = confs.data.SiteLogo.url
            } catch (error) { this.errors.push(error); }
            }
        },
        filters: {
        getImgSrc(str1,str2) {
            return str1.substring(0, str1.length - 1) + str2;
        }
        }
    };
</script>
