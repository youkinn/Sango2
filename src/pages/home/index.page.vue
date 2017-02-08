<template>
    <h3 @click="logout">index</h3>
    <div class="selector">
        <div class="selector1 flex">
            <div class="selector2">
                
            </div>
        </div>
    </div>
</template>

<script>
    'use strict';
    import { updateDialogState } from '../../vuex/actions';
    export default {
        vuex: {
            actions: {
                updateDialogState
            }
        },
        components: {
        },
        data() {
            return {
                title: 'index'
            };
        },
        methods: {
            logout(){
                Vue.ClientHttp(this).POST({}, '/api/logout')
                    .then((res) => {
                        if (res.code == 10000) {
                            alert(res.msg);
                        }
                    });
            }
        }
    };

</script>

<style lang="scss" scoped>
    .selector {
        display: flex;
        .selector1 {
            .selector2 {
                width: 2rem;
                height: 1rem;
                font-size: 30px;
                /*px*/
                border: solid #ddd 1px;
            }
        }
    }
</style>