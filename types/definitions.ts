export type NavItemsType = {
  id: number;
  title: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CustomUser = {
  id?: string | null;
  name?: string | null;
  email?: string | null;
  role?: string | null;
};

export type BlockType = {
  id?: string | null;
  title: string;
};

export type ComponentType = {
  title: string;
  code: string;
  blockId: string;
};
