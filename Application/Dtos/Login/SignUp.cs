﻿using MediatR;

namespace Application.Dtos
{
	public class SignUp : IRequest<AppResponseDto>
    {
        public string UserName { get; private set; }
        public string Password { get; private set; }
        public string PasswordConfirmation { get; private set; }
        public string Email { get; private set; }

        public SignUp(string userName, string password, string passwordConfirmation, string email)
        {
            UserName = userName;
            Password = password;
            PasswordConfirmation = passwordConfirmation;
            Email = email;
        }
    }
}
