# openapi.model.Hosting

## Load the model package
```dart
import 'package:openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**guid** | **String** | GUID unique de l’hébergement | 
**seats** | **num** | Nombre de places disponibles pour les invités | 
**host** | [**User**](User.md) | Utilisateur hôte de l’hébergement | 
**event** | [**Event**](Event.md) | Événement auquel l’hébergement est lié | 
**requests** | [**BuiltList&lt;HostingRequest&gt;**](HostingRequest.md) | Demandes d’hébergement associées | 
**acceptedGuests** | [**BuiltList&lt;User&gt;**](User.md) | Utilisateurs acceptés dans cet hébergement | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


