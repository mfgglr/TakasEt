﻿using System.Net;

namespace Application.Exceptions
{
	public class UnauthorizedAccessException : AppException
	{
		public UnauthorizedAccessException() : base("Unauthorized Access!", HttpStatusCode.Forbidden)
		{
		}
	}
}
