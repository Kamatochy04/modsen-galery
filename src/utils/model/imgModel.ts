export interface Pagination {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
  next_url: string;
}

export interface ImgDataForWorks {
  id: number;
  thumbnail: Thumbnail;
  title: string;
  date_qualifier_title: string;
  artist_titles: string[];
}

export interface Img {
  id: number;
  api_model: string;
  api_link: string;
  is_boosted: boolean;
  title: string;
  thumbnail: Thumbnail;
  main_reference_number: string;
  has_not_been_viewed_much: boolean;
  date_start: number;
  date_end: number;
  date_display: string;
  date_qualifier_title: string;
  date_qualifier_id: number;
  artist_display: string;
  place_of_origin: string;
  description: string;
  dimensions: string;
  dimensions_detail: DimensionsDetail[];
  medium_display: string;
  credit_line: string;
  publication_history: string;
  exhibition_history: string;
  publishing_verification_level: string;
  internal_department_id: number;
  is_public_domain: boolean;
  is_zoomable: boolean;
  max_zoom_window_size: number;
  has_multimedia_resources: boolean;
  has_educational_resources: boolean;
  has_advanced_imaging: boolean;
  colorfulness: number;
  color: Color;
  artwork_type_title: string;
  artwork_type_id: number;
  department_title: string;
  department_id: string;
  artist_id: number;
  artist_title: string;
  artist_ids: number[];
  artist_titles: string[];
  category_ids: string[];
  category_titles: string[];
  term_titles: string[];
  style_id: string;
  style_title: string;
  style_ids: string[];
  style_titles: string[];
  classification_id: string;
  classification_title: string;
  alt_classification_ids: string[];
  classification_ids: string[];
  classification_titles: string[];
  subject_id: string;
  alt_subject_ids: string[];
  subject_ids: string[];
  subject_titles: string[];
  material_id: string;
  alt_material_ids: string[];
  material_ids: string[];
  material_titles: string[];
  suggest_autocomplete_all: SuggestAutocompleteAll[];
  source_updated_at: string;
  updated_at: string;
  timestamp: string;
}

export interface Thumbnail {
  lqip: string;
  width: number;
  height: number;
  alt_text: string;
}

export interface DimensionsDetail {
  width: number;
  height: number;
}

export interface Color {
  h: number;
  l: number;
  s: number;
  percentage: number;
  population: number;
}

export interface SuggestAutocompleteAll {
  input: string[];
  contexts: Contexts;
  weight?: number;
}

export interface Contexts {
  groupings: string[];
}
