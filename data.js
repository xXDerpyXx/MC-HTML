blocks = {};
blocks.stone = {};
blocks.sandStone = {};
blocks.cobble = {};
blocks.sand = {};
blocks.grass = {};
blocks.floorStone = {};
blocks.floorSandStone = {};
blocks.dirt = {};

//sandstone
blocks.sandStone.solid = true;
blocks.sandStone.health = 75;
blocks.sandStone.entity = false;
blocks.sandStone.name = "sandStone";
blocks.sandStone.result = "floorSandStone";

//cobble
blocks.cobble.solid = true;
blocks.cobble.health = 25;
blocks.cobble.result = "grass";
blocks.cobble.name = "cobble";
blocks.cobble.entity = false;

//normal stone
blocks.stone.health = 100;
blocks.stone.entity = false;
blocks.stone.name = "stone";
blocks.stone.solid = true;
blocks.stone.result = "floorStone";

//sand stone floors
blocks.floorSandStone.health = 200;
blocks.floorSandStone.entity = false;
blocks.floorSandStone.solid = false;
blocks.floorSandStone.name = "floorSandStone";
blocks.floorSandStone.result = "sand";

//stone floors
blocks.floorStone.health = 255;
blocks.floorStone.entity = false;
blocks.floorStone.solid = false;
blocks.floorStone.name = "floorStone";
blocks.floorStone.result = "cobble";

//sand
blocks.sand.health = 10;
blocks.sand.name = "sand";
blocks.sand.solid = false;
blocks.sand.result = "dirt";
blocks.sand.entity = false;

//dirt
blocks.dirt.entity = false;
blocks.dirt.solid = false;
blocks.dirt.name = "dirt";
blocks.dirt.result = false;

//grass
blocks.grass.name = "grass";
blocks.grass.solid = false;
blocks.grass.result = "dirt";
blocks.grass.health = 50;