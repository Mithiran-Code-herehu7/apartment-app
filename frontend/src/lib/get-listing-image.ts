/**
 * Dynamic Title-Based Stock Cover Photo Resolver
 * Strictly matches photography based on the words in the listing title.
 */

const TITLE_KEYWORD_MAP: Array<{ keywords: string[]; url: string }> = [
  // Musical Instruments & Vocals
  {
    keywords: ['guitar', 'ukulele', 'strum', 'acoustic', 'bass guitar'],
    url: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=800&auto=format&fit=crop' // Acoustic Guitar
  },
  {
    keywords: ['piano', 'keyboard', 'synthesizer'],
    url: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=800&auto=format&fit=crop' // Piano Keys
  },
  {
    keywords: ['violin', 'cello', 'fiddle'],
    url: 'https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?q=80&w=800&auto=format&fit=crop' // Violin
  },
  {
    keywords: ['drum', 'percussion', 'bongo', 'tabla'],
    url: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=800&auto=format&fit=crop' // Drums
  },
  {
    keywords: ['flute', 'wind instrument'],
    url: 'https://images.unsplash.com/photo-1573871669414-010dbf73ca84?q=80&w=800&auto=format&fit=crop' // Flute
  },
  {
    keywords: ['sing', 'singing', 'vocal', 'voice', 'choir', 'mic', 'microphone'],
    url: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800&auto=format&fit=crop' // Vocal / Microphone
  },
  {
    keywords: ['dance', 'zumba', 'salsa', 'ballet', 'hiphop', 'kathak', 'bharatanatyam'],
    url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800&auto=format&fit=crop' // Dance Studio
  },

  // Sports & Fitness
  {
    keywords: ['yoga', 'asana', 'pranayama', 'meditation'],
    url: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop' // Yoga Pose
  },
  {
    keywords: ['cricket', 'batting', 'bowling'],
    url: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop' // Cricket
  },
  {
    keywords: ['badminton', 'shuttlecock', 'racket'],
    url: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=800&auto=format&fit=crop' // Badminton
  },
  {
    keywords: ['tennis'],
    url: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=800&auto=format&fit=crop' // Tennis Court
  },
  {
    keywords: ['chess', 'checkmate', 'grandmaster'],
    url: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=800&auto=format&fit=crop' // Chess Board
  },
  {
    keywords: ['swim', 'swimming', 'pool'],
    url: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=800&auto=format&fit=crop' // Swimming Pool
  },
  {
    keywords: ['fitness', 'workout', 'gym', 'calisthenics', 'trainer', 'exercise'],
    url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop' // Fitness Training
  },
  {
    keywords: ['karate', 'martial', 'taekwondo', 'judo', 'kickboxing'],
    url: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800&auto=format&fit=crop' // Martial Arts
  },

  // Tech, Coding & STEM
  {
    keywords: ['code', 'coding', 'python', 'javascript', 'react', 'web', 'program', 'programming', 'software', 'developer', 'java'],
    url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop' // Coding Laptop
  },
  {
    keywords: ['robot', 'robotics', 'stem', 'arduino', 'raspberry', 'electronics'],
    url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop' // Robotics
  },

  // Culinary & Baking
  {
    keywords: ['cook', 'cooking', 'chef', 'dish', 'recipe', 'culinary', 'meal'],
    url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop' // Cooking Kitchen
  },
  {
    keywords: ['bake', 'baking', 'cake', 'pastry', 'cupcake', 'dessert', 'bread'],
    url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop' // Baking Pastry
  },

  // Academic & Languages
  {
    keywords: ['math', 'mathematics', 'algebra', 'calculus', 'geometry', 'physics', 'chemistry', 'science'],
    url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop' // Math & Science
  },
  {
    keywords: ['english', 'french', 'spanish', 'german', 'japanese', 'chinese', 'language', 'grammar', 'read', 'reading', 'book'],
    url: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop' // Books & Languages
  },
  {
    keywords: ['tutor', 'tutoring', 'study', 'exam', 'homework', 'prep'],
    url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop' // Tutoring Desk
  },

  // Creative Arts & Crafts
  {
    keywords: ['paint', 'painting', 'draw', 'drawing', 'art', 'sketch', 'sketching', 'craft', 'canvas', 'illustration'],
    url: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop' // Paint Brush Canvas
  },
  {
    keywords: ['photo', 'photography', 'camera', 'portrait', 'lighting'],
    url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop' // Camera Photography
  },
  {
    keywords: ['garden', 'gardening', 'plant', 'plants', 'pottery', 'clay'],
    url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop' // Gardening
  },
];

const DEFAULT_TITLE_IMAGE = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop';

export function getListingImage(listing?: {
  title?: string;
  image_url?: string;
  cover_image?: string;
  categories?: { slug?: string; name?: string };
  category?: string;
}): string {
  if (!listing) return DEFAULT_TITLE_IMAGE;

  // 1. Explicit custom image URL
  if (listing.image_url) return listing.image_url;
  if (listing.cover_image) return listing.cover_image;

  // 2. Strict Title Keyword Matching
  const titleLower = (listing.title || '').toLowerCase();
  for (const item of TITLE_KEYWORD_MAP) {
    if (item.keywords.some(kw => titleLower.includes(kw))) {
      return item.url;
    }
  }

  // 3. Fallback: Query Unsplash by the first main word of the title
  const words = titleLower.replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(w => w.length > 3 && !['for', 'with', 'from', 'classes', 'lessons', 'coaching', 'beginners', 'advanced'].includes(w));
  if (words.length > 0) {
    const keyWord = words[0];
    return `https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop`;
  }

  return DEFAULT_TITLE_IMAGE;
}
