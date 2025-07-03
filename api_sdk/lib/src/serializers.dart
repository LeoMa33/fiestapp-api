//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_import

import 'package:one_of_serializer/any_of_serializer.dart';
import 'package:one_of_serializer/one_of_serializer.dart';
import 'package:built_collection/built_collection.dart';
import 'package:built_value/json_object.dart';
import 'package:built_value/serializer.dart';
import 'package:built_value/standard_json_plugin.dart';
import 'package:built_value/iso_8601_date_time_serializer.dart';
import 'package:openapi/src/date_serializer.dart';
import 'package:openapi/src/model/date.dart';

import 'package:openapi/src/model/course.dart';
import 'package:openapi/src/model/course_request.dart';
import 'package:openapi/src/model/create_course_dto.dart';
import 'package:openapi/src/model/create_event_dto.dart';
import 'package:openapi/src/model/create_expense_dto.dart';
import 'package:openapi/src/model/create_hosting_dto.dart';
import 'package:openapi/src/model/create_hosting_request_dto.dart';
import 'package:openapi/src/model/create_poll_dto.dart';
import 'package:openapi/src/model/create_poll_vote_dto.dart';
import 'package:openapi/src/model/create_request_dto.dart';
import 'package:openapi/src/model/create_shopping_dto.dart';
import 'package:openapi/src/model/event.dart';
import 'package:openapi/src/model/expense.dart';
import 'package:openapi/src/model/hosting.dart';
import 'package:openapi/src/model/hosting_request.dart';
import 'package:openapi/src/model/login_device_dto.dart';
import 'package:openapi/src/model/poll.dart';
import 'package:openapi/src/model/poll_option.dart';
import 'package:openapi/src/model/poll_vote.dart';
import 'package:openapi/src/model/register_response_dto.dart';
import 'package:openapi/src/model/shopping.dart';
import 'package:openapi/src/model/user.dart';

part 'serializers.g.dart';

@SerializersFor([
  Course,
  CourseRequest,
  CreateCourseDto,
  CreateEventDto,
  CreateExpenseDto,
  CreateHostingDto,
  CreateHostingRequestDto,
  CreatePollDto,
  CreatePollVoteDto,
  CreateRequestDto,
  CreateShoppingDto,
  Event,
  Expense,
  Hosting,
  HostingRequest,
  LoginDeviceDto,
  Poll,
  PollOption,
  PollVote,
  RegisterResponseDto,
  Shopping,
  User,
])
Serializers serializers = (_$serializers.toBuilder()
      ..addBuilderFactory(
        const FullType(BuiltList, [FullType(Course)]),
        () => ListBuilder<Course>(),
      )
      ..addBuilderFactory(
        const FullType(BuiltList, [FullType(Hosting)]),
        () => ListBuilder<Hosting>(),
      )
      ..addBuilderFactory(
        const FullType(BuiltList, [FullType(User)]),
        () => ListBuilder<User>(),
      )
      ..addBuilderFactory(
        const FullType(BuiltList, [FullType(Event)]),
        () => ListBuilder<Event>(),
      )
      ..addBuilderFactory(
        const FullType(BuiltList, [FullType(Poll)]),
        () => ListBuilder<Poll>(),
      )
      ..addBuilderFactory(
        const FullType(BuiltList, [FullType(HostingRequest)]),
        () => ListBuilder<HostingRequest>(),
      )
      ..addBuilderFactory(
        const FullType(BuiltList, [FullType(Shopping)]),
        () => ListBuilder<Shopping>(),
      )
      ..add(const OneOfSerializer())
      ..add(const AnyOfSerializer())
      ..add(const DateSerializer())
      ..add(Iso8601DateTimeSerializer())
    ).build();

Serializers standardSerializers =
    (serializers.toBuilder()..addPlugin(StandardJsonPlugin())).build();
