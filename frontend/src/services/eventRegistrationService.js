import axios from "axios";

const BASE_URL = "https://libraryhub-backend-rity.onrender.com/events";

const eventRegistrationService = {
  registerForEvent: (userId, eventId) => {
    return axios.post(
      `${BASE_URL}/register?userId=${userId}&eventId=${eventId}`
    );
  }
};

export default eventRegistrationService;