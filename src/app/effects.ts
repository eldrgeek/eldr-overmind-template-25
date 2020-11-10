export const storage = {
  saveState(id: string, state: any) {
    localStorage.setItem(id, JSON.stringify(state));
  },
  getState(id: string): any {
    try {
      return JSON.parse(localStorage.getItem(id) || '{}');
    } catch (e) {
      return {};
    }
  },
};

export const ids = {
  create(): string {
    return Date.now().toString();
  },
};
