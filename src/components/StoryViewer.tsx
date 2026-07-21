import React, { useEffect, useState } from 'react';
import { Story } from '../types';
import { X, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface StoryViewerProps {
  stories: Story[];
  initialStoryIndex: number;
  onClose: () => void;
}

export default function StoryViewer({ stories, initialStoryIndex, onClose }: StoryViewerProps) {
  const [currentStoryIdx, setCurrentStoryIdx] = useState(initialStoryIndex);
  const [currentItemIdx, setCurrentItemIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const currentStory = stories[currentStoryIdx];
  const currentItem = currentStory?.items[currentItemIdx];

  // Auto-progress timer
  useEffect(() => {
    if (paused) return;

    setProgress(0);
    const duration = 4000; // 4 seconds per story item
    const intervalTime = 40;
    const step = (intervalTime / duration) * 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNextItem();
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [currentStoryIdx, currentItemIdx, paused]);

  const handleNextItem = () => {
    if (currentItemIdx < currentStory.items.length - 1) {
      setCurrentItemIdx((prev) => prev + 1);
      setProgress(0);
    } else if (currentStoryIdx < stories.length - 1) {
      setCurrentStoryIdx((prev) => prev + 1);
      setCurrentItemIdx(0);
      setProgress(0);
    } else {
      onClose();
    }
  };

  const handlePrevItem = () => {
    if (currentItemIdx > 0) {
      setCurrentItemIdx((prev) => prev - 1);
      setProgress(0);
    } else if (currentStoryIdx > 0) {
      setCurrentStoryIdx((prev) => prev - 1);
      setCurrentItemIdx(stories[currentStoryIdx - 1].items.length - 1);
      setProgress(0);
    } else {
      // At the very beginning
      setProgress(0);
    }
  };

  if (!currentStory || !currentItem) return null;

  return (
    <AnimatePresence>
      <motion.div
        id="story_viewer_container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center select-none"
      >
        <div className="relative w-full max-w-md h-[100dvh] bg-neutral-900 flex flex-col justify-between overflow-hidden">
          
          {/* Top Progress Bars */}
          <div className="absolute top-4 left-0 right-0 z-20 flex gap-1 px-4">
            {currentStory.items.map((_, idx) => (
              <div key={idx} className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-75 ease-linear"
                  style={{
                    width:
                      idx < currentItemIdx
                        ? '100%'
                        : idx === currentItemIdx
                        ? `${progress}%`
                        : '0%',
                  }}
                />
              </div>
            ))}
          </div>

          {/* Top User Info Bar */}
          <div className="absolute top-8 left-0 right-0 z-20 flex items-center justify-between px-4 text-white">
            <div className="flex items-center gap-3">
              <img
                src={currentStory.avatar}
                alt={currentStory.username}
                className="w-9 h-9 rounded-full border-2 border-primary object-cover"
                id={`story_author_avatar_${currentStory.id}`}
              />
              <span className="font-semibold text-sm drop-shadow-sm font-display">
                {currentStory.username}
              </span>
              <span className="text-xs text-white/60">now</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setPaused(!paused)}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
                id="story_pause_btn"
              >
                {paused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
              </button>
              <button
                onClick={onClose}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
                id="story_close_btn"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="relative flex-1 flex items-center justify-center bg-black">
            {/* Navigational Tap Zones */}
            <div
              className="absolute left-0 top-0 bottom-0 w-1/4 z-10 cursor-pointer"
              onClick={handlePrevItem}
              id="story_left_zone"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-1/4 z-10 cursor-pointer"
              onClick={handleNextItem}
              id="story_right_zone"
            />
            
            <img
              src={currentItem.url}
              alt="Story Item"
              className="w-full h-full object-cover"
              id="story_main_img"
            />
          </div>

          {/* Navigation Buttons for Desktop */}
          <div className="hidden sm:flex absolute inset-y-0 left-[-60px] items-center justify-center z-30">
            <button
              onClick={handlePrevItem}
              className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 backdrop-blur-md transition-all active:scale-95"
              id="story_left_arrow_btn"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="hidden sm:flex absolute inset-y-0 right-[-60px] items-center justify-center z-30">
            <button
              onClick={handleNextItem}
              className="bg-white/20 hover:bg-white/30 text-white rounded-full p-2 backdrop-blur-md transition-all active:scale-95"
              id="story_right_arrow_btn"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Reply Input Box */}
          <div className="absolute bottom-6 left-0 right-0 z-20 px-4 flex gap-3">
            <input
              type="text"
              placeholder={`Reply to ${currentStory.username}...`}
              className="flex-1 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 text-white placeholder-white/60 text-sm focus:outline-none focus:ring-1 focus:ring-white/40"
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
              id="story_reply_input"
            />
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}
