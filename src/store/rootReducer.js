import layout from "./layout";
import chat from "../pages/app/chat/store";
import project from "../pages/app/projects/store";
import auth from "./api/auth/authSlice";

const rootReducer = {
  layout,
  chat,
  project,
  auth,
};
export default rootReducer;
