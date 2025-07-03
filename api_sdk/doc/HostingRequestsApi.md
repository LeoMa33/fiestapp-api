# openapi.api.HostingRequestsApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hostingRequestControllerCreate**](HostingRequestsApi.md#hostingrequestcontrollercreate) | **POST** /hosting-requests | Créer une demande d’hébergement
[**hostingRequestControllerDelete**](HostingRequestsApi.md#hostingrequestcontrollerdelete) | **DELETE** /hosting-requests/{id} | Supprimer une demande
[**hostingRequestControllerFindAll**](HostingRequestsApi.md#hostingrequestcontrollerfindall) | **GET** /hosting-requests | Récupérer toutes les demandes d’hébergement
[**hostingRequestControllerFindOne**](HostingRequestsApi.md#hostingrequestcontrollerfindone) | **GET** /hosting-requests/{id} | Récupérer une demande par ID
[**hostingRequestControllerUpdate**](HostingRequestsApi.md#hostingrequestcontrollerupdate) | **PUT** /hosting-requests/{id} | Mettre à jour une demande


# **hostingRequestControllerCreate**
> HostingRequest hostingRequestControllerCreate(createHostingRequestDto)

Créer une demande d’hébergement

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getHostingRequestsApi();
final CreateHostingRequestDto createHostingRequestDto = ; // CreateHostingRequestDto | 

try {
    final response = api.hostingRequestControllerCreate(createHostingRequestDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling HostingRequestsApi->hostingRequestControllerCreate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createHostingRequestDto** | [**CreateHostingRequestDto**](CreateHostingRequestDto.md)|  | 

### Return type

[**HostingRequest**](HostingRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hostingRequestControllerDelete**
> hostingRequestControllerDelete(id)

Supprimer une demande

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getHostingRequestsApi();
final String id = id_example; // String | GUID de la demande à supprimer

try {
    api.hostingRequestControllerDelete(id);
} catch on DioException (e) {
    print('Exception when calling HostingRequestsApi->hostingRequestControllerDelete: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| GUID de la demande à supprimer | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hostingRequestControllerFindAll**
> BuiltList<HostingRequest> hostingRequestControllerFindAll()

Récupérer toutes les demandes d’hébergement

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getHostingRequestsApi();

try {
    final response = api.hostingRequestControllerFindAll();
    print(response);
} catch on DioException (e) {
    print('Exception when calling HostingRequestsApi->hostingRequestControllerFindAll: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BuiltList&lt;HostingRequest&gt;**](HostingRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hostingRequestControllerFindOne**
> HostingRequest hostingRequestControllerFindOne(id)

Récupérer une demande par ID

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getHostingRequestsApi();
final String id = id_example; // String | GUID de la demande

try {
    final response = api.hostingRequestControllerFindOne(id);
    print(response);
} catch on DioException (e) {
    print('Exception when calling HostingRequestsApi->hostingRequestControllerFindOne: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| GUID de la demande | 

### Return type

[**HostingRequest**](HostingRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hostingRequestControllerUpdate**
> HostingRequest hostingRequestControllerUpdate(id, createHostingRequestDto)

Mettre à jour une demande

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getHostingRequestsApi();
final String id = id_example; // String | GUID de la demande à mettre à jour
final CreateHostingRequestDto createHostingRequestDto = ; // CreateHostingRequestDto | 

try {
    final response = api.hostingRequestControllerUpdate(id, createHostingRequestDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling HostingRequestsApi->hostingRequestControllerUpdate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| GUID de la demande à mettre à jour | 
 **createHostingRequestDto** | [**CreateHostingRequestDto**](CreateHostingRequestDto.md)|  | 

### Return type

[**HostingRequest**](HostingRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

