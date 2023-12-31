﻿using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Data;

namespace Application.Interfaces
{
	public interface IUnitOfWork
	{
		IEnumerable<T> GetEntities<T>(Func<EntityEntry<T>, bool> expression) where T : class;
		bool HasChanges();
		Task<DateTime> CommitAsync(CancellationToken cancellationToken);
	}
}
