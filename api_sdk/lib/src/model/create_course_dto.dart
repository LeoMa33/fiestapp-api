//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'create_course_dto.g.dart';

/// CreateCourseDto
///
/// Properties:
/// * [driver] - Id de l'utilisateur conducteur
/// * [event] - UUID de l'événement associé
/// * [seats] - Nombre de places disponibles
@BuiltValue()
abstract class CreateCourseDto implements Built<CreateCourseDto, CreateCourseDtoBuilder> {
  /// Id de l'utilisateur conducteur
  @BuiltValueField(wireName: r'driver')
  String get driver;

  /// UUID de l'événement associé
  @BuiltValueField(wireName: r'event')
  String get event;

  /// Nombre de places disponibles
  @BuiltValueField(wireName: r'seats')
  num get seats;

  CreateCourseDto._();

  factory CreateCourseDto([void updates(CreateCourseDtoBuilder b)]) = _$CreateCourseDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(CreateCourseDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<CreateCourseDto> get serializer => _$CreateCourseDtoSerializer();
}

class _$CreateCourseDtoSerializer implements PrimitiveSerializer<CreateCourseDto> {
  @override
  final Iterable<Type> types = const [CreateCourseDto, _$CreateCourseDto];

  @override
  final String wireName = r'CreateCourseDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    CreateCourseDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'driver';
    yield serializers.serialize(
      object.driver,
      specifiedType: const FullType(String),
    );
    yield r'event';
    yield serializers.serialize(
      object.event,
      specifiedType: const FullType(String),
    );
    yield r'seats';
    yield serializers.serialize(
      object.seats,
      specifiedType: const FullType(num),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    CreateCourseDto object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required CreateCourseDtoBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'driver':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.driver = valueDes;
          break;
        case r'event':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.event = valueDes;
          break;
        case r'seats':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(num),
          ) as num;
          result.seats = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  CreateCourseDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = CreateCourseDtoBuilder();
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

