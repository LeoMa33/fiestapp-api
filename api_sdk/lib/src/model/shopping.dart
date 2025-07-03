//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:openapi/src/model/event.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'shopping.g.dart';

/// Shopping
///
/// Properties:
/// * [guid] - Identifiant unique de l’achat
/// * [image] - Nom de l’image du produit
/// * [quantity] - Quantité du produit
/// * [name] - Nom du produit acheté
/// * [event] - Événement auquel cet achat est lié
@BuiltValue()
abstract class Shopping implements Built<Shopping, ShoppingBuilder> {
  /// Identifiant unique de l’achat
  @BuiltValueField(wireName: r'guid')
  String get guid;

  /// Nom de l’image du produit
  @BuiltValueField(wireName: r'image')
  String get image;

  /// Quantité du produit
  @BuiltValueField(wireName: r'quantity')
  num get quantity;

  /// Nom du produit acheté
  @BuiltValueField(wireName: r'name')
  String get name;

  /// Événement auquel cet achat est lié
  @BuiltValueField(wireName: r'event')
  Event get event;

  Shopping._();

  factory Shopping([void updates(ShoppingBuilder b)]) = _$Shopping;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(ShoppingBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<Shopping> get serializer => _$ShoppingSerializer();
}

class _$ShoppingSerializer implements PrimitiveSerializer<Shopping> {
  @override
  final Iterable<Type> types = const [Shopping, _$Shopping];

  @override
  final String wireName = r'Shopping';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    Shopping object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'guid';
    yield serializers.serialize(
      object.guid,
      specifiedType: const FullType(String),
    );
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
      specifiedType: const FullType(Event),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    Shopping object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required ShoppingBuilder result,
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
            specifiedType: const FullType(Event),
          ) as Event;
          result.event.replace(valueDes);
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  Shopping deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = ShoppingBuilder();
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

