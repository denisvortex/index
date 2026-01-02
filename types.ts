
export interface DownloadGroup {
  mediafire?: string;
  pixeldrain?: string;
  mega?: string;
}

export interface WindowsBuild {
  id: string;
  title: string;
  version: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  galleryImages: string[];
  downloadLinks: {
    standard?: DownloadGroup;
    defenderless?: DownloadGroup;
  };
  features: string[];
  systemRequirements: {
    cpu: string;
    ram: string;
    disk: string;
  };
  size: string;
  tags: string[];
}
