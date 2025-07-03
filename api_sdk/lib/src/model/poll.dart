//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_collection/built_collection.dart';
import 'package:openapi/src/model/poll_vote.dart';
import 'package:openapi/src/model/poll_option.dart';
import 'package:openapi/src/model/event.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'poll.g.dart';

/// Poll
///
/// Properties:
/// * [guid] - GUID unique du sondage
/// * [question] - Question posée dans le sondage
/// * [createdAt] - Date de création du sondage
/// * [options] - Options disponibles pour ce sondage
/// * [votes] - Votes enregistrés pour ce sondage
/// * [event] - Événement auquel ce sondage est lié
@BuiltValue()
abstract class Poll implements Built<Poll, PollBuilder> {
  /// GUID unique du sondage
  @BuiltValueField(wireName: r'guid')
  String get guid;

  /// Question posée dans le sondage
  @BuiltValueField(wireName: r'question')
  String get question;

  /// Date de création du sondage
  @BuiltValueField(wireName: r'createdAt')
  DateTime get createdAt;

  /// Options disponibles pour ce sondage
  @BuiltValueField(wireName: r'options')
  BuiltList<PollOption> get options;

  /// Votes enregistrés pour ce sondage
  @BuiltValueField(wireName: r'votes')
  BuiltList<PollVote> get votes;

  /// Événement auquel ce sondage est lié
  @BuiltValueField(wireName: r'event')
  Event get event;

  Poll._();

  factory Poll([void updates(PollBuilder b)]) = _$Poll;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(PollBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<Poll> get serializer => _$PollSerializer();
}

class _$PollSerializer implements PrimitiveSerializer<Poll> {
  @override
  final Iterable<Type> types = const [Poll, _$Poll];

  @override
  final String wireName = r'Poll';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    Poll object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'guid';
    yield serializers.serialize(
      object.guid,
      specifiedType: const FullType(String),
    );
    yield r'question';
    yield serializers.serialize(
      object.question,
      specifiedType: const FullType(String),
    );
    yield r'createdAt';
    yield serializers.serialize(
      object.createdAt,
      specifiedType: const FullType(DateTime),
    );
    yield r'options';
    yield serializers.serialize(
      object.options,
      specifiedType: const FullType(BuiltList, [FullType(PollOption)]),
    );
    yield r'votes';
    yield serializers.serialize(
      object.votes,
      specifiedType: const FullType(BuiltList, [FullType(PollVote)]),
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
    Poll object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required PollBuilder result,
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
        case r'question':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.question = valueDes;
          break;
        case r'createdAt':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(DateTime),
          ) as DateTime;
          result.createdAt = valueDes;
          break;
        case r'options':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(BuiltList, [FullType(PollOption)]),
          ) as BuiltList<PollOption>;
          result.options.replace(valueDes);
          break;
        case r'votes':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(BuiltList, [FullType(PollVote)]),
          ) as BuiltList<PollVote>;
          result.votes.replace(valueDes);
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
  Poll deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = PollBuilder();
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

