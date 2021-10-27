<template>
    <section class="contact-area">
        <div class="contact-info-light" data-aos="fade-up" data-aos-duration="1000"  :style="{ display: 'none' }">
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
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="contact-colunm" data-aos="fade-up" data-aos-duration="1000">
                        <div class="contact-map-area">
                            <iframe :src="Mapframe"></iframe>
                        </div>
                        <div class="contact-form">
                            <form class="contact-form-wrapper" v-on:submit.prevent="sendMail">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="section-title">
                                            <div class="subtitle-content">
                                                <img src="/images/shape/line-s4.png" alt="shape">
                                                <h5 class="text-light">İletişime geçin.</h5>
                                            </div>
                                            <h2 class="title text-light">Mesaj <span>Bırakın.</span></h2>
                                            <div class="separator-line">
                                                <img src="/images/shape/line-s4.png" alt="shape">
                                                <img src="/images/shape/line-s4.png" alt="shape">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <input class="form-control" type="text" name="con_name" placeholder="İsim Soyisim">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <input class="form-control" type="email" name="con_email" placeholder="Email Adresi">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <input class="form-control" type="text" name="con_phone" placeholder="Telefon Numarası">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group mb-0">
                                            <textarea name="con_message" placeholder="Mesaj"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="form-group mb-0">
                                            <button class="btn btn-theme" type="submit">Gönder <i class="icofont-long-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        async created() {
        await this.getConfig();
        },
        data() {
            return {
                mainUrl: this.$axiosUrl,
                Configs: [],
                Mapframe: "",
                errors: []
            }
        },

        methods: {
            async getConfig() {
            try {
            const confs     = await this.$axios.get( this.$axiosUrl + "ayarlar" );
            this.Configs    = confs.data
            this.Mapframe   = confs.data.map
            } catch (error) { this.errors.push(error); }
            },
            async sendMail () {
                await this.$axios.post( this.$axiosUrl + "mail/mail.php" , {
                    name: 'Test',
                    mail: 'test@mail.com',
                    subject: 'Subject',
                    message: 'Test message'
                });
            }
        },
    };
</script>

<style lang="scss" scoped>

</style>