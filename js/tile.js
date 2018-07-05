var LABELS = new Array();
LABELS[2] = "juicero"
LABELS[4] = "SNAP"
LABELS[8] = "WeWork"
LABELS[16] = "XMI"
LABELS[32] = "IG"
LABELS[64] = "LYFT"
LABELS[128] = "ABNB"
LABELS[256] = "BOX"
LABELS[512] = "UBER"
LABELS[1024] = "FB"
LABELS[2048] = "FC"

function Tile(position, value, label) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;
  this.label            = label || "PIN"

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
