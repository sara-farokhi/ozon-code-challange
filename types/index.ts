export interface chat {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

export interface chats {
  chats: chat[] | null;
}

export interface footerItem {
  name: string;
  caption: string;
}

export interface chatObject {
  chatProps: {
    albumId: number;
    id: number | string;
    thumbnailUrl: string;
    title: string;
    url: string;
  };
}
