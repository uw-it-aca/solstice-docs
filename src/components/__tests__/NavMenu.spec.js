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

  it("expands the getting started menu when the route contains 'getting-started'", () => {
    const wrapper = mount(NavMenu, {
      global: {
        mocks: {
          $route: {
            path: "/getting-started",
          },
        },
      },
    });
    // Assert the rendered text of the component
    const gettingStartedMenu = wrapper.find("#gettingStartedHeading");
    expect(gettingStartedMenu.attributes("aria-expanded")).toBe("true");
  });

  it("does not expand the getting started menu when the route does not contain 'getting-started'", () => {
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
    const gettingStartedMenu = wrapper.find("#gettingStartedHeading");
    expect(gettingStartedMenu.attributes("aria-expanded")).toBe("false");
  });

  it("expands the content menu when the route contains 'content'", () => {
    const wrapper = mount(NavMenu, {
      global: {
        mocks: {
          $route: {
            path: "/content",
          },
        },
      },
    });
    // Assert the rendered text of the component
    const contentMenu = wrapper.find("#contentHeading");
    expect(contentMenu.attributes("aria-expanded")).toBe("true");
  });

  it("does not expand the content menu when the route does not contain 'content'", () => {
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
    const contentMenu = wrapper.find("#contentHeading");
    expect(contentMenu.attributes("aria-expanded")).toBe("false");
  });
});
