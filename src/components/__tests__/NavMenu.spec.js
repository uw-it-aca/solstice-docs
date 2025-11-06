import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import NavMenu from "@/components/NavMenu.vue";

describe("NavMenu", () => {
  it("displays the navigation menu", () => {
    const wrapper = mount(NavMenu, {
      global: {
        mocks: {
          $route: {
            path: "/",
          },
        },
      },
    });
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain("Getting Started");
  });
});
