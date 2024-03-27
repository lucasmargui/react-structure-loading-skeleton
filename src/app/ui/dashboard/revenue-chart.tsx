"use client"

import React, { useState, useEffect } from 'react';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { fetchRevenue } from '@/app/lib/data';
import { RevenueChartSkeleton } from '@/app/ui/skeletons';



export default function RevenueChart() {
  const [revenue, setRevenue] = useState<string| null>(null);

  useEffect(() => {
    async function fetchData() {
      const revenueData = await fetchRevenue();
      setRevenue(revenueData);
    }

    fetchData();
  }, []);

  if (!revenue) {
    return <RevenueChartSkeleton />;
  }

  const chartHeight = 350;


  return (
    <div className="w-full md:col-span-4">
      <h2 className="mb-4 text-xl md:text-2xl">
        Recent Revenue
      </h2>
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="sm:grid-cols-13 mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4">
          <div className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex" style={{ height: `${chartHeight}px` }}>
           {revenue}
          </div>

        </div>
        <div className="flex items-center pb-2 pt-6">
          <CalendarIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500">Last 12 months</h3>
        </div>
      </div>
    </div>
  );
}
