import axios from "axios";

const KEY = "AIzaSyAHoGoARASU1bJdjXshiFHl78sPxS2oSMU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
