<template>
    <section class="feature-area feature-about-area">
        <div class="container">
            <div class="row feature-list" data-aos="fade-up" data-aos-duration="1000">
                <div class="col-lg-4" v-for="(feature, index) in features" :key="index">
                    <div class="feature-list-item">
                        <div class="icon">
                            <img class="img-icon" :src="$options.filters.getImgSrc(mainUrl,feature.icon.url)" :alt="feature.title">
                        </div> 
                        {{ feature.title }}
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
                mainUrl: this.$axiosUrl,
                features: [],
                errors: []
            }
        },
        methods: {
        async getDatas() {
        try {
            const response = await this.$axios.get(
            this.$axiosUrl+`pages?Slug=${this.$route.params.page}`
          );
          if(response.data[0] != null){
          let pageDetails = response.data[0].Content.filter(function(elem){ if(elem.__component == "page.feature-list-component") return elem; })[0];
          this.features = pageDetails.Feature;
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