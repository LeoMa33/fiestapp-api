//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'create_hosting_dto.g.dart';

/// CreateHostingDto
///
/// Properties:
/// * [host] - GUID de l’hôte (utilisateur)
/// * [event] - GUID de l’événement pour lequel l’hébergement est proposé
/// * [seats] - Nombre de places disponibles dans cet hébergement
@BuiltValue()
abstract class CreateHostingDto implements Built<CreateHostingDto, CreateHostingDtoBuilder> {
  /// GUID de l’hôte (utilisateur)
  @BuiltValueField(wireName: r'host')
  String get host;

  /// GUID de l’événement pour lequel l’hébergement est proposé
  @BuiltValueField(wireName: r'event')
  String get event;

  /// Nombre de places disponibles dans cet hébergement
  @BuiltValueField(wireName: r'seats')
  num get seats;

  CreateHostingDto._();

  factory CreateHostingDto([void updates(CreateHostingDtoBuilder b)]) = _$CreateHostingDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(CreateHostingDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<CreateHostingDto> get serializer => _$CreateHostingDtoSerializer();
}

class _$CreateHostingDtoSerializer implements PrimitiveSerializer<CreateHostingDto> {
  @override
  final Iterable<Type> types = const [CreateHostingDto, _$CreateHostingDto];

  @override
  final String wireName = r'CreateHostingDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    CreateHostingDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'host';
    yield serializers.serialize(
      object.host,
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
    CreateHostingDto object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required CreateHostingDtoBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'host':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.host = valueDes;
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
  CreateHostingDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = CreateHostingDtoBuilder();
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

