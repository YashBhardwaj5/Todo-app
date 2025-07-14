import { Filter } from 'lucide-react';

const Filters = ({ filter, setFilter }) => (
  <div className="flex justify-center mb-6">
    <div className="bg-white rounded-lg shadow-sm p-1 flex gap-1">
      {['all', 'active', 'completed'].map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-colors ${
            filter === f
              ? 'bg-blue-600 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <Filter size={14} className="inline mr-1" />
          {f}
        </button>
      ))}
    </div>
  </div>
);
export default Filters;
