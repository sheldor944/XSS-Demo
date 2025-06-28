// pages/vulnerable.js
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import CommentForm from '../components/CommentForm';
import { VulnerableCommentList } from '../components/CommentList';
import styles from '../styles/Home.module.css';

export default function VulnerablePage() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/comments/vulnerable');
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (name, comment) => {
    try {
      const response = await fetch('/api/comments/vulnerable', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, comment }),
      });
      
      if (response.ok) {
        fetchComments();
      }
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <Layout title="XSS Demo - Vulnerable Page">
      <section className={`${styles.demoSection} ${styles.vulnerable}`}>
        <h2>Vulnerable Comment System</h2>
        <div className={styles.warning}>
          ⚠️ This section is intentionally vulnerable to XSS attacks!
        </div>
        
        <p>
          This page demonstrates a vulnerable implementation that directly inserts user input into the DOM
          using <code>dangerouslySetInnerHTML</code> without sanitization. Try adding a comment with script tags or HTML.
        </p>
        
        <CommentForm onSubmit={handleSubmit} type="vulnerable" />
        
        {loading ? (
          <p>Loading comments...</p>
        ) : (
          <VulnerableCommentList comments={comments} />
        )}
      </section>
    </Layout>
  );
}