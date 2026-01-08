"use client";

import Navbar from "@/components/Navbar";
import Tabs from "@/components/Tabs";
import CouponCard from "@/components/CouponCard";
import BottomNav from "@/components/BottomNav";
import { useState } from "react";

export default function Home() {
  const [signedIn, setSignedIn] = useState(false);
  const [signInMsg, setSignInMsg] = useState("");

  const handleSignIn = () => {
    setSignInMsg("Signed in successfully!");
    setTimeout(() => {
      setSignInMsg("");
      setSignedIn(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white font-sans pb-24 relative">
      <Navbar />

      <main className="px-4 pt-4">
        {/* Header */}
        <div className="mb-4">
          <h1 className="text-2xl font-bold mb-2 text-[#4B4E4B]">Offers</h1>
          {!signedIn ? (
            <>
              <p className="text-gray-500 text-sm mb-3">
                Sign in to unlock exclusive additional rewards.
              </p>
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleSignIn}
                  className="w-full bg-[#d97740] text-white py-3 rounded-md font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  Sign In
                </button>
                {signInMsg && <p className="text-green-600 text-sm text-center">{signInMsg}</p>}
              </div>
            </>
          ) : (
            <p className="text-green-600 font-medium text-sm mb-3">
              Welcome back! You have unlocked exclusive rewards.
            </p>
          )}
        </div>

        <Tabs />

        {/* Sitewide coupons */}
        <div className="mt-6">
          <h2 className="font-bold text-lg mb-4 text-[#4B4E4B]">Sitewide coupons:</h2>
          <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
            <CouponCard
              amount="₹1,500"
              type="amount"
              title="LONGSTAY"
              description="15% off when you book for 5 days or more and 20% off when you book for 30 days or more."
            />
            <CouponCard
              amount="₹3,000"
              type="amount"
              title="EARLYBIRD"
              description="15% off when you book for 5 days or more and 20% off when you book for 30 days or more."
            />
            <CouponCard
              amount="10%"
              type="flat"
              title="RUSHDEAL"
              description="15% off when you book for 5 days or more and 20% off when you book for 30 days or more."
            />
          </div>
        </div>

        {/* Bonus gift cards */}
        <div className="mt-8">
          <div className="flex justify-between items-end mb-4">
            <div>
              <h2 className="font-bold text-lg text-[#4B4E4B]">Bonus gift cards:</h2>
              <p className="text-[#7D7D7D] text-xs mt-1">Collect multiple of these</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
            <CouponCard
              amount="400"
              type="amount"
              title="MYNTRA"
              description="Get this gift voucher on booking above ₹5000"
              isGiftCard={true}
            />
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
