//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:openapi/src/model/user.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'register_response_dto.g.dart';

/// RegisterResponseDto
///
/// Properties:
/// * [accessToken] - JWT access token du nouvel utilisateur
/// * [user] - Utilisateur nouvellement créé
@BuiltValue()
abstract class RegisterResponseDto implements Built<RegisterResponseDto, RegisterResponseDtoBuilder> {
  /// JWT access token du nouvel utilisateur
  @BuiltValueField(wireName: r'accessToken')
  String get accessToken;

  /// Utilisateur nouvellement créé
  @BuiltValueField(wireName: r'user')
  User get user;

  RegisterResponseDto._();

  factory RegisterResponseDto([void updates(RegisterResponseDtoBuilder b)]) = _$RegisterResponseDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(RegisterResponseDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<RegisterResponseDto> get serializer => _$RegisterResponseDtoSerializer();
}

class _$RegisterResponseDtoSerializer implements PrimitiveSerializer<RegisterResponseDto> {
  @override
  final Iterable<Type> types = const [RegisterResponseDto, _$RegisterResponseDto];

  @override
  final String wireName = r'RegisterResponseDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    RegisterResponseDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'accessToken';
    yield serializers.serialize(
      object.accessToken,
      specifiedType: const FullType(String),
    );
    yield r'user';
    yield serializers.serialize(
      object.user,
      specifiedType: const FullType(User),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    RegisterResponseDto object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required RegisterResponseDtoBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'accessToken':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.accessToken = valueDes;
          break;
        case r'user':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(User),
          ) as User;
          result.user.replace(valueDes);
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  RegisterResponseDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = RegisterResponseDtoBuilder();
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

