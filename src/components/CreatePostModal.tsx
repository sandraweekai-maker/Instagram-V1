import React, { useState } from 'react';
import { X, Check, Image as ImageIcon, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddPost: (postData: {
    imageUrl: string;
    caption: string;
    location: string;
    category: string;
  }) => void;
}

const PRESET_IMAGES = [
  {
    name: 'Brutalist Concrete',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFE74CwWAuiub-oVHOVKw6Qdb7L086wMJkLc_5Yg-nvDYonAufZbiA9SaTU9QcOJUrbo4uCsVb8_aKFkKlaQqTm0jcGLSp7ofq9mlWn1uPctXCySOsPrOnDJpjl4HhOwUNX0KcYtdEMsUiOg8FfqhIFiO2lE-JAdecFzAR0XJI9T-NWUtDq14W4zNQWwJcwLQo8h72ONBglBW-cx45aZeRPld5FBXw45MagzqbeTPF2iPuj0_NJIg63V6pxLY94D_NioHEazaSWDs',
  },
  {
    name: 'Tech Desk Setup',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABr0alCFUysagHiB9hBq1dHCVZbYpL7CoiEAymsfqcSdr_kjcIkeIp1lMks5Lb_CKs5PuaSOZ4g8zjwe5xIUTNoT-m20LMOF7dZPiwwgJ7_qc6YIqLQfSKHxRoRn3M7RoLrXHiq6YsNMEaJXHLnogVFi35XgbF4BvHC55hg_tHjhIYTZ5_9Aj0eyu5QKNF0JLmI9-O9CfYrT8EH8pYzHlVxV8Ncdh8LpE7a0T6RcVQARkNyCXG6nSjvZvYOABeAg-F2DJr0ChLvCQ',
  },
  {
    name: 'Prism Light',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZCBD0FX05HOAwHLJf-kiw66OBKt5Y5ErwlNAu2JqjPa7IGbmSZGGbHWmBrYicXzHm_w8B02QHeeAzmGN8zvVN2xZeWl-joxYIExIbirEXhucqJ7TLJxOejsiuMxvVydor5urjxUF8QEw23IWNGcifXgPZUWGue9KHKPrmSGI_rqN3_rDTStIrkiFe6F3d4pi24EH-zxO1OdofGoR--xsmj6W74_JICV_PViQs-43jhsHRBudxLhQVsx4c2oO8SLiIyGgEFLaWiNA',
  },
  {
    name: 'Minimalist Clock',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsxBSlOH2C_z0zYdXzxoHLJqIgEnEKnvfP16wwc2TweVcMBkiTcfZZoJTJsCwp-oKPR5BMOMYh0Saw24MzClmpsi0gLl72hOy-cmYE8gtKsnVH1S20uGuX-P1nT1rPAGJLPhEfNctiFsK5Z2MSVz7noIl6VlaLpJ9InqYKuCsvy-VJ3VlWDkSuXPNi5gD1uFgQfgZ67JZtkq1mjUvTnabkXp_b1WwzzaB8cxP7258fCaAYYF-87rkmTnF1NVtj1fzoz4v2_frpqUA',
  },
  {
    name: 'Skateboarder action',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtw5PNSft-vAZxUVz4jL39Lf9bTOxvlDCSFoNp3JFiEFJqJVCyaAA8nX6adbIPq6Jd821zHXfR2oYw3rPhlHEYh3OJqpguOF-92FCRI1y-OXd2ZuulqhBKUqmfFHIIsj9EDKcM0YpDqjsOXtzFu2VK2_y5SLV9RpJrZrcA02kgFdQXpXm0SLmOiKF1jY3Pongz_Q_qCBw7s6b8nucx-iJRW8oD7kvBTh_UQVzcCt_iK22SwbhBijCyN-L2cou-LTFaMVsulVAS5oE',
  },
  {
    name: 'Snowy Cabin',
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBM7laQT2KoKmw4UpHVvWOcYdSyFQcy_6ZIdAyHgjPpWn5z-c2z5pWL1fG2QdYxkKQOJ3gaztanrfD6pQthnXjB7ZmfdbiqXl2yhyaci-dr8U8Nm9B_Zq12iag8iSljnZ467ahxK_qJxKCQqaKm41fNHe1kXUeHu2mPwF5fL8ArEVo8rHdc25v7QyVCleG37TZbTtMkJKRj6giOGo25Udzdg4Isj4Tfn-D91W46ER9Un1rsnGQmBamUurH6QlqMJ5WOl1myNchZjRk',
  },
];

const CATEGORIES = ['Decor', 'Travel', 'Architecture', 'Food', 'Art', 'Shop'];

export default function CreatePostModal({ isOpen, onClose, onAddPost }: CreatePostModalProps) {
  const [imageUrl, setImageUrl] = useState(PRESET_IMAGES[0].url);
  const [caption, setCaption] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('Decor');
  const [customUrlMode, setCustomUrlMode] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageUrl || !caption.trim()) return;

    onAddPost({
      imageUrl,
      caption,
      location,
      category,
    });

    // Reset Form
    setCaption('');
    setLocation('');
    setImageUrl(PRESET_IMAGES[0].url);
    setCustomUrlMode(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs px-4" id="create_post_modal_overlay">
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col"
          id="create_post_modal_container"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-outline-variant/20 bg-white">
            <button onClick={onClose} className="p-1 hover:bg-surface-container rounded-full text-on-background transition-colors" id="create_post_close_btn">
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-display text-sm font-bold text-on-background">Create New Post</h3>
            <button
              onClick={handleSubmit}
              disabled={!imageUrl || !caption.trim()}
              className="text-primary font-bold text-sm disabled:opacity-40 hover:opacity-80 transition-opacity"
              id="create_post_submit_btn"
            >
              Share
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col max-h-[80vh] overflow-y-auto hide-scrollbar bg-white">
            {/* Image Preview / Input */}
            <div className="relative aspect-square w-full bg-surface-container flex flex-col items-center justify-center overflow-hidden">
              {imageUrl ? (
                <img src={imageUrl} alt="Preview" className="w-full h-full object-cover" id="create_post_preview" />
              ) : (
                <div className="flex flex-col items-center gap-2 text-on-surface-variant">
                  <ImageIcon className="w-12 h-12 stroke-[1.2]" />
                  <span className="text-xs">No image selected</span>
                </div>
              )}
            </div>

            <div className="p-4 flex flex-col gap-4">
              {/* Preset Selection & Image URL mode toggle */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider font-mono">Select Aesthetic Image</span>
                  <button
                    type="button"
                    onClick={() => setCustomUrlMode(!customUrlMode)}
                    className="text-xs text-primary font-bold hover:underline"
                    id="create_post_mode_toggle"
                  >
                    {customUrlMode ? 'Choose Presets' : 'Enter Custom URL'}
                  </button>
                </div>

                {customUrlMode ? (
                  <input
                    type="url"
                    placeholder="Paste image URL (HTTPS)..."
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="w-full px-3 py-2 border border-outline-variant/30 rounded-lg text-xs text-on-background focus:outline-none focus:ring-1 focus:ring-primary"
                    id="create_post_url_input"
                  />
                ) : (
                  <div className="flex gap-2 overflow-x-auto hide-scrollbar py-1" id="create_post_presets_list">
                    {PRESET_IMAGES.map((preset) => {
                      const isSelected = imageUrl === preset.url;
                      return (
                        <button
                          key={preset.name}
                          type="button"
                          onClick={() => setImageUrl(preset.url)}
                          className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                            isSelected ? 'border-primary scale-95 shadow-md shadow-primary/20' : 'border-transparent opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img src={preset.url} alt={preset.name} className="w-full h-full object-cover" />
                          {isSelected && (
                            <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                              <Check className="w-5 h-5 text-white stroke-[3]" />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Caption */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider font-mono">Caption</label>
                <textarea
                  placeholder="Write a caption..."
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-outline-variant/30 rounded-lg text-xs text-on-background placeholder-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  id="create_post_caption_input"
                  required
                />
              </div>

              {/* Location */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider font-mono flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-primary" /> Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. Kyoto, Japan (Optional)"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-outline-variant/30 rounded-lg text-xs text-on-background placeholder-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary"
                  id="create_post_location_input"
                />
              </div>

              {/* Category */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider font-mono">Category</label>
                <div className="flex flex-wrap gap-1.5" id="create_post_categories_list">
                  {CATEGORIES.map((cat) => {
                    const isActive = category === cat;
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setCategory(cat)}
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
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
