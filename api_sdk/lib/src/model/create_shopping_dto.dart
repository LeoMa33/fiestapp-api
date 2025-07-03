//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'create_shopping_dto.g.dart';

/// CreateShoppingDto
///
/// Properties:
/// * [image] - nom de l’image du produit
/// * [quantity] - Quantité du produit
/// * [name] - Nom du produit
/// * [event] - GUID de l’événement associé
@BuiltValue()
abstract class CreateShoppingDto implements Built<CreateShoppingDto, CreateShoppingDtoBuilder> {
  /// nom de l’image du produit
  @BuiltValueField(wireName: r'image')
  String get image;

  /// Quantité du produit
  @BuiltValueField(wireName: r'quantity')
  num get quantity;

  /// Nom du produit
  @BuiltValueField(wireName: r'name')
  String get name;

  /// GUID de l’événement associé
  @BuiltValueField(wireName: r'event')
  String get event;

  CreateShoppingDto._();

  factory CreateShoppingDto([void updates(CreateShoppingDtoBuilder b)]) = _$CreateShoppingDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(CreateShoppingDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<CreateShoppingDto> get serializer => _$CreateShoppingDtoSerializer();
}

class _$CreateShoppingDtoSerializer implements PrimitiveSerializer<CreateShoppingDto> {
  @override
  final Iterable<Type> types = const [CreateShoppingDto, _$CreateShoppingDto];

  @override
  final String wireName = r'CreateShoppingDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    CreateShoppingDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'image';
    yield serializers.serialize(
      object.image,
      specifiedType: const FullType(String),
    );
    yield r'quantity';
    yield serializers.serialize(
      object.quantity,
      specifiedType: const FullType(num),
    );
    yield r'name';
    yield serializers.serialize(
      object.name,
      specifiedType: const FullType(String),
    );
    yield r'event';
    yield serializers.serialize(
      object.event,
      specifiedType: const FullType(String),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    CreateShoppingDto object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required CreateShoppingDtoBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'image':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.image = valueDes;
          break;
        case r'quantity':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(num),
          ) as num;
          result.quantity = valueDes;
          break;
        case r'name':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.name = valueDes;
          break;
        case r'event':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.event = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  CreateShoppingDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = CreateShoppingDtoBuilder();
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

