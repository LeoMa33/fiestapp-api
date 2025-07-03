//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'create_request_dto.g.dart';

/// CreateRequestDto
///
/// Properties:
/// * [user] - GUID de l'utilisateur faisant la demande
/// * [course] - GUID de la course visée par la demande
@BuiltValue()
abstract class CreateRequestDto implements Built<CreateRequestDto, CreateRequestDtoBuilder> {
  /// GUID de l'utilisateur faisant la demande
  @BuiltValueField(wireName: r'user')
  String get user;

  /// GUID de la course visée par la demande
  @BuiltValueField(wireName: r'course')
  String get course;

  CreateRequestDto._();

  factory CreateRequestDto([void updates(CreateRequestDtoBuilder b)]) = _$CreateRequestDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(CreateRequestDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<CreateRequestDto> get serializer => _$CreateRequestDtoSerializer();
}

class _$CreateRequestDtoSerializer implements PrimitiveSerializer<CreateRequestDto> {
  @override
  final Iterable<Type> types = const [CreateRequestDto, _$CreateRequestDto];

  @override
  final String wireName = r'CreateRequestDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    CreateRequestDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'user';
    yield serializers.serialize(
      object.user,
      specifiedType: const FullType(String),
    );
    yield r'course';
    yield serializers.serialize(
      object.course,
      specifiedType: const FullType(String),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    CreateRequestDto object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required CreateRequestDtoBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'user':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.user = valueDes;
          break;
        case r'course':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.course = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  CreateRequestDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = CreateRequestDtoBuilder();
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

