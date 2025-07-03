# openapi.api.DeviceAuthApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authControllerLogin**](DeviceAuthApi.md#authcontrollerlogin) | **POST** /auth/device | Login or register a user based on deviceId
[**authControllerRegister**](DeviceAuthApi.md#authcontrollerregister) | **POST** /auth/device/register | Register a user and link to deviceId (with avatar)


# **authControllerLogin**
> JsonObject authControllerLogin(loginDeviceDto)

Login or register a user based on deviceId

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getDeviceAuthApi();
final LoginDeviceDto loginDeviceDto = ; // LoginDeviceDto | 

try {
    final response = api.authControllerLogin(loginDeviceDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling DeviceAuthApi->authControllerLogin: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginDeviceDto** | [**LoginDeviceDto**](LoginDeviceDto.md)|  | 

### Return type

[**JsonObject**](JsonObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authControllerRegister**
> User authControllerRegister(deviceId, username, gender, age, height, weight, alcoholConsumption, file)

Register a user and link to deviceId (with avatar)

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getDeviceAuthApi();
final String deviceId = deviceId_example; // String | 
final String username = username_example; // String | Nom d'utilisateur
final String gender = gender_example; // String | Genre de l’utilisateur
final num age = 8.14; // num | Âge de l'utilisateur
final num height = 8.14; // num | Taille en cm
final num weight = 8.14; // num | Poids en kg
final String alcoholConsumption = alcoholConsumption_example; // String | Fréquence de consommation d’alcool
final MultipartFile file = BINARY_DATA_HERE; // MultipartFile | 

try {
    final response = api.authControllerRegister(deviceId, username, gender, age, height, weight, alcoholConsumption, file);
    print(response);
} catch on DioException (e) {
    print('Exception when calling DeviceAuthApi->authControllerRegister: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceId** | **String**|  | 
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

