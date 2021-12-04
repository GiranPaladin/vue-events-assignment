const app = Vue.createApp({
  data() {
    return {
      output: '',
      output2: '',
    };
  },
  methods: {
    showAlert() {
      alert('e don click');
    },
    register(e) {
      this.output = e.target.value;
    },
    repeat(e) {
      this.output2 = e.target.value;
    },
  },
});

app.mount('#assignment');
