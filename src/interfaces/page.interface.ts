interface Page {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: number;
  };
  results: Character[];
}
