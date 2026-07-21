/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ActiveTab,
  Post,
  Story,
  Comment,
} from './types';
import {
  CURRENT_USER,
  INITIAL_FEED_POSTS,
  INITIAL_STORIES,
  EXPLORE_POSTS,
  PROFILE_POSTS,
} from './data';
import PostCard from './components/PostCard';
import ExploreGrid from './components/ExploreGrid';
import StoryViewer from './components/StoryViewer';
import CreatePostModal from './components/CreatePostModal';
import FilterTuneModal from './components/FilterTuneModal';
import {
  Home,
  Search,
  PlusSquare,
  Film,
  User,
  Heart,
  Send,
  SlidersHorizontal,
  ChevronLeft,
  Settings,
  Grid,
  Bookmark,
  UserCheck,
  Edit2,
  Share2,
  Check,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  // Navigation & Overlays State
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [activeStoryIndex, setActiveStoryIndex] = useState<number | null>(null);
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedUserView, setSelectedUserView] = useState<string | null>(null);

  // App Content States
  const [feedPosts, setFeedPosts] = useState<Post[]>(INITIAL_FEED_POSTS);
  const [explorePosts, setExplorePosts] = useState<Post[]>(EXPLORE_POSTS);
  const [profilePosts, setProfilePosts] = useState<Post[]>(PROFILE_POSTS);
  const [stories, setStories] = useState<Story[]>(INITIAL_STORIES);
  const [currentUser, setCurrentUser] = useState(CURRENT_USER);

  // Search & Filtering State (Explore Tab)
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState<'standard' | 'likes' | 'alphabetical'>('standard');
  const [mediaType, setMediaType] = useState<'all' | 'video' | 'image'>('all');

  // Profile Edit State
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editFullName, setEditFullName] = useState(currentUser.fullName);
  const [editBio, setEditBio] = useState(currentUser.bio);
  const [editLink, setEditLink] = useState(currentUser.link);

  // Profile Tab switcher ('grid' | 'reels' | 'tagged')
  const [profileTab, setProfileTab] = useState<'grid' | 'reels' | 'tagged'>('grid');

  // Interactive callbacks
  const handleLikePost = (postId: string) => {
    // Helper to toggle like on post arrays
    const toggleLike = (postsList: Post[]): Post[] =>
      postsList.map((post) => {
        if (post.id === postId) {
          const hasLiked = !post.hasLiked;
          return {
            ...post,
            hasLiked,
            likes: hasLiked ? post.likes + 1 : post.likes - 1,
          };
        }
        return post;
      });

    setFeedPosts((prev) => toggleLike(prev));
    setExplorePosts((prev) => toggleLike(prev));
    setProfilePosts((prev) => toggleLike(prev));
  };

  const handleAddComment = (postId: string, text: string) => {
    const newComment: Comment = {
      id: String(Date.now()),
      username: 'pixel_explorer',
      text,
      timeAgo: 'now',
    };

    const appendComment = (postsList: Post[]): Post[] =>
      postsList.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [...post.comments, newComment],
          };
        }
        return post;
      });

    setFeedPosts((prev) => appendComment(prev));
    setExplorePosts((prev) => appendComment(prev));
    setProfilePosts((prev) => appendComment(prev));
  };

  const handleAddPost = (postData: {
    imageUrl: string;
    caption: string;
    location: string;
    category: string;
  }) => {
    const newPostId = `custom_post_${Date.now()}`;
    const newPost: Post = {
      id: newPostId,
      username: 'pixel_explorer',
      avatar: currentUser.avatar,
      imageUrl: postData.imageUrl,
      likes: 0,
      hasLiked: false,
      caption: postData.caption,
      comments: [],
      timeAgo: 'JUST NOW',
      location: postData.location || undefined,
      category: postData.category,
    };

    // Prepend to feeds
    setFeedPosts((prev) => [newPost, ...prev]);
    setExplorePosts((prev) => [newPost, ...prev]);
    setProfilePosts((prev) => [newPost, ...prev]);

    // Update profile counter
    setCurrentUser((prev) => ({
      ...prev,
      postsCount: prev.postsCount + 1,
    }));

    // Redirect to home feed to see it immediately!
    setActiveTab('home');
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentUser((prev) => ({
      ...prev,
      fullName: editFullName,
      bio: editBio,
      link: editLink,
    }));
    setIsEditingProfile(false);
  };

  // Filter explore posts dynamically
  const filteredExplorePosts = explorePosts
    .filter((post) => {
      // 1. Search Query check
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesUsername = post.username.toLowerCase().includes(query);
        const matchesCaption = post.caption.toLowerCase().includes(query);
        const matchesCategory = post.category?.toLowerCase().includes(query);
        if (!matchesUsername && !matchesCaption && !matchesCategory) return false;
      }
      // 2. Category selection check
      if (selectedCategory !== 'All') {
        if (post.category !== selectedCategory) return false;
      }
      // 3. Media Type selection check
      if (mediaType === 'video' && !post.isVideo) return false;
      if (mediaType === 'image' && post.isVideo) return false;

      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'likes') return b.likes - a.likes;
      if (sortBy === 'alphabetical') return a.username.localeCompare(b.username);
      return 0; // Default order
    });

  // Calculate generic simulated details for other users if viewed
  const getSimulatedUser = (username: string) => {
    // Gather avatar from author posts or mock a pretty card
    const postFromUser = [...feedPosts, ...explorePosts].find((p) => p.username === username);
    return {
      username,
      fullName: username.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      avatar: postFromUser?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      bio: `Visual creator based in California. Inspired by architecture & light. ✨ DM for collabs.`,
      link: `linktr.ee/${username}`,
      postsCount: 42,
      followersCount: '48.2K',
      followingCount: '394',
    };
  };

  const viewedUser = selectedUserView ? getSimulatedUser(selectedUserView) : null;
  const viewedUserPosts = selectedUserView
    ? [...feedPosts, ...explorePosts, ...profilePosts].filter((p) => p.username === selectedUserView)
    : [];

  return (
    <div className="bg-background min-h-screen text-on-background flex flex-col antialiased">
      
      {/* Top Navbar */}
      <header className="fixed top-0 w-full z-40 bg-background/85 backdrop-blur-md border-b border-outline-variant/20">
        <div className="flex justify-between items-center h-[60px] px-4 max-w-md mx-auto w-full">
          {selectedUserView ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedUserView(null)}
                className="p-1 hover:bg-surface-container rounded-full text-on-background transition-colors"
                id="back_to_feed_btn"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <h1 className="font-display text-base font-bold tracking-tight text-on-background">
                {selectedUserView}
              </h1>
            </div>
          ) : activeTab === 'home' ? (
            <h1 className="font-display text-[24px] font-extrabold tracking-tight text-on-background select-none">
              Instagram
            </h1>
          ) : activeTab === 'search' ? (
            <div className="flex-1 flex items-center gap-2">
              <div className="flex-1 bg-surface-container rounded-lg h-[36px] flex items-center px-3 gap-2 focus-within:ring-1 focus-within:ring-primary transition-shadow">
                <Search className="w-5 h-5 text-on-surface-variant shrink-0" />
                <input
                  type="text"
                  placeholder="Search architecture, food, travel..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none text-xs focus:ring-0 text-on-surface font-sans w-full placeholder:text-on-surface-variant p-0 outline-none"
                  id="search_input"
                />
              </div>
              <button
                onClick={() => setIsFilterOpen(true)}
                className="w-9 h-9 flex items-center justify-center bg-surface-container rounded-lg hover:opacity-80 transition-opacity active:scale-95 text-on-background"
                id="tune_filters_btn"
              >
                <SlidersHorizontal className="w-4 h-4" />
              </button>
            </div>
          ) : activeTab === 'profile' ? (
            <div className="flex items-center justify-between w-full">
              <h1 className="font-display text-base font-bold tracking-tight text-on-background select-none">
                {currentUser.username}
              </h1>
              <button className="p-1.5 hover:bg-surface-container rounded-full text-on-background" id="profile_settings_btn">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          ) : activeTab === 'reels' ? (
            <h1 className="font-display text-lg font-bold text-on-background select-none">
              Reels
            </h1>
          ) : (
            <h1 className="font-display text-base font-bold text-on-background">
              Instagram
            </h1>
          )}

          {/* Home Icons when viewing the feed */}
          {!selectedUserView && activeTab === 'home' && (
            <div className="flex items-center gap-3">
              <button
                className="p-1.5 hover:bg-surface-container rounded-full text-on-background transition-colors active:scale-95"
                id="feed_heart_btn"
                onClick={() => alert('No new notifications!')}
              >
                <Heart className="w-5 h-5" />
              </button>
              <button
                className="p-1.5 hover:bg-surface-container rounded-full text-on-background transition-colors active:scale-95 animate-pulse"
                id="feed_send_btn"
                onClick={() => alert('Open direct messages simulation')}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 w-full max-w-md mx-auto pt-[60px] pb-[70px] overflow-x-hidden">
        
        {/* VIEW: OTHER USER DETAILED VIEW */}
        {selectedUserView && viewedUser && (
          <div className="flex flex-col animate-fade-in" id="other_profile_view">
            {/* Profile Header */}
            <section className="px-4 pt-4 pb-2">
              <div className="flex items-center gap-6">
                <div className="p-[2.5px] rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 shadow-sm">
                  <div className="bg-white rounded-full p-[2px]">
                    <img
                      alt={viewedUser.fullName}
                      className="w-[80px] h-[80px] rounded-full object-cover"
                      src={viewedUser.avatar}
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <h2 className="font-display text-lg font-extrabold text-on-background">
                    {viewedUser.fullName}
                  </h2>
                  <p className="text-xs text-on-surface-variant font-medium">Digital Creator</p>
                  
                  <button className="flex items-center justify-center gap-1 mt-1 bg-primary text-white text-xs font-bold py-1.5 px-3 rounded-lg active:scale-95 transition-all shadow-sm shadow-primary/20 hover:opacity-90">
                    <UserCheck className="w-3.5 h-3.5" /> Following
                  </button>
                </div>
              </div>

              {/* Bio */}
              <div className="mt-3 text-sm text-on-background">
                <p className="whitespace-pre-line leading-relaxed">{viewedUser.bio}</p>
                <span className="text-primary font-semibold text-xs mt-1 block hover:underline cursor-pointer">
                  {viewedUser.link}
                </span>
              </div>
            </section>

            {/* Stats */}
            <section className="flex justify-around py-3 border-y border-outline-variant/20 bg-surface-container-low mt-4">
              <div className="flex flex-col items-center">
                <span className="font-bold text-sm text-on-background">{viewedUserPosts.length}</span>
                <span className="text-[11px] text-on-surface-variant">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-sm text-on-background">{viewedUser.followersCount}</span>
                <span className="text-[11px] text-on-surface-variant">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-bold text-sm text-on-background">{viewedUser.followingCount}</span>
                <span className="text-[11px] text-on-surface-variant">Following</span>
              </div>
            </section>

            {/* Feed Grid for viewed user */}
            <div className="mt-2 px-1">
              <h3 className="font-display text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-3 px-3">
                Posts by @{selectedUserView}
              </h3>
              {viewedUserPosts.length > 0 ? (
                <ExploreGrid
                  posts={viewedUserPosts}
                  onLike={handleLikePost}
                  onAddComment={handleAddComment}
                  onUserClick={(u) => setSelectedUserView(u)}
                />
              ) : (
                <div className="py-12 flex flex-col items-center text-center text-on-surface-variant">
                  <Grid className="w-12 h-12 stroke-[1.2] mb-2" />
                  <p className="text-xs">No posts uploaded yet</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* VIEW: HOME FEED */}
        {!selectedUserView && activeTab === 'home' && (
          <div className="flex flex-col animate-fade-in" id="home_feed_view">
            
            {/* Stories Tray */}
            <section className="py-4 border-b border-outline-variant/10 bg-white">
              <div className="flex overflow-x-auto hide-scrollbar gap-4 px-4">
                {stories.map((story, idx) => (
                  <button
                    key={story.id}
                    onClick={() => setActiveStoryIndex(idx)}
                    className="flex flex-shrink-0 flex-col items-center gap-1.5 focus:outline-none"
                    id={`story_tray_item_${story.id}`}
                  >
                    <div className="relative p-[2.5px] rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 active:scale-95 transition-all">
                      <div className="bg-white rounded-full p-[2px]">
                        <img
                          src={story.avatar}
                          alt={story.username}
                          className="w-14 h-14 rounded-full object-cover border-2 border-white"
                        />
                      </div>
                      {story.id === 'user_story' && (
                        <div className="absolute bottom-0 right-0 bg-primary text-white rounded-full w-4.5 h-4.5 flex items-center justify-center border-2 border-white text-[12px] font-bold">
                          +
                        </div>
                      )}
                    </div>
                    <span className="text-[11px] text-on-surface-variant truncate w-16 text-center font-medium">
                      {story.username}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            {/* Feed Posts */}
            <div className="flex flex-col gap-1" id="home_feed_posts_list">
              {feedPosts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  currentUsername={currentUser.username}
                  onLike={handleLikePost}
                  onAddComment={handleAddComment}
                  onUserClick={(username) => setSelectedUserView(username)}
                />
              ))}
            </div>
          </div>
        )}

        {/* VIEW: SEARCH / EXPLORE */}
        {!selectedUserView && activeTab === 'search' && (
          <div className="flex flex-col animate-fade-in" id="explore_view">
            
            {/* Category Pill Navigation */}
            <nav className="flex overflow-x-auto hide-scrollbar px-4 py-2 gap-2 items-center bg-white border-b border-outline-variant/10">
              {['All', 'Shop', 'Decor', 'Travel', 'Architecture', 'Food', 'Art'].map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`whitespace-nowrap px-4 py-1.5 rounded-lg border text-xs font-semibold tracking-wide transition-all duration-150 ${
                      isActive
                        ? 'bg-primary border-primary text-white font-bold'
                        : 'bg-surface-container border-outline-variant/30 text-on-surface hover:bg-surface-container-high'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </nav>

            {/* Explore Grid Content */}
            <div className="pt-1.5">
              {filteredExplorePosts.length > 0 ? (
                <ExploreGrid
                  posts={filteredExplorePosts}
                  onLike={handleLikePost}
                  onAddComment={handleAddComment}
                  onUserClick={(username) => setSelectedUserView(username)}
                />
              ) : (
                <div className="py-24 text-center text-on-surface-variant flex flex-col items-center">
                  <Search className="w-12 h-12 stroke-[1.2] mb-3 text-outline-variant" />
                  <p className="text-sm font-semibold">No results found</p>
                  <p className="text-xs text-on-surface-variant mt-1">Try clearing your filters or queries</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* VIEW: REELS */}
        {!selectedUserView && activeTab === 'reels' && (
          <div className="flex flex-col gap-3 animate-fade-in px-4 pt-2" id="reels_view">
            {explorePosts.filter(p => p.isVideo || p.id === 'post_1').map((post) => (
              <div key={post.id} className="bg-white border border-outline-variant/20 rounded-xl overflow-hidden shadow-xs flex flex-col">
                <PostCard
                  post={post}
                  currentUsername={currentUser.username}
                  onLike={handleLikePost}
                  onAddComment={handleAddComment}
                  onUserClick={(username) => setSelectedUserView(username)}
                />
              </div>
            ))}
          </div>
        )}

        {/* VIEW: PROFILE */}
        {!selectedUserView && activeTab === 'profile' && (
          <div className="flex flex-col animate-fade-in" id="profile_view">
            
            {/* Profile Header Block */}
            <section className="px-4 pt-4 pb-2">
              <div className="flex items-center gap-6">
                
                {/* Avatar with dynamic ring */}
                <div className="relative p-[3px] rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 shadow-sm">
                  <div className="bg-white rounded-full p-[2px]">
                    <img
                      alt={currentUser.fullName}
                      className="w-[80px] h-[80px] rounded-full object-cover"
                      src={currentUser.avatar}
                    />
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-1">
                  <h2 className="font-display text-lg font-extrabold text-on-background leading-tight">
                    {currentUser.fullName}
                  </h2>
                  <p className="text-xs text-on-surface-variant font-medium">{currentUser.category}</p>
                  
                  {/* Edit/Share actions */}
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => {
                        setEditFullName(currentUser.fullName);
                        setEditBio(currentUser.bio);
                        setEditLink(currentUser.link);
                        setIsEditingProfile(true);
                      }}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-bold py-1.5 rounded-lg active:scale-95 transition-all border border-outline-variant/10"
                      id="edit_profile_btn"
                    >
                      <Edit2 className="w-3 h-3 text-primary" /> Edit Profile
                    </button>
                    <button
                      onClick={() => alert(`Profile link copied: ${currentUser.link}`)}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface text-xs font-bold py-1.5 rounded-lg active:scale-95 transition-all border border-outline-variant/10"
                      id="share_profile_btn"
                    >
                      <Share2 className="w-3 h-3 text-secondary" /> Share Profile
                    </button>
                  </div>
                </div>
              </div>

              {/* Bio block */}
              <div className="mt-4 text-sm text-on-background">
                <p className="whitespace-pre-line leading-relaxed">{currentUser.bio}</p>
                <span className="text-primary font-semibold text-xs mt-1 block hover:underline cursor-pointer">
                  {currentUser.link}
                </span>
              </div>
            </section>

            {/* Profile Live Edit Sheet */}
            <AnimatePresence>
              {isEditingProfile && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-surface-container-low border-y border-outline-variant/20 px-4 py-4 overflow-hidden"
                  id="profile_edit_form_container"
                >
                  <form onSubmit={handleSaveProfile} className="flex flex-col gap-3">
                    <h3 className="font-display text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1">
                      Update Profile Information
                    </h3>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-semibold text-on-surface-variant font-mono">Full Name</label>
                      <input
                        type="text"
                        value={editFullName}
                        onChange={(e) => setEditFullName(e.target.value)}
                        className="px-3 py-1.5 text-xs bg-white border border-outline-variant/20 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-semibold text-on-surface-variant font-mono">Bio Details</label>
                      <textarea
                        value={editBio}
                        onChange={(e) => setEditBio(e.target.value)}
                        rows={2}
                        className="px-3 py-1.5 text-xs bg-white border border-outline-variant/20 rounded-md focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[10px] font-semibold text-on-surface-variant font-mono">Link / Website</label>
                      <input
                        type="text"
                        value={editLink}
                        onChange={(e) => setEditLink(e.target.value)}
                        className="px-3 py-1.5 text-xs bg-white border border-outline-variant/20 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                        required
                      />
                    </div>
                    <div className="flex gap-2 justify-end mt-2">
                      <button
                        type="button"
                        onClick={() => setIsEditingProfile(false)}
                        className="px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-on-surface-variant rounded-md text-xs font-bold"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex items-center gap-1 px-4 py-1.5 bg-primary text-white rounded-md text-xs font-bold"
                      >
                        <Check className="w-3.5 h-3.5" /> Save Changes
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Profile Statistics Counter Grid */}
            <section className="flex justify-around py-3 border-t border-outline-variant/10 bg-surface-container mt-4">
              <div className="flex flex-col items-center">
                <span className="font-extrabold text-sm text-on-background">{currentUser.postsCount}</span>
                <span className="text-[11px] text-on-surface-variant font-medium">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-extrabold text-sm text-on-background">{currentUser.followersCount}</span>
                <span className="text-[11px] text-on-surface-variant font-medium">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-extrabold text-sm text-on-background">{currentUser.followingCount}</span>
                <span className="text-[11px] text-on-surface-variant font-medium">Following</span>
              </div>
            </section>

            {/* Sticky Profile Tab Bar Selector */}
            <div className="sticky top-[60px] z-20 bg-background/95 backdrop-blur-md flex border-y border-outline-variant/15" id="profile_tab_bar">
              <button
                onClick={() => setProfileTab('grid')}
                className={`flex-1 flex justify-center items-center h-12 transition-all ${
                  profileTab === 'grid' ? 'border-b-2 border-primary text-primary' : 'text-on-surface-variant'
                }`}
                id="profile_tab_grid_btn"
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setProfileTab('reels')}
                className={`flex-1 flex justify-center items-center h-12 transition-all ${
                  profileTab === 'reels' ? 'border-b-2 border-primary text-primary' : 'text-on-surface-variant'
                }`}
                id="profile_tab_reels_btn"
              >
                <Film className="w-5 h-5" />
              </button>
              <button
                onClick={() => setProfileTab('tagged')}
                className={`flex-1 flex justify-center items-center h-12 transition-all ${
                  profileTab === 'tagged' ? 'border-b-2 border-primary text-primary' : 'text-on-surface-variant'
                }`}
                id="profile_tab_tagged_btn"
              >
                <Bookmark className="w-5 h-5" />
              </button>
            </div>

            {/* Profile Gallery Render */}
            <div className="px-0.5 pt-0.5">
              {profileTab === 'grid' ? (
                profilePosts.length > 0 ? (
                  <ExploreGrid
                    posts={profilePosts}
                    onLike={handleLikePost}
                    onAddComment={handleAddComment}
                    onUserClick={(username) => setSelectedUserView(username)}
                  />
                ) : (
                  <div className="py-16 text-center text-on-surface-variant">
                    <Grid className="w-12 h-12 stroke-[1.2] mx-auto mb-2 opacity-50" />
                    <p className="text-xs">No posts uploaded yet</p>
                  </div>
                )
              ) : profileTab === 'reels' ? (
                <div className="py-16 text-center text-on-surface-variant flex flex-col items-center">
                  <Film className="w-10 h-10 stroke-[1.2] mb-2 text-primary animate-pulse" />
                  <p className="text-xs font-semibold">Your Reels are empty</p>
                  <p className="text-[11px] mt-1 text-on-surface-variant">Click the Reels icon to watch others</p>
                </div>
              ) : (
                <div className="py-16 text-center text-on-surface-variant flex flex-col items-center">
                  <Bookmark className="w-10 h-10 stroke-[1.2] mb-2 text-secondary" />
                  <p className="text-xs font-semibold">Saved &amp; Tagged Posts</p>
                  <p className="text-[11px] mt-1 text-on-surface-variant">Posts you are tagged in will appear here</p>
                </div>
              )}
            </div>

          </div>
        )}

      </main>

      {/* Bottom Navigation Footer */}
      <footer className="fixed bottom-0 w-full z-40 pb-safe bg-background/95 backdrop-blur-md border-t border-outline-variant/20 shadow-lg">
        <div className="flex justify-around items-center h-[50px] w-full max-w-md mx-auto">
          {/* Home */}
          <button
            onClick={() => {
              setSelectedUserView(null);
              setActiveTab('home');
            }}
            className={`flex flex-col items-center justify-center transition-all duration-150 active:scale-90 ${
              activeTab === 'home' && !selectedUserView ? 'text-primary scale-110' : 'text-on-surface-variant hover:text-primary'
            }`}
            id="nav_home_btn"
          >
            <Home className="w-6 h-6 stroke-[1.8]" />
          </button>

          {/* Search */}
          <button
            onClick={() => {
              setSelectedUserView(null);
              setActiveTab('search');
            }}
            className={`flex flex-col items-center justify-center transition-all duration-150 active:scale-90 ${
              activeTab === 'search' ? 'text-primary scale-110' : 'text-on-surface-variant hover:text-primary'
            }`}
            id="nav_search_btn"
          >
            <Search className="w-6 h-6 stroke-[1.8]" />
          </button>

          {/* Add Post */}
          <button
            onClick={() => setIsCreatePostOpen(true)}
            className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-all duration-150 active:scale-90"
            id="nav_add_btn"
          >
            <PlusSquare className="w-6 h-6 stroke-[1.8]" />
          </button>

          {/* Reels */}
          <button
            onClick={() => {
              setSelectedUserView(null);
              setActiveTab('reels');
            }}
            className={`flex flex-col items-center justify-center transition-all duration-150 active:scale-90 ${
              activeTab === 'reels' ? 'text-primary scale-110' : 'text-on-surface-variant hover:text-primary'
            }`}
            id="nav_reels_btn"
          >
            <Film className="w-6 h-6 stroke-[1.8]" />
          </button>

          {/* Profile */}
          <button
            onClick={() => {
              setSelectedUserView(null);
              setActiveTab('profile');
            }}
            className={`flex flex-col items-center justify-center transition-all duration-150 active:scale-90 ${
              activeTab === 'profile' && !selectedUserView ? 'text-primary scale-110' : 'text-on-surface-variant hover:text-primary'
            }`}
            id="nav_profile_btn"
          >
            <div className={`w-6 h-6 rounded-full border p-[1px] ${activeTab === 'profile' ? 'border-primary' : 'border-outline-variant/30'}`}>
              <img
                src={currentUser.avatar}
                alt="Profile avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </button>
        </div>
      </footer>

      {/* STORY VIEWER OVERLAY */}
      {activeStoryIndex !== null && (
        <StoryViewer
          stories={stories}
          initialStoryIndex={activeStoryIndex}
          onClose={() => setActiveStoryIndex(null)}
        />
      )}

      {/* CREATE POST MODAL */}
      <CreatePostModal
        isOpen={isCreatePostOpen}
        onClose={() => setIsCreatePostOpen(false)}
        onAddPost={handleAddPost}
      />

      {/* EXPLORE FILTERS MODAL */}
      <FilterTuneModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        sortBy={sortBy}
        onSelectSortBy={setSortBy}
        mediaType={mediaType}
        onSelectMediaType={setMediaType}
      />

    </div>
  );
}

