import { storiesOf } from "@storybook/vue";
import MrButton from "./button.vue";
import markdown from "./button.md";
storiesOf("Button", module).add(
  "Primary",
  () => ({
    components: { MrButton },
    template: `<div>
<mr-button type="primary">Primary</mr-button>
<mr-button disabled>Disabled</mr-button>
<mr-button round>Round</mr-button>
</div>`
  }),
  {
    notes: { markdown: markdown }
  }
);
