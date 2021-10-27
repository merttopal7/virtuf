<template>
    <section class="about-area about-default-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 md-text-center">
                    <div class="layer-style" data-aos="fade-up" data-aos-duration="1000">
                        <div class="thumb tilt-animation">
                            <img :src="$options.filters.getImgSrc(mainUrl,MainImage)" alt="Images">
                        </div>
                        <div class="shape-style1">
                            <img src="/images/shape/circle-line1.png" alt="Images">
                        </div>
                        <ShapeWithAnimation addClassName="shape-style2" imgSrc="/images/shape/circle-shape1.png" data-depth=".6" />
                        <div class="experience-time">
                            <div class="content">{{aboutContent.experienceTop}}<sup>{{aboutContent.experienceSup}}</sup> <span>{{aboutContent.experienceBottom}}</span></div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 offset-lg-1">
                    <div class="about-content">
                        <div class="section-title xs-text-center" data-aos="fade-up" data-aos-duration="1000">
                            <h2 class="title">{{aboutContent.Title}} <span class="bottom-style">{{aboutContent.TitleSecond}}</span></h2>
                            <div class="desc">
                                <p class="mt-20">{{aboutContent.description}}</p>
                            </div>
                        </div>
                        <div class="list-icon-style" data-aos="fade-up" data-aos-duration="1200">
                            <ul>
                                <li v-for="item in aboutContent.Items" :key="item.id"><i :class="item.icon"></i> {{item.text}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        components: {
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
        },
        async created() {
      await this.getDatas();
        },
        data() {
      return {
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
          let pageDetails = response.data[0].Content.filter(function(elem){ if(elem.__component == "page.about-one") return elem; })[0];
          this.aboutContent =  pageDetails;
          this.MainImage = pageDetails.image.url;
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