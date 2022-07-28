import axios from "axios";

let URL = `/api/comments/`;


const getCampComments = async (id) => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const postComment = async (data, token) => {
const campId = window.location.pathname.split("/")[2];
 URL = `/api/comments/${campId}`;
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(URL, data, config);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const deleteComment = async (id) => {
  try {
    const response = await axios.delete(URL + id);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const commentService = {
  getCampComments,
  postComment,
  deleteComment,
};
export default commentService;
