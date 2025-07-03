# openapi.api.HostingsApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hostingControllerCreate**](HostingsApi.md#hostingcontrollercreate) | **POST** /hostings | Créer un nouvel hébergement
[**hostingControllerDelete**](HostingsApi.md#hostingcontrollerdelete) | **DELETE** /hostings/{id} | Supprimer un hébergement
[**hostingControllerFindAll**](HostingsApi.md#hostingcontrollerfindall) | **GET** /hostings | Récupérer tous les hébergements
[**hostingControllerFindOne**](HostingsApi.md#hostingcontrollerfindone) | **GET** /hostings/{id} | Récupérer un hébergement par ID
[**hostingControllerUpdate**](HostingsApi.md#hostingcontrollerupdate) | **PUT** /hostings/{id} | Mettre à jour un hébergement


# **hostingControllerCreate**
> Hosting hostingControllerCreate(createHostingDto)

Créer un nouvel hébergement

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getHostingsApi();
final CreateHostingDto createHostingDto = ; // CreateHostingDto | 

try {
    final response = api.hostingControllerCreate(createHostingDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling HostingsApi->hostingControllerCreate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createHostingDto** | [**CreateHostingDto**](CreateHostingDto.md)|  | 

### Return type

[**Hosting**](Hosting.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hostingControllerDelete**
> hostingControllerDelete(id)

Supprimer un hébergement

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getHostingsApi();
final String id = id_example; // String | GUID de l’hébergement à supprimer

try {
    api.hostingControllerDelete(id);
} catch on DioException (e) {
    print('Exception when calling HostingsApi->hostingControllerDelete: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| GUID de l’hébergement à supprimer | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hostingControllerFindAll**
> BuiltList<Hosting> hostingControllerFindAll()

Récupérer tous les hébergements

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getHostingsApi();

try {
    final response = api.hostingControllerFindAll();
    print(response);
} catch on DioException (e) {
    print('Exception when calling HostingsApi->hostingControllerFindAll: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BuiltList&lt;Hosting&gt;**](Hosting.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hostingControllerFindOne**
> Hosting hostingControllerFindOne(id)

Récupérer un hébergement par ID

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getHostingsApi();
final String id = id_example; // String | GUID de l’hébergement

try {
    final response = api.hostingControllerFindOne(id);
    print(response);
} catch on DioException (e) {
    print('Exception when calling HostingsApi->hostingControllerFindOne: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| GUID de l’hébergement | 

### Return type

[**Hosting**](Hosting.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hostingControllerUpdate**
> Hosting hostingControllerUpdate(id, createHostingDto)

Mettre à jour un hébergement

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getHostingsApi();
final String id = id_example; // String | GUID de l’hébergement à mettre à jour
final CreateHostingDto createHostingDto = ; // CreateHostingDto | 

try {
    final response = api.hostingControllerUpdate(id, createHostingDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling HostingsApi->hostingControllerUpdate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| GUID de l’hébergement à mettre à jour | 
 **createHostingDto** | [**CreateHostingDto**](CreateHostingDto.md)|  | 

### Return type

[**Hosting**](Hosting.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

