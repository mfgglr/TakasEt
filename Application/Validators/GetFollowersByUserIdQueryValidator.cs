﻿using Application.Dtos;
using FluentValidation;

namespace Application.Validators
{
	public class GetFollowersByUserIdQueryValidator : AbstractValidator<GetFollowersByUserIdRequestDto>
	{
        public GetFollowersByUserIdQueryValidator()
        {
            RuleFor(x => x.FollowedId).NotEmpty().NotNull().WithMessage("hata");
        }
    }
}
