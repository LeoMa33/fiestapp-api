//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:openapi/src/model/user.dart';
import 'package:openapi/src/model/event.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'expense.g.dart';

/// Expense
///
/// Properties:
/// * [guid] - Identifiant unique de la dépense (UUID)
/// * [label] - Libellé ou description de la dépense
/// * [amountInCent] - Montant de la dépense en centimes
/// * [user] - Utilisateur ayant effectué la dépense
/// * [event] - Événement lié à la dépense
@BuiltValue()
abstract class Expense implements Built<Expense, ExpenseBuilder> {
  /// Identifiant unique de la dépense (UUID)
  @BuiltValueField(wireName: r'guid')
  String get guid;

  /// Libellé ou description de la dépense
  @BuiltValueField(wireName: r'label')
  String get label;

  /// Montant de la dépense en centimes
  @BuiltValueField(wireName: r'amount_in_cent')
  num get amountInCent;

  /// Utilisateur ayant effectué la dépense
  @BuiltValueField(wireName: r'user')
  User get user;

  /// Événement lié à la dépense
  @BuiltValueField(wireName: r'event')
  Event get event;

  Expense._();

  factory Expense([void updates(ExpenseBuilder b)]) = _$Expense;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(ExpenseBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<Expense> get serializer => _$ExpenseSerializer();
}

class _$ExpenseSerializer implements PrimitiveSerializer<Expense> {
  @override
  final Iterable<Type> types = const [Expense, _$Expense];

  @override
  final String wireName = r'Expense';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    Expense object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'guid';
    yield serializers.serialize(
      object.guid,
      specifiedType: const FullType(String),
    );
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
      specifiedType: const FullType(User),
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
    Expense object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required ExpenseBuilder result,
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
            specifiedType: const FullType(User),
          ) as User;
          result.user.replace(valueDes);
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
  Expense deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = ExpenseBuilder();
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

