import { Injectable } from '@angular/core';
import { Observable, from, map, mergeMap, toArray } from 'rxjs';
import { AppFileReaderService } from './app-file-reader.service';
import { BlobTypesService } from './blob-types.service';
import { AppHttpClientService } from './app-http-client.service';

@Injectable({
  providedIn: 'root'
})
export class AppFileService {
  constructor(
    private appFileReader : AppFileReaderService,
    private blobTypes : BlobTypesService,
    private appHttpClient : AppHttpClientService
  ){}

  createUrlsFromBlob(source : Observable<Blob>) : Observable<string[]>{
    return source.pipe(
      mergeMap(blob => from(blob.arrayBuffer())),
      map( arrayBuffer => this.appFileReader.getFiles(new Uint8Array(arrayBuffer)) ),
      mergeMap(
        files => from(files).pipe(
          map(
            file => URL.createObjectURL(
              new Blob([file.file],{type : this.blobTypes.getBlobTypeByExtention(file.extention)})
            )
          ),
          toArray()
        )
      )
    )
  }

  getAppFile(id : number) : Observable<string>{
    return this.createUrlsFromBlob(
      this.appHttpClient.getBlob(`app-file/get-app-file/${id}`)
    ).pipe(
      map(x => x[0])
    );
  }

}
