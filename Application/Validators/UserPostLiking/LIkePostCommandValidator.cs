﻿using Application.Dtos;
using FluentValidation;

namespace Application.Validators
{
    public class LIkePostCommandValidator : AbstractValidator<LikePost>
    {
        public LIkePostCommandValidator()
        {
            RuleFor(x => x.PostId).NotEmpty().NotNull().WithMessage("hata");
        }
    }
}
