// components/CommentForm.js
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function CommentForm({ onSubmit, type }) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(name, comment);
    setName('');
    setComment('');
  };

  return (
    <div className={styles.commentForm}>
      <h3>Add a Comment</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor={`${type}-name`}>Name:</label>
          <input 
            type="text" 
            id={`${type}-name`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor={`${type}-comment`}>Comment:</label>
          <textarea 
            id={`${type}-comment`}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.button}>Post Comment</button>
      </form>
    </div>
  );
}