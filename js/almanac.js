/*
 * 注意：本程序中的“随机”都是伪随机概念，以当前的天为种子。
 */
function random(dayseed, indexseed) {
	var n = dayseed % 11117;
	for (var i = 0; i < 100 + indexseed; i++) {
		n = n * n;
		n = n % 11117;   // 11117 是个质数
	}
	return n;
}

var today = new Date();
var iday = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

var weeks = ["日","一","二","三","四","五","六"];
var directions = ["北方","东北方","东方","东南方","南方","西南方","西方","西北方"];
var activities = [
	{name:"挖矿", good:"找到秘银和艾德曼",bad:"三步一蠹虫，五步史莱姆", weekend: true},
	{name:"建造", good:"造出史诗级建筑",bad:"从墙头掉下摔死", weekend: true},
	{name:"探索", good:"发现神庙和遗迹",bad:"迷失方向，找不到家", weekend: true},
	{name:"交易", good:"发掘新的绿宝石之神",bad:"换到一箱子指南针", weekend: true},
	{name:"炼药", good:"无事发生",bad:"放错顺序，浪费材料", weekend: true},
	{name:"附魔", good:"5级附魔频出",bad:"全是垃圾附魔", weekend: true},
	{name:"收获", good:"庄稼双倍收获",bad:"打掉旁边未成熟的", weekend: true},
	{name:"狩猎", good:"每只动物都爆三块肉",bad:"碰到狼被围殴", weekend: true},
	{name:"驯猫", good:"一起喵喵喵",bad:"浪费一组鲑鱼", weekend: true},
	{name:"打怪", good:"刀刀烈火",bad:"被领主教做人", weekend: true},
	{name:"骑马", good:"红尘作伴，潇潇洒洒",bad:"会摔下悬崖", weekend: true},
	{name:"出海", good:"发现新的地形",bad:"沉船，被乌贼摸，溺水", weekend: true},
	{name:"砍树", good:"收获好多苹果，lucky",bad:"被木蜘蛛偷袭", weekend: true},
	{name:"整地", good:"挖到一组虫子",bad:"踩到悬空泥土掉入峡谷", weekend: true},
	{name:"地狱探险", good:"发现地狱堡垒",bad:"遭遇地狱轰炸机", weekend: true},
	{name:"去地下世界", good:"挖穿基岩",bad:"被相位蜘蛛袭击", weekend: true},
	{name:"杀猪人", good:"刷到一组金锭",bad:"被跳起的猪人打到", weekend: true},
	{name:"打草种子", good:"打到2组",bad:"刚出门就开始下雨", weekend: true},
	{name:"烤肉", good:"是烤肉的香气啊",bad:"不小心把稿子给烧了", weekend: true},
	{name:"烧矿", good:"终于可以做砧了",bad:"放水把炉火浇灭了", weekend: true},
	{name:"接岩浆", good:"桶都没融化",bad:"桶全融了", weekend: true},
	{name:"种植", good:"种下去回头就成熟",bad:"植物生病一大片", weekend: true}
];

var specials = [
	{date:20190214, type:'bad', name:'待在男（女）友身边', description:'脱团火葬场，入团保平安。'}
];

var tools = ["Java版", "基岩版", "PC版", "网易版", "正版", "盗版", "主机版"];

var varNames = ["jieguo", "huodong", "pay", "expire", "zhangdan", "every", "free", "i1", "a", "virtual", "ad", "spider", "mima", "pass", "ui"];

var drinks = ["棕蘑菇","红蘑菇","蛋糕","苹果","蘑菇煲","小麦种子","面包","生猪排","熟猪排","金苹果","桶装牛奶","鸡蛋","生鱼","熟鱼","糖","曲奇","西瓜","南瓜种子",
"西瓜种子","生牛肉","熟牛肉","生鸡肉","熟鸡肉","腐肉","地狱疣","蜘蛛眼","胡萝卜","马铃薯","烤马铃薯","毒马铃薯","金萝卜","南瓜派","奶碗","生羊肉","熟羊肉","奶酪","面团",
"巧克力","洋葱","牛肉汤","鸡肉汤","蔬菜汤","冰激凌","沙拉","奶油蘑菇汤","奶油蔬菜汤","南瓜汤","橘子","香蕉","土豆泥","水果冰糕","蓝莓","蓝莓粥","麦片粥","生鱼","熟鱼","虫子","熟虫子"];

function is_someday() {
	return today.getMonth() == 5 && today.getDate() == 4;
}

function getTodayString() {
	return "" + today.getFullYear() + "年" + (today.getMonth() + 1) + "月" + today.getDate() + "日 星期" + weeks[today.getDay()];
}

function star(num) {
	var result = "";
	var i = 0;
	while (i < num) {
		result += "★";
		i++;
	}
	while(i < 5) {
		result += "☆";
		i++;
	}
	return result;
} 

// 生成今日运势
function pickTodaysLuck() {
  var _activities = filter(activities);
    
	var numGood = random(iday, 98) % 3 + 2;
	var numBad = random(iday, 87) % 3 + 2;
	var eventArr = pickRandomActivity(_activities, numGood + numBad);
	
	var specialSize = pickSpecials();
	
	for (var i = 0; i < numGood; i++) {
		addToGood(eventArr[i]);
	}
	
	for (var i = 0; i < numBad; i++) {
		addToBad(eventArr[numGood + i]);
	}
}

// 去掉一些不合今日的事件
function filter(activities) {
    var result = [];
    
    // 周末的话，只留下 weekend = true 的事件
    if (isWeekend()) {
        
        for (var i = 0; i < activities.length; i++) {
            if (activities[i].weekend) {
                result.push(activities[i]);
            }
        }
        
        return result;
    }
    
    return activities;
}

function isWeekend() {
    return today.getDay() == 0 || today.getDay() == 6;
}

// 添加预定义事件
function pickSpecials() {
	var specialSize = [0,0];
	
	for (var i = 0; i < specials.length; i++) {
		var special = specials[i];
		
		if (iday == special.date) {
			if (special.type == 'good') {
				specialSize[0]++;
				addToGood({name: special.name, good: special.description});
			} else {
				specialSize[1]++;
				addToBad({name: special.name, bad: special.description});
			}
		}
	}
	
	return specialSize;
}

// 从 activities 中随机挑选 size 个
function pickRandomActivity(activities, size) {
	var picked_events = pickRandom(activities, size);
	
	for (var i = 0; i < picked_events.length; i++) {
		picked_events[i] = parse(picked_events[i]);
	}
	
	return picked_events;
}

// 从数组中随机挑选 size 个
function pickRandom(array, size) {
	var result = [];
	
	for (var i = 0; i < array.length; i++) {
		result.push(array[i]);
	}
	
	for (var j = 0; j < array.length - size; j++) {
		var index = random(iday, j) % result.length;
		result.splice(index, 1);
	}
	
	return result;
}

// 解析占位符并替换成随机内容
function parse(event) {
	var result = {name: event.name, good: event.good, bad: event.bad};  // clone
	
	if (result.name.indexOf('%v') != -1) {
		result.name = result.name.replace('%v', varNames[random(iday, 12) % varNames.length]);
	}
	
	if (result.name.indexOf('%t') != -1) {
		result.name = result.name.replace('%t', tools[random(iday, 11) % tools.length]);
	}
	
	if (result.name.indexOf('%l') != -1) {
		result.name = result.name.replace('%l', (random(iday, 12) % 247 + 30).toString());
	}
	
	return result;
}

// 添加到“宜”
function addToGood(event) {
	$('.good .content ul').append('<li><div class="name">' + event.name + '</div><div class="description">' + event.good + '</div></li>');
}

// 添加到“不宜”
function addToBad(event) {
	$('.bad .content ul').append('<li><div class="name">' + event.name + '</div><div class="description">' + event.bad + '</div></li>');
}

$(function(){
	if (is_someday()) {document.body.className = 'someday'};
	$('.date').html(getTodayString());
	$('.direction_value').html(directions[random(iday, 2) % directions.length]);
	$('.drink_value').html(pickRandom(drinks,3).join('，'));
	$('.goddes_value').html(star(random(iday, 6) % 5 + 1));
	pickTodaysLuck();
});
