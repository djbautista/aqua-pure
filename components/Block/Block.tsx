import { Block1 } from '@/components/Blocks';
import { Component } from '@/model/Component';

export interface BlockProps {
  component: Component;
}

export default function Block({ component }: BlockProps) {
  const { __component } = component;

  switch (__component) {
    case 'text.block1':
      return <Block1 {...component} />;
    case 'text.block2':
      return <div>text.block2</div>;
    case 'text.block3':
      return <div>text.block3</div>;
    default:
      return null;
  }
}

export { Block };