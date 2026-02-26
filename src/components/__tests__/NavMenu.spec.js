import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { createBootstrap } from "bootstrap-vue-next";
import NavMenu from "@/components/NavMenu.vue";

describe("NavMenu", () => {
  const wrapper = mount(NavMenu, {
    global: {
      plugins: [createBootstrap()],
      mocks: {
        $route: {
          path: "/",
        },
      },
    },
  });

  it("displays the navigation menu", () => {
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain("Getting Started");
  });

  it("expands the getting started menu when the route contains 'getting-started'", () => {
    const wrapper = mount(NavMenu, {
      global: {
        plugins: [createBootstrap()],
        mocks: {
          $route: {
            path: "/getting-started",
          },
        },
      },
    });
    // Assert the rendered text of the component
    const gettingStartedMenu = wrapper.find("#getting-startedHeading");
    expect(gettingStartedMenu.attributes("aria-expanded")).toBe("true");
  });

  it("does not expand the getting started menu when the route does not contain 'getting-started'", () => {
    const wrapper = mount(NavMenu, {
      global: {
        plugins: [createBootstrap()],
        mocks: {
          $route: {
            path: "/",
          },
        },
      },
    });
    // Assert the rendered text of the component
    const gettingStartedMenu = wrapper.find("#getting-startedHeading");
    expect(gettingStartedMenu.attributes("aria-expanded")).toBe("false");
  });

  it("expands the content menu when the route contains 'content'", () => {
    const wrapper = mount(NavMenu, {
      global: {
        plugins: [createBootstrap()],
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
        plugins: [createBootstrap()],
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

  it("expands the foundations menu when the route contains 'foundations'", () => {
    const wrapper = mount(NavMenu, {
      global: {
        plugins: [createBootstrap()],
        mocks: {
          $route: {
            path: "/foundations",
          },
        },
      },
    });
    // Assert the rendered text of the component
    const contentMenu = wrapper.find("#foundationsHeading");
    expect(contentMenu.attributes("aria-expanded")).toBe("true");
  });

  it("does not expand the foundations menu when the route does not contain 'foundations'", () => {
    const wrapper = mount(NavMenu, {
      global: {
        plugins: [createBootstrap()],
        mocks: {
          $route: {
            path: "/",
          },
        },
      },
    });
    // Assert the rendered text of the component
    const contentMenu = wrapper.find("#foundationsHeading");
    expect(contentMenu.attributes("aria-expanded")).toBe("false");
  });

  it("expands the components menu when the route contains 'components'", () => {
    const wrapper = mount(NavMenu, {
      global: {
        plugins: [createBootstrap()],
        mocks: {
          $route: {
            path: "/components",
          },
        },
      },
    });
    // Assert the rendered text of the component
    const contentMenu = wrapper.find("#componentsHeading");
    expect(contentMenu.attributes("aria-expanded")).toBe("true");
  });

  it("does not expand the components menu when the route does not contain 'components'", () => {
    const wrapper = mount(NavMenu, {
      global: {
        plugins: [createBootstrap()],
        mocks: {
          $route: {
            path: "/",
          },
        },
      },
    });
    // Assert the rendered text of the component
    const contentMenu = wrapper.find("#componentsHeading");
    expect(contentMenu.attributes("aria-expanded")).toBe("false");
  });
});
