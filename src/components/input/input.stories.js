import { Input } from "./input"

export default {
  name: 'Input',
  component: Input,
  argTypes: { }
}

const template = (args) => <Input {...args} />

export const number = () => <Input type="number" placeholder="Inserte un numero" />

export const email = () => <Input type="email" placeholder="Inserte un email" />

export const phone = () => <Input type="phone" placeholder="Inserte un telefono" />