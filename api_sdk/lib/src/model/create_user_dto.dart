//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'dart:typed_data';
import 'package:built_collection/built_collection.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'create_user_dto.g.dart';

/// CreateUserDto
///
/// Properties:
/// * [username] - Nom d'utilisateur
/// * [gender] - Genre de l’utilisateur
/// * [age] - Âge de l'utilisateur
/// * [height] - Taille en cm
/// * [weight] - Poids en kg
/// * [alcoholConsumption] - Fréquence de consommation d’alcool
/// * [file] 
@BuiltValue()
abstract class CreateUserDto implements Built<CreateUserDto, CreateUserDtoBuilder> {
  /// Nom d'utilisateur
  @BuiltValueField(wireName: r'username')
  String get username;

  /// Genre de l’utilisateur
  @BuiltValueField(wireName: r'gender')
  CreateUserDtoGenderEnum get gender;
  // enum genderEnum {  Male,  Female,  };

  /// Âge de l'utilisateur
  @BuiltValueField(wireName: r'age')
  num get age;

  /// Taille en cm
  @BuiltValueField(wireName: r'height')
  num get height;

  /// Poids en kg
  @BuiltValueField(wireName: r'weight')
  num get weight;

  /// Fréquence de consommation d’alcool
  @BuiltValueField(wireName: r'alcoholConsumption')
  CreateUserDtoAlcoholConsumptionEnum get alcoholConsumption;
  // enum alcoholConsumptionEnum {  Occasional,  Regular,  Veteran,  };

  @BuiltValueField(wireName: r'file')
  Uint8List? get file;

  CreateUserDto._();

  factory CreateUserDto([void updates(CreateUserDtoBuilder b)]) = _$CreateUserDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(CreateUserDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<CreateUserDto> get serializer => _$CreateUserDtoSerializer();
}

class _$CreateUserDtoSerializer implements PrimitiveSerializer<CreateUserDto> {
  @override
  final Iterable<Type> types = const [CreateUserDto, _$CreateUserDto];

  @override
  final String wireName = r'CreateUserDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    CreateUserDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'username';
    yield serializers.serialize(
      object.username,
      specifiedType: const FullType(String),
    );
    yield r'gender';
    yield serializers.serialize(
      object.gender,
      specifiedType: const FullType(CreateUserDtoGenderEnum),
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
      specifiedType: const FullType(CreateUserDtoAlcoholConsumptionEnum),
    );
    if (object.file != null) {
      yield r'file';
      yield serializers.serialize(
        object.file,
        specifiedType: const FullType(Uint8List),
      );
    }
  }

  @override
  Object serialize(
    Serializers serializers,
    CreateUserDto object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required CreateUserDtoBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
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
            specifiedType: const FullType(CreateUserDtoGenderEnum),
          ) as CreateUserDtoGenderEnum;
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
            specifiedType: const FullType(CreateUserDtoAlcoholConsumptionEnum),
          ) as CreateUserDtoAlcoholConsumptionEnum;
          result.alcoholConsumption = valueDes;
          break;
        case r'file':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(Uint8List),
          ) as Uint8List;
          result.file = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  CreateUserDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = CreateUserDtoBuilder();
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

class CreateUserDtoGenderEnum extends EnumClass {

  /// Genre de l’utilisateur
  @BuiltValueEnumConst(wireName: r'Male')
  static const CreateUserDtoGenderEnum male = _$createUserDtoGenderEnum_male;
  /// Genre de l’utilisateur
  @BuiltValueEnumConst(wireName: r'Female')
  static const CreateUserDtoGenderEnum female = _$createUserDtoGenderEnum_female;
  /// Genre de l’utilisateur
  @BuiltValueEnumConst(wireName: r'unknown_default_open_api', fallback: true)
  static const CreateUserDtoGenderEnum unknownDefaultOpenApi = _$createUserDtoGenderEnum_unknownDefaultOpenApi;

  static Serializer<CreateUserDtoGenderEnum> get serializer => _$createUserDtoGenderEnumSerializer;

  const CreateUserDtoGenderEnum._(String name): super(name);

  static BuiltSet<CreateUserDtoGenderEnum> get values => _$createUserDtoGenderEnumValues;
  static CreateUserDtoGenderEnum valueOf(String name) => _$createUserDtoGenderEnumValueOf(name);
}

class CreateUserDtoAlcoholConsumptionEnum extends EnumClass {

  /// Fréquence de consommation d’alcool
  @BuiltValueEnumConst(wireName: r'Occasional')
  static const CreateUserDtoAlcoholConsumptionEnum occasional = _$createUserDtoAlcoholConsumptionEnum_occasional;
  /// Fréquence de consommation d’alcool
  @BuiltValueEnumConst(wireName: r'Regular')
  static const CreateUserDtoAlcoholConsumptionEnum regular = _$createUserDtoAlcoholConsumptionEnum_regular;
  /// Fréquence de consommation d’alcool
  @BuiltValueEnumConst(wireName: r'Veteran')
  static const CreateUserDtoAlcoholConsumptionEnum veteran = _$createUserDtoAlcoholConsumptionEnum_veteran;
  /// Fréquence de consommation d’alcool
  @BuiltValueEnumConst(wireName: r'unknown_default_open_api', fallback: true)
  static const CreateUserDtoAlcoholConsumptionEnum unknownDefaultOpenApi = _$createUserDtoAlcoholConsumptionEnum_unknownDefaultOpenApi;

  static Serializer<CreateUserDtoAlcoholConsumptionEnum> get serializer => _$createUserDtoAlcoholConsumptionEnumSerializer;

  const CreateUserDtoAlcoholConsumptionEnum._(String name): super(name);

  static BuiltSet<CreateUserDtoAlcoholConsumptionEnum> get values => _$createUserDtoAlcoholConsumptionEnumValues;
  static CreateUserDtoAlcoholConsumptionEnum valueOf(String name) => _$createUserDtoAlcoholConsumptionEnumValueOf(name);
}

