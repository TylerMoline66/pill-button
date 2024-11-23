import { useState, useEffect } from "react";

import OneSignal from "react-onesignal";

const BigButton = () => {
  const [selected, setSelected] = useState(false);

  const changePill = () => {
    setSelected((prev) => !prev);
  };

  const handleNotification = () => {
    // Request permission
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        // Show notification
        new Notification("Hello!", {
          body: "This is a notification from your React app!",
          icon: "/icon.png", // Path to an icon
        });
      } else {
        console.log("Notification permission denied.");
      }
    });
  };
  console.log("selected", selected);

  useEffect(() => {
    OneSignal.init({
      appId: "cccd1861-8459-4e7a-a235-9da0a1b9cd48",
      safari_web_id: "web.onesignal.auto.48d27e8c-5bf0-4f8f-a083-e09c208eb2cb",
      notifyButton: {
        enable: true,
      },
    });
  }, []);

  return (
    <div className="pill-wrapper">
      <div className={selected ? "pill selected" : "pill"} onClick={changePill}>
        {selected ? <h1>✅</h1> : <h1>💊</h1>}
      </div>
      <button onClick={handleNotification}>Enable Notifications</button>
    </div>
  );
};
export default BigButton;
