//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_collection/built_collection.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'create_poll_dto.g.dart';

/// CreatePollDto
///
/// Properties:
/// * [question] - Question posée dans le sondage
/// * [event] - GUID de l’événement lié au sondage
/// * [options] - Liste des options de réponse
@BuiltValue()
abstract class CreatePollDto implements Built<CreatePollDto, CreatePollDtoBuilder> {
  /// Question posée dans le sondage
  @BuiltValueField(wireName: r'question')
  String get question;

  /// GUID de l’événement lié au sondage
  @BuiltValueField(wireName: r'event')
  String get event;

  /// Liste des options de réponse
  @BuiltValueField(wireName: r'options')
  BuiltList<String> get options;

  CreatePollDto._();

  factory CreatePollDto([void updates(CreatePollDtoBuilder b)]) = _$CreatePollDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(CreatePollDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<CreatePollDto> get serializer => _$CreatePollDtoSerializer();
}

class _$CreatePollDtoSerializer implements PrimitiveSerializer<CreatePollDto> {
  @override
  final Iterable<Type> types = const [CreatePollDto, _$CreatePollDto];

  @override
  final String wireName = r'CreatePollDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    CreatePollDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'question';
    yield serializers.serialize(
      object.question,
      specifiedType: const FullType(String),
    );
    yield r'event';
    yield serializers.serialize(
      object.event,
      specifiedType: const FullType(String),
    );
    yield r'options';
    yield serializers.serialize(
      object.options,
      specifiedType: const FullType(BuiltList, [FullType(String)]),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    CreatePollDto object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required CreatePollDtoBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'question':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.question = valueDes;
          break;
        case r'event':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.event = valueDes;
          break;
        case r'options':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(BuiltList, [FullType(String)]),
          ) as BuiltList<String>;
          result.options.replace(valueDes);
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  CreatePollDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = CreatePollDtoBuilder();
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

