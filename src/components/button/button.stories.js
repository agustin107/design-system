import { Button } from "./button"

export default {
  name: 'Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } }
}

const template = (args) => <Button {...args} />

export const primary = template.bind({})
primary.args = {
  primary: true,
  children: "Button",
}

export const secondary = (args) => <Button>Prueba</Button>
