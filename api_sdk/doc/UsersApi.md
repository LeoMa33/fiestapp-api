# openapi.api.UsersApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userControllerCreate**](UsersApi.md#usercontrollercreate) | **POST** /users | Créer un nouvel utilisateur
[**userControllerDelete**](UsersApi.md#usercontrollerdelete) | **DELETE** /users/{id} | Supprimer un utilisateur
[**userControllerFindAll**](UsersApi.md#usercontrollerfindall) | **GET** /users | Récupérer tous les utilisateurs
[**userControllerFindOne**](UsersApi.md#usercontrollerfindone) | **GET** /users/{id} | Récupérer un utilisateur par ID
[**userControllerUpdate**](UsersApi.md#usercontrollerupdate) | **PUT** /users/{id} | Mettre à jour un utilisateur avec image


# **userControllerCreate**
> User userControllerCreate(username, gender, age, height, weight, alcoholConsumption, file)

Créer un nouvel utilisateur

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getUsersApi();
final String username = username_example; // String | Nom d'utilisateur
final String gender = gender_example; // String | Genre de l’utilisateur
final num age = 8.14; // num | Âge de l'utilisateur
final num height = 8.14; // num | Taille en cm
final num weight = 8.14; // num | Poids en kg
final String alcoholConsumption = alcoholConsumption_example; // String | Fréquence de consommation d’alcool
final MultipartFile file = BINARY_DATA_HERE; // MultipartFile | 

try {
    final response = api.userControllerCreate(username, gender, age, height, weight, alcoholConsumption, file);
    print(response);
} catch on DioException (e) {
    print('Exception when calling UsersApi->userControllerCreate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Nom d'utilisateur | 
 **gender** | **String**| Genre de l’utilisateur | 
 **age** | **num**| Âge de l'utilisateur | 
 **height** | **num**| Taille en cm | 
 **weight** | **num**| Poids en kg | 
 **alcoholConsumption** | **String**| Fréquence de consommation d’alcool | 
 **file** | **MultipartFile**|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userControllerDelete**
> userControllerDelete(id)

Supprimer un utilisateur

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getUsersApi();
final String id = id_example; // String | GUID de l’utilisateur à supprimer

try {
    api.userControllerDelete(id);
} catch on DioException (e) {
    print('Exception when calling UsersApi->userControllerDelete: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| GUID de l’utilisateur à supprimer | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userControllerFindAll**
> BuiltList<User> userControllerFindAll()

Récupérer tous les utilisateurs

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getUsersApi();

try {
    final response = api.userControllerFindAll();
    print(response);
} catch on DioException (e) {
    print('Exception when calling UsersApi->userControllerFindAll: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BuiltList&lt;User&gt;**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userControllerFindOne**
> User userControllerFindOne(id)

Récupérer un utilisateur par ID

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getUsersApi();
final String id = id_example; // String | GUID de l’utilisateur

try {
    final response = api.userControllerFindOne(id);
    print(response);
} catch on DioException (e) {
    print('Exception when calling UsersApi->userControllerFindOne: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| GUID de l’utilisateur | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **userControllerUpdate**
> User userControllerUpdate(id, username, gender, age, height, weight, alcoholConsumption, file)

Mettre à jour un utilisateur avec image

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getUsersApi();
final String id = id_example; // String | GUID de l’utilisateur
final String username = username_example; // String | Nom d'utilisateur
final String gender = gender_example; // String | Genre de l’utilisateur
final num age = 8.14; // num | Âge de l'utilisateur
final num height = 8.14; // num | Taille en cm
final num weight = 8.14; // num | Poids en kg
final String alcoholConsumption = alcoholConsumption_example; // String | Fréquence de consommation d’alcool
final MultipartFile file = BINARY_DATA_HERE; // MultipartFile | 

try {
    final response = api.userControllerUpdate(id, username, gender, age, height, weight, alcoholConsumption, file);
    print(response);
} catch on DioException (e) {
    print('Exception when calling UsersApi->userControllerUpdate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| GUID de l’utilisateur | 
 **username** | **String**| Nom d'utilisateur | 
 **gender** | **String**| Genre de l’utilisateur | 
 **age** | **num**| Âge de l'utilisateur | 
 **height** | **num**| Taille en cm | 
 **weight** | **num**| Poids en kg | 
 **alcoholConsumption** | **String**| Fréquence de consommation d’alcool | 
 **file** | **MultipartFile**|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

