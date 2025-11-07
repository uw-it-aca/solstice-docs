import { mount } from "@vue/test-utils";
import { BLink } from "bootstrap-vue-next";
import { describe, expect, it } from "vitest";
import DescriptionBlock from "@/components/DescriptionBlock.vue";

describe("DescriptionBlock", () => {
  it("displays the link when provided", () => {
    const wrapper = mount(DescriptionBlock, {
      props: {
        name: "Test Component",
        link: "/test-link",
      },
    });
    const link = wrapper.findComponent(BLink);
    expect(link.exists()).toBe(true);
    expect(link.props("to")).toBe("/test-link");
    expect(wrapper.text()).toContain("View Test Component");
  });

  it('displays "Coming soon!" when link is empty', () => {
    const wrapper = mount(DescriptionBlock, {
      props: {
        name: "Test Component",
        link: "",
      },
    });
    expect(wrapper.text()).toContain("Coming soon!");
  });

  it('displays "Coming soon!" when link is null', () => {
    const wrapper = mount(DescriptionBlock, {
      props: {
        name: "Test Component",
        link: null,
      },
    });
    expect(wrapper.text()).toContain("Coming soon!");
  });
});
