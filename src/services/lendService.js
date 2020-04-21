import axios from "axios";

class LendService {
  constructor() {
    let service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    });
    this.service = service;
  }

  isLogged = async () => {
    const response = await this.service.get("/logged");
    return response;
  };

  getSearch = async (stuff) => {
    const response = await this.service.get(`/search/${stuff}`);
    return response;
  };

  signUp = async (info) => {
    const response = await this.service.post("/signup", info);
    return response;
  };

  getProfile = async (username) => {
    const response = await this.service.get(`/profile/${username}`);
    return response;
  };

  getContact = async (username) => {
    const response = await this.service.get(`/contact/${username}`);
    return response;
  };

  editProfile = async (username, user, file) => {
    const response = await this.service.post(`/edit-profile/${username}`, user);
    return response;
  };

  uploadPhoto = async (img) => {
    const response = await this.service.post("/upload-photo", img);
    return response;
  };

  logIn = async (user) => {
    const response = await this.service.post("/login", user);
    return response;
  };

  logOut = async () => {
    const response = await this.service.post("/logout");
    return response;
  };

  newStuff = async (stuff) => {
    const response = await this.service.post("/add-new-stuff", stuff);
    return response;
  };
}

export default LendService;
