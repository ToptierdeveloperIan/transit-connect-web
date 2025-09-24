const API_BASE_URL = 'http://localhost:8000/api';

class ApiService {
  private baseURL: string;
  private token: string | null;

  constructor() {
    this.baseURL = API_BASE_URL;
    this.token = localStorage.getItem('authToken');
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const headers: Record<string, string> = {};



    if (this.token) {
      headers['Authorization'] = `Token ${this.token}`;
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  // Authentication
  async login(email: string, password: string) {
    const response = await this.request('/auth/login/', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    
    if (response.token) {
      this.token = response.token;
      localStorage.setItem('authToken', response.token);
    }
    
    return response;
  }



  async register(userData: user) {
    return this.request('/auth/register/', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  }

  async logout() {
    await this.request('/auth/logout/', { method: 'POST' });
    this.token = null;
    localStorage.removeItem('authToken');
  }

  // Rides
  async requestRide(rideData: any) {
    return this.request('/rides/', {
      method: 'POST',
      body: JSON.stringify(rideData),
    });
  }

  async getRides() {
    return this.request('/rides/');
  }

  async getRide(rideId: string) {
    return this.request(`/rides/${rideId}/`);
  }

  async cancelRide(rideId: string) {
    return this.request(`/rides/${rideId}/cancel/`, {
      method: 'POST',
    });
  }

  // User Profile
  async getProfile() {
    return this.request('/users/profile/');
  }

  async updateProfile(profileData: any) {
    return this.request('/users/profile/', {
      method: 'PUT',
      body: JSON.stringify(profileData),
    });
  }

  // Payments
  async getPaymentMethods() {
    return this.request('/payments/methods/');
  }

  async addPaymentMethod(paymentData: any) {
    return this.request('/payments/methods/', {
      method: 'POST',
      body: JSON.stringify(paymentData),
    });
  }
}

export default new ApiService();