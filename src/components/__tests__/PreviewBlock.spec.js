import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import PreviewBlock from "@/components/PreviewBlock.vue";

describe("PreviewBlock", () => {
  it("displays the preview slot content", () => {
    const wrapper = mount(PreviewBlock, {
      slots: {
        preview: "<button>Click me</button>",
      },
    });
    // Assert the rendered text of the component
    expect(wrapper.html()).toContain("<button>Click me</button>");
  });
});
