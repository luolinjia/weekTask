<template>
    <div>
        <div>Hello world!</div>
        <div>This is a menu router</div>
        <ul>
            <li><router-link to="/login">login</router-link></li>
            <li><router-link to="/dashboard">dashboard</router-link></li>
            <router-view></router-view>
        </ul>
    </div>
</template>

<style>
    body {

    }
</style>