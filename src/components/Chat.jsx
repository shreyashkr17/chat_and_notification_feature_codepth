import React, { useContext ,useEffect} from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
// import {messaging} from "../firebase";
// import {toast} from "react-toastify"

const Chat = () => {
  const { data } = useContext(ChatContext);

  // useEffect(() => {
  //   messaging
  //     .requestPermission()
  //     .then(() => {
  //       console.log("Notification permission granted.");
  //     })
  //     .catch((error) => {
  //       console.error("Error requesting notification permission:", error);
  //     });
    
  //     messaging.onMessage((message) => {
  //       console.log("Recieve Message",message);

  //       toast.info(message.notification.body,{
  //         position:"top-right",
  //         autoClose:5000,
  //         hideProgressBar:false,
  //         closeOnClick:true,
  //         pauseOnHover:true,
  //         draggable:true,
  //       });
  //     });
  // },[]);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
