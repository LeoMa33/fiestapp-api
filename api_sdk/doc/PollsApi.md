# openapi.api.PollsApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pollControllerCreate**](PollsApi.md#pollcontrollercreate) | **POST** /polls | Créer un sondage avec options
[**pollControllerDelete**](PollsApi.md#pollcontrollerdelete) | **DELETE** /polls/{id} | Supprimer un sondage
[**pollControllerFindAll**](PollsApi.md#pollcontrollerfindall) | **GET** /polls | Lister tous les sondages
[**pollControllerFindOne**](PollsApi.md#pollcontrollerfindone) | **GET** /polls/{id} | Obtenir un sondage par ID
[**pollControllerUpdate**](PollsApi.md#pollcontrollerupdate) | **PUT** /polls/{id} | Mettre à jour un sondage


# **pollControllerCreate**
> Poll pollControllerCreate(createPollDto)

Créer un sondage avec options

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getPollsApi();
final CreatePollDto createPollDto = ; // CreatePollDto | 

try {
    final response = api.pollControllerCreate(createPollDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling PollsApi->pollControllerCreate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPollDto** | [**CreatePollDto**](CreatePollDto.md)|  | 

### Return type

[**Poll**](Poll.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pollControllerDelete**
> pollControllerDelete(id)

Supprimer un sondage

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getPollsApi();
final String id = id_example; // String | GUID du sondage à supprimer

try {
    api.pollControllerDelete(id);
} catch on DioException (e) {
    print('Exception when calling PollsApi->pollControllerDelete: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| GUID du sondage à supprimer | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pollControllerFindAll**
> BuiltList<Poll> pollControllerFindAll()

Lister tous les sondages

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getPollsApi();

try {
    final response = api.pollControllerFindAll();
    print(response);
} catch on DioException (e) {
    print('Exception when calling PollsApi->pollControllerFindAll: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BuiltList&lt;Poll&gt;**](Poll.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pollControllerFindOne**
> Poll pollControllerFindOne(id)

Obtenir un sondage par ID

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getPollsApi();
final String id = id_example; // String | GUID du sondage

try {
    final response = api.pollControllerFindOne(id);
    print(response);
} catch on DioException (e) {
    print('Exception when calling PollsApi->pollControllerFindOne: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| GUID du sondage | 

### Return type

[**Poll**](Poll.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pollControllerUpdate**
> Poll pollControllerUpdate(id, createPollDto)

Mettre à jour un sondage

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getPollsApi();
final String id = id_example; // String | GUID du sondage à modifier
final CreatePollDto createPollDto = ; // CreatePollDto | 

try {
    final response = api.pollControllerUpdate(id, createPollDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling PollsApi->pollControllerUpdate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| GUID du sondage à modifier | 
 **createPollDto** | [**CreatePollDto**](CreatePollDto.md)|  | 

### Return type

[**Poll**](Poll.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

