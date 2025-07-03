//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'login_device_dto.g.dart';

/// LoginDeviceDto
///
/// Properties:
/// * [deviceId] 
@BuiltValue()
abstract class LoginDeviceDto implements Built<LoginDeviceDto, LoginDeviceDtoBuilder> {
  @BuiltValueField(wireName: r'deviceId')
  String get deviceId;

  LoginDeviceDto._();

  factory LoginDeviceDto([void updates(LoginDeviceDtoBuilder b)]) = _$LoginDeviceDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(LoginDeviceDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<LoginDeviceDto> get serializer => _$LoginDeviceDtoSerializer();
}

class _$LoginDeviceDtoSerializer implements PrimitiveSerializer<LoginDeviceDto> {
  @override
  final Iterable<Type> types = const [LoginDeviceDto, _$LoginDeviceDto];

  @override
  final String wireName = r'LoginDeviceDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    LoginDeviceDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'deviceId';
    yield serializers.serialize(
      object.deviceId,
      specifiedType: const FullType(String),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    LoginDeviceDto object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required LoginDeviceDtoBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'deviceId':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.deviceId = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  LoginDeviceDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = LoginDeviceDtoBuilder();
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

