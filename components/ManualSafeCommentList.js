// components/ManualSafeCommentList.js
import styles from '../styles/Home.module.css';

// Manually sanitized comment component
export function ManualSafeComment({ comment }) {
  return (
    <div className={styles.comment}>
      {/* Display pre-sanitized content using dangerouslySetInnerHTML */}
      <div className={styles.commentAuthor} dangerouslySetInnerHTML={{ __html: comment.name }}></div>
      <div className={styles.commentText} dangerouslySetInnerHTML={{ __html: comment.comment }}></div>
    </div>
  );
}

export function ManualSafeCommentList({ comments }) {
  return (
    <div className={styles.commentsContainer}>
      <h3>Comments</h3>
      <div className={styles.commentsList}>
        {comments.length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          comments.map(comment => (
            <ManualSafeComment key={comment.id} comment={comment} />
          ))
        )}
      </div>
    </div>
  );
}