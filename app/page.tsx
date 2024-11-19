"use client";

import { useState } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { MartyrCard } from '@/components/MartyrCard';
import { martyrs } from '@/lib/mock-data';
import type { Martyr } from '@/lib/types';

export default function Home() {
  const [filteredMartyrs, setFilteredMartyrs] = useState<Martyr[]>(martyrs);

  const handleSearch = (query: string) => {
    const filtered = martyrs.filter((martyr) =>
      Object.values(martyr).some((value) =>
        String(value).toLowerCase().includes(query.toLowerCase())
      )
    );
    setFilteredMartyrs(filtered);
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Palestinian Martyrs Memorial
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Honoring and remembering those who lost their lives in the struggle for freedom and justice.
          </p>
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>

      {/* Recent Entries */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {filteredMartyrs.length === martyrs.length
              ? 'Recent Entries'
              : `Search Results (${filteredMartyrs.length})`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMartyrs.map((martyr) => (
              <MartyrCard key={martyr.id} martyr={martyr} />
            ))}
          </div>
          {filteredMartyrs.length === 0 && (
            <div className="text-center text-gray-500 dark:text-gray-400 py-12">
              No results found. Please try a different search term.
            </div>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Memorial Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-700">
              <div className="text-4xl font-bold text-primary mb-2">12,000+</div>
              <div className="text-gray-600 dark:text-gray-300">Lives Lost</div>
            </div>
            <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-700">
              <div className="text-4xl font-bold text-primary mb-2">28</div>
              <div className="text-gray-600 dark:text-gray-300">Cities & Regions</div>
            </div>
            <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-700">
              <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-gray-600 dark:text-gray-300">Children</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}