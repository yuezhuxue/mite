initRecipes = function() {
    createRecipeList([
        {
            'name':'腐肉 &rarr; 皮革',
            'output':'item_leather',
            'items':[
                '','','',
                '','item_rottenflesh','',
                '','',''
            ],
            'keywords': '腐肉 皮革'
        },
        {
            'name':'小麦种子 &rarr; 面团',
            'output':'item_dough',
            'items':[
                'item_seeds','item_seeds','item_seeds',
                'item_seeds','item_seeds','item_seeds',
                'item_seeds','item_seeds','item_seeds'
            ],
            'keywords': '小麦种子 草 面团'
        }
        ,
        {
            'name':'小麦种子 &rarr; 毒马铃薯',
            'output':'item_poisonouspotato',
            'items':[
                '','','',
                '','item_seeds','item_seeds',
                '','item_seeds','item_seeds'
            ],
            'keywords': '小麦种子 毒马铃薯 毒土豆 土豆'
        },
        {
            'name':'树叶 &rarr; 苹果',
            'output':'item_apple',
            'items':[
                '','','',
                '','item_birchleaves','item_birchleaves',
                '','item_birchleaves','item_birchleaves'
            ],
            'keywords': '树叶 苹果'
        },
        {
            'name':'肥料 &rarr; 小汉堡（管饱）',
            'output':'item_eight_hamburger',
            'items':[
                'item_manure','item_manure','item_manure',
                'item_manure','item_manure','item_manure',
                'item_manure','item_manure','item_manure'
            ],
            'keywords': '肥料 小汉堡 粪便'
        }
        ,
        {
            'name':'木棍 &rarr; 纸',
            'output':'item_paper',
            'items':[
                '','','',
                '','','',
                'item_stick','item_stick','item_stick'
            ],
            'keywords': '木棍 纸'
        },
        {
            'name':'所有金属粒都可以做金苹果',
            'output':'item_goldenapple',
            'items':[
                'item_coppernugget','item_coppernugget','item_coppernugget',
                'item_coppernugget','item_apple','item_coppernugget',
                'item_coppernugget','item_coppernugget','item_coppernugget'
            ],
            'keywords': '金 银 铜 铁 秘银 艾德曼 振金 苹果'
        },
        {
            'name':'所有花都可以做沙拉',
            'output':'item_salad',
            'items':[
                '','','',
                '','item_rosebush','item_rosebush',
                '','item_bowl','item_rosebush'
            ],
            'keywords': '花 玫瑰 菊花'
        },
        {
            'name':'符文石可以互相转换',
            'output':'item_mithrilrunestone',
            'items':[
                '','','',
                '','item_mithrilrunestone','',
                '','',''
            ],
            'keywords': '符文石 秘银 艾德曼'
        }
        ,
        {
            'name':'腐肉汤（回血）',
            'output':'item_rabbitstew',
            'items':[
                '','','',
                '','item_rottenflesh','item_spidereye',
                '','item_poisonouspotato','item_bonemeal'
            ],
            'keywords': '腐肉 毒马铃薯 蜘蛛眼 骨粉'
        },
        {
            'name':'所有金属矿 &rarr; 矿物袋',
            'output':'item_ironorebag',
            'items':[
                '','','',
                '','item_ironore','item_ironore',
                '','item_ironore','item_ironore'
            ],
            'keywords': '金 银 铜 铁 秘银 艾德曼 矿'
        },
        {
            'name':'所有金属矿 &rarr; 矿物袋',
            'output':'item_ironorebag',
            'outamt': '2',
            'items':[
                'item_ironore','item_ironore','',
                'item_ironore','item_ironore','item_ironore',
                'item_ironore','item_ironore','item_ironore'
            ],
            'keywords': '金 银 铜 铁 秘银 艾德曼 矿'
        },
        {
            'name':'矿物袋 &rarr; 金属矿',
            'output':'item_ironore',
            'outamt': '4',
            'items':[
                '','','',
                '','item_ironorebag','',
                '','',''
            ],
            'keywords': '金 银 铜 铁 秘银 艾德曼 矿'
        },
        {
            'name':'矿物袋 &rarr; 金属矿',
            'output':'item_ironore',
            'outamt': '36',
            'items':[
                'item_ironorebag','item_ironorebag','item_ironorebag',
                'item_ironorebag','item_ironorebag','item_ironorebag',
                'item_ironorebag','item_ironorebag','item_ironorebag'
            ],
            'keywords': '金 银 铜 铁 秘银 艾德曼 矿'
        },
        {
            'name':'黑曜石棒 &rarr; 黑曜石',
            'output':'item_obsidian',
            'outamt': '2',
            'items':[
                '','','',
                '','item_obsidianstick','',
                '','',''
            ],
            'keywords': '黑曜石棒 黑曜石'
        },
        {
            'name':' &rarr; 一捆火把',
            'output':'item_stacktorch',
            'items':[
                '','','',
                '','item_coal','item_coal',
                '','item_acaciawood','item_string'
            ],
            'keywords': '原木 绳 皮革 煤炭  木炭'
        },
        {
            'name':' &rarr; 一捆火把',
            'output':'item_stacktorch',
            'items':[
                '','','',
                '','item_charcoal','item_charcoal',
                '','item_acaciawood','item_string'
            ],
            'keywords': '原木 绳 皮革 煤炭  木炭'
        },
        {
            'name':' &rarr; 一捆火把',
            'output':'item_stacktorch',
            'items':[
                '','','',
                '','item_coal','item_coal',
                '','item_acaciawood','item_sinew'
            ],
            'keywords': '原木 绳 皮革 煤炭 木'
        },
        {
            'name':'一捆火把 &rarr; 火把',
            'output':'item_torch',
            'outamt': '16',
            'items':[
                '','','',
                '','item_stacktorch','',
                '','',''
            ],
            'keywords': '火把'
        },
        {
            'name':'火把 &rarr; 火把堆',
            'output':'item_stacktorchon',
            'items':[
                '','','',
                '','item_torch','item_torch',
                '','item_torch','item_torch'
            ],
            'keywords': '火把'
        },
        {
            'name':'火把 &rarr; 火把堆',
            'output':'item_stacktorchon',
            'outamt': '2',
            'items':[
                'item_torch','item_torch','',
                'item_torch','item_torch','item_torch',
                'item_torch','item_torch','item_torch'
            ],
            'keywords': '火把 堆'
        },
        {
            'name':'火把堆 &rarr; 一捆火把',
            'output':'item_stacktorch',
            'items':[
                '','','',
                '','item_stacktorchon','item_stacktorchon',
                '','item_stacktorchon','item_stacktorchon'
            ],
            'keywords': '火把'
        },
        {
            'name':'火把堆 &rarr; 火把',
            'output':'item_torch',
            'outamt': '4',
            'items':[
                '','','',
                '','item_stacktorchon','',
                '','',''
            ],
            'keywords': '火把'
        },
        {
            'name':'原木 &rarr; 木柴堆',
            'output':'item_stacklog',
            'items':[
                '','','',
                '','item_acaciawood','item_acaciawood',
                '','item_acaciawood','item_acaciawood'
            ],
            'keywords': '原木 木柴堆'
        },
        {
            'name':'木柴堆 &rarr; 原木',
            'output':'item_acaciawood',
            'outamt': '4',
            'items':[
                '','','',
                '','item_stacklog','',
                '','',''
            ],
            'keywords': '原木 木柴堆'
        },
        {
            'name':'任意花+僵尸脑子 &rarr; 三尸脑神丹',
            'output':'item_zombiedrug',
            'items':[
                '','','',
                '','item_zombiebrain','item_zombiebrain',
                '','item_zombiebrain','item_rosebush'
            ],
            'keywords': '三尸脑神丹 花'
        },
        {
            'name':'苦力宝宝 &rarr; 苦力之魂',
            'output':'item_creepersoul',
            'items':[
                '','','',
                '','item_creeperbaby','item_creeperbaby',
                '','item_creeperbaby','item_creeperbaby'
            ],
            'keywords': '苦力怕 宝宝 魂 苦力'
        },
        {
            'name':'羊毛 &rarr; 线',
            'output':'item_string',
            'outamt': '4',
            'items':[
                '','','',
                '','item_whitewool','',
                '','',''
            ],
            'keywords': '羊毛 线'
        },
        {
            'name':'石粒 &rarr; 圆石',
            'output':'item_cobblestone',
            'items':[
                '','','',
                '','item_stones','',
                '','',''
            ],
            'keywords': '石粒 圆石 石头'
        },
        {
            'name':'蓝宝石 &rarr; 灵石',
            'output':'item_gotcha',
            'outamt': '64',
            'items':[
                '','','',
                '','item_gem_blue','',
                '','',''
            ],
            'keywords': '蓝宝石 灵石'
        },
        {
            'name':'七种花 &rarr; 辟谷丹x64',
            'output':'item_drug_bg',
            'outamt': '64',
            'items':[
                'item_flower1','item_flower2','item_flower3',
                'item_flower4','item_ironnugget','item_flower5',
                'item_flower6','item_redstone','item_flower7'
            ],
            'keywords': '红石 花 铁粒'
        },
        {
            'name':'单种花 &rarr; 辟谷丹x1',
            'output':'item_drug_bg',
            'items':[
                'item_flower1','item_flower1','item_flower1',
                'item_flower1','item_ironnugget','item_flower1',
                'item_flower1','item_redstone','item_flower1'
            ],
            'keywords': '红石 花 铁粒'
        },
        {
            'name':' &rarr; 筑基丹',
            'output':'item_drug_zj',
            'outamt': '2',
            'items':[
                '','','',
                '','item_emerald','item_emerald',
                '','item_egg','item_flower7'
            ],
            'keywords': '筑基丹'
        },
        {
            'name':' &rarr; 史莱姆沙',
            'output':'item_slimesand',
            'outamt': '8',
            'items':[
                'item_sand','item_sand','item_sand',
                'item_sand','item_slimeball','item_sand',
                'item_sand','item_sand','item_sand'
            ],
            'keywords': '沙子 粘液球 史莱姆 史莱姆沙'
        },
        {
            'name':'远古金属镐+灵石 &rarr; 古宝镐',
            'output':'item_a_pickaxe',
            'items':[
                'item_gotcha','item_gotcha','item_gotcha',
                'item_gotcha','item_ironpickaxe','item_gotcha',
                'item_gotcha','item_gotcha','item_gotcha'
            ],
            'keywords': '镐 灵石'
        },
        {
            'name':'所有金属粒  &rarr; 打火石',
            'output':'item_flintandsteel',
            'items':[
                'item_coppernugget','','',
                '','item_flint','',
                '','',''
            ],
            'keywords': '打火石 金属粒'
        },
        {
            'name':'西红柿  &rarr; 西红柿炒鸡蛋',
            'output':'item_tomato_omelette',
            'items':[
                '','','',
                '','item_tomato','item_egg',
                '','',''
            ],
            'keywords': '西红柿 番茄 鸡蛋'
        },
        {
            'name':'  &rarr; 西红柿扦枝',
            'output':'item_tomato_picked',
            'items':[
                'item_tomato','item_manure','',
                'item_bonemeal','item_dirt','',
                '','',''
            ],
            'keywords': '西红柿 肥料 骨粉 泥土'
        },
        {
            'name':'古宝镐  &rarr; 新宝镐（类推',
            'output':'item_b_pickaxe',
            'items':[
                'item_guilt1','item_blockoldmetal','item_guilt7',
                'item_guilt2','item_a_pickaxe','item_guilt6',
                'item_guilt3','item_guilt4','item_guilt5'
            ],
            'keywords': ''
        },
        {
            'name':'  &rarr; 地精工具台',
            'output':'item_coppertoolbench',
            'items':[
                'item_mitega','item_leather','',
                'item_stick','item_oakwoodplanks','',
                '','',''
            ],
            'keywords': '木棍 皮革 地精锭 工具台 木板'
        },
        {
            'name':'  &rarr; 地精镐',
            'output':'item_ga_pickaxe',
            'items':[
                'item_mitega','item_mitega','item_mitega',
                '','item_blazerod','',
                '','item_blazerod',''
            ],
            'keywords': '地精锭 烈焰棒'
        },
        {
            'name':'  &rarr; 材料其三',
            'output':'item_guilt3',
            'items':[
                'item_blockofgold','item_blockofgold','',
                'item_blockofgold','item_blockofgold','',
                '','',''
            ],
            'keywords': '材料'
        },
        {
            'name':'  &rarr; 材料其三',
            'output':'item_guilt3',
            'items':[
                'item_blockofemerald','item_blockofemerald','',
                'item_blockofemerald','item_blockofemerald','',
                '','',''
            ],
            'keywords': ''
        },
        {
            'name':'金胡萝卜  &rarr;  三尸脑神丹x3',
            'output':'item_zombiedrug',
            'outamt': '3',
            'items':[
                '','','',
                '','item_zombiebrain','item_zombiebrain',
                '','item_zombiebrain','item_goldencarrot'
            ],
            'keywords': '三尸脑神丹 花'
        },
        {
            'name':'松脆蜘蛛腿  &rarr;  油炸冻蛛腿（暂定）',
            'output':'item_spider_leg_b',
            'outamt': '6',
            'items':[
                'item_spider_leg','','item_spider_leg',
                'item_spider_leg','item_snowball','item_spider_leg',
                'item_spider_leg','item_bakedpotato','item_spider_leg'
            ],
            'keywords': '土豆 雪球 蜘蛛 腿'
        },
        {
            'name':'皮革  &rarr;  一捆皮革',
            'output':'item_stack_leather',
            'items':[
                'item_leather','item_leather','item_leather',
                'item_leather','item_sinew','item_leather',
                'item_leather','item_leather','item_leather'
            ],
            'keywords': '皮革 线 绳'
        },
        {
            'name':'皮革  &rarr;  一捆皮革',
            'output':'item_stack_leather',
            'items':[
                'item_leather','item_leather','item_leather',
                'item_leather','item_string','item_leather',
                'item_leather','item_leather','item_leather'
            ],
            'keywords': '皮革 线 绳'
        },
        {
            'name':'一捆皮革  &rarr;  皮革',
            'output':'item_leather',
            'outamt': '8',
            'items':[
                '','','',
                '','item_stack_leather','',
                '','',''
            ],
            'keywords': '皮革 线 绳'
        }

    ]);
};

createRecipeList = function(recipeList) {
    recipeList.forEach(function(recipe){
        $('#recipe_list').append(createRecipe(recipe));
    });
};

createRecipe = function(recipe) {
    var baseDiv = $('<div/>', {'class':'recipe'});
    var craftingDiv = $('<div/>', {'class':'crafting'});
    craftingDiv.append($('<img/>').attr('src', 'https://ae01.alicdn.com/kf/HTB1r2CMbkY2gK0jSZFg7635OFXaA.png'));
    craftingDiv.append(crafting_layout(recipe));
    var craftingOutput = $('<div/>').addClass('crafting_output item');
    var outputItem = $('<div/>').addClass(recipe.output).html(recipe.outamt);
    var hiddenText = $('<span/>').attr('style','display: none;').html(recipe.keywords);
    craftingOutput.append(outputItem);
    craftingDiv.append(craftingOutput);
    baseDiv.append(craftingDiv);
    var nameDiv = $('<p/>').html(recipe.name);
    baseDiv.append(nameDiv);
    baseDiv.append(hiddenText);
    return baseDiv;
};

crafting_layout = function(recipe) {
    var layoutDiv = $('<div/>', {'class':'crafting_layout'});
    recipe.items.forEach(function(e) {
        layoutDiv.append($('<div/>', {'class':'item'}).addClass(e))
    });


    return layoutDiv;
};

$(document).ready(function() {
    initRecipes();
    $.fn.exists = function () {
        return this.length !== 0;
    };
    $('#filter-field').on("keyup", function (f) {
        var shown = $('#recipe_list').children('.recipe').filter(function(_, e) {
            var itembox = $(e).children('p').first();
            var keywords = itembox.html().toLowerCase();
            var hiddentext = $(e).children('span').first();
            if(hiddentext.exists()) {
                keywords = keywords + " " + hiddentext.html();
            }
            keywords = keywords.toLowerCase();
            return (keywords.search((".*" + $(f.target).val() + ".*").toLowerCase()) > -1);
        });
        shown.show();
        $('#recipe_list').children('.recipe').not(shown).hide();
    });
});