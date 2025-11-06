import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import DescriptionBlock from "@/components/DescriptionBlock.vue";

describe("DescriptionBlock", () => {
  it("displays the name prop", () => {
    const wrapper = mount(DescriptionBlock, {
      props: {
        name: "Test Component",
      },
    });
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain("Test Component");
  });
});
