import { useState } from 'react';

interface SearchAndFilterProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: Filters) => void;
  minFees: number;
  maxFees: number;
}

interface Filters {
  fees: [number, number];
  rating: number;
  languages: string[];
  isOnlineOnly: boolean;
}

export default function SearchAndFilter({ onSearch, onFilterChange, minFees, maxFees }: SearchAndFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    fees: [minFees, maxFees],
    rating: 0,
    languages: [],
    isOnlineOnly: false,
  });

  const handleFilterChange = (newFilters: Partial<Filters>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="mb-8 bg-white rounded-lg shadow-sm p-4">
      {/* Search Bar */}
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search by name or expertise..."
          className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          onChange={(e) => onSearch(e.target.value)}
        />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-3 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          Filters
        </button>
      </div>

      {/* Filter Panel */}
      {isOpen && (
        <div className="mt-4 p-4 border-t">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range (₹)
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="range"
                  min={minFees}
                  max={maxFees}
                  value={filters.fees[1]}
                  onChange={(e) => handleFilterChange({ fees: [minFees, parseInt(e.target.value)] })}
                  className="w-full"
                />
                <span className="text-sm text-gray-600">₹{filters.fees[1]}</span>
              </div>
            </div>

            {/* Rating Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Minimum Rating
              </label>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => handleFilterChange({ rating })}
                    className={`p-2 rounded ${
                      filters.rating === rating
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {rating}★
                  </button>
                ))}
              </div>
            </div>

            {/* Language Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Languages
              </label>
              <select
                multiple
                className="w-full p-2 border rounded-md"
                onChange={(e) => {
                  const selected = Array.from(e.target.selectedOptions).map(option => option.value);
                  handleFilterChange({ languages: selected });
                }}
              >
                {['Hindi', 'English', 'Sanskrit', 'Punjabi', 'Telugu'].map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>

            {/* Online Only Toggle */}
            <div>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.isOnlineOnly}
                  onChange={(e) => handleFilterChange({ isOnlineOnly: e.target.checked })}
                  className="form-checkbox h-5 w-5 text-indigo-600"
                />
                <span className="text-sm font-medium text-gray-700">Online Only</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
