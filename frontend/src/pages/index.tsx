import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    fetchProfile(token);
    fetchTasks(token);
  }, []);

  const fetchProfile = async (token: string) => {
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + '/auth/profile',
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      const data = await res.json();
      if (data.success) {
        setUser(data.user);
      }
    } catch (error) {
      console.error('Failed to fetch profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchTasks = async (token: string) => {
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + '/tasks',
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      const data = await res.json();
      if (data.success) {
        setTasks(data.tasks || []);
      }
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  if (loading) {
    return <div style={{ padding: '20px' }}>Loading...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h1>Task Management App</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>

      {user && (
        <div style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
          <p>Welcome, <strong>{user.name}</strong>!</p>
          <p>Email: {user.email}</p>
        </div>
      )}

      <div style={{ marginBottom: '20px' }}>
        <h2>Your Tasks ({tasks.length})</h2>
        {tasks.length === 0 ? (
          <p>No tasks yet. Create one!</p>
        ) : (
          <ul>
            {tasks.map((task: any) => (
              <li key={task._id} style={{ padding: '10px', marginBottom: '10px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
                <strong>{task.title}</strong>
                <p>{task.description}</p>
                <small>Status: {task.status}</small>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
