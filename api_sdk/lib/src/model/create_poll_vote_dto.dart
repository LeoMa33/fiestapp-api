//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'create_poll_vote_dto.g.dart';

/// CreatePollVoteDto
///
/// Properties:
/// * [user] - GUID de l’utilisateur qui vote
/// * [poll] - GUID du sondage auquel appartient le vote
/// * [option] - GUID de l’option choisie
@BuiltValue()
abstract class CreatePollVoteDto implements Built<CreatePollVoteDto, CreatePollVoteDtoBuilder> {
  /// GUID de l’utilisateur qui vote
  @BuiltValueField(wireName: r'user')
  String get user;

  /// GUID du sondage auquel appartient le vote
  @BuiltValueField(wireName: r'poll')
  String get poll;

  /// GUID de l’option choisie
  @BuiltValueField(wireName: r'option')
  String get option;

  CreatePollVoteDto._();

  factory CreatePollVoteDto([void updates(CreatePollVoteDtoBuilder b)]) = _$CreatePollVoteDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(CreatePollVoteDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<CreatePollVoteDto> get serializer => _$CreatePollVoteDtoSerializer();
}

class _$CreatePollVoteDtoSerializer implements PrimitiveSerializer<CreatePollVoteDto> {
  @override
  final Iterable<Type> types = const [CreatePollVoteDto, _$CreatePollVoteDto];

  @override
  final String wireName = r'CreatePollVoteDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    CreatePollVoteDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'user';
    yield serializers.serialize(
      object.user,
      specifiedType: const FullType(String),
    );
    yield r'poll';
    yield serializers.serialize(
      object.poll,
      specifiedType: const FullType(String),
    );
    yield r'option';
    yield serializers.serialize(
      object.option,
      specifiedType: const FullType(String),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    CreatePollVoteDto object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required CreatePollVoteDtoBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'user':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.user = valueDes;
          break;
        case r'poll':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.poll = valueDes;
          break;
        case r'option':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.option = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  CreatePollVoteDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = CreatePollVoteDtoBuilder();
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

