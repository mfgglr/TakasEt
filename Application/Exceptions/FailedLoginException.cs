﻿using System.Net;

namespace Application.Exceptions
{
	public class FailedLoginException : AppException
	{
        public FailedLoginException() : base("Login failed for user!",HttpStatusCode.Unauthorized)
        {
            
        }
    }
}
