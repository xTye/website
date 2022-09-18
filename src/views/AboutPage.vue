<script lang="ts">
import { DOM } from "@/classes/DOM";
import { SizeCalculator } from "@/classes/SizeCalculator";
import { character } from "@/classes/Character";
import { defineComponent, ref } from "vue";
import { router } from "@/router";
import NavigationBar from "@/components/NavigationBar.vue";

export default defineComponent({
  name: "AboutPage",
  setup() {
    const gameWrapper = ref<HTMLElement>();
    return {
      gameWrapper,
    };
  },
  data() {
    return {
      doors: [1, 1, 1, 1],
      area: {
        size: { x: 0, y: 0 },
      },
      changingDirectionAllowed: true,
      isRunning: false,
      interval: 0,
      clientSizes: { height: 0, width: 0 },
    };
  },
  mounted() {
    if (localStorage.getItem("reloaded")) {
      localStorage.removeItem("reloaded");
    } else {
      localStorage.setItem("reloaded", "1");
      location.reload();
    }

    this.prepareForGame();
    document.addEventListener("keydown", this.onKeyDown);
    document.addEventListener("mouseup", this.onClickDown);
  },
  methods: {
    disallowChangeOfDirection() {
      this.changingDirectionAllowed = false;
    },
    allowChangeOfDirection() {
      this.changingDirectionAllowed = true;
    },
    async prepareForGame() {
      this.setClientSizes();
      this.setAreaSizes();
      this.createArea();
      this.drawSnake();
    },
    createArea() {
      const fieldSizes = SizeCalculator.getRelevantFieldSize(
        this.clientSizes.width,
        this.clientSizes.height
      );
      for (let y = 1; y <= this.area.size.y; y += 1) {
        for (let x = 1; x <= this.area.size.x; x += 1) {
          const field = DOM.createGameAreaField(
            x,
            y,
            fieldSizes.width,
            fieldSizes.height
          );
          if (x == Math.floor(this.area.size.x / 2) && y == 1)
            DOM.addDoors(field);
          if (x == Math.floor(this.area.size.x / 2) && y == this.area.size.y)
            DOM.addDoors(field);
          if (y == Math.floor(this.area.size.y / 2) && x == 1)
            DOM.addDoors(field);
          if (y == Math.floor(this.area.size.y / 2) && x == this.area.size.x)
            DOM.addDoors(field);
          if (this.gameWrapper) this.gameWrapper.appendChild(field);
        }
      }
    },
    onClickDown(event: any) {
      const char = character.getCharacterElement();
      const el: HTMLDivElement = event.target;
      if (!char) return;
      const coord = el.id.split(":");
      const location = {
        x: +coord[0],
        y: +coord[1],
      };
      // Change when there are more about me.
      if (!location.y) return;

      if (location.x == Math.floor(this.area.size.x / 2) && location.y == 1)
        router.push("/videos");
      else if (
        location.x == Math.floor(this.area.size.x / 2) &&
        location.y == this.area.size.y
      )
        router.push("/pictures");
      else if (
        location.y == Math.floor(this.area.size.y / 2) &&
        location.x == 1
      )
        router.push("/resume");
      else if (
        location.y == Math.floor(this.area.size.y / 2) &&
        location.x == this.area.size.x
      )
        router.push("/");

      char.classList.remove(...char.classList);
      character.moveDirect(location);
      this.drawSnake();
    },
    onKeyDown(event: KeyboardEvent) {
      const codes = [
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "Space",
      ];
      if (!codes.includes(event.code)) return;
      switch (event.code) {
        case "ArrowUp":
          this.changeSnakeDirection("up");
          break;
        case "ArrowDown":
          this.changeSnakeDirection("down");
          break;
        case "ArrowLeft":
          this.changeSnakeDirection("left");
          break;
        case "ArrowRight":
          this.changeSnakeDirection("right");
          break;
        default:
          break;
      }
    },
    setClientSizes() {
      this.clientSizes = SizeCalculator.getClientSizes(this.gameWrapper);
    },
    setAreaSizes() {
      const areaSize = SizeCalculator.calculateAreaSize(
        this.clientSizes.width,
        this.clientSizes.height
      );
      this.area.size.x = areaSize.x;
      this.area.size.y = areaSize.y;
    },
    async drawSnake() {
      character?.getCharacterElement()?.classList.add("bg-white");
      character?.getCharacterElement()?.classList.add("z-10");
    },
    changeSnakeDirection(direction: string) {
      const el = character.getCharacterElement();
      if (!el) return;

      el.classList.remove(...el.classList);
      character.setDirection(direction);
      character.move(this.area.size);

      // Change when there are more about me.
      if (
        character.coords.x == Math.floor(this.area.size.x / 2) &&
        character.coords.y == 1
      )
        router.push("/videos");
      else if (
        character.coords.x == Math.floor(this.area.size.x / 2) &&
        character.coords.y == this.area.size.y
      )
        router.push("/pictures");
      else if (
        character.coords.y == Math.floor(this.area.size.y / 2) &&
        character.coords.x == 1
      )
        router.push("/resume");
      else if (
        character.coords.y == Math.floor(this.area.size.y / 2) &&
        character.coords.x == this.area.size.x
      )
        router.push("/");

      this.drawSnake();
    },
  },
  components: { NavigationBar },
});
</script>

<template>
  <!-- <div class="w-screen h-screen bg-white"></div> -->
  <div class="flex flex-col w-screen h-screen bg-black">
    <NavigationBar />
    <div
      class="relative flex flex-wrap justify-center items-center w-full h-full"
    >
      <div
        class="flex flex-wrap justify-center items-center w-full h-full"
        ref="gameWrapper"
      ></div>
      <div
        class="absolute flex justify-center items-center w-full h-full font-roboto"
      >
        <div
          class="flex flex-col justify-between z-0 w-4/5 items-center overflow-hidden"
        >
          <div class="flex flex-row justify-center">
            <div class="w-full pr-10 mr-10 border-r-2 border-white">
              <div class="text-6xl text-white">Hello!</div>
              <div class="text-xl text-white text-justify">
                My name is Robert Riley and my middle name is Tyler, but my
                friends call me Tye. Confusing right? Imagine being me! I go by
                Tyler because 3 other people in my family are named Robert, so
                that title is reserved to the elders.
              </div>
            </div>
            <div class="flex items-center w-auto justify-center">
              <img src="@/assets/aboutmepicture.png" class="w-full h-auto" />
            </div>
          </div>
          <div class="mt-5 text-white">(Hint: use your arrow keys)</div>
        </div>
      </div>
    </div>
  </div>
</template>
