<template>
    <section class="about-area" v-if="status">
        <div class="position-relative">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-6 offset-xl-0">
                        <div class="layer-about-style" data-aos="fade-up" data-aos-duration="1000">
                            <div class="thumb tilt-animation">
                                <img :src="$options.filters.getImgSrc(mainUrl,MainImage)" alt="image">
                            </div>
                            <div class="shape-style1">
                                <img src="/images/shape/1.png" alt="image">
                            </div>
                            <div class="experience-time">
                                <div class="content">
                                    {{aboutContent.experinceTop}}<sup>{{aboutContent.experinceSup}}</sup>
                                    <div class="line-separetor">
                                        <img src="/images/shape/line-s4.png" alt="image">
                                        <img src="/images/shape/line-s4.png" alt="image">
                                    </div>
                                    <span>{{aboutContent.experinceBottom}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 col-xl-6">
                        <div class="about-content-style2">
                            <div class="section-title" data-aos="fade-up" data-aos-duration="1000">
                                <div class="subtitle-content">
                                    <img src="/images/shape/line1.png" alt="image">
                                    <h5>{{Title}}</h5>
                                </div>
                                <h2 class="title">{{aboutContent.AboutTitle}} <span>{{aboutContent.AboutTitleSecond}}</span></h2>
                                <p>{{aboutContent.AboutUnderTitle}}</p>
                            </div>
                            <div class="inner-content" data-aos="fade-up" data-aos-duration="1200">
                                <p v-html="aboutContent.AboutDescription"></p>
                                <div class="inline-style">
                                    <a :href="aboutContentButton.link" class="btn btn-theme btn-border">
                                        {{aboutContentButton.title}}
                                        <i class="icon icofont-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
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
      await this.getDatas();
    },
    data() {
      return {
        status: false,
        Title: "",
        MainImage: "",
        mainUrl: this.$axiosUrl,
        aboutContent: [],
        aboutContentButton: [],
        errors: []
      };
    },
    methods: {
      async getDatas() {
        try {
            const response = await this.$axios.get(
            this.$axiosUrl+`pages?Slug=${this.$route.params.page}`
          );
          if(response.data[0] != null){
          this.Title = response.data[0].Title;
          let pageDetails = response.data[0].Content.filter(function(elem){ if(elem.__component == "page.about-two") return elem; })[0];
          this.status = pageDetails.status;
          this.aboutContent =  pageDetails;
          this.MainImage = pageDetails.mainImage.url;
          this.aboutContentButton = pageDetails.experinceButton;
          }else{
              //window.location.href = '/';
          }
          
        } catch (error) {
          this.errors.push(error);
        }
      }
    },
        filters: {
        getImgSrc(str1,str2) {
            return str1.substring(0, str1.length - 1) + str2;
        }
        }
  };
</script>