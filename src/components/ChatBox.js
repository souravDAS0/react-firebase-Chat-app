import React, { useEffect, useRef, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
  QuerySnapshot,
} from "firebase/firestore";
import { db } from "../firebase";
import SendMessage from "./SendMessage";
import Message from "./Message";

const ChatBox = () => {
  console.log("ChatBox Rendered");

  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  const scrollToEnd = () => {
    scroll?.current?.scrollIntoView({ behaviour: "smooth" });
  };

  useEffect(() => {
    console.log("useEffect Ran");
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      console.log("USeEffect Unsubscribed");
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });
    return () => unsubscribe;
  }, []);

  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        <>
          {messages?.map((message) => (
            <Message key={message.id} message={message} />
          ))}
          <span ref={scroll}></span>
        </>
      </div>
      {/* when a new message enters the chat, the screen scrolls down to the scroll div */}
      <SendMessage scroll={scroll} />
    </main>
  );
};

export default ChatBox;
