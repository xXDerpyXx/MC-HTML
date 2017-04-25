blocks = {};
blocks.stone = {};
blocks.sandStone = {};
blocks.cobble = {};
blocks.sand = {};
blocks.grass = {};
blocks.floorStone = {};
blocks.floorSandStone = {};
blocks.dirt = {};

blocks.sandStone.solid = true;
blocks.sandStone.health = 75;
blocks.sandStone.entity = false;
blocks.sandStone.name = "sandStone";
blocks.sandStone.result = "floorSandStone";

blocks.cobble.solid = true;
blocks.cobble.health = 25;
blocks.cobble.result = "grass";
blocks.cobble.name = "cobble";
blocks.cobble.entity = false;

blocks.stone.health = 100;
blocks.stone.entity = false;
blocks.stone.name = "stone";
blocks.stone.solid = true;
blocks.stone.result = "floorStone";

blocks.floorSandStone.health = 200;
blocks.floorSandStone.entity = false;
blocks.floorSandStone.solid = false;
blocks.floorSandStone.name = "floorSandStone";
blocks.floorSandStone.result = "sand";

blocks.floorStone.health = 255;
blocks.floorStone.entity = false;
blocks.floorStone.solid = false;
blocks.floorStone.name = "floorStone";
blocks.floorStone.result = "cobble";

blocks.sand.health = 10;
blocks.sand.name = "sand";
blocks.sand.solid = false;
blocks.sand.result = "dirt";
blocks.sand.entity = false;

blocks.dirt.entity = false;
blocks.dirt.solid = false;
blocks.dirt.name = "dirt";

blocks.grass.name = "grass";
blocks.grass.solid = false;
blocks.grass.result = "dirt";
blocks.grass.health = 50;