# openapi.api.ShoppingsApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**shoppingControllerCreate**](ShoppingsApi.md#shoppingcontrollercreate) | **POST** /shoppings | Créer un nouvel achat
[**shoppingControllerDelete**](ShoppingsApi.md#shoppingcontrollerdelete) | **DELETE** /shoppings/{id} | Supprimer un achat
[**shoppingControllerFindAll**](ShoppingsApi.md#shoppingcontrollerfindall) | **GET** /shoppings | Récupérer tous les achats (shopping items)
[**shoppingControllerFindOne**](ShoppingsApi.md#shoppingcontrollerfindone) | **GET** /shoppings/{id} | Récupérer un achat par ID
[**shoppingControllerUpdate**](ShoppingsApi.md#shoppingcontrollerupdate) | **PUT** /shoppings/{id} | Mettre à jour un achat


# **shoppingControllerCreate**
> Shopping shoppingControllerCreate(createShoppingDto)

Créer un nouvel achat

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getShoppingsApi();
final CreateShoppingDto createShoppingDto = ; // CreateShoppingDto | 

try {
    final response = api.shoppingControllerCreate(createShoppingDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling ShoppingsApi->shoppingControllerCreate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createShoppingDto** | [**CreateShoppingDto**](CreateShoppingDto.md)|  | 

### Return type

[**Shopping**](Shopping.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **shoppingControllerDelete**
> shoppingControllerDelete(id)

Supprimer un achat

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getShoppingsApi();
final String id = id_example; // String | GUID de l’achat à supprimer

try {
    api.shoppingControllerDelete(id);
} catch on DioException (e) {
    print('Exception when calling ShoppingsApi->shoppingControllerDelete: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| GUID de l’achat à supprimer | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **shoppingControllerFindAll**
> BuiltList<Shopping> shoppingControllerFindAll()

Récupérer tous les achats (shopping items)

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getShoppingsApi();

try {
    final response = api.shoppingControllerFindAll();
    print(response);
} catch on DioException (e) {
    print('Exception when calling ShoppingsApi->shoppingControllerFindAll: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BuiltList&lt;Shopping&gt;**](Shopping.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **shoppingControllerFindOne**
> Shopping shoppingControllerFindOne(id)

Récupérer un achat par ID

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getShoppingsApi();
final String id = id_example; // String | GUID de l’achat

try {
    final response = api.shoppingControllerFindOne(id);
    print(response);
} catch on DioException (e) {
    print('Exception when calling ShoppingsApi->shoppingControllerFindOne: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| GUID de l’achat | 

### Return type

[**Shopping**](Shopping.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **shoppingControllerUpdate**
> Shopping shoppingControllerUpdate(id, createShoppingDto)

Mettre à jour un achat

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getShoppingsApi();
final String id = id_example; // String | GUID de l’achat à mettre à jour
final CreateShoppingDto createShoppingDto = ; // CreateShoppingDto | 

try {
    final response = api.shoppingControllerUpdate(id, createShoppingDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling ShoppingsApi->shoppingControllerUpdate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| GUID de l’achat à mettre à jour | 
 **createShoppingDto** | [**CreateShoppingDto**](CreateShoppingDto.md)|  | 

### Return type

[**Shopping**](Shopping.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

