﻿using Application.Configurations;
using Application.Dtos;
using Application.Entities;
using Application.Interfaces.Repositories;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Application.Queries
{
	public class IsLikedLoggedInUserThePostQueryHandler : IRequestHandler<IsLikedLoggedInUserThePost, AppResponseDto>
	{
		private readonly IRepository<UserPostLiking> _likings;
		private readonly LoggedInUser _loggedInUser;

		public IsLikedLoggedInUserThePostQueryHandler(IRepository<UserPostLiking> likings, LoggedInUser loggedInUser)
		{
			_likings = likings;
			_loggedInUser = loggedInUser;
		}

		public async Task<AppResponseDto> Handle(IsLikedLoggedInUserThePost request, CancellationToken cancellationToken)
		{
			var isLiked = await _likings.DbSet.AnyAsync(
				x => x.UserId == _loggedInUser.UserId && x.PostId == request.PostId,
				cancellationToken
			);
			return AppResponseDto.Success(isLiked);
		}
	}
}