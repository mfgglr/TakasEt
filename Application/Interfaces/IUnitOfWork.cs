﻿namespace Application.Interfaces
{
	public interface IUnitOfWork
	{
		void Commit();
		Task CommitAsync();
	}
}
