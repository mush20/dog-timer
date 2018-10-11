import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DogService } from './dog.service';
import { DogResponseModel } from '@models/dog-response.model';

describe('DogService', () => {

  let httpTestingController: HttpTestingController;
  let service: DogService;
  const url = 'https://dog.ceo/api/breeds/image/random';

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ]
  }));

  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(DogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch a dog', async(() => {

    const expected: DogResponseModel = {
      status: 'success',
      message: 'https://images.dog.ceo/breeds/setter-gordon/n02101006_521.jpg'
    };

    service.getDog().subscribe(result => {
      expect(result).toEqual(expected);
    });

    httpTestingController.expectOne(url).flush(expected);

  }));
});
