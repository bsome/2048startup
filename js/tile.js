var LABELS = new Array();
LABELS[2] = "pets"
LABELS[4] = "scoot"
LABELS[8] = "snap"
LABELS[16] = "xmi"
LABELS[32] = "IG"
LABELS[64] = "LYFT"
LABELS[128] = "abnb"
LABELS[256] = "BOX"
LABELS[512] = "uber"
LABELS[1024] = "FB"
LABELS[2048] = "FC"

function Tile(position, value, label) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;
  this.label            = label || "ΘX"

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};
