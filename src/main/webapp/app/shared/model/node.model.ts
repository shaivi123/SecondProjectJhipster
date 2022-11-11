export interface INode {
  id?: number;
  parent?: string;
  name?: string;
  designation?: string;
}

export const defaultValue: Readonly<INode> = {};
