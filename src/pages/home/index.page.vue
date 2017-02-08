<template>
    <h3 @click="clickH">index</h3>
    <div class="selector">
        <div class="selector1">
            <div class="selector2"></div>
        </div>
    </div>
</template>

<script>
    'use strict';
    export default {
      data(){
        return {
          title: 'index'
        };
      },
      methods:{
        clickH(){
          // console.log('test');
        }
      }
    };
</script>

<style lang="scss" scoped>
    .selector {
        .selector1{
            .selector2{
                width: 2rem;
                height: 1rem;
                font-size: 30px; /*px*/
                border: solid #ddd 1px;
            }
        }

    }
</style>
