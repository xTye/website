import { DOM } from "@/classes/DOM";

class Character {
  _state = {
    speed: 150,
    direction: "right",
    x: 1,
    y: 1,
  };

  get speed() {
    return this._state.speed;
  }

  get direction() {
    return this._state.direction;
  }

  get coords() {
    return { x: this._state.x, y: this._state.y };
  }

  setDirection(direction: string) {
    this._state.direction = direction;
  }

  move(areaSize: { x: number; y: number }) {
    switch (this.direction) {
      case "up":
        if (this._state.y === 1) {
          this._state.y = areaSize.y;
        } else {
          this._state.y = this._state.y - 1;
        }
        break;

      case "down":
        if (this._state.y === areaSize.y) {
          this._state.y = 1;
        } else {
          this._state.y = this._state.y + 1;
        }
        break;

      case "left":
        if (this._state.x === 1) {
          this._state.x = areaSize.x;
        } else {
          this._state.x = this._state.x - 1;
        }
        break;

      case "right":
        if (this._state.x === areaSize.x) {
          this._state.x = 1;
        } else {
          this._state.x = this._state.x + 1;
        }
        break;

      default:
        break;
    }
  }

  moveDirect(location: { x: number; y: number }) {
    this._state.x = location.x;
    this._state.y = location.y;
  }

  setSpeed(speed: number) {
    this._state.speed = speed;
  }

  getCharacterElement() {
    return DOM.getFieldByCoords(this._state.x, this._state.y);
  }
}

export const character = new Character();
