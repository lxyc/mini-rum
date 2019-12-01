import { shallowMount } from "@vue/test-utils";
import MrButton from "./button.vue";

describe("Button", () => {
  test("is a Vue instance", () => {
    const wrapper = shallowMount(MrButton);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("positive color", () => {
    const wrapper = shallowMount(MrButton, {
      propsData: {
        type: "positive"
      }
    });
    expect(wrapper.classes("mr-button--positive")).toBeTruthy();
  });
});
