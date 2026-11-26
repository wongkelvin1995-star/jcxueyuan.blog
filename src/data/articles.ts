export type ArticleTemplate = 'A' | 'B' | 'C' | 'D';

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  subsections?: {
    heading: string;
    paragraphs: string[];
  }[];
  callout?: {
    title: string;
    body: string;
    tone: 'sakura' | 'sky' | 'mint' | 'gold';
  };
}

export interface ArticleFaq {
  q: string;
  a: string;
}

export interface AcademyArticle {
  slug: string;       // e.g. 'beginner/network-basics'
  url: string;        // e.g. '/beginner/network-basics/'
  categorySlug: string;
  categoryName: string;
  chapterId: number;
  template: ArticleTemplate;
  keywordIds: string[];
  title: string;
  seoTitle: string;
  description: string;
  readTime: string;
  updatedAt: string;
  senpaiTip: string;
  sections: ArticleSection[];
  conclusion?: string;
  faqs?: ArticleFaq[];
  relatedUrls: { label: string; url: string }[];
  sourceNote: string;
}

import { ARTICLES_PART_1 } from './articlesPart1';
import { ARTICLES_PART_2 } from './articlesPart2';
import { ARTICLES_PART_3 } from './articlesPart3';
import { ARTICLES_BEGINNER_EXTRA } from './articlesBeginnerExtra';

export const ALL_ARTICLES: AcademyArticle[] = [
  ...ARTICLES_PART_1,
  ...ARTICLES_BEGINNER_EXTRA,
  ...ARTICLES_PART_2,
  ...ARTICLES_PART_3,
];

export function getArticleBySlug(slug: string): AcademyArticle | undefined {
  const clean = slug.replace(/^\/|\/$/g, '');
  return ALL_ARTICLES.find((a) => a.slug === clean);
}

export function getArticlesByCategory(categorySlug: string): AcademyArticle[] {
  return ALL_ARTICLES.filter((a) => a.categorySlug === categorySlug);
}
