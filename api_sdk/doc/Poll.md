# openapi.model.Poll

## Load the model package
```dart
import 'package:openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**guid** | **String** | GUID unique du sondage | 
**question** | **String** | Question posée dans le sondage | 
**createdAt** | [**DateTime**](DateTime.md) | Date de création du sondage | 
**options** | [**BuiltList&lt;PollOption&gt;**](PollOption.md) | Options disponibles pour ce sondage | 
**votes** | [**BuiltList&lt;PollVote&gt;**](PollVote.md) | Votes enregistrés pour ce sondage | 
**event** | [**Event**](Event.md) | Événement auquel ce sondage est lié | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


