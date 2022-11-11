export interface INode {
  id?: number;
  parent?: string;
  name?: string;
}

export const defaultValue: Readonly<INode> = {};
