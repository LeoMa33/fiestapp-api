//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:openapi/src/model/hosting_request.dart';
import 'package:built_collection/built_collection.dart';
import 'package:openapi/src/model/user.dart';
import 'package:openapi/src/model/event.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'hosting.g.dart';

/// Hosting
///
/// Properties:
/// * [guid] - GUID unique de l’hébergement
/// * [seats] - Nombre de places disponibles pour les invités
/// * [host] - Utilisateur hôte de l’hébergement
/// * [event] - Événement auquel l’hébergement est lié
/// * [requests] - Demandes d’hébergement associées
/// * [acceptedGuests] - Utilisateurs acceptés dans cet hébergement
@BuiltValue()
abstract class Hosting implements Built<Hosting, HostingBuilder> {
  /// GUID unique de l’hébergement
  @BuiltValueField(wireName: r'guid')
  String get guid;

  /// Nombre de places disponibles pour les invités
  @BuiltValueField(wireName: r'seats')
  num get seats;

  /// Utilisateur hôte de l’hébergement
  @BuiltValueField(wireName: r'host')
  User get host;

  /// Événement auquel l’hébergement est lié
  @BuiltValueField(wireName: r'event')
  Event get event;

  /// Demandes d’hébergement associées
  @BuiltValueField(wireName: r'requests')
  BuiltList<HostingRequest> get requests;

  /// Utilisateurs acceptés dans cet hébergement
  @BuiltValueField(wireName: r'acceptedGuests')
  BuiltList<User> get acceptedGuests;

  Hosting._();

  factory Hosting([void updates(HostingBuilder b)]) = _$Hosting;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(HostingBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<Hosting> get serializer => _$HostingSerializer();
}

class _$HostingSerializer implements PrimitiveSerializer<Hosting> {
  @override
  final Iterable<Type> types = const [Hosting, _$Hosting];

  @override
  final String wireName = r'Hosting';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    Hosting object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'guid';
    yield serializers.serialize(
      object.guid,
      specifiedType: const FullType(String),
    );
    yield r'seats';
    yield serializers.serialize(
      object.seats,
      specifiedType: const FullType(num),
    );
    yield r'host';
    yield serializers.serialize(
      object.host,
      specifiedType: const FullType(User),
    );
    yield r'event';
    yield serializers.serialize(
      object.event,
      specifiedType: const FullType(Event),
    );
    yield r'requests';
    yield serializers.serialize(
      object.requests,
      specifiedType: const FullType(BuiltList, [FullType(HostingRequest)]),
    );
    yield r'acceptedGuests';
    yield serializers.serialize(
      object.acceptedGuests,
      specifiedType: const FullType(BuiltList, [FullType(User)]),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    Hosting object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required HostingBuilder result,
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
        case r'seats':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(num),
          ) as num;
          result.seats = valueDes;
          break;
        case r'host':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(User),
          ) as User;
          result.host.replace(valueDes);
          break;
        case r'event':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(Event),
          ) as Event;
          result.event.replace(valueDes);
          break;
        case r'requests':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(BuiltList, [FullType(HostingRequest)]),
          ) as BuiltList<HostingRequest>;
          result.requests.replace(valueDes);
          break;
        case r'acceptedGuests':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(BuiltList, [FullType(User)]),
          ) as BuiltList<User>;
          result.acceptedGuests.replace(valueDes);
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  Hosting deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = HostingBuilder();
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

