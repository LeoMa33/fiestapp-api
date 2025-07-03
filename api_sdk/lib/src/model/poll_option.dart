//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:openapi/src/model/poll.dart';
import 'package:built_collection/built_collection.dart';
import 'package:openapi/src/model/poll_vote.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'poll_option.g.dart';

/// PollOption
///
/// Properties:
/// * [guid] - GUID unique de l’option de sondage
/// * [label] - Texte de l’option proposée au vote
/// * [poll] - Sondage auquel appartient cette option
/// * [votes] - Votes ayant sélectionné cette option
@BuiltValue()
abstract class PollOption implements Built<PollOption, PollOptionBuilder> {
  /// GUID unique de l’option de sondage
  @BuiltValueField(wireName: r'guid')
  String get guid;

  /// Texte de l’option proposée au vote
  @BuiltValueField(wireName: r'label')
  String get label;

  /// Sondage auquel appartient cette option
  @BuiltValueField(wireName: r'poll')
  Poll get poll;

  /// Votes ayant sélectionné cette option
  @BuiltValueField(wireName: r'votes')
  BuiltList<PollVote> get votes;

  PollOption._();

  factory PollOption([void updates(PollOptionBuilder b)]) = _$PollOption;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(PollOptionBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<PollOption> get serializer => _$PollOptionSerializer();
}

class _$PollOptionSerializer implements PrimitiveSerializer<PollOption> {
  @override
  final Iterable<Type> types = const [PollOption, _$PollOption];

  @override
  final String wireName = r'PollOption';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    PollOption object, {
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
    yield r'poll';
    yield serializers.serialize(
      object.poll,
      specifiedType: const FullType(Poll),
    );
    yield r'votes';
    yield serializers.serialize(
      object.votes,
      specifiedType: const FullType(BuiltList, [FullType(PollVote)]),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    PollOption object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required PollOptionBuilder result,
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
        case r'poll':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(Poll),
          ) as Poll;
          result.poll.replace(valueDes);
          break;
        case r'votes':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(BuiltList, [FullType(PollVote)]),
          ) as BuiltList<PollVote>;
          result.votes.replace(valueDes);
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  PollOption deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = PollOptionBuilder();
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

