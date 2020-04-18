import axios from "axios";

class LendService {
  constructor() {
    let service = axios.create({
      baseURL: "http://localhost:3100",
      withCredentials: true,
    });
    this.service = service;
  }

  getSearch = async (search) => {
    const response = await this.service.get(`/search/${search}`);
    return response.data;
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

  uploadProfilePhoto = async (profilePic) => {
    const response = await this.service.post(
      "/upload-profile-photo",
      profilePic
    );
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

  validateUser = async (username) => {
    const response = await this.service.get;
  };
}

export default LendService;
