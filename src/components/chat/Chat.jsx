import React, { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };
  console.log(text);
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="profile" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ispsum dolor, si amet.sad</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="call" />
          <img src="./video.png" alt="video" />
          <img src="./info.png" alt="menu" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="profile" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse arcu lacus, faucibus nec felis ut, accumsan scelerisque erat. Mauris euismod ornare sodales. </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          
          <div className="texts">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse arcu lacus, faucibus nec felis ut, accumsan scelerisque erat. Mauris euismod ornare sodales. </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="profile" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse arcu lacus, faucibus nec felis ut, accumsan scelerisque erat. Mauris euismod ornare sodales. </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          
          <div className="texts">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse arcu lacus, faucibus nec felis ut, accumsan scelerisque erat. Mauris euismod ornare sodales. </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="profile" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse arcu lacus, faucibus nec felis ut, accumsan scelerisque erat. Mauris euismod ornare sodales.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          
          <div className="texts">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse arcu lacus, faucibus nec felis ut, accumsan scelerisque erat. Mauris euismod ornare sodales.</p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="attachment" />
          <img src="./camera.png" alt="camera" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt="emoji"
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;