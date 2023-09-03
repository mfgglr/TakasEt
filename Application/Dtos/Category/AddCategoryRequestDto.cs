﻿using MediatR;

namespace Application.Dtos
{
	public class AddCategoryRequestDto : IRequest<AddCategoryResponseDto>
	{
		public string Name { get; private set; }
		public string Description { get; private set; }

		public AddCategoryRequestDto(string name, string description)
		{
			Name = name;
			Description = description;
		}
	}
}
