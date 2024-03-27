"use client"

import React, { useState, useEffect } from 'react';

import { ArrowPathIcon } from '@heroicons/react/24/outline';

import { fetchLatestInvoices } from '@/app/lib/data';
import { LatestInvoicesSkeleton } from '@/app/ui/skeletons';

export default function LatestInvoices() {
  const [latestInvoices, setRevenue] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const latestInvoicesData = await fetchLatestInvoices();
      setRevenue(latestInvoicesData);
    }

    fetchData();
  }, []);

  if (!latestInvoices || latestInvoices.length === 0) {
    return <LatestInvoicesSkeleton />;
  }
  
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`mb-4 text-xl md:text-2xl`}>
        Latest Invoices
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        {/* NOTE: comment in this code when you get to this point in the course */}

        <div className="bg-white px-6">
         {latestInvoices}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
