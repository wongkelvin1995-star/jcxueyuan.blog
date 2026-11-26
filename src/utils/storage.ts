export interface AcademyProfileState {
  completedChapters: number[];
  bookmarkedCourses: number[];
  favoriteArticles: { title: string; url: string }[];
  favoriteBrands: { slug: string; name: string }[];
  notes: { id: string; text: string; createdAt: string }[];
  budgetRecords: { monthlyBudget: number; months: number; total: number; date: string }[];
  trafficRecords: { estimatedGB: number; multiplier: number; billedGB: number; date: string }[];
  quizBestScore: number | null;
  history: { title: string; url: string; visitedAt: string }[];
  settings: {
    largeFont: boolean;
    reduceMotion: boolean;
  };
}

const STORAGE_KEY = 'sakura_academy_profile_v1';

export const DEFAULT_PROFILE: AcademyProfileState = {
  completedChapters: [],
  bookmarkedCourses: [],
  favoriteArticles: [],
  favoriteBrands: [],
  notes: [],
  budgetRecords: [],
  trafficRecords: [],
  quizBestScore: null,
  history: [],
  settings: {
    largeFont: false,
    reduceMotion: false,
  },
};

export function loadProfile(): AcademyProfileState {
  if (typeof window === 'undefined') return DEFAULT_PROFILE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROFILE;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_PROFILE,
      ...parsed,
      settings: {
        ...DEFAULT_PROFILE.settings,
        ...(parsed.settings || {}),
      },
    };
  } catch {
    return DEFAULT_PROFILE;
  }
}

export function saveProfile(state: AcademyProfileState): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    applyReadingSettings(state.settings);
  } catch {
    // ignore storage quota errors
  }
}

export function clearProfile(): void {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(STORAGE_KEY);
  applyReadingSettings(DEFAULT_PROFILE.settings);
}

export function applyReadingSettings(settings: AcademyProfileState['settings']): void {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('data-font-size', settings.largeFont ? 'large' : 'normal');
  document.documentElement.setAttribute('data-reduce-motion', settings.reduceMotion ? 'true' : 'false');
}
