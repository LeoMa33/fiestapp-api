# openapi.model.Event

## Load the model package
```dart
import 'package:openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**guid** | **String** | Identifiant unique de l’événement | 
**title** | **String** | Titre de l’événement | 
**location** | **String** | Lieu de l’événement | 
**latitude** | [**JsonObject**](.md) | Latitude du lieu | [optional] 
**longitude** | [**JsonObject**](.md) | Longitude du lieu | [optional] 
**date** | **num** | Horodatage (en secondes) de l’événement | 
**organizer** | [**User**](User.md) | Organisateur de l’événement | 
**participants** | [**BuiltList&lt;User&gt;**](User.md) | Participants inscrits à l’événement | 
**courses** | [**BuiltList&lt;Course&gt;**](Course.md) | Liste des courses | 
**shoppings** | [**BuiltList&lt;Shopping&gt;**](Shopping.md) | Liste des achats | 
**expenses** | [**BuiltList&lt;Expense&gt;**](Expense.md) | Liste des dépenses | 
**hostings** | [**BuiltList&lt;Hosting&gt;**](Hosting.md) | Liste des hébergements | 
**polls** | [**BuiltList&lt;Poll&gt;**](Poll.md) | Liste des sondages | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


