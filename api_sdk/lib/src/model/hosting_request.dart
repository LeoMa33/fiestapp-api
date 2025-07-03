//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:built_collection/built_collection.dart';
import 'package:openapi/src/model/hosting.dart';
import 'package:openapi/src/model/user.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'hosting_request.g.dart';

/// HostingRequest
///
/// Properties:
/// * [guid] - GUID unique de la demande d’hébergement
/// * [user] - Utilisateur qui fait la demande
/// * [hosting] - Hébergement visé par la demande
/// * [status] - Statut de la demande (par défaut: pending)
@BuiltValue()
abstract class HostingRequest implements Built<HostingRequest, HostingRequestBuilder> {
  /// GUID unique de la demande d’hébergement
  @BuiltValueField(wireName: r'guid')
  String get guid;

  /// Utilisateur qui fait la demande
  @BuiltValueField(wireName: r'user')
  User get user;

  /// Hébergement visé par la demande
  @BuiltValueField(wireName: r'hosting')
  Hosting get hosting;

  /// Statut de la demande (par défaut: pending)
  @BuiltValueField(wireName: r'status')
  HostingRequestStatusEnum get status;
  // enum statusEnum {  pending,  accepted,  rejected,  };

  HostingRequest._();

  factory HostingRequest([void updates(HostingRequestBuilder b)]) = _$HostingRequest;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(HostingRequestBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<HostingRequest> get serializer => _$HostingRequestSerializer();
}

class _$HostingRequestSerializer implements PrimitiveSerializer<HostingRequest> {
  @override
  final Iterable<Type> types = const [HostingRequest, _$HostingRequest];

  @override
  final String wireName = r'HostingRequest';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    HostingRequest object, {
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
    yield r'hosting';
    yield serializers.serialize(
      object.hosting,
      specifiedType: const FullType(Hosting),
    );
    yield r'status';
    yield serializers.serialize(
      object.status,
      specifiedType: const FullType(HostingRequestStatusEnum),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    HostingRequest object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required HostingRequestBuilder result,
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
        case r'hosting':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(Hosting),
          ) as Hosting;
          result.hosting.replace(valueDes);
          break;
        case r'status':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(HostingRequestStatusEnum),
          ) as HostingRequestStatusEnum;
          result.status = valueDes;
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  HostingRequest deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = HostingRequestBuilder();
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

class HostingRequestStatusEnum extends EnumClass {

  /// Statut de la demande (par défaut: pending)
  @BuiltValueEnumConst(wireName: r'pending')
  static const HostingRequestStatusEnum pending = _$hostingRequestStatusEnum_pending;
  /// Statut de la demande (par défaut: pending)
  @BuiltValueEnumConst(wireName: r'accepted')
  static const HostingRequestStatusEnum accepted = _$hostingRequestStatusEnum_accepted;
  /// Statut de la demande (par défaut: pending)
  @BuiltValueEnumConst(wireName: r'rejected')
  static const HostingRequestStatusEnum rejected = _$hostingRequestStatusEnum_rejected;
  /// Statut de la demande (par défaut: pending)
  @BuiltValueEnumConst(wireName: r'unknown_default_open_api', fallback: true)
  static const HostingRequestStatusEnum unknownDefaultOpenApi = _$hostingRequestStatusEnum_unknownDefaultOpenApi;

  static Serializer<HostingRequestStatusEnum> get serializer => _$hostingRequestStatusEnumSerializer;

  const HostingRequestStatusEnum._(String name): super(name);

  static BuiltSet<HostingRequestStatusEnum> get values => _$hostingRequestStatusEnumValues;
  static HostingRequestStatusEnum valueOf(String name) => _$hostingRequestStatusEnumValueOf(name);
}

