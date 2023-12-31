﻿using Application.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Repository.ModelBuilders
{
	internal class CommentModelBuilder : IEntityTypeConfiguration<Comment>
	{
		public void Configure(EntityTypeBuilder<Comment> builder)
		{
			builder
				.HasMany(x => x.Children)
				.WithOne(x => x.Parent)
				.HasForeignKey(x => x.ParentId)
				.OnDelete(DeleteBehavior.NoAction);

			builder
				.HasMany(x => x.UsersWhoLiked)
				.WithOne(x => x.Comment)
				.HasForeignKey(x => x.CommentId)
				.OnDelete(DeleteBehavior.NoAction);
		}
	}
}
