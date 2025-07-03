# openapi.model.Course

## Load the model package
```dart
import 'package:openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**guid** | **String** | Identifiant unique de la course (UUID) | 
**seats** | **num** | Nombre de places disponibles | 
**driver** | [**User**](User.md) | Conducteur de la course | 
**event** | [**Event**](Event.md) | Événement lié à cette course | 
**requests** | [**BuiltList&lt;CourseRequest&gt;**](CourseRequest.md) | Demandes de participation à cette course | 
**acceptedPassengers** | [**BuiltList&lt;User&gt;**](User.md) | Passagers acceptés dans la course | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


