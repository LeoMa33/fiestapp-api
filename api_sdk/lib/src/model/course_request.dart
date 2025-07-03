//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_collection/built_collection.dart';
import 'package:openapi/src/model/user.dart';
import 'package:openapi/src/model/course.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'course_request.g.dart';

/// CourseRequest
///
/// Properties:
/// * [guid] - Identifiant unique de la demande
/// * [user] - Utilisateur ayant soumis la demande
/// * [course] - Course concernée par la demande
/// * [status] - Statut de la demande
@BuiltValue()
abstract class CourseRequest implements Built<CourseRequest, CourseRequestBuilder> {
  /// Identifiant unique de la demande
  @BuiltValueField(wireName: r'guid')
  String get guid;

  /// Utilisateur ayant soumis la demande
  @BuiltValueField(wireName: r'user')
  User get user;

  /// Course concernée par la demande
  @BuiltValueField(wireName: r'course')
  Course get course;

  /// Statut de la demande
  @BuiltValueField(wireName: r'status')
  CourseRequestStatusEnum get status;
  // enum statusEnum {  pending,  accepted,  rejected,  };

  CourseRequest._();

  factory CourseRequest([void updates(CourseRequestBuilder b)]) = _$CourseRequest;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(CourseRequestBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<CourseRequest> get serializer => _$CourseRequestSerializer();
}

class _$CourseRequestSerializer implements PrimitiveSerializer<CourseRequest> {
  @override
  final Iterable<Type> types = const [CourseRequest, _$CourseRequest];

  @override
  final String wireName = r'CourseRequest';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    CourseRequest object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'guid';
    yield serializers.serialize(
      object.guid,
      specifiedType: const FullType(String),
    );
    yield r'user';
    yield serializers.serialize(
      object.user,
      specifiedType: const FullType(User),
    );
    yield r'course';
    yield serializers.serialize(
      object.course,
      specifiedType: const FullType(Course),
    );
    yield r'status';
    yield serializers.serialize(
      object.status,
      specifiedType: const FullType(CourseRequestStatusEnum),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    CourseRequest object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required CourseRequestBuilder result,
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
        case r'user':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(User),
          ) as User;
          result.user.replace(valueDes);
          break;
        case r'course':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(Course),
          ) as Course;
          result.course.replace(valueDes);
          break;
        case r'status':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(CourseRequestStatusEnum),
          ) as CourseRequestStatusEnum;
          result.status = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  CourseRequest deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = CourseRequestBuilder();
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

class CourseRequestStatusEnum extends EnumClass {

  /// Statut de la demande
  @BuiltValueEnumConst(wireName: r'pending')
  static const CourseRequestStatusEnum pending = _$courseRequestStatusEnum_pending;
  /// Statut de la demande
  @BuiltValueEnumConst(wireName: r'accepted')
  static const CourseRequestStatusEnum accepted = _$courseRequestStatusEnum_accepted;
  /// Statut de la demande
  @BuiltValueEnumConst(wireName: r'rejected')
  static const CourseRequestStatusEnum rejected = _$courseRequestStatusEnum_rejected;
  /// Statut de la demande
  @BuiltValueEnumConst(wireName: r'unknown_default_open_api', fallback: true)
  static const CourseRequestStatusEnum unknownDefaultOpenApi = _$courseRequestStatusEnum_unknownDefaultOpenApi;

  static Serializer<CourseRequestStatusEnum> get serializer => _$courseRequestStatusEnumSerializer;

  const CourseRequestStatusEnum._(String name): super(name);

  static BuiltSet<CourseRequestStatusEnum> get values => _$courseRequestStatusEnumValues;
  static CourseRequestStatusEnum valueOf(String name) => _$courseRequestStatusEnumValueOf(name);
}

