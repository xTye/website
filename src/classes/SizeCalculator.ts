export class SizeCalculator {
  static getClientSizes(el: HTMLElement | undefined) {
    return {
      height: el ? el.clientHeight : 0,
      width: el ? el.clientWidth : 0,
    };
  }

  static getRelevantFieldSize(clientWidth: number, clientHeight: number) {
    let fieldHeight = 30;
    let fieldWidth = 30;

    if (clientWidth < 1000 || clientHeight < 500) {
      fieldHeight = 20;
      fieldWidth = 20;
    }

    return {
      height: `${fieldHeight}px`,
      width: `${fieldWidth}px`,
      pureHeight: fieldHeight,
      pureWidth: fieldWidth,
    };
  }

  static calculateAreaSize(clientWidth: number, clientHeight: number) {
    const fieldSizes = SizeCalculator.getRelevantFieldSize(
      clientWidth,
      clientHeight
    );
    const x = Math.floor(clientWidth / fieldSizes.pureWidth);
    const y = Math.floor(clientHeight / fieldSizes.pureHeight);

    return { x, y };
  }
}
