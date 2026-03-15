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
            'name':'小麦+碗  &rarr;  小麦汤(旧版为空碗',
            'output':'item_wheat_soup',
            'items':[
                '','','',
                '','item_seeds','item_seeds',
                '','item_seeds','item_waterbowl'
            ],
            'keywords': '小麦 碗 小麦汤'
        },
        {
            'name':'莲叶  &rarr;  莲子汤(旧版为空碗+三莲叶',
            'output':'item_lotus_soup',
            'items':[
                '','','',
                '','item_lilypad','item_sugar',
                '','item_lilypad','item_waterbowl'
            ],
            'keywords': '莲叶 莲子汤'
        },
        {
            'name':'生鱼  &rarr;  鱼丸（旧版需火把',
            'output':'item_fish_ball',
            'items':[
                '','','',
                'item_rawfish','item_rawfish','',
                '','',''
            ],
            'keywords': '鱼 火把 鱼丸'
        },
        {
            'name':'皮革  &rarr;  皮带（腰带',
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
            'name':'硬石粒+硬石锭+箱子  &rarr;  金属箱升级道具（类推',
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
            'name':'指南针  &rarr;  蓝色指南针',
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
            'name':'红色羊毛+线+火把  &rarr;  灯笼',
            'output':'item_lantern',
            'items':[
                '','','',
                'item_redwool','item_string','item_torch',
                '','',''
            ],
            'keywords': '羊毛 线 火把 灯笼'
        },
        {
            'name':'木头+铁锭  &rarr;  盾牌',
            'output':'item_shield',
            'items':[
                'item_oakwoodplanks','item_ironingot','item_oakwoodplanks',
                'item_oakwoodplanks','item_oakwoodplanks','item_oakwoodplanks',
                '','item_oakwoodplanks',''
            ],
            'keywords': '铁锭 木头 盾牌'
        },
        {
            'name':'红石+铁锭  &rarr;  电子板',
            'output':'item_electric_board',
            'items':[
                '','','',
                'item_redstone','item_ironingot','',
                '','',''
            ],
            'keywords': '电子板 电子版'
        },
        {
            'name':'  &rarr;  简易燧石小刀',
            'output':'item_flintknife',
            'items':[
                '','','',
                '','','item_flintchip',
                '','item_straw_rope','item_stick'
            ],
            'keywords': '简易燧石小刀'
        },
        {
            'name':'  &rarr;  糖水',
            'output':'item_sugar_soup',
            'items':[
                '','','',
                '','item_waterbowl','item_sugar',
                '','',''
            ],
            'keywords': '糖 水'
        },
        {
            'name':'  &rarr;  热水',
            'output':'item_hot_water',
            'items':[
                '','','',
                '','item_flintandsteel','item_waterbowl',
                '','',''
            ],
            'keywords': '热水 打火石'
        },
        {
            'name':'竹子  &rarr;  斗笠',
            'output':'item_rain_hat',
            'items':[
                '','item_bamboodpyq','',
                'item_bamboodpyq','item_string','item_bamboodpyq',
                '','',''
            ],
            'keywords': '绳 竹 斗笠'
        },
        {
            'name':'植物纤维  &rarr;  草绳',
            'output':'item_straw_rope',
            'items':[
                '','','',
                '','item_plant_fiber','item_plant_fiber',
                '','item_plant_fiber','item_plant_fiber'
            ],
            'keywords': '植物纤维 草绳'
        },
        {
            'name':'萤石  &rarr;  萤石火把',
            'output':'item_glow_torch',
            'items':[
                '','','',
                '','item_glowstonedust','',
                '','item_stick',''
            ],
            'keywords': '萤石 木棍 火把'
        },
        {
            'name':'  &rarr;  筛子',
            'output':'item_shaizi',
            'items':[
                '','','',
                'item_oakwood','item_string','item_oakwood',
                'item_stick','','item_stick'
            ],
            'keywords': ''
        },
        {
            'name':'  &rarr;  火把枪',
            'output':'item_torch_gun',
            'items':[
                '','item_oakwood','',
                'item_oakwood','item_ironingot','item_oakwood',
                '','item_stick','item_oakwood'
            ],
            'keywords': ''
        },
        {
            'name':'  &rarr;  篝火',
            'output':'item_gouhuo',
            'items':[
                '','','',
                'item_stick','','item_stick',
                'item_oakwoodplanks','item_oakwood','item_oakwoodplanks'
            ],
            'keywords': '篝火 木棍 原木 木板'
        },
        {
            'name':'皮革+简易燧石小刀  &rarr;  皮革绳',
            'output':'item_sinew',
            'items':[
                '','','',
                '','item_leather','item_flintknife',
                '','',''
            ],
            'keywords': '皮革 简易燧石小刀'
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
    // 根据当前页面路径确定图片路径
    var imgPath = window.location.pathname.includes('/new_ga/') ? '../../ga/img/craft.png' : 'img/craft.png';
    craftingDiv.append($('<img/>').attr('src', imgPath));
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