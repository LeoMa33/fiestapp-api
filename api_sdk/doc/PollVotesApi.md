# openapi.api.PollVotesApi

## Load the API package
```dart
import 'package:openapi/api.dart';
```

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**pollVoteControllerVote**](PollVotesApi.md#pollvotecontrollervote) | **POST** /poll-votes | Soumettre un vote à un sondage


# **pollVoteControllerVote**
> PollVote pollVoteControllerVote(createPollVoteDto)

Soumettre un vote à un sondage

### Example
```dart
import 'package:openapi/api.dart';

final api = Openapi().getPollVotesApi();
final CreatePollVoteDto createPollVoteDto = ; // CreatePollVoteDto | 

try {
    final response = api.pollVoteControllerVote(createPollVoteDto);
    print(response);
} catch on DioException (e) {
    print('Exception when calling PollVotesApi->pollVoteControllerVote: $e\n');
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPollVoteDto** | [**CreatePollVoteDto**](CreatePollVoteDto.md)|  | 

### Return type

[**PollVote**](PollVote.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

