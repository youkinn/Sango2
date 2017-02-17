<template>
    <div class="container">
        <app-header-component title="首页"></app-header-component>
        <div class="hotGame section">
            <div class="headerContainer">
                <header-component title="热门游戏" link-text="进入游戏中心" link-url="/personal">
                    </headercomponent>
            </div>
            <slider-component></slider-component>
            <notice-component></notice-component>
            <div class="hr"></div>
            <hot-games-component></hot-games-component>
        </div>

        <!--<div class="sportsGames section">
            <div class="headerContainer">
                <header-component title="玩游戏赢淘豆" link-text="更多" link-url="/personal">
                    </headercomponent>
            </div>
            <div class="sportsGamesContainer">
                <sports-games-component :games="playGames"></sports-games-component>
            </div>
        </div>-->
        <!--<div class="one section">
            <div class="headerContainer">
                <header-component title="1元夺宝">
                    </headercomponent>
            </div>
            <div class="oneContainer">
                <one-component></one-component>
            </div>
        </div>-->
        <div class="hotNews section">
            <div class="headerContainer">
                <header-component title="热门资讯">
                    </headercomponent>
            </div>
            <hot-news-component></hot-news-component>
        </div>
    </div>
    <app-footer-component :index="0"></app-footer-component>
</template>

<script>
    'use strict';
    import AppHeaderComponent from '../../components/layout/header/header.component';
    import AppFooterComponent from '../../components/layout/footer/footer.component';
    import headerComponent from './components/header.component';
    import sliderComponent from './components/slider.component';
    import noticeComponent from './components/notice.component';
    import hotGamesComponent from './components/hotGames.component';
    import sportsGamesComponent from './components/sportsGames.component';
    import oneComponent from './components/one.component';
    import hotNewsComponent from './components/hotNews.component';
    export default {
        components: {
            AppHeaderComponent,
            AppFooterComponent,
            headerComponent,
            sliderComponent,
            noticeComponent,
            hotGamesComponent,
            sportsGamesComponent,
            oneComponent,
            hotNewsComponent
        },
        data() {
            return {
                title: '首页'
            };
        }
    };

</script>

<style lang="scss" scoped>
    .container {
        .section {
            &:not(:last-child) {
                margin-bottom: 30px;
            }
            background-color: #fff;
        }
        .one,
        .sportsGames,
        .hotNews {
            .headerContainer {
                border-top: solid #e5e5e5 1px;/*no*/
                border-bottom: solid #e5e5e5 1px;/*no*/
            }
        }
        .hotGame {
            border-bottom: solid #e5e5e5 1px;/*no*/
            /*px*/
            overflow: hidden;
            .hr {
                width: 610px;
                height: 1px;
                /*px*/
                line-height: 1px;
                /*px*/
                border-top: solid #e5e5e5 1px;/*no*/
                margin-left: 30px;
                color: #e5e5e5;
            }
        }
        .sportsGamesContainer,
        .oneContainer {
            border-bottom: solid #e5e5e5 1px;/*no*/
        }
        .hotNews{
            margin-bottom: 99px;
        }
    }
</style>