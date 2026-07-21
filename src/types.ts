export interface StoryItem {
  id: string;
  url: string;
  type: 'image' | 'video';
}

export interface Story {
  id: string;
  username: string;
  avatar: string;
  viewed: boolean;
  items: StoryItem[];
}

export interface Comment {
  id: string;
  username: string;
  text: string;
  timeAgo: string;
}

export interface Post {
  id: string;
  username: string;
  avatar: string;
  imageUrl: string;
  likes: number;
  hasLiked: boolean;
  caption: string;
  comments: Comment[];
  timeAgo: string;
  isReel?: boolean;
  isCarousel?: boolean;
  isVideo?: boolean;
  location?: string;
  category?: string; // e.g. "Shop", "Decor", "Travel", "Architecture", "Food", "Art"
}

export type ActiveTab = 'home' | 'search' | 'add' | 'reels' | 'profile';
