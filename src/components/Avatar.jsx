import React from "react";

export default function Avatar() {
   return (
      <div className="w-12 h-12 rounded-full bg-slate-600 overflow-hidden cursor-pointer">
         <img
            src="https://s3-alpha-sig.figma.com/img/f60f/b0cb/53ece4752b8eb610fb19de0636019a84?Expires=1674432000&Signature=mWOK1m3lMc2PU-6ceix~Dl29dFb2nZY8HKiceKivkDdZXwu0k622T~IllT6facd1ZC2-ILctes1MdyuZFNAUKS2~hXJuV50ozhpeH4A0QjnGVF9EfghC0FH2VJ6Xi3L8KDsf0z0eaKHmq1BttolzWuw~KENIP43FDKVzAN~kukvRn1uxQwPzv8SMh04eC1iisK0A4dsdtf5bwU0IL6yxlfIShloCGiHaEFD6j~qyLmN56pBGRc1711eOE6jsuj1grSrZ0YKZKDBbHTLH1Ygeo5jvLba4ekTtYRwV27xi~mHbKbvHr2~~eF-FRXKxgU6efXdmqU3ZoB9IOW98Is8auA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="profile"
            className="w-[119px] h-[79px] object-cover"
         />
      </div>
   );
}
