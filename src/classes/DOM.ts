export class DOM {
  static createGameAreaField(
    x: number,
    y: number,
    width: string,
    height: string
  ) {
    const field = document.createElement("div");

    field.classList.add("z-10");
    field.setAttribute("id", `${x}:${y}`);
    field.style.width = width;
    field.style.height = height;

    return field;
  }

  static addDoors(field: HTMLDivElement) {
    field.classList.add("bg-white");
    field.classList.add("door");
  }

  static getFieldByCoords(x: number, y: number) {
    return document.getElementById(`${x}:${y}`);
  }
}
