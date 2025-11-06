import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import CodeBlock from "@/components/CodeBlock.vue";

describe("CodeBlock", () => {
  it("displays the description slot content", () => {
    const wrapper = mount(CodeBlock, {
      slots: {
        description: "This is a description",
      },
    });
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain("This is a description");
  });
});
