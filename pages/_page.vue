<template>
    <div class="about-page-wrapper">

        <Header />

        <OffCanvasMobileMenu />

        <HeroSlider v-if="slider" />

        <PageTitle v-if="PageTitle" :title="headTitle" :breadcrumbTitle="headTitle" />

        <FeatureList v-if="FeatureList" />

        <AboutTwo v-if="AboutTwo" />

        <AboutOne v-if="AboutOne" />

        <!--FunFactOne />

        <TeamSection />

        <BrandLogoSection />

        <TestimonialOne /-->
        <ContactWrapper v-if="ContactWrapper" />
        <ContactDevider v-if="ContactDevider" />

        <Footer />

        <client-only>
            <back-to-top class="scroll-top" bottom="30px">
                <i class="arrow-top icofont-rounded-up"></i>
                <i class="arrow-bottom icofont-rounded-up"></i>
            </back-to-top>
        </client-only>

    </div>
</template>

<script>
    export default {
        async created() {
        await this.getDatas();
        },
        data () {
            return {
                headTitle: "",
                PageTitle: false,
                slider: false,
                FeatureList: false,
                AboutOne: false,
                AboutTwo: false,
                ContactWrapper: false,
                ContactDevider: false,
                errors:[]
            }
        },
        methods: {
        async getDatas() {
        try {
            const response = await this.$axios.get(
            this.$axiosUrl+`pages?Slug=${this.$route.params.page}`
          );
          if(response.data[0] != null){
          this.headTitle    = response.data[0].Title;
          response.data[0].Content.forEach(elem => {
              if(elem.__component == "page.slider") { this.slider = elem.Status; }
              if(elem.__component == "page.page-title") { this.PageTitle = elem.Status; }
              if(elem.__component == "page.feature-list-component") { this.FeatureList = elem.status; }
              if(elem.__component == "page.about-two") { this.AboutTwo = elem.status; }
              if(elem.__component == "page.about-one") { this.AboutOne = elem.Status; }
              if(elem.__component == "page.contact-divider") { this.ContactDevider = elem.Status; }
              if(elem.__component == "page.contact") { this.ContactWrapper = elem.Status; }
          });
          }else{ window.location.href = '/anasayfa'; }
        } catch (error) { this.errors.push(error); }
        }
        },
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            HeroSlider: () => import('@/components/HeroSlider'),
            PageTitle: () => import('@/components/PageTitle'),
            FeatureList: () => import('@/components/FeatureList'),
            AboutOne: () => import('@/components/AboutOne'),
            AboutTwo: () => import('@/components/AboutTwo'),
            FunFactOne: () => import('@/components/FunFactOne'),
            TeamSection: () => import('@/components/TeamSection'),
            BrandLogoSection: () => import('@/components/BrandLogoSection'),
            TestimonialOne: () => import('@/components/TestimonialOne'),
            ContactWrapper: () => import('@/components/ContactWrapper'),
            ContactDevider: () => import('@/components/ContactDevider'),
            Footer: () => import('@/components/Footer'),
        },
        head() {
            return {
                title: this.headTitle
            }
        },
    };
</script>


