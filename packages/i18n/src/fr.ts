import type { Language } from './types';

// prettier-ignore
const language: Language = {
  code:             'fr',
  schema:           (issue) => `Typage invalide: attendu ${issue.expected}, mais reçu ${issue.received}`,
  specific: {
    bic:            (issue) => `BIC invalide: reçu ${issue.received}`,
    bytes:          (issue) => `Octet invalide: attendu ${issue.expected}, mais reçu ${issue.received}`,
    creditCard:     (issue) => `Carte de crédit invalide: reçu ${issue.received}`,
    cuid2:          (issue) => `Cuid2 invalide: reçu ${issue.received}`,
    custom:         (issue) => `Valeur invalide: reçu ${issue.received}`,
    customAsync:    (issue) => `Valeur invalide: reçu ${issue.received}`,
    decimal:        (issue) => `Décimale invalide: reçu ${issue.received}`,
    email:          (issue) => `Email invalide: reçu ${issue.received}`,
    emoji:          (issue) => `Émoji invalide: reçu ${issue.received}`,
    endsWith:       (issue) => `Fin invalide: attendu ${issue.expected}, mais reçu ${issue.received}`,
    excludes:       (issue) => `Contenu invalide: attendu ${issue.expected}, mais reçu ${issue.received}`,
    finite:         (issue) => `Entier invalide: reçu ${issue.received}`,
    hash:           (issue) => `Hash invalide: reçu ${issue.received}`,
    hexColor:       (issue) => `Couleur hexa invalide: reçu ${issue.received}`,
    hexadecimal:    (issue) => `Hexadécimal invalide: reçu ${issue.received}`,
    imei:           (issue) => `IMEI invalide: reçu ${issue.received}`,
    includes:       (issue) => `Contenu invalide: attendu ${issue.expected}, mais reçu ${issue.received}`,
    integer:        (issue) => `Entier invalide: reçu ${issue.received}`,
    ip:             (issue) => `IP invalide: reçu ${issue.received}`,
    ipv4:           (issue) => `IPv4 invalide: reçu ${issue.received}`,
    ipv6:           (issue) => `IPv6 invalide: reçu ${issue.received}`,
    isoDate:        (issue) => `Date invalide: reçu ${issue.received}`,
    isoDateTime:    (issue) => `Date et heure invalide: reçu ${issue.received}`,
    isoTime:        (issue) => `Temps invalide: reçu ${issue.received}`,
    isoTimeSecond:  (issue) => `Temps invalide (secondes): reçu ${issue.received}`,
    isoTimestamp:   (issue) => `Timestamp invalide: reçu ${issue.received}`,
    isoWeek:        (issue) => `Semaine invalide: reçu ${issue.received}`,
    length:         (issue) => `Longeur invalide: attendu ${issue.expected}, mais reçu ${issue.received}`,
    mac:            (issue) => `MAC invalide: reçu ${issue.received}`,
    mac48:          (issue) => `MAC 48-bit invalide: reçu ${issue.received}`,
    mac64:          (issue) => `MAC 64-bit invalide: reçu ${issue.received}`,
    maxBytes:       (issue) => `Octet invalide: attendu ${issue.expected}, mais reçu ${issue.received}`,
    maxLength:      (issue) => `Longeur invalide: attendu ${issue.expected}, mais reçu ${issue.received}`,
    maxSize:        (issue) => `Taille invalide: attendu ${issue.expected}, mais reçu ${issue.received}`,
    maxValue:       (issue) => `Valeur invalide: attendu ${issue.expected}, mais reçu ${issue.received}`,
    mimeType:       (issue) => `Type MIME invalide: attendu ${issue.expected}, mais reçu ${issue.received}`,
    minBytes:       (issue) => `Octet invalide: attendu ${issue.expected}, mais reçu ${issue.received}`,
    minLength:      (issue) => `Longeur invalide: attendu ${issue.expected}, mais reçu ${issue.received}`,
    minSize:        (issue) => `Taille invalide: attendu ${issue.expected}, mais reçu ${issue.received}`,
    minValue:       (issue) => `Valeur invalide: attendu ${issue.expected}, mais reçu ${issue.received}`,
    multipleOf:     (issue) => `Multiple invalide: attendu ${issue.expected}, mais reçu ${issue.received}`,
    notBytes:       (issue) => `Octet invalide: attendu ${issue.expected}, mais reçu ${issue.received}`,
    notLength:      (issue) => `Longeur invalide: attendu ${issue.expected}, mais reçu ${issue.received}`,
    notSize:        (issue) => `Taille invalide: attendu ${issue.expected}, mais reçu ${issue.received}`,
    notValue:       (issue) => `Valeur invalide: attendu ${issue.expected}, mais reçu ${issue.received}`,
    octal:          (issue) => `Octet invalide: reçu ${issue.received}`,
    regex:          (issue) => `Format invalide: attendu ${issue.expected}, mais reçu ${issue.received}`,
    safeInteger:    (issue) => `Entier sûr invalide: reçu ${issue.received}`,
    size:           (issue) => `Taille invalide: attendu ${issue.expected}, mais reçu ${issue.received}`,
    startsWith:     (issue) => `Début invalide: attendu ${issue.expected}, mais reçu ${issue.received}`,
    ulid:           (issue) => `ULID invalide: reçu ${issue.received}`,
    url:            (issue) => `URL invalide: reçu ${issue.received}`,
    uuid:           (issue) => `UUID invalide: reçu ${issue.received}`,
    value:          (issue) => `Valeur invalide: attendu ${issue.expected}, mais reçu ${issue.received}`,
  },
};

export default language;
