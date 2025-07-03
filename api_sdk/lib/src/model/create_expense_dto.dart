//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'create_expense_dto.g.dart';

/// CreateExpenseDto
///
/// Properties:
/// * [label] - Libellé de la dépense
/// * [amountInCent] - Montant en centimes
/// * [user] - GUID de l’utilisateur ayant engagé la dépense
/// * [event] - GUID de l’événement concerné
@BuiltValue()
abstract class CreateExpenseDto implements Built<CreateExpenseDto, CreateExpenseDtoBuilder> {
  /// Libellé de la dépense
  @BuiltValueField(wireName: r'label')
  String get label;

  /// Montant en centimes
  @BuiltValueField(wireName: r'amount_in_cent')
  num get amountInCent;

  /// GUID de l’utilisateur ayant engagé la dépense
  @BuiltValueField(wireName: r'user')
  String get user;

  /// GUID de l’événement concerné
  @BuiltValueField(wireName: r'event')
  String get event;

  CreateExpenseDto._();

  factory CreateExpenseDto([void updates(CreateExpenseDtoBuilder b)]) = _$CreateExpenseDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(CreateExpenseDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<CreateExpenseDto> get serializer => _$CreateExpenseDtoSerializer();
}

class _$CreateExpenseDtoSerializer implements PrimitiveSerializer<CreateExpenseDto> {
  @override
  final Iterable<Type> types = const [CreateExpenseDto, _$CreateExpenseDto];

  @override
  final String wireName = r'CreateExpenseDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    CreateExpenseDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'label';
    yield serializers.serialize(
      object.label,
      specifiedType: const FullType(String),
    );
    yield r'amount_in_cent';
    yield serializers.serialize(
      object.amountInCent,
      specifiedType: const FullType(num),
    );
    yield r'user';
    yield serializers.serialize(
      object.user,
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
    CreateExpenseDto object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required CreateExpenseDtoBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'label':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.label = valueDes;
          break;
        case r'amount_in_cent':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(num),
          ) as num;
          result.amountInCent = valueDes;
          break;
        case r'user':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.user = valueDes;
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
  CreateExpenseDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = CreateExpenseDtoBuilder();
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

