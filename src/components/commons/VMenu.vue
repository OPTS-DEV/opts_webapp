<template>
  <div class="nav">
    <el-menu
      :default-active="active"
      class="el-menu-vertical"
      unique-opened
      active-text-color='#29A88D'
      background-color="#272D34"
      text-color="#fff"
      @select="handleSelect">

      <div v-for="(item,i) in menus" :key="i">

        <el-submenu :index="item.menuUrl" v-if="item.childrens">

          <template slot="title">
            <i :class="item.menuIcon"></i>
            <span class="tohide">{{item.title}}</span>
          </template>

          <el-menu-item :index="val.menuUrl" v-for="val in item.childrens" >
            <i :class="val.menuIcon"></i>
            <span slot="title">{{val.title}}</span>
          </el-menu-item>

        </el-submenu>

        <el-menu-item :index="item.menuUrl" v-else>
          <i :class="item.menuIcon"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </div>

    </el-menu>
  </div>
</template>
<script>
  export default {
    name: "VMenu",
    data() {
      return {
        defaultActive: "/main",
        menus: [
          {
            title: "主页",
            menuUrl: "pageindex",
            menuCondition: 1,
            menuIcon: "el-icon-menu"
          },
          {
            title: "社保发送",
            menuUrl: "",
            menuCondition: 2,
            childrens: [
              {
                title: "安徽发送",
                menuUrl: "mocksscsend",
                menuCondition: 1,
                menuIcon: "el-icon-menu"
              },
              {
                title: "上海发送",
                menuUrl: "",
                menuCondition: 2,
                menuIcon: "el-icon-menu"
              }
            ],
            menuIcon: "el-icon-menu"
          },
          {
            title: "文件测试",
            menuUrl: "",
            menuCondition: 3,
            menuIcon: "el-icon-menu"
          }
        ]
      };
    },
    props: {
      active: {
        type: String,
        required: true
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        this.$emit('update:active', key)
        this.$emit('update:title', key)
      }
    }
  }
</script>
<style>
  .nav {

  }

</style>
