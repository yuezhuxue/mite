initRecipes = function() {
    createRecipeList([
        {
            'name':'硬石 &rarr; 硬石工具台',
            'output':'item_flinttoolbench',
            'items':[
                '','','',
                '','item_hard_ingot','item_leather',
                '','item_stick','item_oakwoodplanks'
            ],
            'keywords': '硬石 工具台'
        },
        {
            'name':'  &rarr; 硬石桶',
            'output':'item_hard_bukket',
            'items':[
                '','','',
                'item_hard_ingot','','item_hard_ingot',
                '','item_hard_ingot',''
            ],
            'keywords': '硬石 桶'
        },
        {
            'name':'  &rarr;  硬石剪刀',
            'output':'item_hard_shears',
            'items':[
                '','','',
                '','','item_hard_ingot',
                '','item_hard_ingot',''
            ],
            'keywords': '硬石 剪刀'
        },
        {
            'name':'  &rarr;  硬石剑',
            'output':'item_hard_sword',
            'items':[
                '','item_hard_ingot','',
                '','item_hard_ingot','',
                '','item_stick',''
            ],
            'keywords': '硬石 剑'
        },
        {
            'name':'  &rarr;  硬石镐',
            'output':'item_hard_pickaxe',
            'items':[
                'item_hard_ingot','item_hard_ingot','item_hard_ingot',
                '','item_stick','',
                '','item_stick',''
            ],
            'keywords': '硬石 镐'
        },
        {
            'name':'  &rarr;  硬石斧',
            'output':'item_hard_axe',
            'items':[
                'item_hard_ingot','item_hard_ingot','',
                'item_hard_ingot','item_stick','',
                '','item_stick',''
            ],
            'keywords': '硬石 斧'
        },
        {
            'name':'  &rarr;  硬石铲',
            'output':'item_hard_shovel',
            'items':[
                '','item_hard_ingot','',
                '','item_stick','',
                '','item_stick',''
            ],
            'keywords': '硬石 铲'
        },
        {
            'name':'  &rarr;  硬石头盔',
            'output':'item_hard_helmet',
            'items':[
                'item_hard_ingot','item_hard_ingot','item_hard_ingot',
                'item_hard_ingot','','item_hard_ingot',
                '','',''
            ],
            'keywords': '硬石 头盔'
        },
        {
            'name':'  &rarr;  硬石胸甲',
            'output':'item_hard_chestplate',
            'items':[
                'item_hard_ingot','','item_hard_ingot',
                'item_hard_ingot','item_hard_ingot','item_hard_ingot',
                'item_hard_ingot','item_hard_ingot','item_hard_ingot'
            ],
            'keywords': '硬石 胸甲'
        },
        {
            'name':'  &rarr;  硬石护腿',
            'output':'item_hard_leggings',
            'items':[
                'item_hard_ingot','item_hard_ingot','item_hard_ingot',
                'item_hard_ingot','','item_hard_ingot',
                'item_hard_ingot','','item_hard_ingot'
            ],
            'keywords': '硬石 护腿'
        },
        {
            'name':'  &rarr;  硬石靴子',
            'output':'item_hard_boots',
            'items':[
                '','','',
                'item_hard_ingot','','item_hard_ingot',
                'item_hard_ingot','','item_hard_ingot'
            ],
            'keywords': '硬石 靴子'
        },
        {
            'name':'  &rarr;  硬石币',
            'output':'item_hard_coin',
            'items':[
                '','','',
                '','item_hard_nugget','',
                '','',''
            ],
            'keywords': '硬石币 硬石粒'
        },
        {
            'name':'  &rarr;  硬石粒',
            'output':'item_hard_nugget',
            'items':[
                '','','',
                '','item_hard_coin','',
                '','',''
            ],
            'keywords': '硬石币 硬石粒'
        },
        {
            'name':'硬石粒  &rarr;  硬石锭',
            'output':'item_hard_ingot',
            'items':[
                'item_hard_nugget','item_hard_nugget','item_hard_nugget',
                'item_hard_nugget','item_hard_nugget','item_hard_nugget',
                'item_hard_nugget','item_hard_nugget','item_hard_nugget'
            ],
            'keywords': '硬石粒 硬石锭'
        },
        {
            'name':'  &rarr;  硬石金属箱',
            'output':'item_hard_chest',
            'items':[
                'item_hard_ingot','item_hard_ingot','item_hard_ingot',
                'item_hard_ingot','','item_hard_ingot',
                'item_hard_ingot','item_hard_ingot','item_hard_ingot'
            ],
            'keywords': '硬石金属箱'
        },
        {
            'name':'  &rarr;  硬石块',
            'output':'item_hard_block',
            'items':[
                 'item_hard_ingot','item_hard_ingot','item_hard_ingot',
                 'item_hard_ingot','item_hard_ingot','item_hard_ingot',
                 'item_hard_ingot','item_hard_ingot','item_hard_ingot'
            ],
            'keywords': '硬石块'
        },
        {
            'name':'  &rarr;  硬石砧',
            'output':'item_hard_anvil',
            'items':[
                'item_hard_block','item_hard_block','item_hard_block',
                '','item_hard_ingot','',
                'item_hard_ingot','item_hard_ingot','item_hard_ingot'
            ],
            'keywords': '硬石砧'
        },
        {
            'name':'腐肉  &rarr;  辣条',
            'output':'item_latiao',
            'items':[
                '','','',
                '','item_rottenflesh','item_rottenflesh',
                '','item_rottenflesh','item_rottenflesh'
            ],
            'keywords': '腐肉 辣条'
        },
        {
            'name':'雪球+糖+纸  &rarr;  甜筒',
            'output':'item_ice_cream',
            'items':[
                '','item_snowball','',
                'item_sugar','item_paper','item_sugar',
                '','item_paper',''
            ],
            'keywords': '雪球 糖 纸 甜筒'
        },
        {
            'name':'小麦+碗  &rarr;  小麦汤',
            'output':'item_wheat_soup',
            'items':[
                '','','',
                '','item_seeds','item_seeds',
                '','item_seeds','item_bowl'
            ],
            'keywords': '小麦 碗 小麦汤'
        },
        {
            'name':'  &rarr;  莲子汤',
            'output':'item_lotus_soup',
            'items':[
                '','','',
                '','item_lilypad','item_lilypad',
                '','item_lilypad','item_bowl'
            ],
            'keywords': '莲叶 莲子汤'
        },
        {
            'name':'  &rarr;  鱼丸',
            'output':'item_fish_ball',
            'items':[
                '','','',
                'item_rawfish','item_torch','item_rawfish',
                '','',''
            ],
            'keywords': '鱼+火把 鱼丸'
        },
        {
            'name':'皮革  &rarr;  腰带',
            'output':'item_belt',
            'items':[
                '','','',
                '','item_leather','item_leather',
                '','',''
            ],
            'keywords': '皮革 腰带'
        },
        {
            'name':'  &rarr;  矿工帽',
            'output':'item_miner_helmet',
            'items':[
                '','item_goldingot','',
                'item_leather','item_redstone','item_leather',
                'item_ironingot','','item_ironingot'
            ],
            'keywords': '皮革 金矿 铁矿 矿工帽'
        },
        {
            'name':'黑色羊毛+线  &rarr;  雨衣',
            'output':'item_raincoat',
            'items':[
                '','item_blackwool','',
                'item_blackwool','item_string','item_blackwool',
                'item_blackwool','item_string','item_blackwool'
            ],
            'keywords': '羊毛 线 雨衣'
        },
        {
            'name':'  &rarr;  背包',
            'output':'item_backpack',
            'items':[
                'item_leather','','item_leather',
                'item_leather','item_enderpearl','item_leather',
                'item_leather','item_goldingot','item_leather'
            ],
            'keywords': '末影珍珠 金锭 皮革 背包'
        },
        {
            'name':'  &rarr;  金属箱升级道具（其他金属类推',
            'output':'item_hard_update',
            'items':[
                'item_hard_nugget','item_hard_ingot','item_hard_nugget',
                'item_hard_ingot','item_chest','item_hard_ingot',
                'item_hard_nugget','item_hard_ingot','item_hard_nugget'
            ],
            'keywords': '硬石 金属箱 升级 道具'
        },
        {
            'name':'木棍+石台阶  &rarr;  晾衣架',
            'output':'item_armor_stand',
            'items':[
                'item_stick','item_stick','item_stick',
                '','item_stick','',
                'item_stick','item_stoneslab','item_stick'
            ],
            'keywords': ' 晾衣架'
        },
        {
            'name':'  &rarr;  蓝色指南针',
            'output':'item_blue_compass',
            'items':[
                'item_ironnugget','item_ironnugget','item_ironnugget',
                'item_lapislazuli','item_compass','item_lapislazuli',
                'item_ironnugget','item_ironnugget','item_ironnugget'
            ],
            'keywords': '蓝色指南针'
        },
        {
            'name':'铁锭  &rarr;  铁船',
            'output':'item_iron_boat',
            'items':[
                '','','',
                'item_ironingot','','item_ironingot',
                'item_ironingot','item_ironingot','item_ironingot'
            ],
            'keywords': '铁船'
        },
        {
            'name':'红色羊毛+线+灯笼  &rarr;  灯笼',
            'output':'item_lantern',
            'items':[
                '','','',
                'item_redwool','item_string','item_torch',
                '','',''
            ],
            'keywords': '灯笼'
        },
        {
            'name':'  &rarr;  盾牌',
            'output':'item_shield',
            'items':[
                'item_oakwoodplanks','item_ironingot','item_oakwoodplanks',
                'item_oakwoodplanks','item_oakwoodplanks','item_oakwoodplanks',
                '','item_oakwoodplanks',''
            ],
            'keywords': '铁锭 木头 盾牌'
        },
        {
            'name':'  &rarr;  电子板',
            'output':'item_electric_board',
            'items':[
                '','','',
                'item_redstone','item_ironingot','',
                '','',''
            ],
            'keywords': '电子板 电子版'
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
    //craftingDiv.append($('<img/>').attr('src', 'https://ae01.alicdn.com/kf/HTB1r2CMbkY2gK0jSZFg7635OFXaA.png'));
    craftingDiv.append($('<img/>').attr('src', '../ga/img/craft.png'));
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