import layout from "./layout";
import email from "../pages/app/email/store";
import chat from "../pages/app/chat/store";
import project from "../pages/app/projects/store";
import auth from "./api/auth/authSlice";

const rootReducer = {
  layout,
  email,
  chat,
  project,
  auth,
};
export default rootReducer;
