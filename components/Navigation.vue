<template>
    <ul class="main-menu nav justify-content-center">
        <li v-for="menu of Menus" :key="menu.id" v-bind:class="{ 'has-submenu': menu.AltMenu.length }">
            <template v-if="menu.Yayinla">
            <n-link v-bind:to="menu.Link ? menu.Link : ''">{{menu.Baslik}}</n-link>
            <ul class="submenu-nav" v-if="menu.AltMenu.length">
                <li v-for="altmenuinfo of menu.AltMenu" :key="altmenuinfo.id">
                    <n-link v-bind:to="altmenuinfo.link ? altmenuinfo.link : ''">{{altmenuinfo.baslik}}</n-link>
                </li>
            </ul>
            </template>
        </li>
    </ul>
</template>


<script>
  export default {
    async created() {
      await this.getMenus();
    },
    data() {
      return {
        Menus: [],
        errors: []
      };
    },
    methods: {
      async getMenus() {
        try {
          const response = await this.$axios.get(
            this.$axiosUrl+"menus"
          );
          this.Menus = response.data
        } catch (error) {
          this.errors.push(error);
        }
      }
    }
  };
</script>