import { mount } from "@vue/test-utils";
import { ScrollSpy } from "bootstrap";
import { describe, expect, it, vi } from "vitest";
import PageContents from "@/components/PageContents.vue";

vi.mock("bootstrap", () => {
  return {
    ScrollSpy: vi.fn(),
  };
});

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

  it("initializes ScrollSpy on larger screens", () => {
    const scrollbody = document.createElement("div");
    scrollbody.id = "scrollbody";
    document.body.appendChild(scrollbody);

    mount(PageContents, {
      global: {
        provide: {
          mq: {
            xlMinus: false,
          },
        },
      },
    });

    expect(ScrollSpy).toHaveBeenCalledWith(scrollbody, {
      target: "#TableOfContents",
    });
  });
});
