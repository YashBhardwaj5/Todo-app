import { Plus } from 'lucide-react';

const TodoForm = ({ newTodo, setNewTodo, addTodo, loading }) => (
  <form onSubmit={addTodo} className="bg-white rounded-lg shadow-sm p-6 mb-6">
    <div className="flex gap-2">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        disabled={loading}
      />
      <button
        type="submit"
        disabled={loading || !newTodo.trim()}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
      >
        {loading ? (
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          <Plus size={16} />
        )}
        Add
      </button>
    </div>
  </form>
);
export default TodoForm;
