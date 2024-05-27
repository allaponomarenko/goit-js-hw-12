import axios from 'axios';

const API_KEY = '44031619-a947df2c149ce3ba62f1c08d8';
const BASE_URL = 'https://pixabay.com/api/';

export default class PixabayApi {
  constructor() {
    this.query = '';
    this.page = 1;
  }

  async fetchPhoto() {
    try {
      const response = await axios.get(
        `${BASE_URL}?key=${API_KEY}&q=${this.query}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=15`
      );
      this.incrementPage();
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
