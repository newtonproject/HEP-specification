# NewID Specification (Draft)

NewID, created from Newton addresses, is designed as [Decentralized Identifiers](https://w3c-ccg.github.io/did-spec/#did-documents)(DIDs). 

DID is a new type of identifier for verifiable, "self-sovereign" digital identity according to W3C Community Group Draft Report. It meets the requirement of decentralized world to identify the entities.

### DID Method

A "DID method" is a specific implementation of a DID scheme that is identified by a method name.
To encode a DID for an NewID address, simply prepend did:newid:

For example:

>- Version prefix - Used chainID. see [ NewChain Network ID ]
>- Payload - hash of public key
>- Four bytes (32 bits) of SHA256-based error checking code (digest of the version and payload)


```java
let NEWID_PREFIX = "NEWID"
let chainId = currentChainID
let newIdHash = Data(hexString: publicKey)?.sha3(.keccak256).hexEncoded
var NEWID = NEWID_PREFIX + (Data(hexString: chainId.getHexData().toHexString() + newIdHash!)?.base58CheckEncodedString())!
```

did:newid:NEWID1amZoHrrVxHpD5mrtX1rJttJxtAqujeWmjwLJyRfT32BujPuJbja





### NewID Documents

##### Context

JSON objects in JSON-LD format must include a JSON-LD context statement. The rules for this statement are:

1. A DID Document MUST have exactly one top-level context statement.
2. The key for this property MUST be @context.
3. The value of this key MUST be the URL for the generic DID context: https://w3id.org/did/v1.

---

##### DID Subject

The DID subject is the identifier that the DID Document is about, i.e., it is the DID described by DID Document. The rules for a DID subject are:

1. A DID Document MUST have exactly one DID subject.
2. The key for this property MUST be id.
3. The value of this key MUST be a valid DID.
4. When this DID Document is registered with the target distributed ledger or network, the registered DID MUST match this DID subject value.

---

##### Public Keys

Public keys are used for digital signatures, encryption and other cryptographic operations, which in turn are the basis for purposes such as authentication or establishing secure communication with service endpoints. In addition, public keys may play a role in authorization mechanisms of DID CRUD operations; This may be defined by DID Method specifications.

The primary intention is that a DID Document lists public keys whose corresponding private keys are controlled by the entity identified by the DID. However, a DID Document MAY also list 'non-owned' public keys.

If a public key does not exist in the DID Document, it MUST be assumed the key has been revoked or is invalid. The DID Document MAY contain revoked keys. A DID Document that contains a revoked key MUST also contain or refer to the revocation information for the key (e.g., a revocation list). Each DID Method specification is expected to detail how revocation is performed and tracked.

The rules for public keys are:

1. A DID Document MAY include a publicKey property.
2. The value of the publicKey property should be an array of public keys.
3. Each public key must include id and type properties, and exactly one value property.
4. Each public key may include an owner property, which identifies the entity that controls the corresponding private key. If this property is missing, it is assumed to be the DID subject.
5. The value property of a public key may be publicKeyPem, publicKeyJwk, publicKeyHex, publicKeyBase64 or similar, depending on the format and encoding of the public key.
6. A registry of key types and formats is available in Appendix A. Registries .

---

##### Authentication

Authentication is the mechanism by which an entity can cryptographically prove that they are associated with a DID and DID Description. 

The rules for Authentication are:

1. A DID Document MAY include an authentication property.
2. The value of the authentication property should be an array of proof mechanisms.
3. Each proof mechanism must include the type property.
4. Each proof mechanism MAY embed or reference a public key (see Section Public Keys ).

---

##### Service Endpoints

In addition to publication of authentication and authorization mechanisms, the other primary purpose of a DID Document is to enable discovery of service endpoints for the entity. A service endpoint may represent any type of service the entity wishes to advertise, including decentralized identity management services for further discovery, authentication, authorization, or interaction. The rules for service endpoints are:

1. A DID Document MAY include a service property.
2. The value of the service property should be an array of service endpoints.
3. Each service endpoint must include id, type, and serviceEndpoint properties, and MAY include additional properties.
4. The service endpoint protocol SHOULD be published in an open standard specification.
5. The value of the serviceEndpoint property MUST be a JSON-LD object or a valid URI conforming to [RFC3986] and normalized according to the rules in section 6 of [RFC3986] and to any normalization rules in its applicable URI scheme specification.

---

##### Profile
In newID there is an additional property which contains the basic information of the entity compared with DID, such as name, id, phoneNumber, etc.

---

##### Referee
This property is designed for the User Excitation Plan. It contains the information of the NewIDs who invited the entity.

---

The DID document for a NewID address NEWID1amZoHrrVxHpD5mrtX1rJttJxtAqujeWmjwLJyRfT32BujPuJbja look like this (authentication and service are included in later version):

```json
{
 ‘@context’: ‘ https://w3id.org/did/v1'',
 ‘@type’: ‘Person’,
 'id': 'did:newid:NEWID1amZoHrrVxHpD5mrtX1rJttJxtAqujeWmjwLJyRfT32BujPuJbja',
 ‘publicKey’: [{
    'id': 'did:newid:NEWID1amZoHrrVxHpD5mrtX1rJttJxtAqujeWmjwLJyRfT32BujPuJbja#keys-1',
    'type': 'EdDsaSASignatureSecp256r1',
    'owner': 'did:newid:NEWID1amZoHrrVxHpD5mrtX1rJttJxtAqujeWmjwLJyRfT32BujPuJbja',
    'publicKeyHex': '0xe49ff40decf38bac86434a86037104085a8b30c1e4ae8dc543b8c40e235a77582431b1fdf4546f0a684d945f4030cf56fd773a52969961b2008ebc782649a0d5' //publicKeyPem, publicKeyBase58, publicKeyHex
  }],
 'created': '2002-10-10T17:00:00Z',
 'updated': '2002-10-10T17:00:00Z',

 'profile': {
    'name':'',
    'id': {
      idNo:'',
      idType: ''
    }
    'phoneNumber': '',
    'email': '',
    'country': '',
    'description': '',
    'image': {
      '@type': 'ImageObject',
      'name': '',
      'contentURL': ''
    }
  },
  'referee': ‘did:newid:NEWID1amZoHrrVxHpD5mrtX1rJttJxtAqujeWmjwLJyRfT32BujPuJbja’
}

```
