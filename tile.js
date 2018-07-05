var LABELS = new Array();
LABELS[2] = "ΘX"
LABELS[4] = "ΛXA"
LABELS[8] = "AEΠ"
LABELS[16] = "ΔX"
LABELS[32] = "BΘΠ"
LABELS[64] = "ΦΔΘ"
LABELS[128] = "ΦKΨ"
LABELS[256] = "ZBT"
LABELS[512] = "ΣX"
LABELS[1024] = "ΣAE"
LABELS[2048] = "ΠKA"

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
