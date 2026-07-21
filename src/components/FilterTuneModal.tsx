import { X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FilterTuneModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  sortBy: 'standard' | 'likes' | 'alphabetical';
  onSelectSortBy: (sort: 'standard' | 'likes' | 'alphabetical') => void;
  mediaType: 'all' | 'video' | 'image';
  onSelectMediaType: (type: 'all' | 'video' | 'image') => void;
}

const CATEGORIES = ['All', 'Shop', 'Decor', 'Travel', 'Architecture', 'Food', 'Art'];

export default function FilterTuneModal({
  isOpen,
  onClose,
  selectedCategory,
  onSelectCategory,
  sortBy,
  onSelectSortBy,
  mediaType,
  onSelectMediaType,
}: FilterTuneModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-xs" id="filter_modal_overlay">
        {/* Click outside to close */}
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          className="relative w-full max-w-md bg-white rounded-t-2xl p-6 shadow-2xl z-10 flex flex-col gap-6"
          id="filter_modal_container"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-outline-variant/20 pb-3">
            <h3 className="font-display text-lg font-bold text-on-background">Explore Filters</h3>
            <button onClick={onClose} className="p-1 hover:bg-surface-container rounded-full text-on-background transition-colors" id="filter_close_btn">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider font-mono">Category</span>
            <div className="flex flex-wrap gap-1.5" id="filter_categories_list">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => onSelectCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      isActive
                        ? 'bg-primary text-white shadow-sm'
                        : 'bg-surface-container hover:bg-surface-container-high text-on-surface'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sort By */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider font-mono">Sort By</span>
            <div className="flex flex-col gap-1" id="filter_sort_list">
              {[
                { id: 'standard', label: 'Default Order' },
                { id: 'likes', label: 'Popularity (Most Liked)' },
                { id: 'alphabetical', label: 'Username (A-Z)' },
              ].map((item) => {
                const isSelected = sortBy === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onSelectSortBy(item.id as any)}
                    className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-surface-container-low text-sm text-left text-on-background transition-colors"
                  >
                    <span>{item.label}</span>
                    {isSelected && <Check className="w-4 h-4 text-primary font-bold" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Media Type */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider font-mono">Media Type</span>
            <div className="grid grid-cols-3 gap-2" id="filter_media_list">
              {[
                { id: 'all', label: 'All Posts' },
                { id: 'image', label: 'Images' },
                { id: 'video', label: 'Videos' },
              ].map((item) => {
                const isActive = mediaType === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onSelectMediaType(item.id as any)}
                    className={`py-2 rounded-lg text-xs font-semibold text-center transition-all ${
                      isActive
                        ? 'bg-primary-container text-white shadow-sm'
                        : 'bg-surface-container hover:bg-surface-container-high text-on-surface'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={onClose}
            className="w-full py-3 bg-primary text-white font-bold rounded-lg text-sm active:scale-95 transition-transform shadow-md shadow-primary/20 hover:opacity-90 mt-2"
            id="filter_apply_btn"
          >
            Apply Filters
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
