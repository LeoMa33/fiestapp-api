//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'create_event_dto.g.dart';

/// CreateEventDto
///
/// Properties:
/// * [title] - Titre de lévénement
/// * [location] - Lieu de lévénement
/// * [latitude] - Latitude du lieu (optionnelle)
/// * [longitude] - Longitude du lieu (optionnelle)
/// * [date] - Horodatage en secondes de la date de lévénement
/// * [organizer] - GUID de lorganisateur (User)
@BuiltValue()
abstract class CreateEventDto implements Built<CreateEventDto, CreateEventDtoBuilder> {
  /// Titre de lévénement
  @BuiltValueField(wireName: r'title')
  String get title;

  /// Lieu de lévénement
  @BuiltValueField(wireName: r'location')
  String get location;

  /// Latitude du lieu (optionnelle)
  @BuiltValueField(wireName: r'latitude')
  num? get latitude;

  /// Longitude du lieu (optionnelle)
  @BuiltValueField(wireName: r'longitude')
  num? get longitude;

  /// Horodatage en secondes de la date de lévénement
  @BuiltValueField(wireName: r'date')
  num get date;

  /// GUID de lorganisateur (User)
  @BuiltValueField(wireName: r'organizer')
  String get organizer;

  CreateEventDto._();

  factory CreateEventDto([void updates(CreateEventDtoBuilder b)]) = _$CreateEventDto;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(CreateEventDtoBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<CreateEventDto> get serializer => _$CreateEventDtoSerializer();
}

class _$CreateEventDtoSerializer implements PrimitiveSerializer<CreateEventDto> {
  @override
  final Iterable<Type> types = const [CreateEventDto, _$CreateEventDto];

  @override
  final String wireName = r'CreateEventDto';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    CreateEventDto object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
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
        specifiedType: const FullType(num),
      );
    }
    if (object.longitude != null) {
      yield r'longitude';
      yield serializers.serialize(
        object.longitude,
        specifiedType: const FullType(num),
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
      specifiedType: const FullType(String),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    CreateEventDto object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required CreateEventDtoBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
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
            specifiedType: const FullType(num),
          ) as num;
          result.latitude = valueDes;
          break;
        case r'longitude':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(num),
          ) as num;
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
            specifiedType: const FullType(String),
          ) as String;
          result.organizer = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  CreateEventDto deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = CreateEventDtoBuilder();
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

