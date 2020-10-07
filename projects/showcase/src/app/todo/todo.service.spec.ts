import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TodoService } from './todo.service';

// https://jestjs.io/docs/en/setup-teardown
// Applies to all tests in this file
beforeEach(() => {
  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  });
});

describe('TodoService', () => {
  let service: TodoService;
  let httpMock: HttpTestingController;

  // Applies only to tests in this describe block
  beforeEach(() => {
    service = TestBed.inject(TodoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // another way to inject
  // beforeEach(inject([TodoService, HttpTestingController], (srv, http) => {
  //   service = srv;
  //   httpMock = http;
  // }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should throw an error if createTodo called with null object', () => {
    // must wrap the code in a function, otherwise the error will not be caught and assertion will fail.
    expect(() => {
      service.createTodo(null);
    }).toThrow('empty todo');
  });

  it('should be able to get todos', () => {
    const expectedResponse = [
      { userId: 1, id: 1, title: 'delectus aut autem', completed: false },
    ];

    service.getTodos().subscribe((res) => {
      expect(res).toEqual(expectedResponse);
    });

    // assert that one request was made to the url
    const mockReq = httpMock.expectOne(service.baseUrl + 'todos');
    // assert that the request hasn't been cancelled and the response is of type json
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    // assert that request method is GET
    expect(mockReq.request.method).toEqual('GET');

    mockReq.flush(expectedResponse);
    httpMock.verify();
  });
});
