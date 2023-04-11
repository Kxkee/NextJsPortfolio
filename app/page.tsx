"use client";
import Navigation from "@/components/Navigation";
import Home from "@/components/Home";

export default function Portfolio() {
  return (
    <main className="min-h-screen w-screen bg-bg-purple flex justify-center">
        <Navigation />
        <div className="w-full h-screen px-[400px]">
            <Home />
        </div>
    </main>
  )
}
