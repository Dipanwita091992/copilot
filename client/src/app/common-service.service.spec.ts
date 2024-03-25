import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommonServiceService } from './common-service.service';

describe('CommonServiceService', () => {
  let service: CommonServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommonServiceService]
    });

    service = TestBed.inject(CommonServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure that there are no outstanding requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get login data', () => {
    const mockPayload = { username: 'test', password: 'test' };
    const mockResponse = { token: 'test_token' };

    service.getLoginData(mockPayload).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(service.apiUrl);
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });

  it('should get data', () => {
    const mockPayload = { id: '1' };
    const mockResponse = { data: 'test_data' };

    service.getData(mockPayload).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(service.apiUrl);
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });
});