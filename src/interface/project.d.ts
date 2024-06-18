// interfaces.ts

export interface TechUsed {
    value: string;
    label: string;
  }
  
  export interface TProject {
    _id:string
    title: string;
    description: string;
    overview: string;
    techUsed: TechUsed[];
    coverImage: string;
    fullPageImage: string;
    githubLink: string;
    liveLink: string;
    videoLink?: string;
    category: 'personal' | 'professional' | 'assignment';
    createdAt?: Date;
    updatedAt?: Date;
  }
  