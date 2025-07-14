import './App.css'
import { Header } from './components/Header'
import React, { useState, useEffect } from 'react';
import Stats from './components/Stats';
import TodoForm from './components/TodoForm';
import Filters from './components/Filters';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(false);

  // Load todos from localStorage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    setTodos(savedTodos);
  }, []);

  const saveTodos = (updatedTodos) => {
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    setLoading(true);

    const todo = {
      id: Date.now(),
      text: newTodo.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };

    setTimeout(() => {
      const updatedTodos = [...todos, todo];
      saveTodos(updatedTodos);
      setNewTodo('');
      setLoading(false);
    }, 500);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    saveTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    saveTodos(updatedTodos);
  };

  const startEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const saveEdit = () => {
    if (!editText.trim()) return;
    const updatedTodos = todos.map(todo =>
      todo.id === editingId ? { ...todo, text: editText.trim() } : todo
    );
    saveTodos(updatedTodos);
    setEditingId(null);
    setEditText('');
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  const stats = {
    total: todos.length,
    completed: todos.filter(t => t.completed).length,
    active: todos.filter(t => !t.completed).length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Header />
          <Stats {...stats} />
          <TodoForm
            newTodo={newTodo}
            setNewTodo={setNewTodo}
            addTodo={addTodo}
            loading={loading}
          />
          <Filters filter={filter} setFilter={setFilter} />
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <TodoList
              todos={filteredTodos}
              editingId={editingId}
              editText={editText}
              setEditText={setEditText}
              toggleTodo={toggleTodo}
              startEdit={startEdit}
              saveEdit={saveEdit}
              cancelEdit={cancelEdit}
              deleteTodo={deleteTodo}
            />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;

