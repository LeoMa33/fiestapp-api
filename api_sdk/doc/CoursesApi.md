# openapi.api.CoursesApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**courseControllerCreate**](CoursesApi.md#coursecontrollercreate) | **POST** /courses | Créer une nouvelle course
[**courseControllerDelete**](CoursesApi.md#coursecontrollerdelete) | **DELETE** /courses/{id} | Supprimer une course
[**courseControllerFindAll**](CoursesApi.md#coursecontrollerfindall) | **GET** /courses | Récupérer toutes les courses
[**courseControllerFindOne**](CoursesApi.md#coursecontrollerfindone) | **GET** /courses/{id} | Récupérer une course par ID
[**courseControllerUpdate**](CoursesApi.md#coursecontrollerupdate) | **PUT** /courses/{id} | Mettre à jour une course


# **courseControllerCreate**
> Course courseControllerCreate(createCourseDto)

Créer une nouvelle course

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getCoursesApi();
final CreateCourseDto createCourseDto = ; // CreateCourseDto | 

try {
    final response = api.courseControllerCreate(createCourseDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling CoursesApi->courseControllerCreate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCourseDto** | [**CreateCourseDto**](CreateCourseDto.md)|  | 

### Return type

[**Course**](Course.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **courseControllerDelete**
> courseControllerDelete(id)

Supprimer une course

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getCoursesApi();
final String id = id_example; // String | ID de la course (UUID)

try {
    api.courseControllerDelete(id);
} catch on DioException (e) {
    print('Exception when calling CoursesApi->courseControllerDelete: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID de la course (UUID) | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **courseControllerFindAll**
> BuiltList<Course> courseControllerFindAll()

Récupérer toutes les courses

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getCoursesApi();

try {
    final response = api.courseControllerFindAll();
    print(response);
} catch on DioException (e) {
    print('Exception when calling CoursesApi->courseControllerFindAll: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BuiltList&lt;Course&gt;**](Course.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **courseControllerFindOne**
> Course courseControllerFindOne(id)

Récupérer une course par ID

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getCoursesApi();
final String id = id_example; // String | ID de la course (UUID)

try {
    final response = api.courseControllerFindOne(id);
    print(response);
} catch on DioException (e) {
    print('Exception when calling CoursesApi->courseControllerFindOne: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID de la course (UUID) | 

### Return type

[**Course**](Course.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **courseControllerUpdate**
> Course courseControllerUpdate(id, createCourseDto)

Mettre à jour une course

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getCoursesApi();
final String id = id_example; // String | ID de la course (UUID)
final CreateCourseDto createCourseDto = ; // CreateCourseDto | 

try {
    final response = api.courseControllerUpdate(id, createCourseDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling CoursesApi->courseControllerUpdate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID de la course (UUID) | 
 **createCourseDto** | [**CreateCourseDto**](CreateCourseDto.md)|  | 

### Return type

[**Course**](Course.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

