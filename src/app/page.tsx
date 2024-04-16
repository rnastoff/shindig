"use client";

import Login from "@/components/auth/Login";
import EventsFeed from "@/components/EventsFeed";

export default function Home() {
  // Get query parameters here. If auth, then fetch blah, blah
  // If no auth, redirect to /signup or login

  return (
    <div>
      <Login />
      {/* <EventsFeed /> */}
    </div>
  );
}
