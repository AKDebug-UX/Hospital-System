import { useDispatch, useSelector } from "react-redux";
import {
  closeDropdown,
  closeNotifications,
  toggleDropdown,
  toggleNotifications,
} from "../../../features/uiSlice";
import { BiNotification } from "react-icons/bi";
import Notification from "./Notifications";

const NotificationsPage = () => {
  const rootDoc = document.querySelector(":root");
  const dispatch = useDispatch();

  return (
    <>
      <div className="icon-box !opacity-100 relative notification-btn">
        <div
          title="Notifications"
          className="relative text-primary"
          onClick={() => dispatch(toggleNotifications())}
        >
          <img src="/assets/icons/notification.svg" />
          <div className="absolute top-0 right-0 mr-0.5 w-2 h-2 rounded-full bg-primary"></div>
        </div>
        <Notification />
      </div>
    </>
  );
};

export default NotificationsPage;
