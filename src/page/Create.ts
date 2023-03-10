import HTMLElementViewModel from "../core/HTMLElementViewModel";
import Page, { PageProps } from "../core/Page";

import "../components/MessageForm";

const html = /* html */ `
<hny-message-form m-bidata-type="type"></hny-message-form>

<style scoped>
  :host {
    display: block;
    height: 100%;
  }
</style>
`;

window.customElements.define(
  "hny-create-page",
  class extends HTMLElementViewModel<{
    type: string;
  }> {
    constructor() {
      super({
        html,
        data: {
          type: "",
        },
        mounted: () => {
          this.$data.type = "create";
        },
      });
    }
  }
);

const CreatePage = class extends Page {
  constructor({ target, component }: PageProps) {
    super({ target, component });
  }

  setup(): void {
    const createPage = document.createElement("hny-create-page");
    this.$target.appendChild(createPage);
  }
};

export default CreatePage;
