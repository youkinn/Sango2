<template>
    <div class="container">
        <div class="hotGame section">
            <div class="headerContainer">
                <header-component title="热门游戏" link-text="进入游戏中心" link-url="/personal">
                    </headercomponent>
            </div>
            <slider-component></slider-component>
            <notice-component :notices="noticeList"></notice-component>
            <div class="hr"></div>
            <hot-games-component :games="hotGames"></hot-games-component>
        </div>

        <div class="sportsGames section">
            <div class="headerContainer">
                <header-component title="玩游戏赢淘豆" link-text="更多" link-url="/personal">
                    </headercomponent>
            </div>
            <div class="sportsGamesContainer">
                <sports-games-component :games="playGames"></sports-games-component>
            </div>
            
        </div>
        <div class="one section">
            <div class="headerContainer">
                <header-component title="1元夺宝">
                    </headercomponent>
            </div>
            <div class="oneContainer">
                <one-component></one-component>
            </div>
        </div>
        <div class="hotNews section">
            <div class="headerContainer">
                <header-component title="热门资讯">
                    </headercomponent>
            </div>
        </div>
    </div>

</template>

<script>
    'use strict';
    import headerComponent from './components/header.component';
    import sliderComponent from './components/slider.component';
    import noticeComponent from './components/notice.component';
    import hotGamesComponent from './components/hotGames.component';
    import sportsGamesComponent from './components/sportsGames.component';
    import oneComponent from './components/one.component';
    export default {
        components: {
            headerComponent,
            sliderComponent,
            noticeComponent,
            hotGamesComponent,
            sportsGamesComponent,
            oneComponent
        },
        data() {
            return {
                title: 'index',
                noticeList: [
                    {
                        content: '大迷糊**刚刚领取了倩女幽魂新春礼包/参与.......',
                        linkUrl: ''
                    },
                    {
                        content: '大迷糊**刚刚领取了倩女幽魂新春礼包/参与2.......',
                        linkUrl: ''
                    }
                ],
                hotGames: [
                    {
                        id: '1150',
                        name: '传奇世界H5',
                        imgUrl: 'http://dummyimage.com/162x162',
                        type: '1'
                    },
                    {
                        id: '1150',
                        name: '幻城',
                        imgUrl: 'http://dummyimage.com/162x162',
                        type: '1'
                    },
                    {
                        id: '1150',
                        name: '大侠归来',
                        imgUrl: 'http://dummyimage.com/162x162',
                        type: '1'
                    },
                    {
                        id: '1150',
                        name: '口袋妖怪联盟',
                        imgUrl: 'http://dummyimage.com/162x162',
                        type: '1'
                    },
                    {
                        id: '1150',
                        name: '啪啪三国',
                        imgUrl: 'http://dummyimage.com/162x162',
                        type: '2'
                    },
                    {
                        id: '1150',
                        name: '不思议迷宫',
                        imgUrl: 'http://dummyimage.com/162x162',
                        type: '2'
                    },
                    {
                        id: '1150',
                        name: '愚公移山3',
                        imgUrl: 'http://dummyimage.com/162x162',
                        type: '2'
                    },
                    {
                        id: '1150',
                        name: '全民穿越之宫',
                        imgUrl: 'http://dummyimage.com/162x162',
                        type: '2'
                    }
                ]
            };
        },
        methods: {
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
                border-top: solid #e5e5e5 1px;
                /*px*/
                border-bottom: solid #e5e5e5 1px;
                /*px*/
            }
        }
        .hotGame {
            border-bottom: solid #e5e5e5 1px;
            /*px*/
            overflow: hidden;
            .hr {
                width: 610px;
                height: 1px;
                /*px*/
                line-height: 1px;
                /*px*/
                border-top: solid #e5e5e5 1px;
                margin-left: 30px;
                color: #e5e5e5;
            }
        }
        .sportsGamesContainer,
        .oneContainer{
            border-bottom: solid #e5e5e5 1px;
        }
    }
</style>