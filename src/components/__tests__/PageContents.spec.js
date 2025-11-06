import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import PageContents from "@/components/PageContents.vue";

describe("PageContents", () => {
  it("displays the slot content", () => {
    const wrapper = mount(PageContents, {
      slots: {
        default: '<li><a href="#">Link 1</a></li>',
      },
      global: {
        provide: {
          mq: {
            xlMinus: true,
          },
        },
      },
    });
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain("On this page");
    expect(wrapper.html()).toContain('<li><a href="#">Link 1</a></li>');
  });
});
