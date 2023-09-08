﻿using Application.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Repository.ModelBuilders
{
	internal class UserModelBuilder : IEntityTypeConfiguration<User>
	{
		public void Configure(EntityTypeBuilder<User> builder)
		{
			builder
				.HasOne(x => x.RefreshToken)
				.WithOne(x => x.User)
				.HasForeignKey<UserRefreshToken>(x => x.UserId);

			builder
				.HasMany(x => x.Articles)
				.WithOne(x => x.User)
				.HasForeignKey(x => x.UserId);

			builder
				.HasMany(x => x.Credits)
				.WithOne(x => x.User)
				.HasForeignKey(x => x.UserId);

			builder
				.HasMany(x => x.Comments)
				.WithOne(x => x.User)
				.HasForeignKey(x => x.UserId)
				.OnDelete(DeleteBehavior.NoAction);

			builder
				.HasMany(x => x.UserRefreshTokens)
				.WithOne(x => x.User)
				.HasForeignKey(x => x.UserId)
				.OnDelete(DeleteBehavior.NoAction);
		}
	}
}
