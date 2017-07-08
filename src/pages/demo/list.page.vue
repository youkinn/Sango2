<template>
  <div>
    <h3>游戏中心、游戏详情页-相关游戏</h3>
    <ul class="list">
      <router-link tag="li" :to="{name: 'NewsDetail', params: {id: item.id}}" class="list-item" v-for="(item, index) in list" :key="index">
        <list-item :s-image="item.gameIcon" :s-title="item.name" :s-content="item.category" :s-extra="item.abstract" :o-router="{name:'TaoYouGameCenterGameDetails',params:{id:item.id}}" :b-last="index == list.length-1" :n-border-type="1">
          <tm-button slot="one" s-text="进入" :has-action="true" @inline-btn-clicked="tt"></tm-button>
          <span slot="one" class="item__desc"><em>{{item.viewNumber}}</em>人在玩</span>
        </list-item>
      </router-link>
    </ul>
    <br>
    <br>
    <h3>我的游戏</h3>
    <ul class="list">
      <li class="list-item" v-for="(item, index) in myGameList" :key="index">
        <list-item :s-image="item.imgUrl" :s-title="item.gameName" :s-content="item.cDate * 1000 | formatDateToTimeago" :o-router="{name:'TaoYouGameCenterGameDetails', params:{id:item.gameID}}" :b-last="index == myGameList.length-1">
          <tm-button slot="one" s-text="打开" :has-action="true" @inline-btn-clicked="tt"></tm-button>
        </list-item>
      </li>
    </ul>
    <br>
    <br>
    <h3>排行榜</h3>
    <ul class="list">
      <li class="list-item" v-for="(item, index) in rankList" :key="index">
        <list-item :n-index="index+1" :s-image="item.gameIcon" :s-title="item.name" :s-content="item.category" :o-router="{name:'TaoYouGameCenterGameDetails',params:{id:item.id}}" :s-extra="item.abstract" :b-last="index == rankList.length-1">
          <tm-button slot="one" s-text="进入" :has-action="true" @inline-btn-clicked="tt"></tm-button>
          <span slot="one" class="item__desc"><em>{{item.viewNumber}}</em>人在玩</span>
        </list-item>
      </li>
    </ul>
    <br>
    <br>
    <h3>淘豆比赛 任务得淘豆&新手任务、每日任务</h3>
    <list-item :s-image="hotTask.picPath" :s-title="hotTask.title" :s-content="hotTask.content" :b-last="true">
      <tm-button slot="one" s-text="去完成" :has-action="true" @inline-btn-clicked="tt" v-if="hotTask.isComplete==1"></tm-button>
      <tm-button slot="one" s-text="领取" :has-action="true" @inline-btn-clicked="tt" v-if="hotTask.isComplete==2"></tm-button>
      <tm-button slot="one" s-text="已领取" :has-action="true" :b-disabled="true" v-if="hotTask.isComplete==3"></tm-button>
      <span slot="one" class="item__desc">{{hotTask.reward}}</span>
    </list-item>
    <br>
    <br>
    <h3>淘豆比赛 急速场</h3>
    <ul class="list">
      <li class="list-item" v-for="(item, index) in quickGameList" :key="index">
        <list-item :s-image="item.gameIcon" :s-title="item.gameName" :sub-title="item.gameTermId+'期'" :s-extra="'简介:'+item.gameInfo" :o-router="{name:'TaoYouOurGameIntro',params:{id:item.gid},query:{type:item.type}}" :b-last="index == rankList.length-1" :n-border-type="1" :more="true">
          <tm-button slot="one" s-text="参赛" :has-action="true" @inline-btn-clicked="tt"></tm-button>
          <div slot="more">
            <div v-show="item.currentRank !== null" class="bulid-center">
              <span v-show="+item.currentRank !== 0" class="rank">当前排名 <i class="am-ft-red">{{item.currentRank}}</i>名</span>
              <span v-show="+item.currentRank === 0" class="rank">当前排名 未上榜</span>
              <span>预计奖励:{{item.userGet}}淘豆</span>
              <i class="icon icon-arrow-right"></i>
            </div>
            <div v-if="!item.players || !item.players.length" class="rank-info">暂无排名，快来参加得第一赢海量淘豆</div>
          </div>
        </list-item>
      </li>
    </ul>
    <br>
    <br>
    <h3>即将开服</h3>
    <ul class="list">
      <li class="list-item" v-for="(item, index) in unOpenList" :key="index">
        <list-item :s-image="item.gameIcon" :s-title="item.name" :s-content="item.category  + ' | ' + item.serviceName" :s-extra="item.mDate*1000 | formatDate('YYYY-MM-DD HH:mm:ss')" :o-router="{name:'TaoYouGameCenterGameDetails',params:{id:item.gameID}}" :b-last="index == unOpenList.length-1" :n-border-type="1">
          <tm-button slot="one" s-text="进入" :b-disabled="true" @inline-btn-clicked="tt"></tm-button>
        </list-item>
      </li>
    </ul>
    <br>
    <br>
    <h3>已经开服</h3>
    <ul class="list">
      <li class="list-item" v-for="(item, index) in hadData" :key="index">
        <list-item :s-image="item.gameIcon" :s-title="item.name" :s-content="item.category  + ' | ' + item.serviceName" :s-extra="item.mDate*1000 | formatDate('YYYY-MM-DD HH:mm:ss')" :o-router="{name:'TaoYouGameCenterGameDetails',params:{id:item.gameID}}" :b-last="index == hadData.length-1" :n-border-type="1">
          <tm-button slot="one" s-text="进入" :has-action="true" @inline-btn-clicked="tt"></tm-button>
        </list-item>
      </li>
    </ul>
    <br>
    <br>
    <h3>礼包页、游戏详情页-礼包标签页</h3>
    <ul class="list">
      <li class="list-item" v-for="(item, index) in packs" :key="index">
        <list-item :s-image="item.image" :s-title="item.gameName" :s-content="item.name" :s-extra="item.typeName" :o-router="{name:'TaoYouPacksDetails',params:{id:item.id}}" :b-last="index == packs.length-1" :n-border-type="1">
          <circle-progress-component slot="one" :n-progress="(item.totalNumber-item.usedNumber==0)?0:item.usedNumber/item.totalNumber" :b-disabled="(item.uID||item.totalNumber-item.usedNumber==0)?true:false" :s-text="item.uID == 0&&item.taoDou !=0 ? '兑' :item.uID == 0?'领':'已领'"></circle-progress-component>
        </list-item>
      </li>
    </ul>
    <br>
    <br>
    <h3>商城-热门礼包</h3>
    <ul class="list">
      <li class="list-item" v-for="(item, index) in hotGifts" :key="index">
        <list-item :s-image="item.image" :s-title="item.gameName" :s-content="item.name" :s-extra="item.content | removeHtmlTag" :o-router="{name: 'TaoYouPacksDetails', params: {id: item.id}}" :b-last="index == hotGifts.length-1" :n-border-type="1">
          <circle-progress-component slot="one" :n-progress="(item.totalNumber-item.usedNumber==0)?0:item.usedNumber/item.totalNumber" :b-disabled="(item.uID||item.totalNumber-item.usedNumber==0)?true:false" :s-text="item.uID == 0&&item.taoDou !=0 ? '兑' :item.uID == 0?'领':'已领'"></circle-progress-component>
        </list-item>
      </li>
    </ul>
    <br>
    <br>
    <h3>首页-热门礼包</h3>
    <ul class="list">
      <li class="list-item" v-for="(item, index) in hot" :key="index">
        <list-item :s-image="item.image" :s-title="item.gameName" :s-content="item.name" :s-extra="'使用平台：'+item.typeName" :o-router="{name: 'TaoYouPacksDetails', params: {id: item.id}}" :b-last="index == hot.length-1" :n-border-type="1">
          <circle-progress-component slot="one" :n-progress="(item.totalNumber-item.usedNumber==0)?0:item.usedNumber/item.totalNumber" :b-disabled="(item.uID||item.totalNumber-item.usedNumber==0)?true:false" :s-text="item.uID == 0&&item.taoDou !=0 ? '兑' :item.uID == 0?'领':'已领'"></circle-progress-component>
        </list-item>
      </li>
    </ul>
    <br>
    <br>
    <h3>我的礼包</h3>
    <ul class="list">
      <li class="list-item" v-for="(item, index) in myGiftList" :key="index">
        <list-item :s-image="item.image" :s-title="item.name" :s-content="item.name" :s-extra="'兑换码:'+item.no" :o-router="{name: 'TaoYouPacksDetails', params: {id: item.id}}" :b-last="index == myGiftList.length-1" :n-border-type="1">
          <tm-button slot="one" s-text="查看" @inline-btn-clicked="tt"></tm-button>
        </list-item>
      </li>
    </ul>
    <br>
    <br>
    <h3>平台礼包码</h3>
    <ul class="list">
      <li class="list-item" v-for="(item, index) in platformGift" :key="index">
        <list-item :s-image="item.image" :s-title="item.title" :s-content="'兑换码:'+item.code" :s-extra="item.desc" :b-last="index == platformGift.length-1">
          <tm-button slot="one" s-text="已使用" :b-disabled="true" v-if="item.status==3"></tm-button>
          <tm-button slot="one" s-text="使用" :has-action="true" @inline-btn-clicked="tt" v-else></tm-button>
        </list-item>
      </li>
    </ul>
  </div>
</template>
<script>
/* eslint-disable */
import TmButton from '../../components/basic/button/button.component';
import ListItem from '../../components/combine/list-item.component';
export default {
  components: {
    TmButton,
    ListItem
  },
  data(){
    return {
      list: [{ "id": "27669", "name": "三生三世十里桃花", "viewNumber": "15984", "abstract": " 极美仙恋  重温三世凄美情缘", "fileSize": "0", "categoryID": "22", "field": "1", "direction": "1", "category": "动作冒险", "gameIcon": "http://image.lly800.com/goods/20170609/1496994387348925.jpg", "gameUrl": "http://interface.lly800.com/Game/Index/to_game?gid=27669" }, { "id": "27653", "name": "联盟与部落", "viewNumber": "461", "abstract": "撸BOSS，拿神器，千人在线PK！", "fileSize": "0", "categoryID": "23", "field": "1", "direction": "1", "category": "角色扮演", "gameIcon": "http://image.lly800.com/goods/20170321/1490075445457798.jpg", "gameUrl": "http://interface.lly800.com/Game/Index/to_game?gid=27653" }, { "id": "27657", "name": "宠物精灵", "viewNumber": "600", "abstract": "满是情怀 重温童年经典", "fileSize": "0", "categoryID": "23", "field": "1", "direction": "1", "category": "角色扮演", "gameIcon": "http://image.lly800.com/goods/20170414/1492136749355379.jpg", "gameUrl": "http://interface.lly800.com/Game/Index/to_game?gid=27657" }, { "id": "27667", "name": "华丽贪吃蛇", "viewNumber": "422", "abstract": "熟悉的贪吃蛇再度归来", "fileSize": "0", "categoryID": "25", "field": "1", "direction": "1", "category": "休闲养成", "gameIcon": "http://image.lly800.com/goods/20170425/1493088053672070.jpg", "gameUrl": "http://interface.lly800.com/Game/Index/to_game?gid=27667" }, { "id": "1248", "name": "小小地下城", "viewNumber": "1059", "abstract": "轻松好玩的冒险之旅，快来帮小公主找回九大圣物吧！", "fileSize": "0", "categoryID": "25", "field": "1", "direction": "1", "category": "休闲养成", "gameIcon": "http://image.lly800.com/goods/20170307/1488877262489140.jpg", "gameUrl": "http://interface.lly800.com/Game/Index/to_game?gid=1248" }],
      myGameList: [{ "imgUrl": "http://image.lly800.com/goods/20170609/1496995901378509.jpg", "gameName": "口袋妖怪联盟", "intro": "口袋迷们的福音，经典再现《口袋妖怪联盟》你的童年专属回忆杀！", "field": "1", "gameID": "1118", "cDate": "1497194655", "gameUrl": "http://interface.lly800.com/Game/Index/to_game?gid=1118", "downloadUrl": "http://d.hgame.com/hdpt/tuomei/appid/101015/gameid/100273" }, { "imgUrl": "http://image.lly800.com/goods/20170524/1495610752844769.jpg", "gameName": "不服小天王", "intro": "不服？魔性H5游戏等你来挑战！", "field": "1", "gameID": "27665", "cDate": "1496903242", "gameUrl": "http://interface.lly800.com/Game/Index/to_game?gid=27665", "downloadUrl": "http://g.api.uqee.com/rest/partner/htaoyou/bfxtw/1030/enter" }, { "imgUrl": "http://image.lly800.com/goods/20170307/1488877262489140.jpg", "gameName": "小小地下城", "intro": "轻松好玩的冒险之旅，快来帮小公主找回九大圣物吧！", "field": "1", "gameID": "1248", "cDate": "1496732879", "gameUrl": "http://interface.lly800.com/Game/Index/to_game?gid=1248", "downloadUrl": "http://g2.fenha.net/api_taoyou.php" }],
      rankList: [{ "id": "27664", "name": "乾坤霸业", "viewNumber": "2427", "abstract": "《乾坤霸业》登陆送VIP！", "fileSize": "0", "categoryID": "24", "field": "1", "direction": "1", "category": "策略", "gameIcon": "http://image.lly800.com/goods/20170410/1491823394198941.jpg", "gameUrl": "http://interface.lly800.com/Game/Index/to_game?gid=27664" }, { "id": "1248", "name": "小小地下城", "viewNumber": "1060", "abstract": "轻松好玩的冒险之旅，快来帮小公主找回九大圣物吧！", "fileSize": "0", "categoryID": "25", "field": "1", "direction": "1", "category": "休闲养成", "gameIcon": "http://image.lly800.com/goods/20170307/1488877262489140.jpg", "gameUrl": "http://interface.lly800.com/Game/Index/to_game?gid=1248" }, { "id": "27668", "name": "超人守卫2", "viewNumber": "810", "abstract": "超级英雄RPG塔防新玩法 ", "fileSize": "0", "categoryID": "25", "field": "1", "direction": "1", "category": "休闲养成", "gameIcon": "http://image.lly800.com/goods/20170425/1493111475132741.jpg", "gameUrl": "http://interface.lly800.com/Game/Index/to_game?gid=27668" }],
      hotTask: { "id": "6", "title": "首次游戏首次游戏首次游戏", "url": "http://1.lly800.com/#/tao-you/game-center", "content": "第一次进入游戏", "total": 1, "count": 1, "reward": "奖励1000淘豆", "picPath": "http://image.lly800.com/task/20170508/1494240977955861.jpg", "isComplete": "3" },
      quickGameList: [{ "gid": "20", "pid": "11892", "gameName": "小黄人", "gameTermId": "1706122036", "gameType": "H5小游戏", "type": "2", "gameInfo": "是男人就坚持100秒！", "gameIcon": "http://image.lly800.com/webgame/20170121/1484977809711350.jpg", "gameUrl": "tao-game/games/xhrtt?gid=20", "players": [{ "username": "you***", "score": "5720", "taodou": 400, "rank": 1, "timestamp": "2017-06-12 15:47:24" }], "userStatus": 1, "userGet": 400, "currentRank": "1" }, { "gid": "21", "pid": "11893", "gameName": "纸飞机", "gameTermId": "1706122037", "gameType": "H5小游戏", "type": "2", "gameInfo": "看你能飞多远", "gameIcon": "http://image.lly800.com/webgame/20170121/1484978040615769.jpg", "gameUrl": "tao-game/games/zhifeiji?gid=21", "userStatus": 0, "currentRank": null }, { "gid": "22", "pid": "11894", "gameName": "闪客帝国", "gameTermId": "1706122038", "gameType": "H5小游戏", "type": "2", "gameInfo": "据说挑战100分的人只有不到1%", "gameIcon": "http://image.lly800.com/webgame/20170121/1484978112280922.jpg", "gameUrl": "tao-game/games/shankediguo?gid=22", "userStatus": 0, "currentRank": null }],
      unOpenList: [{ "id": "1303", "gameID": "1216", "serviceName": "15区九伐中原", "openTime": "1497495600", "status": "1", "cDate": "1494317630", "mDate": "1494317630", "name": "步战三国", "viewNumber": "806", "abstract": "谈笑间横扫三国战场", "fileSize": "0", "categoryID": "7", "field": "1", "direction": "2", "category": "卡牌", "gameIcon": "http://image.lly800.com/goods/20170220/1487560491349314.jpg", "gameUrl": "http://interface.lly800.com/Game/Index/to_game?gid=1216" }, { "id": "1407", "gameID": "27669", "serviceName": "120区", "openTime": "1497506400", "status": "1", "cDate": "1497002190", "mDate": "1497002190", "name": "三生三世十里桃花", "viewNumber": "16041", "abstract": " 极美仙恋  重温三世凄美情缘", "fileSize": "0", "categoryID": "22", "field": "1", "direction": "1", "category": "动作冒险", "gameIcon": "http://image.lly800.com/goods/20170609/1496994387348925.jpg", "gameUrl": "http://interface.lly800.com/Game/Index/to_game?gid=27669" }, { "id": "1408", "gameID": "27669", "serviceName": "121区", "openTime": "1497542400", "status": "1", "cDate": "1497002208", "mDate": "1497002208", "name": "三生三世十里桃花", "viewNumber": "16041", "abstract": " 极美仙恋  重温三世凄美情缘", "fileSize": "0", "categoryID": "22", "field": "1", "direction": "1", "category": "动作冒险", "gameIcon": "http://image.lly800.com/goods/20170609/1496994387348925.jpg", "gameUrl": "http://interface.lly800.com/Game/Index/to_game?gid=27669" }, { "id": "1419", "gameID": "1239", "serviceName": "56服\t海星星\t", "openTime": "1497578400", "status": "1", "cDate": "1497247316", "mDate": "1497247316", "name": "妖怪宝可萌", "viewNumber": "160", "abstract": "抓宠挂机回合制，上线就送VIP！", "fileSize": "0", "categoryID": "23", "field": "1", "direction": "1", "category": "角色扮演", "gameIcon": "http://image.lly800.com/goods/20170406/1491450529457817.jpg", "gameUrl": "http://interface.lly800.com/Game/Index/to_game?gid=1239" }],
      hadData: [{ "id": "1400", "gameID": "27669", "serviceName": "113区", "openTime": "1497196800", "status": "1", "cDate": "1497002006", "mDate": "1497002006", "name": "三生三世十里桃花", "viewNumber": "16037", "abstract": " 极美仙恋  重温三世凄美情缘", "fileSize": "0", "categoryID": "22", "field": "1", "direction": "1", "category": "动作冒险", "gameIcon": "http://image.lly800.com/goods/20170609/1496994387348925.jpg", "gameUrl": "http://interface.lly800.com/Game/Index/to_game?gid=27669" }, { "id": "1417", "gameID": "1239", "serviceName": "54服\t墨海马", "openTime": "1497232800", "status": "1", "cDate": "1497247267", "mDate": "1497247267", "name": "妖怪宝可萌", "viewNumber": "160", "abstract": "抓宠挂机回合制，上线就送VIP！", "fileSize": "0", "categoryID": "23", "field": "1", "direction": "1", "category": "角色扮演", "gameIcon": "http://image.lly800.com/goods/20170406/1491450529457817.jpg", "gameUrl": "http://interface.lly800.com/Game/Index/to_game?gid=1239" }, { "id": "1401", "gameID": "27669", "serviceName": "114区", "openTime": "1497247200", "status": "1", "cDate": "1497002027", "mDate": "1497002027", "name": "三生三世十里桃花", "viewNumber": "16037", "abstract": " 极美仙恋  重温三世凄美情缘", "fileSize": "0", "categoryID": "22", "field": "1", "direction": "1", "category": "动作冒险", "gameIcon": "http://image.lly800.com/goods/20170609/1496994387348925.jpg", "gameUrl": "http://interface.lly800.com/Game/Index/to_game?gid=27669" }],
      packs: [{ "id": "14079", "name": "口袋怪新手礼包", "isgame": "1", "gameID": "1118", "gameName": "口袋妖怪联盟", "typeID": "9", "taoDou": "0", "content": "<p>金币*100000，高阶水晶*20，进化徽章*20，一转精华*6，二转精华*6</p>", "remark": "<p>使用方法：点击右上角“活动”，进入兑换码界面把礼包码复制到输入框中，点击确认即可。</p>", "weburl": "", "totalNumber": "497", "lastNumber": "472", "usedNumber": "25", "startTime": "1493967352", "endTime": "1525503354", "isPublish": "1", "resourceID": "1", "type": "2", "hot": "1", "rankHot": null, "new": "0", "rankNew": null, "sort": "0", "cDate": "1493967465", "mDate": "1494241679", "sourceName": "拓美", "image": "http://image.lly800.com/goods/20170508/1494241677283099.jpg", "typeName": "H5", "uID": "75438" }, { "id": "14081", "name": "宝可萌新手礼包", "isgame": "1", "gameID": "1239", "gameName": "妖怪宝可萌", "typeID": "9", "taoDou": "0", "content": "<p>礼包内容：</p><p>钻石*100 培养石*100 进化石*100</p><p><br/></p>", "remark": "<p>礼包通用兑换码：ALIPAYXSLB</p><p>直接复制此兑换码即可兑换使用，不用再去领取礼包码。</p><p>使用方式：</p><p>进入游戏 ---&gt; 点左上角人物头像 &nbsp;---&gt; 点【输礼品码】按钮 ---&gt; 在输入框中输入激活码，确认后奖励会直接发放到背包中。</p><p><br/></p>", "weburl": "", "totalNumber": "64", "lastNumber": "58", "usedNumber": "6", "startTime": "1493881836", "endTime": "1525504244", "isPublish": "1", "resourceID": "1", "type": "2", "hot": "1", "rankHot": null, "new": "0", "rankNew": null, "sort": "0", "cDate": "1493968351", "mDate": "1494241707", "sourceName": "拓美", "image": "http://image.lly800.com/goods/20170508/1494241705530275.jpg", "typeName": "H5", "uID": 0 }, { "id": "14085", "name": "步战三国进阶礼包", "isgame": "1", "gameID": "1216", "gameName": "步战三国", "typeID": "9", "taoDou": "0", "content": "<p>元宝*100、铜钱*50000、武魂石*10、黄金宝箱*5<br/></p>", "remark": "<p style=\"white-space: normal;\">进入游戏后</p><p style=\"white-space: normal;\">点击“人物头像”后</p><p style=\"white-space: normal;\">打开“系统设置”里边的“输入兑换码”领取即可获得</p><p><br/></p>", "weburl": "", "totalNumber": "992", "lastNumber": "981", "usedNumber": "11", "startTime": "1493972960", "endTime": "1514708961", "isPublish": "1", "resourceID": "1", "type": "2", "hot": "1", "rankHot": null, "new": "0", "rankNew": null, "sort": "0", "cDate": "1493973076", "mDate": "1494240947", "sourceName": "拓美", "image": "http://image.lly800.com/goods/20170508/1494240944493183.jpg", "typeName": "H5", "uID": 0 }],
      hotGifts: [{ "id": "14079", "name": "口袋怪新手礼包", "isgame": "1", "gameID": "1118", "gameName": "口袋妖怪联盟", "typeID": "9", "taoDou": "0", "content": "<p>金币*100000，高阶水晶*20，进化徽章*20，一转精华*6，二转精华*6</p>", "remark": "<p>使用方法：点击右上角“活动”，进入兑换码界面把礼包码复制到输入框中，点击确认即可。</p>", "weburl": "", "totalNumber": "497", "lastNumber": "472", "usedNumber": "25", "startTime": "1493967352", "endTime": "1525503354", "isPublish": "1", "resourceID": "1", "type": "2", "hot": "1", "rankHot": null, "new": "0", "rankNew": null, "sort": "0", "cDate": "1493967465", "mDate": "1494241679", "sourceName": "拓美", "image": "http://image.lly800.com/goods/20170508/1494241677283099.jpg", "typeName": "H5", "uID": "75438" }],
      hot: [{ "id": "14079", "name": "口袋怪新手礼包", "isgame": "1", "gameID": "1118", "gameName": "口袋妖怪联盟", "typeID": "9", "taoDou": "0", "content": "<p>金币*100000，高阶水晶*20，进化徽章*20，一转精华*6，二转精华*6</p>", "remark": "<p>使用方法：点击右上角“活动”，进入兑换码界面把礼包码复制到输入框中，点击确认即可。</p>", "weburl": "", "totalNumber": "497", "lastNumber": "472", "usedNumber": "25", "startTime": "1493967352", "endTime": "1525503354", "isPublish": "1", "resourceID": "1", "type": "2", "hot": "1", "rankHot": null, "new": "0", "rankNew": null, "sort": "0", "cDate": "1493967465", "mDate": "1494241679", "sourceName": "拓美", "image": "http://image.lly800.com/goods/20170508/1494241677283099.jpg", "typeName": "H5", "uID": "75438" }, { "id": "14081", "name": "宝可萌新手礼包", "isgame": "1", "gameID": "1239", "gameName": "妖怪宝可萌", "typeID": "9", "taoDou": "0", "content": "<p>礼包内容：</p><p>钻石*100 培养石*100 进化石*100</p><p><br/></p>", "remark": "<p>礼包通用兑换码：ALIPAYXSLB</p><p>直接复制此兑换码即可兑换使用，不用再去领取礼包码。</p><p>使用方式：</p><p>进入游戏 ---&gt; 点左上角人物头像 &nbsp;---&gt; 点【输礼品码】按钮 ---&gt; 在输入框中输入激活码，确认后奖励会直接发放到背包中。</p><p><br/></p>", "weburl": "", "totalNumber": "64", "lastNumber": "58", "usedNumber": "6", "startTime": "1493881836", "endTime": "1525504244", "isPublish": "1", "resourceID": "1", "type": "2", "hot": "1", "rankHot": null, "new": "0", "rankNew": null, "sort": "0", "cDate": "1493968351", "mDate": "1494241707", "sourceName": "拓美", "image": "http://image.lly800.com/goods/20170508/1494241705530275.jpg", "typeName": "H5", "uID": 0 }, { "id": "14085", "name": "步战三国进阶礼包", "isgame": "1", "gameID": "1216", "gameName": "步战三国", "typeID": "9", "taoDou": "0", "content": "<p>元宝*100、铜钱*50000、武魂石*10、黄金宝箱*5<br/></p>", "remark": "<p style=\"white-space: normal;\">进入游戏后</p><p style=\"white-space: normal;\">点击“人物头像”后</p><p style=\"white-space: normal;\">打开“系统设置”里边的“输入兑换码”领取即可获得</p><p><br/></p>", "weburl": "", "totalNumber": "992", "lastNumber": "981", "usedNumber": "11", "startTime": "1493972960", "endTime": "1514708961", "isPublish": "1", "resourceID": "1", "type": "2", "hot": "1", "rankHot": null, "new": "0", "rankNew": null, "sort": "0", "cDate": "1493973076", "mDate": "1494240947", "sourceName": "拓美", "image": "http://image.lly800.com/goods/20170508/1494240944493183.jpg", "typeName": "H5", "uID": 0 }],
      myGiftList: [{ "id": "14076", "name": "三生三世加群礼包", "isgame": "1", "gameID": "27669", "gameName": "三生三世十里桃花", "typeID": "9", "taoDou": "0", "content": "<p>强化石*100，玉笛碎片*5，铜镜碎片*5，经脉丹*10，神兽丹*10</p>", "remark": "<p>&nbsp; 加入玩家交流群： 362152141 即可领取</p><p>兑换规则：主界面点击福利大厅——点击激活码——输入激活码——点击兑换</p><p><br/></p><p><br/></p><p><br/></p>", "weburl": "", "totalNumber": "999", "lastNumber": "976", "usedNumber": "23", "startTime": "1493966262", "endTime": "1525502265", "isPublish": "1", "resourceID": "1", "type": "0", "hot": "0", "rankHot": null, "new": "0", "rankNew": null, "sort": "0", "cDate": "1493966276", "mDate": "1495869677", "sourceName": "拓美", "image": "http://image.lly800.com/goods/20170527/1495869672652806.jpg", "typeName": "H5", "no": "00a08ab59c998a50", "uID": 0 }, { "id": "14049", "name": "淘游BOSS礼包", "isgame": "1", "gameID": "1211", "gameName": "超神之刃", "typeID": "9", "taoDou": "0", "content": "<p>钻石*88</p><p>金币*18W</p><p>攻击卷*3</p>", "remark": "<p>使用方法：进入游戏主城-点击右上角箭头-兑换礼包-输入兑换码即可</p>", "weburl": "", "totalNumber": "400", "lastNumber": "340", "usedNumber": "60", "startTime": "1493878333", "endTime": "1546063947", "isPublish": "1", "resourceID": "1", "type": "3", "hot": "0", "rankHot": "0", "new": "0", "rankNew": null, "sort": "0", "cDate": "1493878548", "mDate": "1494240873", "sourceName": "拓美", "image": "http://image.lly800.com/goods/20170508/1494240870635900.jpg", "typeName": "H5", "no": "0uae3vgn", "uID": 0 }, { "id": "14079", "name": "口袋怪新手礼包", "isgame": "1", "gameID": "1118", "gameName": "口袋妖怪联盟", "typeID": "9", "taoDou": "0", "content": "<p>金币*100000，高阶水晶*20，进化徽章*20，一转精华*6，二转精华*6</p>", "remark": "<p>使用方法：点击右上角“活动”，进入兑换码界面把礼包码复制到输入框中，点击确认即可。</p>", "weburl": "", "totalNumber": "497", "lastNumber": "472", "usedNumber": "25", "startTime": "1493967352", "endTime": "1525503354", "isPublish": "1", "resourceID": "1", "type": "2", "hot": "1", "rankHot": null, "new": "0", "rankNew": null, "sort": "0", "cDate": "1493967465", "mDate": "1494241679", "sourceName": "拓美", "image": "http://image.lly800.com/goods/20170508/1494241677283099.jpg", "typeName": "H5", "no": "08200a2m6qj", "uID": 0 }],
      platformGift: [{ "id": "141", "title": "氧气活动测试", "code": "955ba27de8", "desc": "氧气支持", "end": "1497701427", "codeID": "6", "status": "3" }, { "id": "143", "title": "氧气活动测试2", "code": "955ba27de2", "desc": "氧气支持2", "end": "1497701427", "codeID": "6", "status": "2" }]
    };
  },
  methods: {
    tt(){
      console.log('tt');
    }
  }
};
</script>
<style lang="scss" scoped>
h3 {
  padding: 30px;
  font-style: normal;
  font-size: 28px;/*px*/
  color: #333;
}

.list-item {
  background-color: #fff;
}

.item__desc {
  margin-top: 10px;
  padding-left: 8px;
  line-height: 34px;
  max-height: 38px;
  color: #a5a5a5;
  font-size: 24px;
  text-align: left;
  overflow: hidden;
  em {
    color: #fa4a4a;
  }
}
</style>