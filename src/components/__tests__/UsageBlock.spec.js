import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import UsageBlock from "@/components/UsageBlock.vue";

describe("UsageBlock", () => {
  it("displays the 'do' variant", () => {
    const wrapper = mount(UsageBlock, {
      props: {
        variant: "do",
      },
      slots: {
        row: "<li>Row content</li>",
      },
    });
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain("Do");
    expect(wrapper.html()).toContain("<li>Row content</li>");
  });

  it("displays the 'dont' variant", () => {
    const wrapper = mount(UsageBlock, {
      props: {
        variant: "dont",
      },
      slots: {
        row: "<li>Row content</li>",
      },
    });
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain("Don’t");
    expect(wrapper.html()).toContain("<li>Row content</li>");
  });
});
