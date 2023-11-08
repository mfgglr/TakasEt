﻿namespace Application.Entities
{
	public class Comment : Entity
	{
		public Guid? PostId { get; private set; }
		public Post? Post { get; }
		public Guid UserId { get; private set; }
		public User User { get; }
		public string Content { get; private set; }
		public Guid? ParentId { get; private set; }
		public Comment? Parent { get; }
		public IReadOnlyCollection<UserCommentLiking> UsersWhoLiked { get; }
		public IReadOnlyCollection<Comment> Children { get; }

		public Comment(Guid? parentId, Guid? postId, Guid userId, string content)
		{
			ParentId = parentId;
			PostId = postId;
			UserId = userId;
			Content = content;
		}

		
	}
}
