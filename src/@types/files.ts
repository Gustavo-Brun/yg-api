namespace typesFiles {
  export interface CreateFileBody {
    link: string;
    available: boolean;
  }

  export interface File {
    id: number;
    link: string;
    createdAt: number;
    available: boolean;
  }
}

export = typesFiles;
