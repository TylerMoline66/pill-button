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
      appId: "YOUR_ONESIGNAL_APP_ID",
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
