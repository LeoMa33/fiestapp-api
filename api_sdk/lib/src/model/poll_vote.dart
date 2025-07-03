//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:openapi/src/model/poll.dart';
import 'package:openapi/src/model/user.dart';
import 'package:openapi/src/model/poll_option.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'poll_vote.g.dart';

/// PollVote
///
/// Properties:
/// * [guid] - GUID unique du vote
/// * [user] - Utilisateur ayant voté
/// * [poll] - Sondage auquel appartient le vote
/// * [option] - Option choisie par l’utilisateur
@BuiltValue()
abstract class PollVote implements Built<PollVote, PollVoteBuilder> {
  /// GUID unique du vote
  @BuiltValueField(wireName: r'guid')
  String get guid;

  /// Utilisateur ayant voté
  @BuiltValueField(wireName: r'user')
  User get user;

  /// Sondage auquel appartient le vote
  @BuiltValueField(wireName: r'poll')
  Poll get poll;

  /// Option choisie par l’utilisateur
  @BuiltValueField(wireName: r'option')
  PollOption get option;

  PollVote._();

  factory PollVote([void updates(PollVoteBuilder b)]) = _$PollVote;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(PollVoteBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<PollVote> get serializer => _$PollVoteSerializer();
}

class _$PollVoteSerializer implements PrimitiveSerializer<PollVote> {
  @override
  final Iterable<Type> types = const [PollVote, _$PollVote];

  @override
  final String wireName = r'PollVote';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    PollVote object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'guid';
    yield serializers.serialize(
      object.guid,
      specifiedType: const FullType(String),
    );
    yield r'user';
    yield serializers.serialize(
      object.user,
      specifiedType: const FullType(User),
    );
    yield r'poll';
    yield serializers.serialize(
      object.poll,
      specifiedType: const FullType(Poll),
    );
    yield r'option';
    yield serializers.serialize(
      object.option,
      specifiedType: const FullType(PollOption),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    PollVote object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required PollVoteBuilder result,
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
        case r'user':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(User),
          ) as User;
          result.user.replace(valueDes);
          break;
        case r'poll':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(Poll),
          ) as Poll;
          result.poll.replace(valueDes);
          break;
        case r'option':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(PollOption),
          ) as PollOption;
          result.option.replace(valueDes);
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  PollVote deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = PollVoteBuilder();
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

