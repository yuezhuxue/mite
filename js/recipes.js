initRecipes = function() {
    createRecipeList([
        {
            'name':'燧石粒 &rarr; 燧石',
            'output':'item_flint',
            'items':[
                'item_flintchip','item_flintchip','',
                'item_flintchip','item_flintchip','',
                '','',''
            ],
            'keywords': '燧石 粒'
        },
        {
            'name':'燧石工作台',
            'output':'item_flinttoolbench',
            'items':[
                'item_flint','item_sinew','',
                'item_stick','item_oakwood','',
                '','',''
            ],
            'keywords': '燧石 工作台 工具台'
        },
        {
            'name':'铜工作台',
            'output':'item_coppertoolbench',
            'items':[
                'item_copperingot','item_leather','',
                'item_stick','item_oakwoodplanks','',
                '','',''
            ],
            'keywords':'planks oak wood leather ingot copper stick'
        },
        {
            'name':'黑曜石工作台',
            'output':'item_obsidiantoolbench',
            'items':[
                'item_obsidianknife','','',
                'item_oakwood','','',
                '','',''
            ]
        },
        {
            'name':'皮革 &rarr; 皮革绳',
            'output':'item_sinew',
            'outamt': '4',
            'items':[
                '','','',
                '','item_leather','',
                '','',''
            ]
        },
        {
            'name':'弓',
            'output':'item_bow',
            'items':[
                '','item_stick','item_sinew',
                'item_stick','','item_sinew',
                '','item_stick','item_sinew'
            ],
            'keywords':'木棍 线 皮革绳'
        },
        {
            'name':'栓绳',
            'output':'item_lead',
            'outamt': '2',
            'items':[
                'item_sinew','item_sinew','',
                'item_sinew','item_slimeball','',
                '','','item_sinew'
            ],
            'keywords':'皮革绳 史莱姆球 线'
        },
        {
            'name':'燧石小刀',
            'output':'item_flintknife',
            'items':[
                'item_flint','item_string','',
                'item_stick','','',
                '','',''
            ],
            'keywords':'木棍 线'
        },
        {
            'name':'燧石短斧',
            'output':'item_flinthatchet',
            'items':[
                'item_stick','item_flint','',
                'item_stick','item_sinew','',
                '','',''
            ],
            'keywords':'stick sinew'
        },
        {
            'name':'燧石斧',
            'output':'item_flintaxe',
            'items':[
                '','item_flint','item_flint',
                'item_sinew','item_stick','item_flint',
                '','item_stick',''
            ],
            'keywords':'stick sinew'
        },
        {
            'name':'小木棒',
            'output':'item_cudgel',
            'items':[
                '','','',
                '','item_oakwoodplanks','',
                '','item_stick',''
            ],
            'keywords':'stick plank'
        },
        {
            'name':'木棒',
            'output':'item_club',
            'items':[
                '','item_oakwoodplanks','',
                '','item_oakwoodplanks','',
                '','item_stick',''
            ],
            'keywords':'stick plank'
        },
        {
            'name':'小麦 &rarr; 小麦种子',
            'output':'item_seeds',
            'outamt': '2',
            'items':[
                '','','',
                '','item_wheat','',
                '','',''
            ]
        },
        {
            'name':'粒 &rarr; 锭',
            'output':'item_ironingot',
            'items':[
                'item_ironnugget','item_ironnugget','item_ironnugget',
                'item_ironnugget','item_ironnugget','item_ironnugget',
                'item_ironnugget','item_ironnugget','item_ironnugget'
            ]
        },
        {
            'name':'短剑',
            'output':'item_irondagger',
            'items':[
                '','','',
                '','item_ironingot','',
                '','item_stick',''
            ],
            'keywords':'stick ingot'
        },
        {
            'name':'战斧',
            'output':'item_ironbattleaxe',
            'items':[
                'item_ironingot','','item_ironingot',
                'item_ironingot','item_stick','item_ironingot',
                '','item_stick',''
            ],
            'keywords':'stick ingot'
        },
        {
            'name':'战锤',
            'output':'item_ironwarhammer',
            'items':[
                'item_ironingot','item_ironingot','item_ironingot',
                'item_ironingot','item_stick','item_ironingot',
                '','item_stick',''
            ],
            'keywords':'stick ingot'
        },
        {
            'name':'鸭嘴锄',
            'output':'item_ironmattock',
            'items':[
                'item_ironingot','item_ironingot','item_ironingot',
                '','item_stick','item_ironingot',
                '','item_stick',''
            ],
            'keywords':'鹤嘴锄'
        },
        {
            'name':'镰刀',
            'output':'item_ironscythe',
            'items':[
                'item_stick','item_ironingot','',
                'item_stick','','item_ironingot',
                'item_stick','',''
            ],
            'keywords':'stick ingot'
        },
        {
            'name':'粒 &rarr; 链',
            'output':'item_chain',
            'items':[
                '','item_ironnugget','',
                'item_ironnugget','','item_ironnugget',
                '','item_ironnugget',''
            ]
        },
        {
            'name':'链甲',
            'output':'item_chainmail',
            'items':[
                'item_chain','','item_chain',
                'item_chain','item_chain','item_chain',
                'item_chain','item_chain','item_chain'
            ]
        },
        {
            'name':'秘银弓',
            'output':'item_mithrilbow',
            'items':[
                '','item_stick','item_string',
                'item_stick','item_mithrilingot','item_string',
                '','item_stick','item_string'
            ],
            'keywords':'木棍 线'
        },
        {
            'name':'黑曜石粒 &rarr; 黑曜石',
            'output':'item_obsidian',
            'items':[
                'item_obsidianshard','item_obsidianshard','item_obsidianshard',
                'item_obsidianshard','item_obsidianshard','item_obsidianshard',
                'item_obsidianshard','item_obsidianshard','item_obsidianshard'
            ]
        },
        {
            'name':'圆石 &rarr; 石头',
            'output':'item_stone',
            'outamt': '2',
            'items':[
                'item_cobblestone','item_cobblestone','',
                'item_cobblestone','item_cobblestone','',
                '','',''
            ]
        },
        {
            'name':'红砖 &rarr; 硬化粘土',
            'output':'item_hardenedclay',
            'items':[
                'item_brick','item_brick','',
                'item_brick','item_brick','',
                '','',''
            ]
        },
        {
            'name':'粘土炉',
            'output':'item_clayoven',
            'items':[
                'item_blockofclay','item_blockofclay','',
                'item_blockofclay','item_blockofclay','',
                '','',''
            ]
        },
        {
            'name':'硬化粘土炉',
            'output':'item_largeclayoven',
            'items':[
                'item_hardenedclay','item_hardenedclay','item_hardenedclay',
                'item_hardenedclay','','item_hardenedclay',
                'item_hardenedclay','item_hardenedclay','item_hardenedclay'
            ]
        },
        {
            'name':'沙石熔炉',
            'output':'item_sandstoneoven',
            'items':[
                'item_sandstone','item_sandstone','item_sandstone',
                'item_sandstone','','item_sandstone',
                'item_sandstone','item_sandstone','item_sandstone'
            ]
        },
        {
            'name':'黑曜石熔炉',
            'output':'item_obsidianfurnace',
            'items':[
                'item_obsidian','item_obsidian','item_obsidian',
                'item_obsidian','','item_obsidian',
                'item_obsidian','item_obsidian','item_obsidian'
            ]
        },
        {
            'name':'地狱岩熔炉',
            'output':'item_netherrackfurnace',
            'items':[
                'item_netherrack','item_netherrack','item_netherrack',
                'item_netherrack','','item_netherrack',
                'item_netherrack','item_netherrack','item_netherrack'
            ]
        },
        {
            'name':'玻璃碎片 &rarr; 玻璃板',
            'output':'item_glasspane',
            'items':[
                'item_glassshard','item_glassshard','item_glassshard',
                'item_glassshard','item_glassshard','item_glassshard',
                'item_glassshard','item_glassshard','item_glassshard'
            ]
        },
        {
            'name':'玻璃 &rarr; 玻璃板',
            'output':'item_glasspane',
            'outamt':'6',
            'items':[
                '','','',
                '','item_glass','',
                '','',''
            ],
            'keywords':'玻璃'
        },
        {
            'name':'绿宝石碎片 &rarr; 绿宝石',
            'output':'item_emerald',
            'items':[
                'item_emeraldshard','item_emeraldshard','item_emeraldshard',
                'item_emeraldshard','item_emeraldshard','item_emeraldshard',
                'item_emeraldshard','item_emeraldshard','item_emeraldshard'
            ]
        },
        {
            'name':'牛奶 &rarr; 奶酪',
            'output':'item_cheese',
            'items':[
                'item_milkbowl','item_milkbowl','',
                'item_milkbowl','item_milkbowl','',
                '','',''
            ]
        },
        {
            'name':'牛奶 &rarr; 奶酪',
            'output':'item_cheese',
            'items':[
                '','','',
                '','item_milk','',
                '','',''
            ]
        },
        {
            'name':'牛奶 &rarr; 奶酪',
            'output':'item_cheese',
            'outamt': '9',
            'items':[
                'item_milk','item_milk','item_milk',
                'item_milk','item_milk','item_milk',
                'item_milk','item_milk','item_milk'
            ]
        },
        {
            'name':'小麦 &rarr; 面粉',
            'output':'item_flour',
            'outamt': '',
            'items':[
                '','','',
                'item_wheat','item_wheat','item_wheat',
                '','',''
            ]
        },
        {
            'name':'面团',
            'output':'item_dough',
            'items':[
                '','','',
                '','item_waterbowl','item_flour',
                '','',''
            ],
            'keywords':'水 面团'
        },
        {
            'name':'面团',
            'output':'item_dough',
            'outamt':'4',
            'items':[
                '','item_flour','',
                'item_flour','item_waterbucket','item_flour',
                '','item_flour',''
            ],
            'keywords':'水 面粉'
        },
        {
            'name':'巧克力',
            'output':'item_chocolate',
            'items':[
                '','','',
                '','item_cocoabeans','item_sugar',
                '','',''
            ],
            'keywords':'可可 糖'
        },
        {
            'name':'冰激凌',
            'output':'item_icecream',
            'items':[
                'item_cocoabeans','item_sugar','',
                'item_milkbowl','item_snowball','',
                '','',''
            ],
            'keywords':'可可 糖 牛奶 雪球'
        },
        {
            'name':'水果冰糕',
            'output':'item_sorbet',
            'items':[
                'item_orange','item_sugar','',
                'item_snowball','item_bowl','',
                '','',''
            ],
            'keywords':'橘子 糖 碗 雪球'
        },
        {
            'name':'土豆泥',
            'output':'item_mashedpotato',
            'items':[
                'item_bakedpotato','item_cheese','',
                'item_milkbowl','','',
                '','',''
            ],
            'keywords':'奶酪 牛奶'
        },
        {
            'name':'牛肉汤',
            'output':'item_beefstew',
            'items':[
                'item_steak','item_potato','',
                'item_brownmushroom','item_waterbowl','',
                '','',''
            ],
            'keywords':'牛肉 土豆 蘑菇 水'
        },
        {
            'name':'鸡肉汤',
            'output':'item_chickensoup',
            'items':[
                'item_cookedchicken','item_carrot','',
                'item_onion','item_waterbowl','',
                '','',''
            ],
            'keywords':'胡萝卜 洋葱 熟鸡肉 水'
        },
        {
            'name':'蔬菜汤',
            'output':'item_vegetablesoup',
            'items':[
                'item_potato','item_carrot','',
                'item_onion','item_waterbowl','',
                '','',''
            ],
            'keywords':'胡萝卜 土豆 洋葱 碗 水'
        },
        {
            'name':'奶油蔬菜汤',
            'output':'item_creamofvegetablesoup',
            'items':[
                'item_potato','item_carrot','',
                'item_onion','item_milkbowl','',
                '','',''
            ],
            'keywords':'胡萝卜 土豆 洋葱 碗 牛奶'
        },
        {
            'name':'奶油蘑菇汤',
            'output':'item_creamofmushroomsoup',
            'items':[
                'item_brownmushroom','item_brownmushroom','',
                '','item_milkbowl','',
                '','',''
            ],
            'keywords':'蘑菇 牛奶'
        },
        {
            'name':'南瓜汤',
            'output':'item_pumpkinsoup',
            'items':[
                '','','',
                '','item_pumpkin','item_waterbowl',
                '','',''
            ],
            'keywords':'南瓜 水 碗'
        },
        {
            'name':'沙拉',
            'output':'item_salad',
            'items':[
                'item_dandelion','item_dandelion','',
                'item_dandelion','item_bowl','',
                '','',''
            ],
            'keywords':'小黄花 碗'
        },
        {
            'name':'蓝莓粥',
            'output':'item_porridge',
            'items':[
                'item_seeds','item_sugar','',
                'item_blueberry','item_waterbowl','',
                '','',''
            ],
            'keywords':'小麦种子 糖 蓝莓 水'
        },
        {
            'name':'麦片粥',
            'output':'item_cereal',
            'items':[
                '','','',
                'item_wheat','item_milkbowl','item_sugar',
                '','',''
            ],
            'keywords':'小麦 牛奶 糖'
        },
        {
            'name':'祛魔之瓶',
            'output':'item_bottleodisenchanting',
            'items':[
                '','','',
                'item_waterbottle','item_netherwart','item_coal',
                '','',''
            ],
            'keywords':'水 地狱疣 水瓶 煤 去魔之瓶'
        },
        {
            'name':'金属箱',
            'output':'item_strongbox',
            'items':[
                'item_ironingot','item_ironingot','item_ironingot',
                'item_ironingot','','item_ironingot',
                'item_ironingot','item_ironingot','item_ironingot'
            ],
            'keywords':'ingot'
        },
        {
            'name':'雪球 &rarr; 雪（薄片）',
            'output':'item_thinsnow',
            'items':[
                '','','',
                '','item_snowball','',
                '','',''
            ]
        },
        {
            'name':'雪球 &rarr; 雪台阶',
            'output':'item_snowslab',
            'items':[
                'item_snowball','item_snowball','',
                'item_snowball','item_snowball','',
                '','',''
            ]
        },
        {
            'name':'雪（薄片） &rarr; 雪台阶',
            'output':'item_snowslab',
            'items':[
                'item_thinsnow','item_thinsnow','',
                'item_thinsnow','item_thinsnow','',
                '','',''
            ]
        },
        {
            'name':'金属粒 &rarr; 金属币',
            'output':'item_coppercoin',
            'items':[
                '','','',
                '','item_coppernugget','',
                '','',''
            ]
        },
        {
            'name':'金属币 &rarr; 金属粒',
            'output':'item_coppernugget',
            'items':[
                '','','',
                '','item_coppercoin','',
                '','',''
            ]
        },
        {
            'name':'秘银符文石',
            'output':'item_mithrilrunestone',
            'items':[
                '','item_mithrilnugget','',
                'item_mithrilnugget','item_obsidian','item_mithrilnugget',
                '','item_mithrilnugget',''
            ],
            'keywords':'秘银 符文石 符文门 obsidian'
        },
        {
            'name':'艾德曼符文石',
            'output':'item_adamantiumrunestone',
            'items':[
                '','item_adamantiumnugget','',
                'item_adamantiumnugget','item_obsidian','item_adamantiumnugget',
                '','item_adamantiumnugget',''
            ],
            'keywords':'nugget 黑曜石 艾德曼'
        },
        {
            'name':'打火石',
            'output':'item_flintandsteel',
            'items':[
                'item_ironnugget','','',
                '','item_flint','',
                '','',''
            ],
            'keywords':'铁粒 燧石'
        },
        {
            'name':'燧石箭',
            'output':'item_flintarrow',
            'items':[
                '','item_flintchip','',
                '','item_stick','',
                '','item_feather',''
            ],
            'keywords':'木棍 羽毛 燧石'
        },
        {
            'name':'金属鱼钩',
            'output':'item_ironfishingrod',
            'items':[
                '','','item_stick',
                '','item_stick','item_string',
                'item_stick','item_ironnugget','item_string'
            ],
            'keywords':'木棍 线 nugget'
        },
        {
            'name':'圆石墙',
            'output':'item_cobblestonewall',
            'outamt':'8',
            'items':[
                '','','',
                'item_cobblestone','item_cobblestone','item_cobblestone',
                'item_cobblestone','item_cobblestone','item_cobblestone'
            ]
        },
        {
            'name':'告示牌',
            'output':'item_sign',
            'items':[
                '','','',
                '','item_oakwoodslab','',
                '','item_stick',''
            ],
            'keywords':'stick slab'
        },
        {
            'name':'石头 &rarr; 石砖',
            'output':'item_stonebrick',
            'outamt': '2',
            'items':[
                'item_stone','item_stone','',
                'item_stone','item_stone','',
                '','',''
            ]
        },
        {
            'name':'砖块',
            'output':'item_bricks',
            'outamt': '2',
            'items':[
                'item_brick','item_brick','item_brick',
                'item_brick','item_sand','item_brick',
                'item_brick','item_brick','item_brick'
            ],
            'keywords':'sand'
        },
        {
            'name':'地狱砖块',
            'output':'item_netherbrickblock',
            'outamt': '2',
            'items':[
                'item_netherbrick','item_netherbrick','item_netherbrick',
                'item_netherbrick','item_soulsand','item_netherbrick',
                'item_netherbrick','item_netherbrick','item_netherbrick'
            ],
            'keywords':'soulsand'
        },
        {
            'name':'玻璃板 &rarr; 玻璃',
            'output':'item_glass',
            'items':[
                '','','',
                'item_glasspane','item_glasspane','item_glasspane',
                'item_glasspane','item_glasspane','item_glasspane'
            ]
        },
        {
            'name':'曲奇',
            'output':'item_cookie',
            'outamt':'4',
            'items':[
                '','','',
                '','item_dough','item_chocolate',
                '','',''
            ],
            'keywords':'dough chocolate'
        },
        {
            'name':'南瓜派',
            'output':'item_pumpkinpie',
            'items':[
                'item_pumpkin','item_flour','',
                'item_egg','item_sugar','',
                '','',''
            ],
            'keywords':'南瓜 鸡蛋 糖 汤'
        },
        {
            'name':'蘑菇汤',
            'output':'item_mushroomstew',
            'items':[
                'item_redmushroom','item_brownmushroom','',
                '','item_waterbowl','',
                '','',''
            ],
            'keywords':'蘑菇 水'
        },
        {
            'name':'蛋糕',
            'output':'item_cake',
            'items':[
                'item_milkbowl','item_flour','',
                'item_egg','item_sugar','',
                '','',''
            ],
            'keywords':'牛奶 鸡蛋 糖 面粉'
        },
        {
            'name':'南瓜种子',
            'output':'item_pumpkinseeds',
            'items':[
                '','','',
                '','item_pumpkin','',
                '','',''
            ]
        },
        {
            'name':'西瓜种子',
            'output':'item_melonseeds',
            'items':[
                'item_melonslice','item_melonslice','',
                'item_melonslice','item_melonslice','',
                '','',''
            ],
            'keywords':'slice'
        },
        {
            'name':'指南针',
            'output':'item_compass',
            'items':[
                'item_ironnugget','item_ironnugget','item_ironnugget',
                'item_ironnugget','item_redstone','item_ironnugget',
                'item_ironnugget','item_ironnugget','item_ironnugget'
            ],
            'keywords':'铁粒 红石'
        },
        {
            'name':'钟',
            'output':'item_clock',
            'items':[
                'item_goldnugget','item_goldnugget','item_goldnugget',
                'item_goldnugget','item_redstone','item_goldnugget',
                'item_goldnugget','item_goldnugget','item_goldnugget'
            ],
            'keywords':'铁粒 红石'
        },
        {
            'name':'金苹果',
            'output':'item_goldenapple',
            'items':[
                'item_goldnugget','item_goldnugget','item_goldnugget',
                'item_goldnugget','item_apple','item_goldnugget',
                'item_goldnugget','item_goldnugget','item_goldnugget'
            ],
            'keywords':'苹果 金粒'
        },
        {
            'name':'附魔金苹果（附魔台100经验）',
            'output':'item_goldenapple',
            'items':[
                '','','',
                '','item_goldenapple','item_bottleoenchanting',
                '','',''
            ]
        },
        {
            'name':'鞍',
            'output':'item_saddle',
            'items':[
                'item_leather','item_leather','item_leather',
                'item_leather','','item_leather',
                'item_ironnugget','','item_ironnugget'
            ],
            'keywords':'皮革 铁粒'
        },
        {
            'name':'雪台阶 &rarr; 雪块',
            'output':'item_snowblock',
            'items':[
                '','item_snowslab','',
                '','item_snowslab','',
                '','',''
            ]
        },
        {
            'name':'栅栏',
            'output':'item_oakfence',
            'outamt':'2',
            'items':[
                '','','',
                'item_stick','item_stick','item_stick',
                'item_stick','item_stick','item_stick'
            ],
            'keywords':'木棍'
        },
        {
            'name':'栅栏门',
            'output':'item_oakfencegate',
            'items':[
                '','','',
                'item_stick','item_oakwoodplanks','item_stick',
                'item_stick','item_oakwoodplanks','item_stick'
            ],
            'keywords':'木棍 木板'
        },
        {
            'name':'梯子',
            'output':'item_ladder',
            'outamt':'2',
            'items':[
                'item_stick','','item_stick',
                'item_stick','item_stick','item_stick',
                'item_stick','','item_stick'
            ],
            'keywords':'木棍'
        },
        {
            'name':'绿宝石附魔台',
            'output':'item_enchantmenttable',
            'items':[
                '','item_book','',
                'item_emerald','item_obsidian','item_emerald',
                'item_obsidian','item_obsidian','item_obsidian'
            ],
            'keywords':'书 黑曜石'
        },
        {
            'name':'钻石附魔台',
            'output':'item_enchantmenttable',
            'items':[
                '','item_book','',
                'item_diamond','item_obsidian','item_diamond',
                'item_obsidian','item_obsidian','item_obsidian'
            ],
            'keywords':'书 黑曜石'
        },
        {
            'name':'面包',
            'output':'item_bread',
            'items':[
                '','item_dough','',
                '','item_fire','',
                '','',''
            ],
            'keywords':'面团'
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