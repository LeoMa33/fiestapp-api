//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'create_hosting_request_dto.g.dart';

/// CreateHostingRequestDto
///
/// Properties:
/// * [user] - GUID de l’utilisateur faisant la demande d’hébergement
/// * [hosting] - GUID de l’hébergement visé par la demande
@BuiltValue()
abstract class CreateHostingRequestDto implements Built<CreateHostingRequestDto, CreateHostingRequestDtoBuilder> {
  /// GUID de l’utilisateur faisant la demande d’hébergement
  @BuiltValueField(wireName: r'user')
  String get user;

  /// GUID de l’hébergement visé par la demande
  @BuiltValueField(wireName: r'hosting')
  String get hosting;

  CreateHostingRequestDto._();

  factory CreateHostingRequestDto([void updates(CreateHostingRequestDtoBuilder b)]) = _$CreateHostingRequestDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(CreateHostingRequestDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<CreateHostingRequestDto> get serializer => _$CreateHostingRequestDtoSerializer();
}

class _$CreateHostingRequestDtoSerializer implements PrimitiveSerializer<CreateHostingRequestDto> {
  @override
  final Iterable<Type> types = const [CreateHostingRequestDto, _$CreateHostingRequestDto];

  @override
  final String wireName = r'CreateHostingRequestDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    CreateHostingRequestDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'user';
    yield serializers.serialize(
      object.user,
      specifiedType: const FullType(String),
    );
    yield r'hosting';
    yield serializers.serialize(
      object.hosting,
      specifiedType: const FullType(String),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    CreateHostingRequestDto object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required CreateHostingRequestDtoBuilder result,
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
        case r'hosting':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.hosting = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  CreateHostingRequestDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = CreateHostingRequestDtoBuilder();
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

