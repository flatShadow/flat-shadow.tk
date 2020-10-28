var elementArr = [ //Array mit allen HTML Elementen die gändert werden und dem aktuellen angezeigtem
	[ //Blöcke
		[document.getElementById('blockDirt') ,document.getElementById('textDirt'), 0],
		[document.getElementById('blockLog') ,document.getElementById('textLog'), 0],
		[document.getElementById('blockWork') ,document.getElementById('textWork'), 0],
		[document.getElementById('blockPlanks') ,document.getElementById('textPlanks'), 0],
		[document.getElementById('blockStone') ,document.getElementById('textStone'), 0],
		[document.getElementById('blockOre') ,document.getElementById('textOre'), 0]
	],
	[ //Items
		[document.getElementById('itemSword') ,document.getElementById('textSword'), 0],
		[document.getElementById('itemTool') ,document.getElementById('textTool'), 0],
		[document.getElementById('itemResource') ,document.getElementById('textResource'), 0],
		[document.getElementById('itemPlant') ,document.getElementById('textPlant'), 0],
		[document.getElementById('itemAnimal') ,document.getElementById('textAnimal'), 0],
		[document.getElementById('itemExtra') ,document.getElementById('textExtra'), 0]
	],
];

var blockArr = [ //Array von allen Blöcken + Beschreibung
	[//Blöcke
		[ //Dirt 0
			["bilder/gallery/block/dirt_0.png", "Grass"],
			["bilder/gallery/block/dirt_1.png", "Dirt"],
			//["bilder/gallery/block/dirt_2.png", "Diorite"], ist kein dirt
			["bilder/gallery/block/dirt_3.png", "Sand"],
			["bilder/gallery/block/dirt_4.png", "Soul Sand"],
		],
		[ //logs 1
			["bilder/gallery/block/logs_0.png", "Oak Log"],
			["bilder/gallery/block/logs_1.png", "big Oak Log"],
			["bilder/gallery/block/logs_2.png", "Jungle Log"],
			["bilder/gallery/block/logs_3.png", "Birch Log"],
			["bilder/gallery/block/logs_4.png", "Arcia Log"],
			["bilder/gallery/block/logs_5.png", "Spruce Log"],
		],
		[ //work 2
			["bilder/gallery/block/work_0.png", "Crafting Table"],
			["bilder/gallery/block/work_1.png", "Furnace"],
			["bilder/gallery/block/work_2.png", "Dropper"],
			["bilder/gallery/block/work_3.png", "Enchanting Table"],
			["bilder/gallery/block/work_4.png", "Piston"],
		],
		[ //planks 3
			["bilder/gallery/block/planks_0.png", "Oak Planks"],
			["bilder/gallery/block/planks_1.png", "big Oak Planks"],
			["bilder/gallery/block/planks_2.png", "Jungle Planks"],
			["bilder/gallery/block/planks_3.png", "Birch Planks"],
			["bilder/gallery/block/planks_4.png", "Arcia Planks"],
			["bilder/gallery/block/planks_5.png", "Spruce Planks"],
		],
		[ //stone 4
			["bilder/gallery/block/stone_0.png", "Stone"],
			["bilder/gallery/block/stone_1.png", "Cobblestone"],
			["bilder/gallery/block/stone_2.png", "Stockebrick"],
			["bilder/gallery/block/stone_3.png", "Bricks"],
			["bilder/gallery/block/stone_4.png", "Sandstone"],
		],
		[ //ore 5
			["bilder/gallery/block/ore_0.png", "Diamond Ore"],
			["bilder/gallery/block/ore_1.png", "Redstone  Ore"],
			["bilder/gallery/block/ore_2.png", "Lapis Lazuli  Ore"],
			["bilder/gallery/block/ore_3.png", "Iron  Ore"],
			["bilder/gallery/block/ore_4.png", "Gold  Ore"],
			["bilder/gallery/block/ore_5.png", "Emerald  Ore"],
			["bilder/gallery/block/ore_6.png", "Coal  Ore"],
		],
	],
	
	[//items
		[ //Sword 0
			["bilder/gallery/items/sword0.png", "Diamond Sword"],
			["bilder/gallery/items/sword1.png", "Iron Sword"],
			["bilder/gallery/items/sword2.png", "Stone Sword"],
			["bilder/gallery/items/sword3.png", "Wood Sword"],
			["bilder/gallery/items/sword4.png", "Gold Sword"],
		],
		[ //Tool 1 
			["bilder/gallery/items/tool0.png", "Pickaxe"],
			["bilder/gallery/items/tool1.png", "Axe"],
			["bilder/gallery/items/tool2.png", "Shovel"],
			["bilder/gallery/items/tool3.png", "Hoe"],
			["bilder/gallery/items/tool4.png", "Bow"],
			["bilder/gallery/items/tool5.png", "Fishing Rod"],
			["bilder/gallery/items/tool6.png", "Shears"],
		],
		[ //Resource 2
			["bilder/gallery/items/resource0.png", "Diamond"],
			["bilder/gallery/items/resource1.png", "Emerald"],
			["bilder/gallery/items/resource2.png", "Lapis Lazuli"],
			["bilder/gallery/items/resource3.png", "Gold Ingot"],
			["bilder/gallery/items/resource4.png", "Iron Ingot"],
			["bilder/gallery/items/resource5.png", "Redstone"],
			["bilder/gallery/items/resource6.png", "Coal"],
			["bilder/gallery/items/resource7.png", "Prismarine Crystals"],

		],
		[ //Plant 3
			["bilder/gallery/items/plant0.png", "Wheat"],
			["bilder/gallery/items/plant1.png", "Reeds"],
			["bilder/gallery/items/plant2.png", "Carrot"],
			["bilder/gallery/items/plant3.png", "Apple"],
			["bilder/gallery/items/plant4.png", "Melon"],
			["bilder/gallery/items/plant5.png", "Potato"],
			["bilder/gallery/items/plant6.png", "Baked Potato"],

		],
		[ //Animal 4
			["bilder/gallery/items/animal0.png", "Porkchop Raw"],
			["bilder/gallery/items/animal1.png", "Porkchop Cooked"],
			["bilder/gallery/items/animal2.png", "Rabbit Raw"],
			["bilder/gallery/items/animal3.png", "Rabbit Cooked"],
			["bilder/gallery/items/animal4.png", "Fish"],
			["bilder/gallery/items/animal5.png", "Fish Cooked"],
			["bilder/gallery/items/animal6.png", "Pufferfish"],

		],
		[ //Extra 5
			["bilder/gallery/items/extra0.png", "Book"],
			["bilder/gallery/items/extra1.png", "Feather"],
			["bilder/gallery/items/extra2.png", "Water Bucket"],
			["bilder/gallery/items/extra3.png", "Ender Pearl"],
			["bilder/gallery/items/extra4.png", "Fireworks"],
		],
	],
];

function changeIMG(texture,block, change){ // Mitagewerte: Texturenart, Blockart, vor/zurück (-1/1)
	var currentItem = elementArr[texture][block][2];
	currentItem += change;
	if(currentItem < 0){
		currentItem = blockArr[texture][block].length-1;
	} 
	else if(currentItem >= blockArr[texture][block].length){
		currentItem = 0
	}
	
	elementArr[texture][block][0].src = blockArr[texture][block][currentItem][0];
	elementArr[texture][block][1].innerHTML = blockArr[texture][block][currentItem][1];
	elementArr[texture][block][2] = currentItem;
}
