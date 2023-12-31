﻿using Application.Dtos;
using Application.Entities;
using AutoMapper;

namespace Application.Mappers
{
    public class SingUpMapper : Profile
	{
        public SingUpMapper()
        {
            CreateMap<SignUp, User>();
			CreateMap<User, UserResponseDto>();
        }
    }
}
