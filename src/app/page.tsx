"use client";

import Login from "@/components/auth/Login";
import EventsFeed from "@/components/EventsFeed";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface Params {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Home({ params, searchParams }: Params) {
  const queryClient = new QueryClient();
  // Get query parameters here. If auth, then fetch blah, blah
  // If no auth, redirect to /signup or login
  // console.log(params);
  console.log(searchParams);

  return (
    <QueryClientProvider client={queryClient}>
      <Login params={params} searchParams={searchParams} />
      {/* <EventsFeed /> */}
    </QueryClientProvider>
  );
}
