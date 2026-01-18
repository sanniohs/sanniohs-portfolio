
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface MenuItem {
  label: string;
  path: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}
