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

// export type chats = chat[] | null;
