export const storage = {
  saveState(id: string, state: any) {
    localStorage.setItem(id, JSON.stringify(state));
  },
  getState(id: string): any {
    return JSON.parse(localStorage.getItem(id) || '{}');
  },
};

export const ids = {
  create(): string {
    return Date.now().toString();
  },
};
