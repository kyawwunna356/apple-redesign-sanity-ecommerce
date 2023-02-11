import { CheckCircleIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Button from "../components/Button";

function Success() {
  const router = useRouter();
  const { session_id } = router.query;
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="w-9/12 md:w-5/12">

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center justify-center gap-2">
            <CheckCircleIcon className="h-10 w-10 font-light" />
            <div>
              <p className="text-gray-600">Order #{session_id?.slice(-5)}</p>
              <p>Thank You</p>
            </div>
          </div>
          <div className="relative h-10 w-10">
            <Image
              src="/assets/logo.png"
              alt="logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="border border-gray-300 p-4 divide-y-2 flex flex-col space-y-4 mb-6">
          <div>
            <h1 className="text-lg font-medium">Your order is confirmed</h1>
            <p className="text-gray-600">{`We've accepted your order, and we're getting it ready.Come back to this page for updates on your shipment status.`}</p>
          </div>
          <div className="pt-3">
            <p> Other tracking number:</p>
            <p className="text-gray-600">{session_id?.slice(10,20)}</p>
          </div>
        </div>

        <div className="border border-gray-300 p-4 mb-6">
          <h1>Order updates</h1>
          <p>You will get shipping and delivery updates by email and text</p>
        </div>

        <Button title="Continue Shopping" onClick={() => {router.push('/')}} width="full"/>
      </div>
    </section>
  );
}

export default Success;
