//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:openapi/src/model/poll.dart';
import 'package:built_collection/built_collection.dart';
import 'package:openapi/src/model/hosting.dart';
import 'package:openapi/src/model/user.dart';
import 'package:openapi/src/model/expense.dart';
import 'package:openapi/src/model/shopping.dart';
import 'package:openapi/src/model/course.dart';
import 'package:built_value/json_object.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'event.g.dart';

/// Event
///
/// Properties:
/// * [guid] - Identifiant unique de l’événement
/// * [title] - Titre de l’événement
/// * [location] - Lieu de l’événement
/// * [latitude] - Latitude du lieu
/// * [longitude] - Longitude du lieu
/// * [date] - Horodatage (en secondes) de l’événement
/// * [organizer] - Organisateur de l’événement
/// * [participants] - Participants inscrits à l’événement
/// * [courses] - Liste des courses
/// * [shoppings] - Liste des achats
/// * [expenses] - Liste des dépenses
/// * [hostings] - Liste des hébergements
/// * [polls] - Liste des sondages
@BuiltValue()
abstract class Event implements Built<Event, EventBuilder> {
  /// Identifiant unique de l’événement
  @BuiltValueField(wireName: r'guid')
  String get guid;

  /// Titre de l’événement
  @BuiltValueField(wireName: r'title')
  String get title;

  /// Lieu de l’événement
  @BuiltValueField(wireName: r'location')
  String get location;

  /// Latitude du lieu
  @BuiltValueField(wireName: r'latitude')
  JsonObject? get latitude;

  /// Longitude du lieu
  @BuiltValueField(wireName: r'longitude')
  JsonObject? get longitude;

  /// Horodatage (en secondes) de l’événement
  @BuiltValueField(wireName: r'date')
  num get date;

  /// Organisateur de l’événement
  @BuiltValueField(wireName: r'organizer')
  User get organizer;

  /// Participants inscrits à l’événement
  @BuiltValueField(wireName: r'participants')
  BuiltList<User> get participants;

  /// Liste des courses
  @BuiltValueField(wireName: r'courses')
  BuiltList<Course> get courses;

  /// Liste des achats
  @BuiltValueField(wireName: r'shoppings')
  BuiltList<Shopping> get shoppings;

  /// Liste des dépenses
  @BuiltValueField(wireName: r'expenses')
  BuiltList<Expense> get expenses;

  /// Liste des hébergements
  @BuiltValueField(wireName: r'hostings')
  BuiltList<Hosting> get hostings;

  /// Liste des sondages
  @BuiltValueField(wireName: r'polls')
  BuiltList<Poll> get polls;

  Event._();

  factory Event([void updates(EventBuilder b)]) = _$Event;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(EventBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<Event> get serializer => _$EventSerializer();
}

class _$EventSerializer implements PrimitiveSerializer<Event> {
  @override
  final Iterable<Type> types = const [Event, _$Event];

  @override
  final String wireName = r'Event';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    Event object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'guid';
    yield serializers.serialize(
      object.guid,
      specifiedType: const FullType(String),
    );
    yield r'title';
    yield serializers.serialize(
      object.title,
      specifiedType: const FullType(String),
    );
    yield r'location';
    yield serializers.serialize(
      object.location,
      specifiedType: const FullType(String),
    );
    if (object.latitude != null) {
      yield r'latitude';
      yield serializers.serialize(
        object.latitude,
        specifiedType: const FullType.nullable(JsonObject),
      );
    }
    if (object.longitude != null) {
      yield r'longitude';
      yield serializers.serialize(
        object.longitude,
        specifiedType: const FullType.nullable(JsonObject),
      );
    }
    yield r'date';
    yield serializers.serialize(
      object.date,
      specifiedType: const FullType(num),
    );
    yield r'organizer';
    yield serializers.serialize(
      object.organizer,
      specifiedType: const FullType(User),
    );
    yield r'participants';
    yield serializers.serialize(
      object.participants,
      specifiedType: const FullType(BuiltList, [FullType(User)]),
    );
    yield r'courses';
    yield serializers.serialize(
      object.courses,
      specifiedType: const FullType(BuiltList, [FullType(Course)]),
    );
    yield r'shoppings';
    yield serializers.serialize(
      object.shoppings,
      specifiedType: const FullType(BuiltList, [FullType(Shopping)]),
    );
    yield r'expenses';
    yield serializers.serialize(
      object.expenses,
      specifiedType: const FullType(BuiltList, [FullType(Expense)]),
    );
    yield r'hostings';
    yield serializers.serialize(
      object.hostings,
      specifiedType: const FullType(BuiltList, [FullType(Hosting)]),
    );
    yield r'polls';
    yield serializers.serialize(
      object.polls,
      specifiedType: const FullType(BuiltList, [FullType(Poll)]),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    Event object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required EventBuilder result,
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
        case r'title':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.title = valueDes;
          break;
        case r'location':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(String),
          ) as String;
          result.location = valueDes;
          break;
        case r'latitude':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(JsonObject),
          ) as JsonObject?;
          if (valueDes == null) continue;
          result.latitude = valueDes;
          break;
        case r'longitude':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType.nullable(JsonObject),
          ) as JsonObject?;
          if (valueDes == null) continue;
          result.longitude = valueDes;
          break;
        case r'date':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(num),
          ) as num;
          result.date = valueDes;
          break;
        case r'organizer':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(User),
          ) as User;
          result.organizer.replace(valueDes);
          break;
        case r'participants':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(BuiltList, [FullType(User)]),
          ) as BuiltList<User>;
          result.participants.replace(valueDes);
          break;
        case r'courses':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(BuiltList, [FullType(Course)]),
          ) as BuiltList<Course>;
          result.courses.replace(valueDes);
          break;
        case r'shoppings':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(BuiltList, [FullType(Shopping)]),
          ) as BuiltList<Shopping>;
          result.shoppings.replace(valueDes);
          break;
        case r'expenses':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(BuiltList, [FullType(Expense)]),
          ) as BuiltList<Expense>;
          result.expenses.replace(valueDes);
          break;
        case r'hostings':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(BuiltList, [FullType(Hosting)]),
          ) as BuiltList<Hosting>;
          result.hostings.replace(valueDes);
          break;
        case r'polls':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(BuiltList, [FullType(Poll)]),
          ) as BuiltList<Poll>;
          result.polls.replace(valueDes);
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  Event deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = EventBuilder();
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

