//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_collection/built_collection.dart';
import 'package:openapi/src/model/event.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'user.g.dart';

/// User
///
/// Properties:
/// * [guid] - GUID unique de l’utilisateur (auto-généré)
/// * [username] - Nom d'utilisateur
/// * [gender] - Genre de l’utilisateur
/// * [age] - Âge de l’utilisateur
/// * [height] - Taille en centimètres
/// * [weight] - Poids en kilogrammes
/// * [alcoholConsumption] - Fréquence de consommation d’alcool
/// * [events] - Événements organisés
/// * [eventsParticipated] - Événements auxquels cet utilisateur participe
@BuiltValue()
abstract class User implements Built<User, UserBuilder> {
  /// GUID unique de l’utilisateur (auto-généré)
  @BuiltValueField(wireName: r'guid')
  String get guid;

  /// Nom d'utilisateur
  @BuiltValueField(wireName: r'username')
  String get username;

  /// Genre de l’utilisateur
  @BuiltValueField(wireName: r'gender')
  UserGenderEnum get gender;
  // enum genderEnum {  Male,  Female,  };

  /// Âge de l’utilisateur
  @BuiltValueField(wireName: r'age')
  num get age;

  /// Taille en centimètres
  @BuiltValueField(wireName: r'height')
  num get height;

  /// Poids en kilogrammes
  @BuiltValueField(wireName: r'weight')
  num get weight;

  /// Fréquence de consommation d’alcool
  @BuiltValueField(wireName: r'alcoholConsumption')
  UserAlcoholConsumptionEnum get alcoholConsumption;
  // enum alcoholConsumptionEnum {  Occasional,  Regular,  Veteran,  };

  /// Événements organisés
  @BuiltValueField(wireName: r'events')
  BuiltList<Event> get events;

  /// Événements auxquels cet utilisateur participe
  @BuiltValueField(wireName: r'eventsParticipated')
  BuiltList<Event> get eventsParticipated;

  User._();

  factory User([void updates(UserBuilder b)]) = _$User;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(UserBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<User> get serializer => _$UserSerializer();
}

class _$UserSerializer implements PrimitiveSerializer<User> {
  @override
  final Iterable<Type> types = const [User, _$User];

  @override
  final String wireName = r'User';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    User object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'guid';
    yield serializers.serialize(
      object.guid,
      specifiedType: const FullType(String),
    );
    yield r'username';
    yield serializers.serialize(
      object.username,
      specifiedType: const FullType(String),
    );
    yield r'gender';
    yield serializers.serialize(
      object.gender,
      specifiedType: const FullType(UserGenderEnum),
    );
    yield r'age';
    yield serializers.serialize(
      object.age,
      specifiedType: const FullType(num),
    );
    yield r'height';
    yield serializers.serialize(
      object.height,
      specifiedType: const FullType(num),
    );
    yield r'weight';
    yield serializers.serialize(
      object.weight,
      specifiedType: const FullType(num),
    );
    yield r'alcoholConsumption';
    yield serializers.serialize(
      object.alcoholConsumption,
      specifiedType: const FullType(UserAlcoholConsumptionEnum),
    );
    yield r'events';
    yield serializers.serialize(
      object.events,
      specifiedType: const FullType(BuiltList, [FullType(Event)]),
    );
    yield r'eventsParticipated';
    yield serializers.serialize(
      object.eventsParticipated,
      specifiedType: const FullType(BuiltList, [FullType(Event)]),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    User object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required UserBuilder result,
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
        case r'username':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.username = valueDes;
          break;
        case r'gender':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(UserGenderEnum),
          ) as UserGenderEnum;
          result.gender = valueDes;
          break;
        case r'age':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(num),
          ) as num;
          result.age = valueDes;
          break;
        case r'height':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(num),
          ) as num;
          result.height = valueDes;
          break;
        case r'weight':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(num),
          ) as num;
          result.weight = valueDes;
          break;
        case r'alcoholConsumption':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(UserAlcoholConsumptionEnum),
          ) as UserAlcoholConsumptionEnum;
          result.alcoholConsumption = valueDes;
          break;
        case r'events':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(BuiltList, [FullType(Event)]),
          ) as BuiltList<Event>;
          result.events.replace(valueDes);
          break;
        case r'eventsParticipated':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(BuiltList, [FullType(Event)]),
          ) as BuiltList<Event>;
          result.eventsParticipated.replace(valueDes);
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  User deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = UserBuilder();
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

class UserGenderEnum extends EnumClass {

  /// Genre de l’utilisateur
  @BuiltValueEnumConst(wireName: r'Male')
  static const UserGenderEnum male = _$userGenderEnum_male;
  /// Genre de l’utilisateur
  @BuiltValueEnumConst(wireName: r'Female')
  static const UserGenderEnum female = _$userGenderEnum_female;
  /// Genre de l’utilisateur
  @BuiltValueEnumConst(wireName: r'unknown_default_open_api', fallback: true)
  static const UserGenderEnum unknownDefaultOpenApi = _$userGenderEnum_unknownDefaultOpenApi;

  static Serializer<UserGenderEnum> get serializer => _$userGenderEnumSerializer;

  const UserGenderEnum._(String name): super(name);

  static BuiltSet<UserGenderEnum> get values => _$userGenderEnumValues;
  static UserGenderEnum valueOf(String name) => _$userGenderEnumValueOf(name);
}

class UserAlcoholConsumptionEnum extends EnumClass {

  /// Fréquence de consommation d’alcool
  @BuiltValueEnumConst(wireName: r'Occasional')
  static const UserAlcoholConsumptionEnum occasional = _$userAlcoholConsumptionEnum_occasional;
  /// Fréquence de consommation d’alcool
  @BuiltValueEnumConst(wireName: r'Regular')
  static const UserAlcoholConsumptionEnum regular = _$userAlcoholConsumptionEnum_regular;
  /// Fréquence de consommation d’alcool
  @BuiltValueEnumConst(wireName: r'Veteran')
  static const UserAlcoholConsumptionEnum veteran = _$userAlcoholConsumptionEnum_veteran;
  /// Fréquence de consommation d’alcool
  @BuiltValueEnumConst(wireName: r'unknown_default_open_api', fallback: true)
  static const UserAlcoholConsumptionEnum unknownDefaultOpenApi = _$userAlcoholConsumptionEnum_unknownDefaultOpenApi;

  static Serializer<UserAlcoholConsumptionEnum> get serializer => _$userAlcoholConsumptionEnumSerializer;

  const UserAlcoholConsumptionEnum._(String name): super(name);

  static BuiltSet<UserAlcoholConsumptionEnum> get values => _$userAlcoholConsumptionEnumValues;
  static UserAlcoholConsumptionEnum valueOf(String name) => _$userAlcoholConsumptionEnumValueOf(name);
}

