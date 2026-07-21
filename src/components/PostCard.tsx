import React, { useState } from 'react';
import { Post, Comment } from '../types';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Smile, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PostCardProps {
  key?: string;
  post: Post;
  currentUsername: string;
  onLike: (id: string) => void;
  onAddComment: (postId: string, text: string) => void;
  onUserClick?: (username: string) => void;
}

export default function PostCard({ post, currentUsername, onLike, onAddComment, onUserClick }: PostCardProps) {
  const [commentText, setCommentText] = useState('');
  const [showComments, setShowComments] = useState(false);
  const [showDoubleTapHeart, setShowDoubleTapHeart] = useState(false);
  const [lastTap, setLastTap] = useState(0);

  // Double tap handler
  const handleImageTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (now - lastTap < DOUBLE_PRESS_DELAY) {
      if (!post.hasLiked) {
        onLike(post.id);
      }
      setShowDoubleTapHeart(true);
      setTimeout(() => setShowDoubleTapHeart(false), 800);
    }
    setLastTap(now);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    onAddComment(post.id, commentText);
    setCommentText('');
  };

  return (
    <article className="bg-white border-b border-outline-variant/30 flex flex-col w-full" id={`post_card_${post.id}`}>
      
      {/* Post Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onUserClick?.(post.username)}
            className="group outline-none"
            id={`post_author_avatar_btn_${post.id}`}
          >
            <div className="relative p-[1.5px] rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 group-active:scale-95 transition-transform">
              <div className="bg-white rounded-full p-[1.5px]">
                <img
                  src={post.avatar}
                  alt={post.username}
                  className="w-8 h-8 rounded-full object-cover"
                />
              </div>
            </div>
          </button>
          <div className="flex flex-col">
            <button
              onClick={() => onUserClick?.(post.username)}
              className="text-sm font-bold hover:underline text-on-background text-left font-display"
              id={`post_author_username_btn_${post.id}`}
            >
              {post.username}
            </button>
            {post.location && (
              <span className="text-[11px] text-on-surface-variant flex items-center gap-0.5">
                <MapPin className="w-3 h-3 text-primary" /> {post.location}
              </span>
            )}
          </div>
        </div>
        <button className="text-on-surface-variant hover:opacity-70 p-1" id={`post_options_btn_${post.id}`}>
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Post Media (with Double Tap to Like and motion animation) */}
      <div
        className="relative aspect-[4/5] w-full bg-surface-container-low overflow-hidden cursor-pointer"
        onClick={handleImageTap}
        id={`post_media_${post.id}`}
      >
        <img
          src={post.imageUrl}
          alt={post.caption}
          className="w-full h-full object-cover select-none"
          draggable="false"
        />

        {/* Floating Double Tap Heart overlay */}
        <AnimatePresence>
          {showDoubleTapHeart && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0.5, 1.2, 1], opacity: [0, 1, 1] }}
              exit={{ scale: 1.5, opacity: 0, transition: { duration: 0.2 } }}
              className="absolute inset-0 m-auto flex items-center justify-center z-10 pointer-events-none"
            >
              <Heart className="w-24 h-24 text-white fill-white drop-shadow-lg" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Action Row */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4">
          <button
            onClick={() => onLike(post.id)}
            className="hover:scale-110 active:scale-90 transition-transform duration-150 outline-none"
            id={`post_like_btn_${post.id}`}
          >
            <Heart
              className={`w-6 h-6 transition-colors ${
                post.hasLiked ? 'text-red-500 fill-red-500' : 'text-on-background'
              }`}
            />
          </button>
          <button
            onClick={() => setShowComments(!showComments)}
            className="hover:scale-110 active:scale-90 transition-transform duration-150 outline-none"
            id={`post_comments_toggle_${post.id}`}
          >
            <MessageCircle className="w-6 h-6 text-on-background" />
          </button>
          <button
            className="hover:scale-110 active:scale-90 transition-transform duration-150 outline-none"
            id={`post_share_btn_${post.id}`}
            onClick={() => alert(`Shared post by @${post.username}!`)}
          >
            <Send className="w-6 h-6 text-on-background" />
          </button>
        </div>
        <button className="hover:scale-110 active:scale-90 transition-transform duration-150 outline-none" id={`post_bookmark_btn_${post.id}`}>
          <Bookmark className="w-6 h-6 text-on-background" />
        </button>
      </div>

      {/* Post Details & Captions */}
      <div className="px-4 pb-3 flex flex-col gap-1">
        <span className="text-sm font-bold text-on-background" id={`post_likes_count_${post.id}`}>
          {post.likes.toLocaleString()} likes
        </span>
        <div className="text-sm text-on-background leading-relaxed">
          <span
            onClick={() => onUserClick?.(post.username)}
            className="font-bold mr-1.5 cursor-pointer hover:underline font-display"
          >
            {post.username}
          </span>
          {post.caption}
        </div>

        {post.comments.length > 0 && (
          <button
            onClick={() => setShowComments(!showComments)}
            className="text-on-surface-variant text-xs text-left mt-1 hover:underline outline-none"
            id={`post_comments_view_all_${post.id}`}
          >
            {showComments ? 'Hide comments' : `View all ${post.comments.length} comments`}
          </button>
        )}

        {/* List of comments */}
        <AnimatePresence>
          {showComments && post.comments.length > 0 && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="flex flex-col gap-2 mt-2 pt-2 border-t border-outline-variant/10 overflow-hidden"
              id={`post_comments_list_${post.id}`}
            >
              {post.comments.map((comment) => (
                <div key={comment.id} className="text-xs text-on-background flex justify-between items-start">
                  <div>
                    <span className="font-bold mr-1.5 font-display hover:underline cursor-pointer" onClick={() => onUserClick?.(comment.username)}>
                      {comment.username}
                    </span>
                    {comment.text}
                  </div>
                  <span className="text-[10px] text-on-surface-variant">{comment.timeAgo}</span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <span className="text-outline-variant text-[10px] uppercase tracking-wider mt-1.5 font-mono">
          {post.timeAgo}
        </span>
      </div>

      {/* Add Comment Row */}
      <form onSubmit={handleCommentSubmit} className="border-t border-outline-variant/20 px-4 py-2 flex items-center gap-2">
        <Smile className="w-5 h-5 text-on-surface-variant cursor-pointer hover:text-primary transition-colors" />
        <input
          type="text"
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="flex-1 bg-transparent border-none text-xs text-on-background placeholder-on-surface-variant focus:ring-0 p-1"
          id={`post_comment_input_${post.id}`}
        />
        <button
          type="submit"
          disabled={!commentText.trim()}
          className="text-primary font-bold text-xs disabled:opacity-40 hover:opacity-80 transition-opacity px-2"
          id={`post_comment_submit_${post.id}`}
        >
          Post
        </button>
      </form>

    </article>
  );
}
