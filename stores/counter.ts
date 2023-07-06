export const useCounter = defineStore('counter', {
  state: () => ({
    n: 0,
  }),
  actions: {
    increment() {
      this.n++;
    },
  },
});