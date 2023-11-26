﻿using Application.Interfaces.Services;
using System.Reflection;

namespace Service
{
	public class LocalBlobService : IBlobService
	{
		public async Task<byte[]> DownloadAsync(string blobName, string containerName, CancellationToken cancellationToken)
		{
			Assembly asm = Assembly.GetExecutingAssembly();
			string path = $"{Path.GetDirectoryName(asm.Location)}/{containerName}/{blobName}"; ;
			using (FileStream fileStream = File.OpenRead(path))
			{
				byte[] r = new byte[fileStream.Length];
				await fileStream.ReadAsync(r, 0, (int)fileStream.Length);
				return r;
			}
		}

		public async Task UploadAsync(Stream stream, string blobName, string containerName, CancellationToken cancellationToken)
		{
			Assembly asm = Assembly.GetExecutingAssembly();
			string path = $"{Path.GetDirectoryName(asm.Location)}/{containerName}/{blobName}";
			using (FileStream fileStream = File.Create(path))
				await stream.CopyToAsync(fileStream, cancellationToken);
		}
	}
}
