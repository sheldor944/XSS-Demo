// pages/api/comments/manual-safe.js
import { getManualSafeComments, addManualSafeComment } from "../../../lib/comments";
import { sanitizeHTML } from "../../../lib/utils/sanitize";

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(getManualSafeComments());
  } else if (req.method === 'POST') {
    const { name, comment } = req.body;
    if (!name || !comment) {
      return res.status(400).json({ message: 'Name and comment are required' });
    }
    
    // Manually sanitize the input before storing
    const sanitizedName = sanitizeHTML(name);
    const sanitizedComment = sanitizeHTML(comment);
    
    const newComment = addManualSafeComment(sanitizedName, sanitizedComment);
    res.status(201).json(newComment);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}