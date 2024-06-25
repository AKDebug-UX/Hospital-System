import { useSelector } from "react-redux";
import { uiStore } from "../../../features/uiSlice";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const { isNotificationsOpen } = useSelector(uiStore);
  const navigate = useNavigate();

  return (
    <>
      {isNotificationsOpen && (
        <div
          className={`dropdown absolute -right-1 z-20 top-full p-2 !rounded-md h-[400px] w-[300px] md:w-[400px] border overflow-y-auto card transition-transform ease-in-out duration-800 ${
            isNotificationsOpen ? "translate-y-0" : "translate-y-[130%]"
          }`}
          initial={{ scale: 0.6, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between p-2 space-x-3">
            <div>
              <h1 className="font-bold text-primary text-[20px]">
                Notifications
              </h1>
            </div>
            <div>
              <img
                onClick={() => navigate("/inbox")}
                src="/img/Group_no.svg"
                className="h-[20px] w-[20px] cursor-pointer"
                alt=""
              />
            </div>
          </div>
          {/*---------------------------------------- Notifications List------------------------------------- */}
          {Array.apply(null, { length: 7 }).map((_, i) => (
            <div
              className="items-center justify-between gap-5 p-2 mt-2 bg-white rounded-md space-x-3 mb-3 cursor-pointer shadow-bs3"
              key={i}
            >
              <div className="flex flex-row gap-[3px] items-center justify-between w-full">
                <h1 className="text-[15px] font-bold ml-3">
                  Payment Notifications
                </h1>
                <span className="text-[11px] text-slate-500">12s</span>
              </div>

              <p className="text-[13px] text-left w-full">
                Stay informed about your earnings! Get notified whenever a
                payment is processed for your published works, whether it's
                through reader purchases, subscriptions, or any other revenue
                streams on the platform.
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Notifications;
