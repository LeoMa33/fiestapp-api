# openapi.api.EventsApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventControllerCreate**](EventsApi.md#eventcontrollercreate) | **POST** /events | Créer un nouvel événement
[**eventControllerDelete**](EventsApi.md#eventcontrollerdelete) | **DELETE** /events/{id} | Supprimer un événement
[**eventControllerFindAll**](EventsApi.md#eventcontrollerfindall) | **GET** /events | Récupérer tous les événements
[**eventControllerFindOne**](EventsApi.md#eventcontrollerfindone) | **GET** /events/{id} | Récupérer un événement par son ID
[**eventControllerUpdate**](EventsApi.md#eventcontrollerupdate) | **PUT** /events/{id} | Mettre à jour un événement


# **eventControllerCreate**
> Event eventControllerCreate(title, location, date, organizer, latitude, longitude, file)

Créer un nouvel événement

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getEventsApi();
final String title = title_example; // String | Titre de l’événement
final String location = location_example; // String | Lieu de l’événement
final num date = 8.14; // num | Horodatage en secondes de la date de l’événement
final String organizer = organizer_example; // String | GUID de l’organisateur (User)
final num latitude = 8.14; // num | Latitude du lieu (optionnelle)
final num longitude = 8.14; // num | Longitude du lieu (optionnelle)
final MultipartFile file = BINARY_DATA_HERE; // MultipartFile | 

try {
    final response = api.eventControllerCreate(title, location, date, organizer, latitude, longitude, file);
    print(response);
} catch on DioException (e) {
    print('Exception when calling EventsApi->eventControllerCreate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | **String**| Titre de l’événement | 
 **location** | **String**| Lieu de l’événement | 
 **date** | **num**| Horodatage en secondes de la date de l’événement | 
 **organizer** | **String**| GUID de l’organisateur (User) | 
 **latitude** | **num**| Latitude du lieu (optionnelle) | [optional] 
 **longitude** | **num**| Longitude du lieu (optionnelle) | [optional] 
 **file** | **MultipartFile**|  | [optional] 

### Return type

[**Event**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **eventControllerDelete**
> eventControllerDelete(id)

Supprimer un événement

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getEventsApi();
final String id = id_example; // String | GUID de l’événement à supprimer

try {
    api.eventControllerDelete(id);
} catch on DioException (e) {
    print('Exception when calling EventsApi->eventControllerDelete: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| GUID de l’événement à supprimer | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **eventControllerFindAll**
> BuiltList<Event> eventControllerFindAll()

Récupérer tous les événements

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getEventsApi();

try {
    final response = api.eventControllerFindAll();
    print(response);
} catch on DioException (e) {
    print('Exception when calling EventsApi->eventControllerFindAll: $e\n');
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**BuiltList&lt;Event&gt;**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **eventControllerFindOne**
> Event eventControllerFindOne(id)

Récupérer un événement par son ID

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getEventsApi();
final String id = id_example; // String | GUID de l’événement

try {
    final response = api.eventControllerFindOne(id);
    print(response);
} catch on DioException (e) {
    print('Exception when calling EventsApi->eventControllerFindOne: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| GUID de l’événement | 

### Return type

[**Event**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **eventControllerUpdate**
> Event eventControllerUpdate(id, title, location, date, organizer, latitude, longitude, file)

Mettre à jour un événement

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getEventsApi();
final String id = id_example; // String | GUID de l’événement
final String title = title_example; // String | Titre de l’événement
final String location = location_example; // String | Lieu de l’événement
final num date = 8.14; // num | Horodatage en secondes de la date de l’événement
final String organizer = organizer_example; // String | GUID de l’organisateur (User)
final num latitude = 8.14; // num | Latitude du lieu (optionnelle)
final num longitude = 8.14; // num | Longitude du lieu (optionnelle)
final MultipartFile file = BINARY_DATA_HERE; // MultipartFile | 

try {
    final response = api.eventControllerUpdate(id, title, location, date, organizer, latitude, longitude, file);
    print(response);
} catch on DioException (e) {
    print('Exception when calling EventsApi->eventControllerUpdate: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| GUID de l’événement | 
 **title** | **String**| Titre de l’événement | 
 **location** | **String**| Lieu de l’événement | 
 **date** | **num**| Horodatage en secondes de la date de l’événement | 
 **organizer** | **String**| GUID de l’organisateur (User) | 
 **latitude** | **num**| Latitude du lieu (optionnelle) | [optional] 
 **longitude** | **num**| Longitude du lieu (optionnelle) | [optional] 
 **file** | **MultipartFile**|  | [optional] 

### Return type

[**Event**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

