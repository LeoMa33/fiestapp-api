//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_collection/built_collection.dart';
import 'package:openapi/src/model/user.dart';
import 'package:openapi/src/model/course_request.dart';
import 'package:openapi/src/model/event.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'course.g.dart';

/// Course
///
/// Properties:
/// * [guid] - Identifiant unique de la course (UUID)
/// * [seats] - Nombre de places disponibles
/// * [driver] - Conducteur de la course
/// * [event] - Événement lié à cette course
/// * [requests] - Demandes de participation à cette course
/// * [acceptedPassengers] - Passagers acceptés dans la course
@BuiltValue()
abstract class Course implements Built<Course, CourseBuilder> {
  /// Identifiant unique de la course (UUID)
  @BuiltValueField(wireName: r'guid')
  String get guid;

  /// Nombre de places disponibles
  @BuiltValueField(wireName: r'seats')
  num get seats;

  /// Conducteur de la course
  @BuiltValueField(wireName: r'driver')
  User get driver;

  /// Événement lié à cette course
  @BuiltValueField(wireName: r'event')
  Event get event;

  /// Demandes de participation à cette course
  @BuiltValueField(wireName: r'requests')
  BuiltList<CourseRequest> get requests;

  /// Passagers acceptés dans la course
  @BuiltValueField(wireName: r'acceptedPassengers')
  BuiltList<User> get acceptedPassengers;

  Course._();

  factory Course([void updates(CourseBuilder b)]) = _$Course;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(CourseBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<Course> get serializer => _$CourseSerializer();
}

class _$CourseSerializer implements PrimitiveSerializer<Course> {
  @override
  final Iterable<Type> types = const [Course, _$Course];

  @override
  final String wireName = r'Course';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    Course object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'guid';
    yield serializers.serialize(
      object.guid,
      specifiedType: const FullType(String),
    );
    yield r'seats';
    yield serializers.serialize(
      object.seats,
      specifiedType: const FullType(num),
    );
    yield r'driver';
    yield serializers.serialize(
      object.driver,
      specifiedType: const FullType(User),
    );
    yield r'event';
    yield serializers.serialize(
      object.event,
      specifiedType: const FullType(Event),
    );
    yield r'requests';
    yield serializers.serialize(
      object.requests,
      specifiedType: const FullType(BuiltList, [FullType(CourseRequest)]),
    );
    yield r'acceptedPassengers';
    yield serializers.serialize(
      object.acceptedPassengers,
      specifiedType: const FullType(BuiltList, [FullType(User)]),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    Course object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required CourseBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'guid':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.guid = valueDes;
          break;
        case r'seats':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(num),
          ) as num;
          result.seats = valueDes;
          break;
        case r'driver':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(User),
          ) as User;
          result.driver.replace(valueDes);
          break;
        case r'event':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(Event),
          ) as Event;
          result.event.replace(valueDes);
          break;
        case r'requests':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(BuiltList, [FullType(CourseRequest)]),
          ) as BuiltList<CourseRequest>;
          result.requests.replace(valueDes);
          break;
        case r'acceptedPassengers':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(BuiltList, [FullType(User)]),
          ) as BuiltList<User>;
          result.acceptedPassengers.replace(valueDes);
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  Course deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = CourseBuilder();
    final serializedList = (serialized as Iterable<Object?>).toList();
    final unhandled = <Object?>[];
    _deserializeProperties(
      serializers,
      serialized,
      specifiedType: specifiedType,
      serializedList: serializedList,
      unhandled: unhandled,
      result: result,
    );
    return result.build();
  }
}

