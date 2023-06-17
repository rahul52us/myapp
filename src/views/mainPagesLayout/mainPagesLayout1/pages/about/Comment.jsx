import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import { Button, TextField, Typography, Box, styled } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const CommentContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const CommentContent = styled(Typography)({
  marginBottom: '10px',
});

const ReplyContainer = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(4),
  marginBottom: theme.spacing(1),
}));

const ReplyContent = styled(Typography)({
  marginBottom: '5px',
});

const CommentForm = styled('form')({
  display: 'flex',
  marginBottom: '20px',
});

const ReplyForm = styled('form')({
  display: 'flex',
  marginLeft: '20px',
});

const AddReplyButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(2),
}));

const CommentsComponent = observer(() => {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchComments();
  }, [currentPage]);

  const fetchComments = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/comment/gets', {
        blogId: '48ca5ede-9a00-4c2c-967a-a44ae8e83255',
        page: currentPage,
      });

      const { data, totalPages } = response.data;
      setComments(data.comments);
      setTotalPages(totalPages);
    } catch (error) {
      console.log('Error fetching comments:', error);
    }
  };

  const handleComment = async (commentId, content) => {
    let token = localStorage.getItem(process.env.REACT_APP_AUTHORIZATION_TOKEN);
    if (token && token !== 'undefined') {
      axios.defaults.headers = {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      };
    }
    try {
      const response = await axios.post('http://localhost:5000/api/comment/create', {
        commentId: commentId,
        content: content,
        blogId: '48ca5ede-9a00-4c2c-967a-a44ae8e83255',
      });

      const newComment = response.data.data;
      if (commentId) {
        const updatedComments = addCommentToParent(comments, commentId, newComment);
        setComments(updatedComments);
      } else {
        setComments([...comments, newComment]);
      }
    } catch (error) {
      console.log('Error adding comment:', error);
    }
  };

  const addCommentToParent = (comments, parentId, newComment) => {
    return comments.map((comment) => {
      if (comment.id === parentId) {
        if (!comment.children) {
          comment.children = [];
        }
        comment.children.push(newComment);
      } else if (comment.children && comment.children.length > 0) {
        comment.children = addCommentToParent(comment.children, parentId, newComment);
      }
      return comment;
    });
  };

  const handleShowReplies = (commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return {
          ...comment,
          showReplies: !comment.showReplies,
        };
      }
      return comment;
    });

    setComments(updatedComments);
  };

  const handlePagination = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <CommentForm
        onSubmit={(e) => {
          e.preventDefault();
          const commentContent = e.target.elements.commentContent.value;
          handleComment(null, commentContent);
          e.target.elements.commentContent.value = '';
        }}
      >
        <TextField
          name="commentContent"
          label="Add a comment"
          variant="outlined"
          size="small"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary" startIcon={<AddIcon />}>
          Add Comment
        </Button>
      </CommentForm>
      {comments.map((comment) => (
        <CommentContainer key={comment.id}>
          <CommentContent variant="body1">{comment.user.firstName}:</CommentContent>
          <CommentContent variant="body2">{comment.content}</CommentContent>
          {comment.children && comment.children.length > 0 && (
            <Button onClick={() => handleShowReplies(comment.id)}>
              {comment.showReplies ? 'Hide Replies' : 'Show Replies'}
            </Button>
          )}
          {comment.showReplies &&
            comment.children &&
            comment.children.map((reply) => (
              <ReplyContainer key={reply.id}>
                <ReplyContent variant="body1">{reply.user.firstName}:</ReplyContent>
                <ReplyContent variant="body2">{reply.content}</ReplyContent>
              </ReplyContainer>
            ))}
          <ReplyForm
            onSubmit={(e) => {
              e.preventDefault();
              const replyContent = e.target.elements.replyContent.value;
              handleComment(comment.id, replyContent);
              e.target.elements.replyContent.value = '';
            }}
          >
            <TextField
              name="replyContent"
              label="Reply to comment"
              variant="outlined"
              size="small"
              fullWidth
            />
            <AddReplyButton type="submit" variant="contained" color="primary" startIcon={<AddIcon />}>
              Reply
            </AddReplyButton>
          </ReplyForm>
        </CommentContainer>
      ))}
      <div>
        {currentPage > 1 && (
          <Button onClick={() => handlePagination(currentPage - 1)}>Previous</Button>
        )}
        {currentPage < totalPages && (
          <Button onClick={() => handlePagination(currentPage + 1)}>Next</Button>
        )}
      </div>
    </div>
  );
});

export default CommentsComponent;
