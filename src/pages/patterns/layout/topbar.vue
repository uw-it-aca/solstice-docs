<template>
  <Layout :page-title="pageTitle">
    <template #breadcrumb>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <a href="/patterns/">Patterns</a>
          </li>
          <li class="breadcrumb-item">
            <a href="/patterns/layout/">Layout</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ pageTitle }}
          </li>
        </ol>
      </nav>
    </template>
    <template #lead>
      Topbar takes heavy influence from MyUW's layout. It has a header-based
      design meant to focus the user on the contents below.
    </template>
    <template #toc>
      <PageContents>
        <nav id="TableOfContents">
          <ul class="list-unstyled m-0">
            <li>
              <a
                href="#variants"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Variants</a
              >
            </li>
            <li>
              <a
                href="#options"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Options</a
              >
            </li>
            <li>
              <a
                href="#anatomy"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Anatomy</a
              >
            </li>
            <li>
              <a
                href="#usage"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Usage</a
              >
            </li>
            <li>
              <a
                href="#accessibility"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Accessibility</a
              >
            </li>
            <li>
              <a
                href="#implementation"
                class="px-2 py-1 text-muted link-underline link-underline-opacity-0 rounded d-block bg-body-tertiary-hover"
                >Implementation</a
              >
            </li>
          </ul>
        </nav>
      </PageContents>
    </template>
    <template #content>
      <h2 id="variants">Variants</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga
        corporis totam eligendi molestiae ex aperiam soluta, consectetur
        accusamus accusantium officia praesentium, magni numquam sunt minus
        architecto libero enim tempore!
      </p>

      <h2 id="options">Options</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quibusdam
        doloremque quaerat nulla enim, magni ut pariatur est dolorum ullam sint
        rerum odio hic perspiciatis, commodi adipisci, vero sapiente impedit?
      </p>

      <h2 id="anatomy">Anatomy</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, sit, quo
        ab pariatur, recusandae obcaecati necessitatibus doloribus ad a dolor
        minus saepe? Quaerat cupiditate ipsa ut nulla nostrum ex aut!
      </p>

      <h2 id="usage">Usage</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
        facilis, ipsum dignissimos quibusdam consectetur dolores soluta nemo
        placeat totam dolorem suscipit est sunt eum, debitis exercitationem
        voluptate ducimus repellat necessitatibus?
      </p>

      <h2 id="accessibility">Accessibility</h2>
      <p>
        APG:
        <a
          href="https://www.w3.org/WAI/ARIA/apg/example-index/landmarks/index.html"
          target="_blank"
          >https://www.w3.org/WAI/ARIA/apg/example-index/landmarks/index.html</a
        >
      </p>

      <h2 id="implementation">Implementation</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
        facilis, ipsum dignissimos quibusdam consectetur dolores soluta nemo
        placeat totam dolorem suscipit est sunt eum, debitis exercitationem
        voluptate ducimus repellat necessitatibus?
      </p>

      <h2 class="fw-bold">Usage</h2>

      <h3>Markup</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis minus
        tenetur cumque facere doloremque possimus quidem est repudiandae nam, a
        quaerat amet. Inventore ut eligendi id. Suscipit ab facilis earum?
      </p>
      <CodeBlock>
        <template #markup>
          <pre class="language-html">
<code>&lt;axdd-topbar :app-name="'App Name'" :app-root-url="'/'">&lt;/axdd-topbar>
</code></pre>
        </template>
      </CodeBlock>

      <h3>Props</h3>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" class="w-25">Prop</th>
            <th scope="col">Required</th>
            <th scope="col">Type</th>
            <th scope="col">Default</th>
            <th scope="col" class="w-50">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><code>:app-name</code></th>
            <td>true</td>
            <td>String</td>
            <td>appName</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
          <tr>
            <th scope="row"><code>:app-root-url</code></th>
            <td>true</td>
            <td>String</td>
            <td>#</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
        </tbody>
      </table>

      <h3>Slots</h3>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col" class="w-25">Slot</th>
            <th scope="col">Required</th>
            <th scope="col">Fallback</th>
            <th scope="col" class="w-50">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><code>#profile</code></th>
            <td>false</td>
            <td>yes</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
          <tr>
            <th scope="row"><code>#bar</code></th>
            <td>false</td>
            <td>empty</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
          <tr>
            <th scope="row"><code>#navigation</code></th>
            <td>false</td>
            <td>empty</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
          <tr>
            <th scope="row"><code>#main</code></th>
            <td>true</td>
            <td>empty</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
          <tr>
            <th scope="row"><code>#aside</code></th>
            <td>false</td>
            <td>empty</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
          <tr>
            <th scope="row"><code>#footer</code></th>
            <td>false</td>
            <td>yes</td>
            <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</td>
          </tr>
        </tbody>
      </table>
      <hr class="mb-5 w-25 d-inline-block" />

      <h2 class="fw-bold">Preview</h2>
      <h3>Basic structure</h3>
      <CodeBlock>
        <template #preview>
          <STopbar :app-name="'TopBar'" :is-preview="true" class="border">
            <template #profile>profile here...</template>
            <template #main>
              <div class="row my-4">
                <div class="col">
                  <div
                    class="bg-gray p-4 text-center"
                    style="line-height: 250px"
                  >
                    content here...
                  </div>
                </div>
              </div>
            </template>
            <template #footer>footer here...</template>
          </STopbar>
        </template>
        <template #markup>
          <pre class="language-html">
<code>&lt;axdd-topbar :app-name="'TopBar'">
  &lt;template #profile>
    profile here...
  &lt;/template>
  &lt;template #main>
    content here...
  &lt;/template>
  &lt;template #footer>
    footer here...
  &lt;/template>
&lt;/axdd-topbar>
</code></pre>
        </template>
      </CodeBlock>

      <h3>With Navigation</h3>
      <CodeBlock>
        <template #preview>
          <STopbar
            :app-name="'TopBar'"
            :user-name="'javerage'"
            :is-preview="true"
            class="border"
          >
            <template #profile> profile here... </template>
            <template #navigation>
              <div class="row mt-4">
                <div class="col">
                  <div class="bg-gray p-4 text-center">nav here...</div>
                </div>
              </div>
            </template>
            <template #aside>
              <div class="row mt-4">
                <div class="col">
                  <div class="bg-gray p-4 text-center">aside here...</div>
                </div>
              </div>
            </template>
            <template #main>
              <div class="row my-4">
                <div class="col">
                  <div
                    class="bg-gray p-4 text-center"
                    style="line-height: 250px"
                  >
                    content here...
                  </div>
                </div>
              </div>
            </template>
            <template #footer></template>
          </STopbar>
        </template>
        <template #vue>
          <pre class="language-html">
<code>&lt;axdd-topbar>
  &lt;template #navigation>
    nav here...
  &lt;/template>
  &lt;template #aside>
    aside here...
  &lt;/template>
&lt;/axdd-topbar>
</code></pre>
        </template>
      </CodeBlock>

      <h3>With Banner Bar</h3>
      <CodeBlock>
        <template #preview>
          <STopbar :app-name="'TopBar'" :is-preview="true" class="border">
            <template #profile> profile here... </template>
            <template #bar>
              <div class="row">
                <div class="col">
                  <div class="bg-gray p-2 text-center">bar here...</div>
                </div>
              </div>
            </template>
            <template #navigation>
              <div class="row mt-4">
                <div class="col">
                  <div class="bg-gray p-4 text-center">nav here...</div>
                </div>
              </div>
            </template>
            <template #main>
              <div class="row my-4">
                <div class="col">
                  <div
                    class="bg-gray p-4 text-center"
                    style="line-height: 250px"
                  >
                    content here...
                  </div>
                </div>
              </div>
            </template>
            <template #footer></template>
          </STopbar>
        </template>
        <template #vue>
          <pre class="language-html">
<code>&lt;axdd-topbar>
  &lt;template #bar>
    bar here...
  &lt;/template>
&lt;/axdd-topbar>
</code></pre>
        </template>
      </CodeBlock>
    </template>
    <template #author>Charlon Palacay</template>
  </Layout>
</template>

<script>
import Layout from "@/layout.vue";
import CodeBlock from "@/components/CodeBlock.vue";
import PageContents from "@/components/PageContents.vue";

import { STopbar } from "solstice-vue";

export default {
  name: "DocsTopbar",
  components: {
    Layout,
    PageContents,
    CodeBlock,
    STopbar,
  },
  data() {
    return {
      pageTitle: "Topbar",
    };
  },
};
</script>
