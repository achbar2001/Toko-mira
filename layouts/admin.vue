<template>
    <div class="c-app">
        <div class="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" id="sidebar">
            <div class="c-sidebar-brand d-lg-down-none">
                <img src="/images/logomira.jpg" class="img-logoadmin" width="60px"> 
                <span class="ml-2 font-weight-bold">ADMIN TOKO MIRA</span>
            </div>

            <!-- sidebar -->
            <Sidebar />
            <!-- end sidebar -->

        </div>
        <div class="c-wrapper c-fixed-components">

            <!-- header -->
            <Header />
            <!-- end header -->

            <div class="c-body">

                <!-- content -->
                <Nuxt />
                <!-- end content -->

                <footer class="c-footer">
                    Copyright © 2024 E-Commerce Toko Mira. All rights reserved.
                </footer>
            </div>
        </div>
    </div>
</template>

<script>

import Header from '@/components/admin/header.vue'
import Sidebar from '@/components/admin/sidebar.vue'

export default {

    //middleware
    middleware: 'isAdmin',

    //register components
    components: {
        Header,
        Sidebar
    }

}
</script>

<style></style>