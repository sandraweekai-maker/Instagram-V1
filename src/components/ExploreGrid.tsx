import React, { useState } from 'react';
import { Post } from '../types';
import { Layers, Play, Heart, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import PostCard from './PostCard';

interface ExploreGridProps {
  posts: Post[];
  onLike: (id: string) => void;
  onAddComment: (postId: string, text: string) => void;
  onUserClick?: (username: string) => void;
}

export default function ExploreGrid({ posts, onLike, onAddComment, onUserClick }: ExploreGridProps) {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const getGridClasses = (index: number) => {
    // We implement the beautiful asymmetric Instagram grid pattern (modulo 10)
    const pos = index % 10;
    if (pos === 0) {
      // Big feature tile on the left
      return 'col-span-2 row-span-2 relative aspect-square group overflow-hidden bg-surface-container';
    }
    if (pos === 7) {
      // Big feature tile on the right (starting at col 2)
      return 'col-span-2 row-span-2 relative aspect-square group overflow-hidden bg-surface-container';
    }
    return 'relative aspect-square group overflow-hidden bg-surface-container';
  };

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-0.5 bg-outline-variant/15" id="explore_grid_container">
        {posts.map((post, idx) => {
          const gridClasses = getGridClasses(idx);
          return (
            <div
              key={post.id}
              className={gridClasses}
              onClick={() => handlePostClick(post)}
              id={`explore_item_${post.id}`}
            >
              <img
                src={post.imageUrl}
                alt={post.caption}
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />

              {/* Top-Right Badges */}
              <div className="absolute top-2 right-2 z-10 text-white pointer-events-none drop-shadow-md">
                {post.isVideo && <Play className="w-5 h-5 fill-white" />}
                {post.isCarousel && <Layers className="w-4 h-4 text-white" />}
              </div>

              {/* Hover Overlay with Likes & Comments Count */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white cursor-pointer select-none">
                <div className="flex items-center gap-1.5 font-semibold text-sm">
                  <Heart className="w-5 h-5 fill-white" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1.5 font-semibold text-sm">
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>{post.comments.length}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* High-fidelity Detailed Post Modal / Lightbox */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4" id="explore_lightbox_overlay">
            <div className="absolute inset-0" onClick={() => setSelectedPost(null)} />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-lg bg-white rounded-xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
              id="explore_lightbox_container"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-3 right-3 z-20 p-1.5 bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors"
                id="explore_lightbox_close_btn"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Embedded Interactive PostCard */}
              <div className="overflow-y-auto hide-scrollbar">
                <PostCard
                  post={posts.find((p) => p.id === selectedPost.id) || selectedPost}
                  currentUsername="pixel_explorer"
                  onLike={(id) => {
                    onLike(id);
                    // Live update inside the modal state if needed
                    setSelectedPost((prev) => {
                      if (!prev) return null;
                      return {
                        ...prev,
                        likes: prev.hasLiked ? prev.likes - 1 : prev.likes + 1,
                        hasLiked: !prev.hasLiked,
                      };
                    });
                  }}
                  onAddComment={(postId, text) => {
                    onAddComment(postId, text);
                    setSelectedPost((prev) => {
                      if (!prev) return null;
                      return {
                        ...prev,
                        comments: [
                          ...prev.comments,
                          { id: String(Date.now()), username: 'pixel_explorer', text, timeAgo: 'now' },
                        ],
                      };
                    });
                  }}
                  onUserClick={(username) => {
                    setSelectedPost(null);
                    onUserClick?.(username);
                  }}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
